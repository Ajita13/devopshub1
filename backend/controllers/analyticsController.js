const prisma = require("../config/db");

async function getAnalytics(req, res, next) {
  try {
    const userId = req.user.id;

    const [
      successfulBuilds,
      failedBuilds,
      totalDeployments,
      allBuilds,
      recentDeployments,
    ] = await Promise.all([
      prisma.build.count({ where: { userId, status: "SUCCESS" } }),
      prisma.build.count({ where: { userId, status: "FAILED" } }),
      prisma.deployment.count({ where: { userId } }),
      prisma.build.findMany({
        where: { userId },
        select: { durationSeconds: true, createdAt: true, status: true },
      }),
      prisma.deployment.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 7,
      }),
    ]);

    const totalBuilds = successfulBuilds + failedBuilds;
    const successRate = totalBuilds > 0
      ? `${((successfulBuilds / totalBuilds) * 100).toFixed(1)}%`
      : "0.0%";

    // Calculate actual average build time
    let avgBuildTime = "0s";
    if (allBuilds.length > 0) {
      const totalSec = allBuilds.reduce((acc, curr) => acc + (curr.durationSeconds || 0), 0);
      const avgSec = Math.round(totalSec / allBuilds.length);
      const mins = Math.floor(avgSec / 60);
      const secs = avgSec % 60;
      avgBuildTime = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    }

    // Weekly distribution based on actual build timestamps
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayCounts = { Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0 };
    allBuilds.forEach((b) => {
      const d = new Date(b.createdAt);
      const dayName = days[d.getDay()];
      dayCounts[dayName] = (dayCounts[dayName] || 0) + 1;
    });

    // Normalize weekly data for chart
    const maxVal = Math.max(...Object.values(dayCounts), 1);
    const weeklyChart = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => ({
      day,
      count: dayCounts[day] || 0,
      percentage: totalBuilds > 0 ? Math.round(((dayCounts[day] || 0) / maxVal) * 100) : 0,
    }));

    return res.json({
      success: true,
      successRate,
      avgBuildTime,
      totalDeployments,
      failedBuilds,
      totalBuilds,
      weeklyChart,
      recentDeployments,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAnalytics,
};

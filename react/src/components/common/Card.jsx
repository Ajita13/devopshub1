export default function Card({
  children,
  className = "",
}) {
  return (
    <div className={`dashboard-card ${className}`}>
      {children}
    </div>
  );
}
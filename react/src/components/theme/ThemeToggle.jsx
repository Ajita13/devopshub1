import {
  Sun,
  Moon,
  Check,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const {
    theme,
    setTheme,
    accent,
    setAccent,
  } = useTheme();

  const colors = [
    "blue",
    "purple",
    "violet",
    "orange",
    "green",
    "red",
    "cyan",
  ];

  return (
    <div className="theme-panel">
      <div className="theme-panel-title">
        Theme
      </div>

      <button
        className={`theme-choice ${
          theme === "light" ? "selected" : ""
        }`}
        onClick={() => setTheme("light")}
      >
        <Sun size={17} />
        <span>Light</span>

        {theme === "light" && (
          <Check size={17} />
        )}
      </button>

      <button
        className={`theme-choice ${
          theme === "dark" ? "selected" : ""
        }`}
        onClick={() => setTheme("dark")}
      >
        <Moon size={17} />
        <span>Dark</span>

        {theme === "dark" && (
          <Check size={17} />
        )}
      </button>

      <div className="theme-color-title">
        Theme Color
      </div>

      <div className="theme-colors">
        {colors.map((color) => (
          <button
            key={color}
            className={`theme-color theme-color-${color} ${
              accent === color ? "chosen" : ""
            }`}
            onClick={() => setAccent(color)}
          >
            {accent === color && (
              <Check size={13} />
            )}
          </button>
        ))}
      </div>

      <div className="save-preference">
        <span>Save Preference</span>

        <div className="toggle-on">
          <div />
        </div>
      </div>
    </div>
  );
}
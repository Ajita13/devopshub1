export default function Button({
  children,
  variant = "default",
  onClick,
  className = "",
}) {
  return (
    <button
      className={`app-button button-${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
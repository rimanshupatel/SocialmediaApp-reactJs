export default function Button({
  children,
  type = "button",
  bgColor = "bg-indigo-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`w-full px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 ${className} ${bgColor} ${textColor}`}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
}

import { ButtonProps } from "@/interfaces";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`}
    >
      {children}
    </button>
  );
}

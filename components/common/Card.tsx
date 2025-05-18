import { CardProps } from "@/interfaces";

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`p-4 bg-white shadow rounded ${className}`}>{children}</div>
  );
}

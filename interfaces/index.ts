// interfaces/index.ts

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

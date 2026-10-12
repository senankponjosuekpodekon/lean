import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-surface rounded-2xl border border-border p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

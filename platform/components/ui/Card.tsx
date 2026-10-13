import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-surface rounded-3xl border border-border p-6 shadow-[0_4px_20px_-4px_rgba(44,38,32,0.08)] ${className}`}>
      {children}
    </div>
  );
}

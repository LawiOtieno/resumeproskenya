import { ReactNode } from "react";

interface AnimatedHeaderProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedHeader({ children, className = "" }: AnimatedHeaderProps) {
  return (
    <h2 className={`gradient-header ${className}`}>
      {children}
    </h2>
  );
}

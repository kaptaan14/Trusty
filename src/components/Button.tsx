import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode; // Content inside the button
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
}) => {
  const variantStyles = {
    primary: "bg-primary",
    secondary: "bg-secondary",
  };

  const baseStyles = "rounded-3xl text-sm flex-shrink-0 py-2 px-7 border font-bold border-line border-opacity-20";

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </button>
  );
};

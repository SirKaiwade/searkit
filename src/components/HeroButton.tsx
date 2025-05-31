import React from 'react';
import { Link } from 'react-router-dom';

interface HeroButtonProps {
  to: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

const HeroButton: React.FC<HeroButtonProps> = ({ to, variant, children }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg";
  
  const variantClasses = {
    primary: "bg-[hsl(var(--dark))] hover:bg-black text-white shadow-lg hover:shadow-xl hover:scale-105",
    secondary: "bg-white hover:bg-gray-50 text-[hsl(var(--dark))] shadow-lg hover:shadow-xl hover:scale-105"
  };
  
  return (
    <Link to={to} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </Link>
  );
};

export default HeroButton;
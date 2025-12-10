import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient';
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = '',
  variant = 'default',
}) => {
  const sizes = {
    1: 'text-5xl md:text-7xl font-bold',
    2: 'text-4xl md:text-5xl font-bold',
    3: 'text-3xl md:text-4xl font-bold',
    4: 'text-2xl md:text-3xl font-bold',
    5: 'text-xl md:text-2xl font-bold',
    6: 'text-lg md:text-xl font-bold',
  };

  const variantStyles = {
    default: 'text-gray-900',
    gradient: 'gradient-text',
  };

  const tags: Record<number, keyof React.JSX.IntrinsicElements> = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
  };

  const Tag = tags[level];

  return React.createElement(
    Tag,
    {
      className: `${sizes[level]} ${variantStyles[variant]} ${className}`,
    },
    children
  );
};

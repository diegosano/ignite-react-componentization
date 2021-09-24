import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
        {children}
      </span>
    </nav>
  );
}

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="w-4 h-4 rounded-full border-2 border-[#FBB13A] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FBB13A]" />
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-[#361B14]/60">
        {children}
      </span>
    </div>
  );
}

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({ children, variant = 'primary', size = 'md', className = '', ...rest }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer';
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  const variants = {
    primary: 'bg-[#FBB13A] text-[#361B14] hover:bg-[#f0a520] shadow-md hover:shadow-lg',
    secondary: 'bg-[#361B14] text-white hover:bg-[#4a2a20] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[#361B14] text-[#361B14] hover:bg-[#361B14] hover:text-white',
    ghost: 'text-[#361B14] hover:bg-[#FFE4D4]',
  };
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
}

export function ImagePlaceholder({ className = '', label = '' }: { className?: string; label?: string }) {
  return (
    <div className={`bg-[#FFE4D4] rounded-2xl flex items-center justify-center overflow-hidden ${className}`}>
      <div className="text-center p-4">
        <div className="w-12 h-12 bg-[#FBB13A]/30 rounded-xl mx-auto mb-2 flex items-center justify-center">
          <div className="w-6 h-6 bg-[#FBB13A]/60 rounded" />
        </div>
        {label && <p className="text-xs text-[#361B14]/40 font-medium">{label}</p>}
      </div>
    </div>
  );
}

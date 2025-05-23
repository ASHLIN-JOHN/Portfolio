import React, { useEffect, useRef } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  threshold?: number;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, threshold = 0.1 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('intersection-observed');
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return <div ref={ref}>{children}</div>;
};

export default AnimationWrapper;
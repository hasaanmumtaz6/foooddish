import React, { useEffect, useState } from "react";

interface CounterBoxProps {
  target: number;
  label: string;
  colored?: boolean;
}

const CounterBox = ({ target, label }: CounterBoxProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let countValue = 0;
    const duration = 4000;
    const increment = target / (duration / 100);

    const updateCount = () => {
      countValue = Math.ceil(countValue + increment);
      if (countValue < target) {
        setCount(countValue);
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [target]);

  return (
    <div
      className="w-1/4 bg-[var(--background-primary)] p-4"
    >
      <span className="block text-4xl font-bold">{count}+</span>
      <p className="mt-2 text-lg font-medium">{label}</p>
    </div>
  );
};

export default CounterBox;

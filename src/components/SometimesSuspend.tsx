import React from "react";

const sleep = (ms: number): Promise<(value: unknown) => void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const SometimesSuspend: React.FC = () => {
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }
  return <p>Hello, world!</p>;
};

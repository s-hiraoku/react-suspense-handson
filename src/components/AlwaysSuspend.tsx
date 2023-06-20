import React from "react";

const sleep = (ms: number): Promise<(value: unknown) => void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const AlwaysSuspend: React.FC = () => {
  console.log("AlwaysSuspend is rendered");
  throw sleep(1000);
};

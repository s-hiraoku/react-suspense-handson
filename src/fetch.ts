const sleep = (ms: number): Promise<(value: unknown) => void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function fetchData1(): Promise<string> {
  await sleep(Math.floor(Math.random() * 1000));
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
}

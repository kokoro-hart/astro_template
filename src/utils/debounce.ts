type ReturnVoidFunction = () => void;

export const debounce = (
  interval: number,
  intervalFunction: ReturnVoidFunction,
  noIntervalFunction: string | ReturnVoidFunction
) => {
  let timer: number;
  return () => {
    if (typeof noIntervalFunction === "string") {
      if (noIntervalFunction === "breakFunction") return;
    } else {
      noIntervalFunction();
    }
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      intervalFunction();
    }, interval);
  };
};

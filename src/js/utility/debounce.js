export const debounce = (interval, intervalFunction, noIntervalFunction) => {
  let timer;
  return () => {
    if (noIntervalFunction === "breakFunction") return;
    if (noIntervalFunction) noIntervalFunction();
    clearTimeout(timer);
    timer = setTimeout(() => {
      intervalFunction();
    }, interval);
  };
};

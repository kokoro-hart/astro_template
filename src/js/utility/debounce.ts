export const debounce = (interval: number, intervalFunction: () => void, noIntervalFunction: () => void) => {
  let timer: string | number | NodeJS.Timeout | undefined
  return () => {
    if (noIntervalFunction) noIntervalFunction()
    clearTimeout(timer)
    timer = setTimeout(() => {
      intervalFunction()
    }, interval)
  }
}

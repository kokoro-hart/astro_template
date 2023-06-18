type EasingFunctions = {
  [key: string]: (p: number) => number
}

function noop() {
  return
}

function getOffsetTop(element: HTMLElement) {
  return element.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
}

function normalize(scrollY: number) {
  const scrollLimit =
    Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    ) - document.documentElement.clientHeight
  let normalizeY

  normalizeY = Math.ceil(scrollY)
  normalizeY = Math.max(normalizeY, 0)
  normalizeY = Math.min(normalizeY, scrollLimit)
  return normalizeY
}

function scrollToY(targetY: number, duration = 400, easing = "swing", callback = noop) {
  const scrollY = window.scrollY || window.pageYOffset
  const diffValue = targetY - scrollY
  const startTime = Date.now()
  const easingFunctions: EasingFunctions = {
    linear(p: number) {
      return p
    },
    swing(p: number) {
      return 0.5 - Math.cos(p * Math.PI) / 2
    },
  }
  const easingName = easing in easingFunctions ? easing : "swing"
  const update = () => {
    const currentTime = Date.now() - startTime
    const percent = Math.min(currentTime / duration, 1)

    if (percent < 1) {
      const easePercent = easingFunctions[easingName](percent)

      window.scrollTo(0, diffValue * easePercent + scrollY)
      requestAnimationFrame(update)
    } else {
      window.scrollTo(0, targetY)
      callback()
    }
  }

  if (duration === 0) {
    window.scrollTo(0, targetY)
    callback()
  } else {
    requestAnimationFrame(update)
  }
}

export function scrollTarget(element: HTMLElement, duration: number) {
  let targetY

  if (element instanceof HTMLElement) {
    targetY = getOffsetTop(element)
    targetY = normalize(targetY)
    scrollToY(targetY, duration)
  }
}

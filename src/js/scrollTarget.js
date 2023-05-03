function noop() {
  return;
}

function getOffsetTop(element) {
  return element.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
}

function normalize(scrollY) {
  const scrollLimit =
    Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    ) - document.documentElement.clientHeight;
  let normalizeY;

  normalizeY = Math.ceil(scrollY);
  normalizeY = Math.max(normalizeY, 0);
  normalizeY = Math.min(normalizeY, scrollLimit);
  return normalizeY;
}

function scrollToY(targetY, duration = 400, easing = "swing", callback = noop) {
  const scrollY = window.scrollY || window.pageYOffset;
  const diffValue = targetY - scrollY;
  const startTime = Date.now();
  const easingFunctions = {
    linear(p) {
      return p;
    },
    swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
  };
  const easingName = easing in easingFunctions ? easing : "swing";
  const update = () => {
    const currentTime = Date.now() - startTime;
    const percent = Math.min(currentTime / duration, 1);

    if (percent < 1) {
      const easePercent = easingFunctions[easingName](percent);

      window.scrollTo(0, diffValue * easePercent + scrollY);
      requestAnimationFrame(update);
    } else {
      window.scrollTo(0, targetY);
      callback();
    }
  };

  if (duration === 0) {
    window.scrollTo(0, targetY);
    callback();
  } else {
    requestAnimationFrame(update);
  }
}

export function scrollTarget(element, duration) {
  let targetY;

  if (element instanceof HTMLElement) {
    targetY = getOffsetTop(element);
    targetY = normalize(targetY);
    scrollToY(targetY, duration);
  }
}

const changeViewportContent = () => {
  const DEVICE_WIDTH = 375;
  const metaViewportContent =
    window.outerWidth < DEVICE_WIDTH
      ? `width=${DEVICE_WIDTH}`
      : "width=device-width, initial-scale=1";
  const metaViewport = document.querySelector<HTMLMetaElement>(
    'meta[name="viewport"]'
  );
  metaViewport?.setAttribute("content", metaViewportContent);
};

export const changeViewport = () => {
  window.addEventListener("resize", () => {
    changeViewportContent();
  });
  changeViewportContent();
};

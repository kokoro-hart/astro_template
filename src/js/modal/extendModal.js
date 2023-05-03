import { Modal } from "./modal";

class ExtendModal extends Modal {
  // eslint-disable-next-line  @typescript-eslint/no-useless-constructor
  constructor(...props) {
    super(...props);
    // add ExtendModal constructor
  }

  open() {
    super.open();
    // add ExtendModal open method
  }
}

export const extendModal = () => {
  const wraps = document.querySelectorAll(".js-modal");
  wraps?.forEach((wrap) => {
    const trigger = wrap.querySelector(".js-modal-trigger");
    const contentWrap = wrap.querySelector(".js-modal-content-wrap");
    const content = wrap.querySelector(".js-modal-content");
    const closeTrigger = wrap.querySelector(".js-modal-close");
    if (!trigger || !contentWrap || !closeTrigger) return;

    const extendModalInstance = new ExtendModal(trigger, contentWrap, content, closeTrigger);
    extendModalInstance.init();
  });
};

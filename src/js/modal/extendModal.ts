import { Modal } from "./modal"

// class ExtendModal extends Modal {
//   // eslint-disable-next-line  @typescript-eslint/no-useless-constructor
//   constructor() {
//     super();
//     // add ExtendModal constructor
//   }

//   open() {
//     super.open();
//     // add ExtendModal open method
//   }
// }

export const extendModal = () => {
  const wraps = document.querySelectorAll(".js-modal")
  wraps?.forEach((wrap) => {
    const trigger = wrap.querySelector<HTMLElement>(".js-modal-trigger")
    const contentWrap = wrap.querySelector<HTMLElement>(".js-modal-content-wrap")
    const content = wrap.querySelector<HTMLElement>(".js-modal-content")
    const closeTrigger = wrap.querySelector<HTMLElement>(".js-modal-close")
    if (!trigger || !contentWrap || !closeTrigger || !content) return

    const extendModalInstance = new Modal({
      trigger,
      contentWrap,
      content,
      closeTrigger,
    })
    extendModalInstance.init()
  })
}

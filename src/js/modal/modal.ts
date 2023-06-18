import { lockScroll } from "../utility"

const { lock, unlock } = lockScroll()

export class Modal {
  trigger: HTMLElement
  contentWrap: HTMLElement
  content: HTMLElement
  closeTrigger: HTMLElement
  closeWithClickBgBindThis: (e: Event) => void
  constructor({
    trigger,
    contentWrap,
    content,
    closeTrigger,
  }: Pick<Modal, "trigger" | "contentWrap" | "content" | "closeTrigger">) {
    this.trigger = trigger
    this.contentWrap = contentWrap
    this.content = content
    this.closeTrigger = closeTrigger
    this.closeWithClickBgBindThis = () => {
      return
    }
  }

  init() {
    this.trigger.addEventListener("click", () => this.handleClickTrigger())
    this.closeTrigger.addEventListener("click", () => this.close())
  }

  open() {
    this.trigger.setAttribute("aria-expanded", "true")
    this.contentWrap.setAttribute("aria-hidden", "false")
    lock()
    this.closeWithClickBgBindThis = this.closeWithClickBg.bind(this)
    window.addEventListener("click", this.closeWithClickBgBindThis)
  }

  close() {
    this.trigger.setAttribute("aria-expanded", "false")
    this.contentWrap.setAttribute("aria-hidden", "true")
    unlock()
    window.removeEventListener("click", this.closeWithClickBgBindThis)
  }

  closeWithClickBg(e: Event) {
    const element = e.target as Element | null
    const triggerClass = `.${this.trigger.className.split(" ").join(".")}`
    const contentClass = `.${this.content.className.split(" ").join(".")}`
    if (!element?.closest(triggerClass) && !element?.closest(contentClass)) this.close()
  }

  handleClickTrigger() {
    this.open()
  }
}

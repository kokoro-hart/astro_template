import { lockScroll } from "../utility";

const { lock, unlock } = lockScroll();

export class Modal {
  constructor(trigger, contentWrap, content, closeTrigger) {
    this.trigger = trigger;
    this.contentWrap = contentWrap;
    this.content = content;
    this.closeTrigger = closeTrigger;
    this.closeWithClickBgBindThis = () => {
      return;
    };
  }

  init() {
    this.trigger.addEventListener("click", () => this.handleClickTrigger());
    this.closeTrigger.addEventListener("click", () => this.close());
  }

  open() {
    this.trigger.setAttribute("aria-expanded", "true");
    this.contentWrap.setAttribute("aria-hidden", "false");
    lock();
    this.closeWithClickBgBindThis = this.closeWithClickBg.bind(this);
    window.addEventListener("click", this.closeWithClickBgBindThis);
  }

  close() {
    this.trigger.setAttribute("aria-expanded", "false");
    this.contentWrap.setAttribute("aria-hidden", "true");
    unlock();
    window.removeEventListener("click", this.closeWithClickBgBindThis);
  }

  closeWithClickBg(e) {
    const triggerClass = `.${this.trigger.className.split(" ").join(".")}`;
    const contentClass = `.${this.content.className.split(" ").join(".")}`;
    if (!e.target.closest(triggerClass) && !e.target.closest(contentClass)) this.close();
  }

  handleClickTrigger() {
    this.open();
  }
}

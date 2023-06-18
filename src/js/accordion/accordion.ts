export class Accordion {
  trigger: HTMLElement
  content: HTMLElement
  isExpanded: boolean
  constructor(trigger: HTMLElement, content: HTMLElement, defaultExpanded = false) {
    this.trigger = trigger
    this.content = content
    this.isExpanded = defaultExpanded
  }

  init() {
    this.defaultOpen()
    this.trigger.addEventListener("click", () => this.handleClickTrigger())
    this.content.addEventListener("transitionend", () => {
      if (this.isExpanded) this.opened()
    })
  }

  open() {
    this.isExpanded = true
    this.trigger.setAttribute("aria-expanded", "true")
    this.content.setAttribute("aria-hidden", "false")
    this.content.style.height = `${this.content.scrollHeight}px`
  }

  opened() {
    this.content.style.height = "auto"
  }

  defaultOpen() {
    if (this.isExpanded) {
      this.open()
      this.opened()
    } else {
      this.close()
    }
  }

  close() {
    this.isExpanded = false
    this.trigger.setAttribute("aria-expanded", "false")
    this.content.setAttribute("aria-hidden", "true")
    this.content.style.height = `${this.content.scrollHeight}px`
    // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
    this.content.offsetHeight // reflow
    this.content.style.height = "0"
  }

  handleClickTrigger() {
    if (this.isExpanded) {
      this.close()
    } else {
      this.open()
    }
  }
}

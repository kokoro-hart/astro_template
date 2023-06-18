import { lockScroll } from "./utility"

const { lock, unlock } = lockScroll()

class HamburgerMenu {
  triggerButton: HTMLElement

  menu: HTMLElement

  isExpanded: boolean

  hideMenuWithClickBgBindThis

  constructor({ triggerButton, menu }: Pick<HamburgerMenu, "triggerButton" | "menu">) {
    this.triggerButton = triggerButton
    this.menu = menu
    this.isExpanded = false
    this.hideMenuWithClickBgBindThis = (e: Event) => {
      e
      return
    }
  }

  init() {
    this.triggerButton.addEventListener("click", () => this.handleClickTrigger())
  }

  private showMenu() {
    this.isExpanded = true
    this.triggerButton.setAttribute("aria-expanded", "true")
    this.triggerButton.setAttribute("aria-label", "メニューを非表示にする")
    this.menu.setAttribute("aria-hidden", "false")

    this.hideMenuWithClickBgBindThis = this.hideMenuWithClickBg.bind(this)
    window.addEventListener("click", this.hideMenuWithClickBgBindThis)
  }

  private hideMenu() {
    this.isExpanded = false
    this.triggerButton.setAttribute("aria-expanded", "false")
    this.triggerButton.setAttribute("aria-label", "メニューを表示する")
    this.menu.setAttribute("aria-hidden", "true")

    window.removeEventListener("click", this.hideMenuWithClickBgBindThis)
  }

  private hideMenuWithClickBg(e: Event) {
    const target = e.target as Element
    const triggerButtonClass = `.${this.triggerButton.className.split(" ").join(".")}`
    const menuClass = `.${this.menu.className.split(" ").join(".")}`
    if (!target.closest(triggerButtonClass) && !target.closest(menuClass)) {
      this.hideMenu()
      unlock()
    }
  }

  private handleClickTrigger() {
    if (this.isExpanded) {
      this.hideMenu()
      unlock()
    } else {
      this.showMenu()
      lock()
    }
  }
}

export const hamburgerMenu = () => {
  const triggerButton = document.getElementById("js-hamburger")
  const menu = document.getElementById("js-hamburger-menu")
  if (!triggerButton || !menu) return
  const hamburgerInstance = new HamburgerMenu({
    triggerButton,
    menu,
  })
  hamburgerInstance.init()
}

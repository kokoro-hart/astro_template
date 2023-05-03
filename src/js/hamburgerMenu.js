import { lockScroll, matchMedia } from "./utility";

const { lock, unlock } = lockScroll();

class HamburgerMenu {
  constructor(triggerButton, menu) {
    this.triggerButton = triggerButton;
    this.menu = menu;
    this.isExpanded = false;
    this.hideMenuWithClickBgBindThis = () => {
      return;
    };
  }

  init() {
    this.triggerButton.addEventListener("click", () => this.handleClickTrigger());
    matchMedia("md").addEventListener("change", () => this.handleChangeMedia());
    this.handleChangeMedia();
  }

  showMenu() {
    this.isExpanded = true;
    this.triggerButton.setAttribute("aria-expanded", "true");
    this.triggerButton.setAttribute("aria-label", "メニューを非表示にする");
    this.menu.setAttribute("aria-hidden", "false");

    this.hideMenuWithClickBgBindThis = this.hideMenuWithClickBg.bind(this);
    window.addEventListener("click", this.hideMenuWithClickBgBindThis);
  }

  hideMenu() {
    this.isExpanded = false;
    this.triggerButton.setAttribute("aria-expanded", "false");
    this.triggerButton.setAttribute("aria-label", "メニューを表示する");
    this.menu.setAttribute("aria-hidden", "true");

    window.removeEventListener("click", this.hideMenuWithClickBgBindThis);
  }

  hideMenuWithClickBg(e) {
    const triggerButtonClass = `.${this.triggerButton.className.split(" ").join(".")}`;
    const menuClass = `.${this.menu.className.split(" ").join(".")}`;
    if (!e.target.closest(triggerButtonClass) && !e.target.closest(menuClass)) {
      this.hideMenu();
      unlock();
    }
  }

  handleClickTrigger() {
    if (this.isExpanded) {
      this.hideMenu();
      unlock();
    } else {
      this.showMenu();
      lock();
    }
  }

  handleChangeMedia() {
    const isMobile = !matchMedia("md").matches;
    if (isMobile) {
      this.hideMenu();
    } else {
      this.showMenu();
    }
  }
}

export const hamburgerMenu = () => {
  const triggerButton = document.getElementById("js-hamburger");
  const menu = document.getElementById("js-hamburger-menu");
  if (!triggerButton || !menu) return;
  const hamburgerInstance = new HamburgerMenu(triggerButton, menu);
  hamburgerInstance.init();
};

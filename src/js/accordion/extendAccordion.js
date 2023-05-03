import { Accordion } from "./accordion";

class ExtendAccordion extends Accordion {
  init() {
    super.init();
    // add ExtendAccordion init method
  }
}

export const extendAccordion = () => {
  const wraps = document.querySelectorAll(".js-accordion");
  wraps?.forEach((wrap) => {
    const trigger = wrap.querySelector(".js-accordion-trigger");
    const content = wrap.querySelector(".js-accordion-content");
    const defaultExpanded = trigger?.getAttribute("aria-expanded") === "true";
    if (!trigger || !content) return;

    const extendAccordionInstance = new ExtendAccordion(trigger, content, defaultExpanded);
    extendAccordionInstance.init();
  });
};

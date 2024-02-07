/**
 * 複数同時に開くことが可能なアコーディオン
 */
export class Accordions {
  items: HTMLElement[];
  triggers: (HTMLButtonElement | null)[];
  panels: (HTMLElement | null)[];
  openIndexes: number[];
  constructor(wrapper: HTMLElement) {
    this.items = [...wrapper.querySelectorAll<HTMLElement>(".js-accordion")];
    this.triggers = this.items.map((item) =>
      item.querySelector<HTMLButtonElement>(".js-accordion-trigger")
    );
    this.panels = this.items.map((item) =>
      item.querySelector<HTMLElement>(".js-accordion-panel")
    );
    this.openIndexes =
      this.items
        .map((item, i) => (item.dataset.defaultOpen === "true" ? i : -1))
        .filter((item) => item !== -1) ?? [];
  }

  openItem(index: number) {
    this.triggers[index]?.setAttribute("aria-expanded", "true");
    this.panels[index]?.setAttribute("aria-hidden", "false");
  }

  closeItem(index: number) {
    this.triggers[index]?.setAttribute("aria-expanded", "false");
    this.panels[index]?.setAttribute("aria-hidden", "true");
  }

  toggleItem(isOpen: boolean, index: number) {
    if (isOpen) {
      this.closeItem(index);
    } else {
      this.openItem(index);
    }
  }

  handleTriggerClick(index: number) {
    const isOpen = this.openIndexes.includes(index);
    const newIndexes = isOpen
      ? this.openIndexes.filter((i) => i !== index)
      : [...this.openIndexes, index];
    this.openIndexes = newIndexes;
    this.toggleItem(isOpen, index);
  }

  init() {
    for (const [index, trigger] of this.triggers.entries()) {
      const panel = this.panels[index];
      if (!trigger || !panel) return;
      trigger.addEventListener("click", () => {
        this.handleTriggerClick(index);
      });
    }
  }
}

/**
 * 複数同時に開くことが不可能なアコーディオン
 */
export class SingleAccordions extends Accordions {
  handleTriggerClick(index: number) {
    const isOpen = this.openIndexes.includes(index);
    this.openIndexes = isOpen ? [] : [index];

    if (isOpen) {
      this.toggleItem(true, index);
    } else {
      for (const [i] of this.items.entries()) {
        if (i !== index) this.closeItem(i);
      }
      this.toggleItem(false, index);
    }
  }
}

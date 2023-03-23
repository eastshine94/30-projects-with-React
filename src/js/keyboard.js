export class Keyboard {
  // #은 private class field
  #swichEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#swichEl = document.getElementById("switch");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", (event) => {
      const { checked } = event.target;
      document.documentElement.setAttribute(
        "theme",
        checked ? "dark-mode" : ""
      );
    });
  }
}

export class Keyboard {
  // #은 private class field
  #swichEl;
  #fontSelectEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#swichEl = document.getElementById("switch");
    this.#fontSelectEl = document.getElementById("font");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", (event) => {
      const { checked } = event.target;
      document.documentElement.setAttribute(
        "theme",
        checked ? "dark-mode" : ""
      );
    });

    this.#fontSelectEl.addEventListener("change", (event) => {
      document.body.style.fontFamily = event.target.value;
    });
  }
}

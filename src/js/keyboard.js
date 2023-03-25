export class Keyboard {
  // #은 private class field
  #containerEl;
  #swichEl;
  #fontSelectEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#swichEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", this.#onChangeTheme);

    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
  }
  #onChangeTheme(event) {
    const { checked } = event.target;
    document.documentElement.setAttribute("theme", checked ? "dark-mode" : "");
  }

  #onChangeFont(event) {
    document.body.style.fontFamily = event.target.value;
  }
}

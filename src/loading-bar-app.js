import { LitElement, html, css } from "lit";
import "./epic-loading-bar.js";

export class BarApp extends LitElement {
  static get tag() {
    return "bar-list";
  }

  static get properties() {
    return {
      list: { type: Array },
    };
  }

  constructor() {
    super();
    this.list = [];
    this.updateBars();
  }

  updateBars() {
    // const address = '../api/bars';
    const address = "../assets/bar-map.json";
    fetch(address)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((data) => {
        this.list = data;
      });
  }

  static get styles() {
    return css`

    `;
  }

  render() {
    return html`
        
      `;
  }
}
customElements.define(BarApp.tag, BarApp);

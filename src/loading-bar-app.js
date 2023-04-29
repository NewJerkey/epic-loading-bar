import { LitElement, html, css } from "lit";
import "./smart-loading-bar.js";
import "./epic-loading-bar.js";
import "./count-up.js";

export class BarApp extends LitElement {
  static get tag() {
    return "bar-list";
  }

  static get properties() {
    return {
      bar: { type: Array },
    };
  }

  constructor() {
    super();
    this.bar = [];
    this.updateBars();
  }

  updateBars() {
    // const address = "../assets/bar-map.json";
    const address = "../api/bar-map";
    fetch(address)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((data) => {
        this.bar = data;
      });
  }

  static get styles() {
    return css`
      .wrapper {
        display: column;
      }
      .item {
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.bar.map(
          (bars) => html`
            <div class="item">
              <smart-loading-bar
                title="${bars.title}"
                duration="${bars.duration}"
                start="${bars.start}"
                end="${bars.end}"
                decimals="${bars.decimals}"
                accessibilityLabel="${bars.accessibilityLabel}"
              ></smart-loading-bar>
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define(BarApp.tag, BarApp);

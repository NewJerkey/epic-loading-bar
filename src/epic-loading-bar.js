import { LitElement, html, css } from "lit";

class EpicLoadingBar extends LitElement {
  static properties = {};

  static styles = css`
    .bar-wrapper {
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      justify-content: space-between;
      display: flex;
      width: 50%;
      display: inline-block;
      vertical-align: middle;
    }

    .loading-bar {
      width: 0%;
      height: 50px;
      border-radius: 15px;
      margin: 3px;
      background: var(--loading-bar-color, yellow);
      transition-property: width;
      transition-duration: 2s;
      transition-timing-function: linear;
    }

    @media (prefers-reduced-motion: reduce) {
      .loading-bar {
        transition-timing-function:steps(2,jump-end) !important;
      }
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="bar-wrapper">
        <div class="loading-bar"></div>
      </div>
    `;
  }
}

customElements.define("epic-loading-bar", EpicLoadingBar);

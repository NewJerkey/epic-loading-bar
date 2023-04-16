import { LitElement, html, css } from 'lit';
import "./epic-loading-bar.js";

class SmartLoadingBar extends LitElement {
  static properties = {
    title: { type: String },
  }

  static styles = css`

    .wrapper {
      text-align: center;
      margin-top: 20px;
    }

    .bar-title {
        display: inline-block;
        font-family: "Inter var experimental", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        color: #8e8e8e;
        margin-right: 50px;
        min-width: 180px;
    }

    @media (max-width: 500px) {
      .wrapper {
        transform: scale(0.7);
      }
    }

  `;

  constructor() {
    super();
    this.title = 'Rspack';
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="bar-title">
          <p>${this.title}</p>
        </div>
        <epic-loading-bar></epic-loading-bar>
      </div>
    `;
  }
}

customElements.define('smart-loading-bar', SmartLoadingBar);
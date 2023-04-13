import { LitElement, html, css } from 'lit';

class EpicLoadingBar extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`


    .wrapper {
      text-align: center;
    }

    .bar-title {
        display: inline-block;
        font-family: "Inter var experimental", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-color: #8e8e8e;
        margin-right: 50px;
    }

    .loading-bar {
      background: blue;
      width: 50%;
      height: 50px;
      border-radius: 25px;
      display: inline-block;
      vertical-align: middle;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="bar-title">
          <p>Rspack</p>
        </div>
        <div class="loading-bar">

        </div>
      </div>
    `;
  }
}

customElements.define('epic-loading-bar', EpicLoadingBar);
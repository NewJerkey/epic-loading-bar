import { LitElement, html, css } from 'lit';

class EpicLoadingBar extends LitElement {
  static properties = {
    title: { type: String },
  }

  static styles = css`


    .wrapper {
      text-align: center;
    }

    .bar-wrapper {
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      justify-content: space-between;
      display: flex;
      width: 50%;
      display: inline-block;
      vertical-align: middle;
    }

    .bar-wrapper:hover .loading-bar {
      width: 99.25%;
    }

    .bar-title {
        display: inline-block;
        font-family: "Inter var experimental", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        color: #8e8e8e;
        margin-right: 50px;
        min-width: 180px;
    }

    .loading-bar {
      width: 0%;
      height: 50px;
      border-radius: 15px;
      margin: 3px;
      background: linear-gradient(to right,#d3c357,#f1a76a,#cc6d2e);
      transition: width 2s;
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
        <div class="bar-wrapper">
          <div class="loading-bar"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('epic-loading-bar', EpicLoadingBar);
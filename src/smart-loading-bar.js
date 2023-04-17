import { LitElement, html, css } from 'lit';
import "./epic-loading-bar.js";

class SmartLoadingBar extends LitElement {
  static properties = {
    title: { type: String },
    counter: { type: Int16Array }
  }

  static styles = css`

    .wrapper {
      text-align: center;
      margin-top: 20px;
      --loading-bar-color: linear-gradient(to right,#d3c357,#f1a76a,#cc6d2e);
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
    this.counter = '50';
    this.count();
  }

  _handleClick() {
    const bar = this.shadowRoot.querySelector('.bar').shadowRoot.querySelector(".loading-bar");
    bar.style.width = this.counter + "%";
    this.counter++;
  }

  count() {
    this.counter++; 
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="bar-title">
          <p>${this.title}</p>
        </div>
        <epic-loading-bar class="bar" @click="${this._handleClick}"></epic-loading-bar>
      </div>
      <p>${this.counter}</p>
    `;
  }


}

customElements.define('smart-loading-bar', SmartLoadingBar);
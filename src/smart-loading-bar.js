import { LitElement, html, css } from 'lit';
import "./epic-loading-bar.js";
import "./count-up.js";
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";

class SmartLoadingBar extends IntersectionObserverMixin(LitElement) {
  static properties = {
    title: { type: String },
    duration: { type: Number },
    start: { type: Number },
    end: { type: Number },
    decimals: { type: Number }
  }

  static styles = css`

    .wrapper {
      text-align: center;
      margin-top: 20px;
      position: relative;
      --loading-bar-color: linear-gradient(to right,#d3c357,#f1a76a,#cc6d2e);
    }

    .bar-title {
        display: inline-block;
        font-family: "Inter var experimental", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        color: #8e8e8e;
        min-width: 180px;
    }

    .bar {
      position: center;
      margin-left: 50px;
    }

    .counter {
      position: absolute;
      left: 79%;
      bottom: 36%;
    }

    @media (max-width: 500px) {
      .wrapper {
        transform: scale(0.7);
      }
      .counter {
        left: 88%;
      }
    }

    @media (max-width: 800px) and (min-width: 500px) {
      .wrapper {
        transform: scale(0.7);
      }
      .counter {
        left: 84%;
      }
    }
  `;

  constructor() {
    super();
    this.title = 'Rspack';
    this.duration = 10;
    this.start = 0;
    this.end = 10;
    this.decimals = 2;
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="bar-title">
          <p>${this.title}</p>
        </div>
        <epic-loading-bar class="bar" ></epic-loading-bar>
        <count-up 
          class="counter" 
          duration=${this.duration} 
          start=${this.start} 
          end=${this.end}
          decimalplaces=${this.decimals}
          noeasing=true>
        </count-up>
      </div>

    `;
  }

  updated(propertiesChanged) {
    propertiesChanged.forEach((oldValue, propName) => {
      if (propName == "elementVisible" && this[propName]) {
        const bar = this.shadowRoot.querySelector('.bar').shadowRoot.querySelector(".loading-bar");
        bar.style.width = "99.25%";
        bar.style.transition = "width " + this.duration + "s linear";
      }
    });
  }
}

customElements.define('smart-loading-bar', SmartLoadingBar);
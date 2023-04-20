import { LitElement, html, css } from 'lit';

class EpicLoadingBar extends LitElement {
  static properties = {
  }

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

    /* .bar-wrapper:hover .loading-bar {
      width: 99.25%;
    } */

    .loading-bar {
      width: 0%;
      height: 50px;
      border-radius: 15px;
      margin: 3px;
      background: var(--loading-bar-color, yellow);
      transition: width 2s linear;
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

customElements.define('epic-loading-bar', EpicLoadingBar);
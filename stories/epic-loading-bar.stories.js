import { html } from 'lit';
import '../src/epic-loading-bar.js';

export default {
  title: 'EpicLoadingBar',
  component: 'epic-loading-bar',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <epic-loading-bar
      style="--epic-loading-bar-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </epic-loading-bar>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};

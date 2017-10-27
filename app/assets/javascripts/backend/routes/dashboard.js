/**
 *
 *
 * Home
 *
 *
 */

import ui from '../layout/uis'

export default {
  init() {

    ui.asideToggle({
      selector: '#aside-toggle',
      target: 'body',
      targetState: 'm-brand-minimize m-aside-left-minimize',
      togglerState: 'm-brand-toggler-active',
    });

  }
};
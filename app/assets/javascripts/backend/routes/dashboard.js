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

    ui.asideMenu({
      targetMenu: '.m-aside-menu',
      selector: '.m-menu-link',
      targetState: 'm-menu-item-open'
    });

    ui.asideMenuHover({
      targetMenu: '.m-aside-menu',
      selector: '.m-menu-nav > .m-menu-item.m-menu-item-submenu'
    });

  }
};
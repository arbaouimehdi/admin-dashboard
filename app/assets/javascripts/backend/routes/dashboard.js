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

    // Aside Toggle
    ui.asideMenuToggle({
      selector: '#aside-toggle',
      target: 'body',
      targetState: 'm-brand-minimize m-aside-left-minimize',
      togglerState: 'm-brand-toggler-active',
    });

    // Header Toggle
    ui.headerMenuToggle({
      selector: '#aside-header-menu-toggle',
      target: '.m-header-menu',
      overlay: 'm-aside-header-menu-mobile-overlay',
      mobileClass: 'm-aside-header-menu-mobile-on',
    });

    // Aside Hover
    ui.asideMenuHover({
      targetMenu: '.m-aside-menu',
      selector: '.m-menu-nav > .m-menu-item.m-menu-item-submenu'
    });

    // Aside Menu
    ui.menu({
      targetMenu: '.m-aside-menu',
      selector: '.m-menu-link',
      targetState: 'm-menu-item-open'
    });

    // Header Menu
    ui.menu({
      targetMenu: '.m-header-menu',
      selector: '.m-menu-link',
      targetState: 'm-menu-item-open'
    });

  }
};
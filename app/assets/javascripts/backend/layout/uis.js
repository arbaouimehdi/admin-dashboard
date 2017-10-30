/**
 *
 *
 * UIS
 *
 *
 */
export default {

  /**
   * Toggle Sidebar
   *
   * @param selector
   * @param target
   * @param targetState
   * @param togglerState
   */
  asideToggle({selector, target, targetState, togglerState}){

    $(selector).on('click', function(){

      //
      $(this).toggleClass(togglerState);
      $('.m-aside-left').toggleClass('m-aside-left-on');

      //
      if ($(this).hasClass(togglerState)) {
        $(`${target}`).addClass(targetState);
      }
      else {
        $(`${target}`).removeClass(targetState);
      }

    })

  },

  /**
   * Aside Menu
   *
   * @param targetMenu
   * @param selector
   * @param targetState
   */
  asideMenu({targetMenu, selector, targetState}){

    let sub_menu,
        not_expanded_list,
        list,
        submenu_level_1;

    $(`${targetMenu} ${selector}`).on('click', function(){

      sub_menu          = $(this).next();
      list              = $(this).parent();
      submenu_level_1   = $(this).parent().parent().hasClass('m-menu-nav');
      not_expanded_list = $(`${targetMenu} .m-menu-nav > .m-menu-item-submenu`).not('.m-menu-item-expanded');

      //
      //
      //
      //
      // Open the Sub Menu
      if (!list.hasClass(targetState)){

        //
        // Sub Menu Level 1
        if (submenu_level_1){

          // Close all Sub Menus except the Current and the Expanded Ones
          not_expanded_list.not(sub_menu)
            .removeClass(targetState)
            .find('> .m-menu-submenu')
            .slideUp();

        }

        // Open the current Sub Menu
        sub_menu.slideDown(function(){
          $(this).parent().addClass(targetState);
        });

      }

      //
      //
      //
      //
      // Close the Sub Menu
      else {

        // Close the current Sub Menu
        sub_menu.slideUp(function(){
          $(this).parent().removeClass(targetState);
        });

      }

    });

  },

  /**
   * Aside Menu Hover
   *
   * @param targetMenu
   * @param selector
   */
  asideMenuHover({targetMenu, selector}) {

    // $(selector).removeClass('m-menu-item-hover')

    // $(selector).hover(function(){
    //
    //   console.log('dd')
    //
    // }, function(){
    //
    // })

  }

}
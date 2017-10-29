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

      $(this).toggleClass(togglerState);

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
   * @param selector
   * @param targetState
   */
  asideMenu({selector, targetState}){

    let sub_menu,
        expanded_list,
        list;

    $(selector).on('click', function(){

      sub_menu = $(this).next();
      list = $(this).parent();
      expanded_list = $('.m-menu-item.m-menu-item-submenu').not('.m-menu-item-expanded');

      //
      //
      // Open the Menu
      if (!list.hasClass(targetState)){

        // Close all Sub Menus except the Current and the Expanded Ones
        expanded_list.find('.m-menu-submenu').slideUp(function(){
          expanded_list.not(sub_menu).removeClass(targetState);
        });

        // Open the current Sub Menu
        sub_menu.slideDown(function(){
          $(this).parent().addClass(targetState);
        });

        console.log('open');

      }

      //
      //
      // Close the Sub Menu
      else {

        // Close the current Sub Menu
        sub_menu.slideUp(function(){
          $(this).parent().removeClass(targetState);
        });

        console.log('closed');

      }

    });

  }

}
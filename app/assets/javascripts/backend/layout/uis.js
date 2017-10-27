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
   */
  asideToggle({selector, target, targetState, togglerState}){

    $(selector).on('click', function(){

      $(`${target}`).addClass('m-brand-minimize');

      return false;
    })

  }

}
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

      console.log($(this).attr('class'))

      if ($(this).hasClass(togglerState)) {
        $(`${target}`).addClass(targetState);
      }
      else {
        $(`${target}`).removeClass(targetState);
      }

    })

  }

}
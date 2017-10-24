/**==================================
 #
 #             + CSS File
 #
 ==================================*/
import '../src/application.scss'

/**==================================
 #
 #             + JS Files
 #
 ==================================*/

/*==================================
#       External Dependencies
==================================*/
import 'bootstrap';

/*==================================
#         Local dependencies
==================================*/
import Router from 'javascripts/util/Router';

/*==================================
 #              Pages
 ==================================*/
import home from 'javascripts/routes/home';

/*==================================
 #              Layout
 ==================================*/
import plugins from 'javascripts/layout/plugins';
import uis from 'javascripts/layout/uis';


/*==================================
 #    Populate Router instance
 #         with DOM routes
 ==================================*/
const routes = new Router({
  // Layouts
  plugins,
  uis,
  // Pages
  home
});

/*==================================
 #             Turbolinks
 ==================================*/
import Turbolinks from 'turbolinks';
Turbolinks.start();

document.addEventListener('turbolinks:load', function () {
  return routes.loadEvents();
});
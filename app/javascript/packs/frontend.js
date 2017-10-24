/**==================================
 #
 #             + CSS File
 #
 ==================================*/
import '../src/frontend.scss'
import 'images/frontend/logos/logo.png'

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
import Router from 'javascripts/frontend/util/Router';

/*==================================
 #              Pages
 ==================================*/
import home from 'javascripts/frontend/routes/home';

/*==================================
 #              Layout
 ==================================*/
import plugins from 'javascripts/frontend/layout/plugins';
import uis from 'javascripts/frontend/layout/uis';


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
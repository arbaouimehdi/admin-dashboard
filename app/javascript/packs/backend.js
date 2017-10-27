/**==================================
 #
 #             + CSS File
 #
 ==================================*/
import '../src/backend.scss';
import 'images/backend/logos/logo.png';
import 'images/backend/logos/logo-default-dark.png';

/*==================================
#       External Dependencies
==================================*/
import 'bootstrap';

/*==================================
#         Local dependencies
==================================*/
import Router from 'javascripts/backend/util/Router';

/*==================================
 #              Pages
 ==================================*/
import dashboard from 'javascripts/backend/routes/dashboard';

/*==================================
 #              Layout
 ==================================*/
import plugins from 'javascripts/backend/layout/plugins';
import uis from 'javascripts/backend/layout/uis';


/*==================================
 #    Populate Router instance
 #         with DOM routes
 ==================================*/
const routes = new Router({
  // Layouts
  plugins,
  uis,
  // Pages
  dashboard
});

/*==================================
 #             Turbolinks
 ==================================*/
import Turbolinks from 'turbolinks';
Turbolinks.start();

document.addEventListener('turbolinks:load', function () {
  return routes.loadEvents();
});
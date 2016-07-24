;(function(){

'use strict';

angular.module('HTMLTemplates', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('modules/home/home.tpl.html', '<h3>Home Page</h3> {{home.title}}');

}]);

})();
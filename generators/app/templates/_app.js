
var <%= name %> = angular.module('<%= name %>', ['ng-admin']);

<%= name %>.config(['NgAdminConfigurationProvider', function (nga) {

    var admin = nga.application('<%= name %>');
    
    // entities
  

    // configure entities 



    nga.configure(admin);

}]);


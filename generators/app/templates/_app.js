
var <%= name %> = angular.module('<%= name %>', ['ng-admin']);

<%= name %>.config(['NgAdminConfigurationProvider', function (nga) {

    var admin = nga.application('<%= name %>');
    
    /*=============================================
    =            Declare Entities           =
    =============================================*/
    
    
    
    // End Entities
    

    /*==========================================
    =            Configure Entities            =
    ==========================================*/
    
    
    
    // End of Configure Entities 


    nga.configure(admin);

}]);


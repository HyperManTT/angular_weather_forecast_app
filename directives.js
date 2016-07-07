//Directive
weatherApp.directive("weatherPanel", function(){
    return {
        restrict: 'E',
        templateUrl: "pages/weatherPanel.htm",
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    };
})
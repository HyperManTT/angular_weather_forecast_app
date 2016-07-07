//Services
weatherApp.service('cityService', function(){
    this.city = "New York, NY";
});


weatherApp.service('weatherService', ['$resource', function($resource){
    
    this.getWeather = function(city, days){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=2e50963398ab5dea0f6f8ef37c0257ee", {
        callback: "JSON_CALLBACK"}, {get: {method: "JSONP" }});
    return weatherAPI.get({q: city, cnt: days}); 
    };    
}]);
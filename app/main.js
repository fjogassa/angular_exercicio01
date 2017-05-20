(function(app){
    var platformBrowser = ng.platformBrowserDynamic.platformBrowserDynamic;
    var AppModule = app.AppModule;

    platformBrowser().bootstrapModule(AppModule);

})(window.app || (window.app = {}));
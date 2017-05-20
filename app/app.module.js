(function(app){
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var QuoteService = app.QuoteService;
    var AppComponent = app.AppComponent;
    var AppComponentHoras = app.AppComponentHoras;

    app.AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, AppComponentHoras],
        providers: [QuoteService],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor: function(){ }
    });
}) (window.app || (window.app = {}));
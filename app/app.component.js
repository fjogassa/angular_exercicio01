(function(app){
    var Component = ng.core.Component;

    app.AppComponent = Component({
        selector: 'my-app',
        template: '<h1>Horas</h1>' +
                  '<component-horas></component-horas>'
    })
    .Class({
        constructor: function AppComponent(){ }
    });
}) (window.app || (window.app = {}));
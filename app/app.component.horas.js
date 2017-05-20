(function(app){
    var Component = ng.core.Component;
    var QuoteService = app.QuoteService;
    
    app.AppComponentHoras = Component({
        selector: 'component-horas',
        template: '<p><em>{{horaImprimivel}}</em></p>'
    })
    .Class({
        constructor: [QuoteService, function AppComponentHoras(quoteService){          
            var self = this;
            quoteService.generateHoras(1000, function(horaImprimivel){
                self.horaImprimivel = horaImprimivel;
            })
        }]
    });
}) (window.app || (window.app = {}));
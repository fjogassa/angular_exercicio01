(function(app){
   var Class = ng.core.Class;

   app.QuoteService = Class({
       constructor: function QuoteService(){ },
       getMoveRelogio: function() {
            momentoAtual = new Date(); 
            hora = momentoAtual.getHours(); 
            minuto = momentoAtual.getMinutes();
            segundo = momentoAtual.getSeconds();

            horaImprimivel = hora + " : " + minuto + " : " + segundo;

            return horaImprimivel;            
       },
       generateHoras: function(delay, callback){
            var self = this;
            callback(this.getMoveRelogio());
            setInterval(function(){
                callback(self.getMoveRelogio());
            }, delay);
       }
   });
}) (window.app || (window.app = {}));
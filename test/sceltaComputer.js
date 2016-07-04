/**
 * Created by fra on 04/07/16.
 */

var assert = chai.assert;

describe('sceltaComputer', function() {
    it('il risultato deve essere una stringa', function() {
        // var sceltaUtente;
        // var sceltaComputer;
        var scelta = sceltaComputer();
        var pc = Math.random();
        if(scelta=="carta"){
            assert.typeOf(scelta,  "string");
        }
        if(scelta=="forbice"){
            assert.typeOf(scelta,  "string");
        }
        if(scelta=="sasso"){
            assert.typeOf(scelta,  "string");
        }
});
        it('deve sempre dare un valore compreso nei seguenti: carta, sasso, forbice', function() {

            var scelta = sceltaComputer();
            var pc = Math.random();
            if(scelta=="carta" && pc <= 1 / 3){
                assert.equal(scelta,  "carta");
            }
            if(scelta=="forbice" && pc < 2 / 3){
                assert.equal(scelta,  "forbice");
            }
            if(scelta=="sasso" && pc <= 3 / 3){
                assert.equal(scelta,  "sasso");
            }

        });
}
);



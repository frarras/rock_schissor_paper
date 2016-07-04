/**
 * Created by fra on 04/07/16.
 */
var assert = chai.assert;

describe('selezioneForma', function() {

    it('Il parametro deve essere una stringa', function() {

        var scelta = ["sasso", "carta", "sasso"];
        scelta.forEach(function (sceltasingola) {
            assert.typeOf(sceltasingola, "string");
        })
    });
    
});
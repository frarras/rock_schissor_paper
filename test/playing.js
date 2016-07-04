/**
 * Created by fra on 04/07/16.
 */
var assert = chai.assert;

describe('playing', function() {

    it('entrambi i parametri di playing devono essere una stringa', function() {
        var scelta = "sasso";
        var computer = "carta";
        playing(scelta);
        assert.typeOf(scelta, "string");

    });
});
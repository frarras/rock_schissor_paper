/**
 * Created by fra on 04/07/16.
 */
var assert = chai.assert;
chai.should();

describe('playing', function() {

    it('entrambi i parametri di playing devono essere una stringa, test: scelta', function() {
        var scelta = "sasso";
         sceltaComputer();
         assert.typeOf(sceltaComputer(), "string");

    });
    it('entrambi i parametri di playing devono essere una stringa, test: computer', function() {
        var scelta = "sasso";
        var computer =sceltaComputer();
        computer.should.be.a('string');
    });
    it('txtVittoria sia una stringa, test: computer', function() {
        var scelta = "sasso";
        var computer =sceltaComputer();
        computer.should.be.a('string');
    });
});
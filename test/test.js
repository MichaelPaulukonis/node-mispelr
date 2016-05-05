'use strict';

// execute with `mocha test.js`

var tester = function() {

  var mocha = require('mocha'),
      chai = require('chai'),
      expect = chai.expect,
      Mispelr = require('../index.js'),
      mispelr = new Mispelr();

    describe('API tests', function() {

      it('Mispelr should return a new instance with New', function() {
        var newmispelr = new Mispelr();
        expect(newmispelr).to.be.a('object');
        expect(newmispelr).to.be.an.instanceof(Mispelr);
      });

      it('Mispelr should return a new instance even without New', function() {
        var mispelr = Mispelr();
        expect(mispelr).to.be.a('object');
        expect(mispelr).to.be.an.instanceof(Mispelr);
      });

      it('Mispelr should expose a spelltype object', function() {
        expect(mispelr.spelltype).to.be.an('object');
      });

      it('Mispelr should expose a respell method', function() {
        expect(mispelr.respell).to.be.a('function');
      });

      it('Mispelr should expose a random method', function() {
        expect(mispelr.random).to.be.a('function');
      });

      it('Mispelr should expose a maledict method', function() {
        expect(mispelr.maledict).to.be.a('function');
      });

      it('Mispelr should expose a awfowell method', function() {
        expect(mispelr.awfowell).to.be.a('function');
      });

      it('Mispelr should expose a constonantSorrow method', function() {
        expect(mispelr.constonantSorrow).to.be.a('function');
      });

      it('Mispelr should expose a maxmister method', function() {
        expect(mispelr.maxmister).to.be.a('function');
      });

      it('Mispelr should expose a homophilia method', function() {
        expect(mispelr.homophilia).to.be.a('function');
      });

    });


  // TODO: these utility functions are not exposed by mispelr
  // so, throw them into a utility module that can then be consumed
  // and tested

  // describe("isAlpha", function() {
  //   it("should correctly recognize all-alpha strings", function() {
  //     var text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //     var value = isAlpha(text);
  //     expect(value).to.equal(true);
  //   });

  //   it("should fail on numerics", function() {
  //     var text = "12345";
  //     var value = isAlpha(text);
  //     expect(value).to.equal(false);
  //   });

  //   it("should socceed on mixed-scenarios ('David23')", function() {
  //     var text = "David23";
  //     var value = isAlpha(text);
  //     expect(value).to.equal(true);
  //   });
  // });


  // describe("textArray tests with 'David23 is in da hizzouse! ", function() {

  //   it("getTextArray() method should exist", function() {
  //     expect(typeof(getTextArray)).to.equal('function');
  //   });

  //   // wait, why the above, and nesting???
  //   // if the method doesn't exist, the below test setup will fail
  //   // and cause the entire test to be ignored. OUCH
  //   // there must be a better way to test such things
  //   // (oh, why do I want to? because of refactoring....)
  //   describe("since it exists....", function() {

  //     var getTokenTestData = function(text) {
  //       return  {
  //         text: text,
  //         tokens: getTextArray(text)
  //       };
  //     };

  //     var data = getTokenTestData("David23 is in da hizzouse!");

  //     it("should chop up text into 7 tokens", function() {
  //       expect(data.tokens.length).to.equal(7);
  //     });

  //     it("first token in the text is David", function() {
  //       expect(data.tokens[0]).to.equal("David");
  //     });

  //     it("second token in the text is '23'", function() {
  //       expect(data.tokens[1]).to.equal("23");
  //     });

  //     it("'!' is the last token in 'David23 is in da hizzouse!'", function() {
  //       expect(data.tokens[data.tokens.length-1]).to.equal("!");
  //     });

  //   });

  // });


  // // well, this is a first stab.
  // describe("maledictor tests", function() {

  //   it("maledictor() method should exist", function() {
  //     expect(typeof(maledictor)).to.equal('function');
  //   });

  //   describe("since it exists....", function() {

  //     var samples = {
  //       'abbreviate': ['abreviate']
  //     };

  //     it("should replace 'abbreviate' with 'abreviate'", function() {
  //       var ms = maledictor('abbreviate');
  //       expect(ms).to.equal(samples['abbreviate'][0]);
  //     });

  //   });
  // });


}();

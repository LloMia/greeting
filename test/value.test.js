describe("Add a new name", function() {
    it("it should add a new name", function() {
        assert.equal(undefined, values('Loyiso'));
    });
})


describe("Greet in different language", function() {
    it("it should return 'Hello!, Loyiso' if english is selected ", function() {
        assert.equal(checkedLanguage("Loyiso", "english"), "Hello!, Loyiso");
    })


    it("it should return 'Dumela!, Loyiso' if setswana is selected ", function() {
        assert.equal(checkedLanguage("Loyiso", "setswana"), "Dumela!, Loyiso");
    })

    it("it should return 'Bonjour!, Loyiso' if french is selected ", function() {
        assert.equal(checkedLanguage("Loyiso", "french"), "Bonjour!, Loyiso");
    })
})

describe("names stored", function(){
  it("should store names greeted counter",function(){
    assert.equal(storeNames(), 1)
  })
})

describe("clear increment", function(){
  it("should clear greeted counter",function(){
    assert.equal(resetClear(), 0)
  })
})

// describe("counter", function() {
//     it("it should return 'true' when given Loyiso", function() {
//         assert.equal(counter('Loyiso'), true);
//     })
//     it("it should return 'false' when given Chris", function() {
//         assert.deepEqequalual(counter('Loyiso',), false);
//
//     })
// })

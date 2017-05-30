describe("radio button", function () {
  it ("it should return 'Hello!, Loyiso' if english is selected ", function() {
  assert.equal(greet("Loyiso", "english"), "Hello!, Loyiso");
})


  it ("it should return 'Dumela!, Loyiso' if setswana is selected ", function() {
  assert.equal(greet("Loyiso", "setswana"), "Dumela!, Loyiso");
})

  it ("it should return 'Bonjour!, Loyiso' if french is selected ", function() {
  assert.equal(greet("Loyiso", "french"), "Bonjour!, Loyiso");
})
})

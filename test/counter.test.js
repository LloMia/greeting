describe("counter", function() {
    it("it should return 'true' when given Loyiso", function() {
        assert.deepEqual(counter('Loyiso', 'Thabang', 'Amanda', 'Viwe', 'Lubba'), true);
    })
    it("it should return 'false' when given Chris", function() {
        assert.deepEqual(counter('Loyiso', 'Thabang', 'Amanda', 'Viwe', 'Lubba'), false);

    })
})

(function() {
  describe('Cycler', function() {
    it('as a list of things', function() {
      var things = ["one", "two", "three"];
      var cycler = new Cycler(things);
      cycler.things.should.equal(things);
    });

    it('starts with selecting nothing', function() {
      var cycler = new Cycler(["one", "two", "three"]);
      expect(cycler.current()).toBe(undefined);
    });

    describe('#moveDown', function() {
      it('can move the selection up', function() {
        var cycler = new Cycler(["one", "two", "three"]);
        cycler.moveDown();
        cycler.current().should.equal("one");
      });

      it('cycles back around', function() {
        var cycler = new Cycler(["one", "two", "three"]);
        cycler.moveDown();
        cycler.moveDown();
        cycler.moveDown();
        cycler.moveDown();
        cycler.moveDown();
        cycler.current().should.equal("two");
      });
    });

    describe('#moveUp', function() {
      it('can move the selection up', function() {
        var cycler = new Cycler(["one", "two", "three"]);
        cycler.moveUp();
        cycler.current().should.equal("three");
      });

      it('cycles back around', function() {
        var cycler = new Cycler(["one", "two", "three"]);
        cycler.moveUp();
        cycler.moveUp();
        cycler.moveUp();
        cycler.moveUp();
        cycler.moveUp();
        cycler.current().should.equal("two");
      });
    });
  });
}).call(this);

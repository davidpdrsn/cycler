(function() {
  this.Cycler = (function() {
    function Cycler(things) {
      this.things = things;
      this.selectionId = 0;
    }

    Cycler.prototype.current = function() {
      return this.things[this.selectionId];
    };

    Cycler.prototype.moveDown = function() {
      if (this.selectionId === this.things.length - 1) {
        return this.selectionId = 0;
      } else {
        return this.selectionId += 1;
      }
    };

    Cycler.prototype.moveUp = function() {
      if (this.selectionId === 0) {
        return this.selectionId = this.things.length - 1;
      } else {
        return this.selectionId -= 1;
      }
    };

    return Cycler;
  })();
}).call(this);

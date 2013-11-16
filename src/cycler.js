(function() {
  this.Cycler = (function() {
    function Cycler(things) {
      this.things = things;
      this.selectionId = undefined;
    }

    Cycler.prototype.current = function() {
      return this.things[this.selectionId];
    };

    Cycler.prototype.moveDown = function() {
      this.selectionId = this.selectionId || -1;

      if (this.selectionId === this.things.length - 1) {
        return this.selectionId = 0;
      } else {
        return this.selectionId += 1;
      }
    };

    Cycler.prototype.moveUp = function() {
      this.selectionId = this.selectionId || this.things.length;

      if (this.selectionId === 0) {
        return this.selectionId = this.things.length - 1;
      } else {
        return this.selectionId -= 1;
      }
    };

    return Cycler;
  })();
}).call(this);

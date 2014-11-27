var Stacked = Stacked || {};

/**
 * Construct object
 *
 * The functions under Construct will be responsible for constructing the
 * content into cards.
 *
 * The results from Analyze will guide the size, quantity, and content of
 * cards. The returned cards will be sent to Display.
 *
 */
Stacked.Construct = {
  options: {

    card: {
      width: '300px',
      height: '400px',
      lines: 10
    },
    content: {
      selector: 'body',
      lineHeight: '10px',
      fontSize: '10px',
    }
  },
  blastOff: function(){
    this.getContentValues();
    this.calculateLinesInCard();
  },
  getContentValues: function(){
    var self = this;
    this.content.lineHeight = window.getComputedStyle(self.contentSelector, null).getPropertyValue('line-height');
    this.content.fontSize = window.getComputedStyle(self.contentSelector, null).getPropertyValue('font-size');
  },
  calculateLinesInCard: function(){
    this.card.lines = (this.card.width/this.content.lineHeight);
  }
};




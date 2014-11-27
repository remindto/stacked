var Cardify = Cardify || {};

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
Cardify.Construct = {
  options: {
    card: {
      width: '300px',
      height: '400px'
    },
    content: {
      lineHeight: '10px',
      fontSize: '10px',
    }
  },
  blastOff: function(){

  },
};

window.getComputedStyle(body, null).getPropertyValue('line-height')


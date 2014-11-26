;(function(window){


/**
 * Cardify - Turning content into cards
 *
 * A JavaScript library for parsing scrollable content into card format.
 *
 * This library will work best on touch devices.
 *
 */
var Cardify = Cardify || {};

/**
 * Analyze object
 *
 * The functions under Analyze will grab page content and analyze it.
 *
 * Specifically, the Analyze object will identify how much content needs
 * to be Cardified. The content will be examined for word count, potential
 * card breaks, and any assets requiring special layout.
 *
 * Eventually, Analyze will be fed content from Gather. The results will
 * be sent to Construct.
 *
 */
Cardify.Analyze = {
  options: {
    view: {

    },
    doc: {
      page: {},
      content: {}
    },

  },

  blastoff: function(){
    this.analyzeWindow();
    this.accessPage();
    this.identifyContent();
  },

  analyzeWindow: function(){
    window;   // Make analysis decisions from here
  },

  /**
   * Grab the entire DOM and save the reference to nodes
   */
  accessPage: function(){
    document; // Get content from here


    this.page = {};
  },

  /**
   * Process current page to identify the main content
   */
  identifyContent: function(){
    this.options.doc.page;         // Do something to this

    this.options.doc.content = {}; // Save this
  }

};

/**
 * Gather object
 *
 * The functions under Gather will collect links of potential content to
 * analyze.
 *
 * The links will be collected in an array. The resulting array will be
 * procesed and passed to the Analyze object.
 *
 */
Cardify.Gather = {};

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
Cardify.Construct = {};

/**
 * Display object
 *
 * The functions under Display will serve the cards to the the user.
 *
 * Display will take returned results from Construct.
 *
 */
Cardify.Display = {};

/**
 * Interface object
 *
 * The functions under Interface will be responsible for the behavior of
 * cards in the browser.
 *
 */
Cardify.Interface = {};

})(window, undefined);


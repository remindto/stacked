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

  /**
   * Options for Analyze
   *
   * Initialize default values. None of them should need to be used.
   *
   */
  options: {
    view: {
      wordCapacity: 0,
      fontSize: 10,
    },
    doc: {
      page: {},
      content: {}
    },
  },

  blastoff: function(){
    this.analyzeWindow();
    this.analyzePage();
  },

  /**
   * All the window analysis functions get initialized under here
   * @initBy blastOff
   */
  analyzeWindow: function(){
    this.getBodyFontSize();
    this.getWordCount();
  },

  /**
   * Use the body node as reference for card font-size
   * @initBy analyzeWindow
   */
  getBodyFontSize: function(){
    var body = querySelector('body');
    var bodyFontSize = window.getComputedStyle(body, null).getPropertyValue('font-size');

    this.options.view.fontSize = bodyFontSize; // Get body font size getComputedStyle
  },

  /**
   * Look at window and guestimate the number of characters per cards
   * @initBy analyzeWindow
   */
  getWordCount: function(){
    window;   // Make analysis decisions from here

    this.options.view.wordCapacity = 0; // window
  },

  /**
   * Grab the entire DOM and save the reference to nodes
   */
  analyzePage: function(){
    this.getAllNodes();
    this.getMainContent();
  },

  /**
   * Access document to save all the nodes.
   * @initBy analyzePage
   */
  getAllNodes: function(){
    var page = document.querySelectorAll('*'); // Get content from here

    this.options.doc.page = page;
  },

  /**
   * Process current page to identify the main content
   *
   * Find the element with the most h1, h2, h3, h4, h5, p tags
   */
  getMainContent: function(){
    var page = this.options.doc.page,
        reference = [];

    reference = this.processAllTags(page);
    this.options.doc.content = {}; // Save this
  },

  /**
   * Loop through the body's nodes and pass on to functional methods
   * @return {[type]} [description]
   */
  processAllTags: function(){
    var properties = {},
        reference = [];
    for(i = 0; i < page.length; i++){
      properties.el = page[i];
      properties.count = this.countContentTags(page[i]);
      reference.push(properties);
    }
    return reference;
  },

  /**
   * Count the number of content tags in the element
   * @return countedTags
   */
  countContentTags: function(tag){
    var tagsToCheckFor = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'blockquote' ];
    return count;
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


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


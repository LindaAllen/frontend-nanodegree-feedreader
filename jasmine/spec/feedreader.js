/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 $(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
     describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         it('should be  defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('should have a defined url for each feed', function () {
            /* Loop through each item in the feed and make sure it
             * has a defined url and that the length is greater than 0
             */
             var i,
             feedLength = allFeeds.length;
             for (i = 0; i < feedLength; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).toBeGreaterThan(0);
            }
        });

         it('should have a defined name for each feed', function () {
            /* Loop through each item in the feed and make sure it
             * has a defined name and that the length is greater than 0
             */
             var i,
             feedLength = allFeeds.length;
             for (i = 0; i < feedLength; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
            }
        });
     });

describe('The menu', function () {

    it('should be hidden by default', function () {
            /* Check if the body element has class menu-hidden
             * and ensure that on page load it is set
             */
             var menuHidden = $('body').hasClass('menu-hidden');
             expect(menuHidden).toEqual(true)
         });

    it('should toggle hide/show when the menu butotn is clicked', function () {
            // click the menu button and make sure the body class has changed.
            var menuButton = $('.menu-icon-link'),
            body = $('body');
            menuButton.click();
            expect(body.hasClass('menu-hidden')).toEqual(false);
            menuButton.click();
            expect(body.hasClass('menu-hidden')).toEqual(true);
        });

});

describe('Initial Entries', function () {

    beforeEach(function (done) {
            // call loadFeed() before each test case
            loadFeed(0, done);
        });

    it('should have at least a single entry after loading feeds', function () {
            // check that the number of entries is greater than 0
            expect($('.entry').length).toBeGreaterThan(0);
        });
});

describe('New Feed Selection', function () {
    var initial,
    loaded;

    beforeEach(function (done) {
            // call loadFeed(), set initial, then call loadFeed again
            loadFeed(1, function () {
                initial = $('.feed').html();
                loadFeed(2, done);
            });
        });

    it('should load in a new feed when the content changes', function () {
            // check that the loaded feed is different than the initial feed
            loaded = $('.feed').html();
            expect(initial).not.toEqual(loaded);
        })

});

}());
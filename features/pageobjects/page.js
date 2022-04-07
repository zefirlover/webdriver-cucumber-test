/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    get mainPage() {
        return browser.url('https://webdriver.io/');
    }
}

module.exports = new Page();
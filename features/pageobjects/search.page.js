class SearchPage {
    get btnSearch() {
        return $('[aria-label="Search"]')
    }

    get inputSearch() {
        return $('[id="docsearch-input"]')
    }
}

module.exports = new SearchPage();
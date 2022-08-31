const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCHBOX = '#searchTerm'

class SearchBox{
    static visitPage(){
        cy.visit(URL)
    }
    static fillSearchBox(something) {
        cy.get(SEARCHBOX).type(something)
    }
}

export default SearchBox
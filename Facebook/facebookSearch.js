// Visit the Facebook home page.
cy.visit('https://www.facebook.com/');

// Search for "Mona".
cy.get('[data-testid="search-bar"]').type('Mona');
cy.get('[data-testid="search-button"]').click();

// Assert that the search results contain the text "Mona".
cy.get('[data-testid="search-results"]').should('contain', 'Mona');

// Click on the first search result.
cy.get('[data-testid="search-result-0"]').click();

// Assert that the page title contains the text "Mona".
cy.title().should('include', 'Mona');

// Take a screenshot of the page.
cy.screenshot();

// Log a message to the console.
cy.log('The user has searched for "Mona" on Facebook and found a profile for Mona.');
// Visit the Facebook login page.
cy.visit('https://www.facebook.com/login');

// Enter the username and password.
cy.get('[data-testid="email"]').type('username');
cy.get('[data-testid="pass"]').type('password');

// Click on the "Log In" button.
cy.get('[data-testid="login-button"]').click();

// Assert that the user is logged in.
cy.get('[data-testid="user-name"]').should('have.text', 'username');

// Take a screenshot of the page.
cy.screenshot();

// Log a message to the console.
cy.log('The user is logged in to Facebook.');
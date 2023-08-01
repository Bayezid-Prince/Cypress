// Visit the Daraz.com website.
cy.visit('https://www.daraz.com.bd');

// Click on the "Login" button.
cy.get('[data-testid="login-button"]').click();

// Enter the username and password.
cy.get('[data-testid="username"]').type('username');
cy.get('[data-testid="password"]').type('password');

// Click on the "Login" button again.
cy.get('[data-testid="login-button"]').click();

// Assert that the user is logged in.
cy.get('[data-testid="user-name"]').should('have.text', 'username');

// Take a screenshot.
cy.screenshot();

// Log a message to the console.
cy.log('The user is logged in.');
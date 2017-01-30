var Page = {
    emailField: function() {
        return ST.element('@email');  
    },
    passwordField: function() {
        return ST.element('@password');  
    },
    submitButton: function() {
        return ST.element('@submit');
    },
    resetButton: function() {
        return ST.element('@reset');  
    },
    registrationLink: function() {
        return ST.element('@register');  
    },
    loginLink: function() {
        return ST.element('@login');  
    },
    errorText: function() {
        return ST.element('@errors');
    }
};

describe('Login', function() {
    /**
     * Before each test spec, we reset the state of the form, by clicking the form's Reset button
     */
    beforeEach(function() {
        Page.resetButton()
            .click();
    });
    
    it('Should not login without an email address or password specified', function() {
        Page.submitButton()
            .click(20, 20);
        
        Page.errorText()
            .textLike('Email address is required')
            .textLike('Password is required');
    });
    
    it('Should show an error when the entered email address doesn\'t exist', function() {
        Page.emailField()
            .focus()
            .type('invalid@sencha.com');
            
        Page.passwordField()
            .focus()
            .type('test');
            
        Page.submitButton()
            .click();
        
        Page.errorText()
            .textLike('User with this email address not found');
    });
    
    it('Should display an error when attempting to login with a valid email but an invalid password', function() {
        Page.emailField()
            .focus()
            .type('dan@sencha.com')
        
        Page.passwordField()
            .focus()
            .type('test');
            
        Page.submitButton()
            .click(20, 20)
        
        Page.errorText()
            .textLike('You entered an invalid password');
    });
    
    it('Should navigate to the Registration screen when the Register link is clicked', function() {
        Page.registrationLink()
            .click()
            .wait(1000)
            .getUrl(function(url) {
                expect(url).toContain('Register.aspx'); 
            });
    });
    
    it('Should navigate back to the Login screen when the Login link is clicked', function() {
         Page.loginLink()
            .click()
            .wait(1000)
            .getUrl(function(url) {
                expect(url).toContain('Login.aspx'); 
            });
    });
});
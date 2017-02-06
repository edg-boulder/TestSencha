describe("Asset.js", function() {
    var Page = {
        menu: function() {
            return ST.dataView('#menu');
        },
        grid: function() {
            return ST.grid('assetgrid');
        },
        form: function() {
            return ST.component('assetform');
        },
        backButton: function() {
            return ST.button('assetform button[text=Back]');
        }
    };
    
    it('Should navigate to the Assets view when clicking the Asset icon in menu', function() {
        Page.menu()
            .item('asset')
            .click();
    });
    
    it('Should show a grid of Assets', function() {
        Page.grid();
    });
    
    it('Grid should contain Asset data', function() {
        Page.grid()
            .rowAt(5);
    });
    
    it('Should show the Asset details view when an Asset is clicked in the grid', function() {
        Page.grid()
            .rowAt(2)
            .click(10, 10);
            
        Page.form();
    });
    
    it('Clicking the Back button should return to the grid of Assets', function() {
        Page.backButton()
            .click();
            
        Page.form()
            .hidden();
            
        Page.grid()
            .visible();
    });
    
});
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
        },
        saveButton: function() {
            return ST.button('assetform button[text=Save]');  
        },
        addButton: function() {
            return ST.button('assetgrid button[text=Add New]');
        },
        
        /*
            Form fields
        */
        nameField: function() {
            return ST.field('assetform textfield[label=Name]');
        },
        descriptionField: function() {
            return ST.field('assetform textareafield[label=Description]');
        },
        typeField: function() {
            return ST.select('assetform selectfield[label=Type]');
        },
        dateField: function() {
            return ST.field('assetform datepickerfield[label=Date]');
        },
        quantityField: function() {
            return ST.field('assetform numberfield[label=Quantity]');  
        },
        costField: function() {
            return ST.field('assetform numberfield[label=Per Unit Cost]');
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
    
    it('Should show the Asset details view when a specific Asset is clicked in the grid', function() {
        Page.grid()
            .rowWith('name', 'Statesman 10-piece conference table and chairs')
            .click(10, 10);
            
        Page.form();
    });
    
    it('Changing the Asset quantity and saving should update the grid and dashboard totals', function() {
        Page.quantityField()
            .setValue(5);
            
        Page.saveButton()
            .click(10, 10);
            
        
        // TODO
        
        Page.grid()
            .rowWith('name', 'Statesman 10-piece conference table and chairs')
            .cellWith('quantity', 5);
    });
    
    it('Should show the Asset form when clicking the Add New button', function() {
        Page.addButton()
            .click();
    });
    
    it('Date field should default to the current date', function() {
        
        // TODO
        
        Page.dateField()
            .expect('value').toEqual(new Date());
    });
    
    it('Other form fields should be blank for new Asset records', function() {
        
        // TODO
        
        Page.nameField()
            .value('');
            
        Page.descriptionField()
            .value('');
            
        Page.typeField()
            .value('');
    });
});

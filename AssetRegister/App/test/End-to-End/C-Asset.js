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
        messageBox: function() {
            return ST.component('messagebox');
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
        },
        
        /*
            Dashboard panels
        */
        assetCountPanel: function() {
            return ST.component('container#assetCount');  
        },
        assetValuePanel: function() {
            return ST.component('container#assetValue');  
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
    
    it('Changing the Asset quantity and saving should update the grid', function() {
        Page.quantityField()
            .setValue(4);
            
        Page.saveButton()
            .click(10, 10);
        
        Page.grid()
            .wait(1000)
            .rowWith('name', 'Statesman 10-piece conference table and chairs')
            .cellWith('dataIndex', 'quantity').textLike('4');
    });
    
    it('After changing the Asset quantity, the Dashboard value should also be updated', function() {
        Page.menu()
            .item('dashboard')
            .click();
            
        Page.assetCountPanel()
            .text('303 assets');
    });
    
    it('Should return to the Asset view when clicking the Menu item', function() {
        Page.menu()
            .item('asset')
            .click(); 
    });
    
    it('Should show the Asset form when clicking the Add New button', function() {
        Page.addButton()
            .click();
    });
    
    xit('Saving an Asset without entering values should show validation message and prevent save', function() {
        Page.saveButton()
            .click();
            
        Page.messageBox()
            .visible()
            .textLike('Validation errors')
            .textLike('Name Must be present')
            .textLike('Description Must be present')
            .textLike('Type Must be present');
    });
    
    xit('Date field should default to the current date', function(done) {
        
        // TODO
        
        Page.dateField()
            .expect('value').toEqual(new Date());
    });
    
    xit('Other form fields should be blank for new Asset records', function(done) {
        
        // TODO
        
        Page.nameField()
            .value('');
            
        Page.descriptionField()
            .value('');
            
        Page.typeField()
            .value('');
    });
});

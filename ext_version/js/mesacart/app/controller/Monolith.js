Ext.define('MC.controller.Monolith', {
    extend: 'Ext.app.Controller',

	views: [
		'TopBar', 'SideBar', 'Main', 'AdminLogin', 'AdminMenu', 'CustomersView', 'FramesView', 'PaintingsView', 'PaintingsGrid',
			'FramesGrid', 'Admin.AddProduct', 'Admin.MasterGrid'
	],
	
    init: function() {
		this.control({
			
			'[itemId=loginBtn]':{
				click: this.onLoginTry
			},
			'[xtype=CustomersView]':{
				render: this.loadCustomers
			},
			'[xtype=PaintingsGrid]':{
				beforerender: this.loadPaintings
			},
			'[xtype=FramesGrid]':{
				beforerender: this.loadFrames
			},
			'[itemId=AddProductBtn]':{
				click: this.addProduct
			},
			'[itemId=PaintingsPage]':{
				beforeactivate: this.loadPaintings
			},
			'[itemId=FramesPage]':{
				beforeactivate: this.loadFrames
			}
				
			
		});
        console.log('Initialized Monolith controller! This happens before the Application launch function is called');
    },
	
	addProduct: function(button, event){
		var window = Ext.create('MC.view.Admin.AddProduct');
		window.show();
	},
	loadPaintings: function(controller, eOpts){
		var theStore = Ext.getStore('Paintings');
		theStore.load();
	},
	loadFrames: function(controller, eOpts){
		var theStore = Ext.getStore('Frames');
		theStore.load();
	},
	
	loadCustomers: function(controller, eOpts){
		console.log(this);
		var theStore = Ext.getStore('Customers');
		theStore.load();
	},
	
	onLoginTry: function(button, event){
		var pwdField = button.up('panel').down('field');
		var password = pwdField.rawValue;
		if(password == 'pass1234'){
			this.openPortal(button, event);
		}		
	},

	openPortal: function(button, event){
		var tabs = this.main = button.up('panel').up('panel').up('panel');
		tabs.child('#AdminPortal').tab.show();
		tabs.setActiveTab('AdminPortal');
		tabs.child('#AdminLogin').tab.hide();
	}
	
});
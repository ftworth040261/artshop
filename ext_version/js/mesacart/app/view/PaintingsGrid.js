Ext.define('MC.view.PaintingsGrid',{
	extend:'Ext.grid.Panel',
	alias:'widget.PaintingsGrid',
	selModel: Ext.create('Ext.selection.CheckboxModel'),
	store:'Paintings',
	autoScroll:true,
	columns: {
			items:[
				{text:'Name', dataIndex:'name', flex:13},
				{text:'Desc', dataIndex: 'description', flex:18,
						renderer: function(val){
							return '<p>' + val + '</p>'
						}
				},
				{text:'Sample', flex:45, 
					renderer: function(val){
						return '<img src ="' + val + '">';
					},
					dataIndex: 'picture'
				},
				{text:'Price', dataIndex: 'price', flex:11}
			],
			defaults: {
				flex: 1
			}
	},
	bbar: [
		{ xtype: 'button', text: 'Add Selected to cart', 
			handler: function(){
				theGrid = this.up('grid');
				console.log('grid');
				console.log(theGrid);
				theSelModel = theGrid.getSelectionModel();
				console.log('selModel');
				console.log(theSelModel);
				items = theSelModel.getSelection();
				console.log('items');
				console.log(items);
			}
		}
	]

	

});
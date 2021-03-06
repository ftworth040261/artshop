Ext.define('MC.view.CartWindow', {
	extend:'Ext.window.Window',
	title:'View/Edit Shopping Cart',
	modal:true,
	height:350,
	width:700,
	layout:'fit',
	items:[
		{xtype:'grid',
			selModel: Ext.create('Ext.selection.CheckboxModel'),
			features: [{
				//to have a sum row at the bottom
				ftype: 'summary'
			}],
			store:'Cart',
			autoScroll:true,
			columns: {
				items:[
					{text:'Name', dataIndex:'name', flex:13,
						summaryType: 'count',
							summaryRenderer: function(value, summaryData, dataIndex) {
								return ' '; 
							}
					},
					{text:'Desc', dataIndex: 'description', flex:18,
							renderer: function(val){
								return '<p>' + val + '</p>'
							},
							summaryType: 'count',
							summaryRenderer: function(value, summaryData, dataIndex) {
								return ' '; 
							}
					},
					{text:'Type', flex:15, dataIndex: 'type',
							summaryType: 'count',
							summaryRenderer: function(value, summaryData, dataIndex) {
								return ' '; 
							}
					},
					{text:'Price', dataIndex: 'price', flex:11,
							summaryType: 'count',
							summaryRenderer: function(value, summaryData, dataIndex) {
								return ' '; 
							}
					},
					{text:'Quantity', dataIndex:'qty', flex:6,
						summaryType: 'count',
							summaryRenderer: function(value, summaryData, dataIndex) {
								return ' '; 
							}
					},
					{text:'Total', flex:14, renderer: function(value, metaData, record){
								console.log(record);
								return (record.get('qty'))*(record.get('price'));
							},
						summaryType:'sum',
					
						summaryRenderer: function(value, summaryData, dataIndex){
							return value;
						}
						
					}
				],
				defaults: { flex: 1 }
			},
			bbar: [
				{	xtype: 'button',
					text: 'Remove All', 
					handler: function(){
						theGrid = this.up('grid');
						theSelModel = theGrid.getSelectionModel();
						theSelModel.selectAll();
						var items = theSelModel.getSelection();
						Ext.getStore('Cart').remove(items);
						var confirmBox = Ext.create('Ext.window.MessageBox');
						confirmBox.alert('Added Items', 'Items were removed from cart');
						theSelModel.deselectAll();
					}
				}
			]	
		}
	]

});

Ext.define('MyTestApp.view.main.mygrid.MyGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mytestgrid',
    requires: [
        'MyTestApp.store.PersonnelStore'
    ],
    //title: 'Personnel',
    store: {
        type: 'PersonnelStore'
    },
    columns: [
        { text: 'Student Name',  dataIndex: 'name', editor: 'textfield' },
        { text: 'ID', dataIndex: 'id', flex: 1, editor : {xtype: 'textfield', allowBlank: false}},
        { text: 'Stream', dataIndex: 'stream', flex: 1 , editor : null}
    ],
    selType: 'rowmodel',
header:{
    items:[{
	         xtype: 'button', 
			text: '+',
			 listeners : {
				afterrender : function( ob , e ){
					console.log(ob);
					console.log(e);
					ob.getEl().down('.x-btn-inner').setStyle({'font-size':'large'});

				},
				click : function(button) {
								console.log('Add button clicked');
								console.log(button);
								console.log(button.up('panel'));
								  button.up('panel').store.insert(0, {name:'XYZ'});

									}
					  } 

		}],
layout: {
    type: 'column'
}

},
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1,
			listeners:{
				edit : function(editor,e){
					console.log(editor);
					console.log(e);
					console.log(e.newValues.name);
					console.log(e.newValues.id);
					console.log(e.newValues.stream);


				}
			}
        })],
/*
dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    ui: 'header',
    defaults: {minWidth: 100},
    items: [
        { xtype: 'button', 
		  text: 'Add', 
		  alwaysOnTop: true,
          listeners : {click : function(button) {
								console.log('Add button clicked');
								console.log(button);
								console.log(button.up('panel'));
								  button.up('panel').store.insert(0, {name:'XYZ'});

								}
					  } 
		}
    ]
}],*/
	height : 400,

});

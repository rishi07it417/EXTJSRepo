Ext.define('MyTestApp.view.main.mypanel.MyPanel', {
    extend: 'Ext.panel.Panel',
	xtype:'mytestpanel',
    requires: [
		'MyTestApp.view.main.mypanel.MyPanelVC'
	],
	controller: 'MyPanelVC',
	title:'Add Panel',
    layout: 'hbox',
    height: 150,
	listeners: {
				afterrender: 'afterrenderPanellayout'
		},
    items: [
		{
			xtype: 'textfield',
			fieldLabel: 'Student Name',
			itemId:'txtName',
		},		{
			xtype: 'textfield',
			fieldLabel: 'ID',
			itemId:'txtId',
		},
		{
			xtype: 'textfield',
			fieldLabel: 'Stream',
			itemId:'txtStream',
		},		{
			xtype: 'button',
			text: 'ADD',
		    listeners: {
				afterrender: 'afterrenderlayout',
            	click: 'onClick'  // no scope given here
        	}
		},	{
			xtype: 'button',
			iconCls: 'icon-pdf'
		}
	],
	dockedItems: [{
    	xtype: 'toolbar',
    	dock: 'bottom',
    	items: [ '->',{ xtype: 'button', text: 'Panel Button',width:100 }
    	]}
	]

});

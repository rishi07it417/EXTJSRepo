Ext.define('MyTestApp.view.main.Main',{
	extend:'Ext.container.Viewport',
	xtype:'main',
    requires: [
        'MyTestApp.view.main.mypanel.MyPanel',
        'MyTestApp.view.main.mygrid.MyGrid'
    ],
	items: [
		{
			xtype : 'mytestpanel',
			itemId: 'mytestpanel'
		},	{
			xtype : 'mytestgrid',
			itemId:'mytestgrid'
		}
	]
       
	
});
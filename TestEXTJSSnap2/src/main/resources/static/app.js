Ext.application({
    name: 'MyTestApp',
    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    requires: [
        'MyTestApp.view.main.Main'
    ],

   mainView: 'MyTestApp.view.main.Main'
  /*  launch: function () {
        Ext.create('Ext.panel.Panel', {
            title: 'Sencha App',
            width: 300,
            height: 300,
            bodyPadding:10,
            renderTo: 'MyTestApp',
            html:'Hello World'
        });
    }*/


});
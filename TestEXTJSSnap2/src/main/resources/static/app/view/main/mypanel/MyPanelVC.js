Ext.define('MyTestApp.view.main.mypanel.MyPanelVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.MyPanelVC',
   afterrenderPanellayout:function(obj,e){
	   console.log(obj),
	   console.log(e);
    
	},	
    afterrenderlayout : function(obj,e){
						obj.getEl().down('.x-btn-inner').setStyle({'background-color':'green','border':'none','color':'white'});

	},	
    onClick: function (field) {
		var name = field.up('panel').down('#txtName').lastValue;
		var id = field.up('panel').down('#txtId').lastValue;
		var stream = field.up('panel').down('#txtStream').lastValue;
		console.log(name);
		console.log('id::::'+id);
		console.log('stream::::'+stream);

		var jsn={};
		jsn.name = name;
		jsn.id = id;
		jsn.stream = stream;
		field.up('panel').up('container').down('#mytestgrid').store.add(jsn);
		var grd = field.up('panel').up('container').down('#mytestgrid');
	    var rec = grd.store.getRange(0,0);

				console.log(rec[0].data.name);
				console.log(rec[0].data.id);
				console.log(rec[0].data.stream);



    }
});

  Ext.define('MyTestApp.store.PersonnelStore', {
     extend: 'Ext.data.Store',
     id:'PersonnelStore',
     alias : 'store.PersonnelStore',
     model: 'MyTestApp.model.PersonnelModel',
     autoLoad: true,
    /* data : {
		storeData:[
         {name: 'Peter',   id: '07IT417', stream:'Information Technology'},
         {name: 'Xerses',   id: '01EC111', stream:'Electrical and Comm.'},
         {name: 'Lernado',   id: '04ME444', stream:'Mechanical Engg.'}
     	]
	},
	proxy:{
		type:'memory',
		reader:{
			type:'json',
			rootProperty:'storeData'
			
		}
	}*/
	    proxy: {
        type: 'rest',
        url : '/textext/student/getRecords',
        reader: {
                type: 'json'
            }

    }

 });

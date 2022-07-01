 Ext.define('MyTestApp.model.PersonnelModel', {
     extend: 'Ext.data.Model',
	 id:'PersonnelModel',
     fields: [
         {name: 'name', type: 'string'},
         {name: 'id',  type: 'string'},
         {name: 'stream',       type: 'string'}
     ]
 });

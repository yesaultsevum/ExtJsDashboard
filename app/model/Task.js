Ext.define('ExtJsDashboard.model.Task', {
    extend: 'Ext.data.Model',
	identifier: {
		type: 'sequential',
		id: 'id'
	},

	idProperty: 'id',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        {
        	name: 'startDate',
	        type: 'date',
	        dateFormat: 'm/d/Y',
        },
        { name: 'endDate', type: 'date' },
        { name: 'status', type: 'string', defaultValue: 'Stopped' }
    ]
});

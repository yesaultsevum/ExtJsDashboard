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
        { name: 'startDate', type: 'date' },
        { name: 'endDate', type: 'date' },
        { name: 'status', type: 'string', defaultValue: 'Stopped' }
    ],

	validators: {
		name: {type: 'length', min: 1, max: 255, message: "Name is required" },
		startDate: { type: 'presence', message: "StartDate is required" },
		endDate: { type: 'presence', message: "EndDate is required" },
	}
});

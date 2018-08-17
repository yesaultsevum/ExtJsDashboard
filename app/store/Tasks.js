Ext.define('ExtJsDashboard.store.Tasks', {
	extend: 'Ext.data.Store',

	alias: 'store.tasks',

	model: 'ExtJsDashboard.model.Task',

	data: {
		items: [
			{
				id: 1,
				name: 'Task 1',
				startDate: new Date(),
				endDate: new Date(),
				status: 'Stopped'
			},
			{
				id: 2,
				name: 'Task 2',
				startDate: new Date(),
				endDate: new Date(),
				status: 'Runned'
			},
			{
				id: 3,
				name: 'Task 3',
				startDate: new Date(),
				endDate: new Date(),
				status: 'Stopped'
			}
		]},

	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});
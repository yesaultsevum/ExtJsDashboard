Ext.define('ExtJsDashboard.store.Tasks', {
	extend: 'Ext.data.Store',
	alias: 'store.tasks',
	model: 'ExtJsDashboard.model.Task',

	autoLoad: true,

	data: {
		items: [
			{
				name: 'Task 1',
				startDate: new Date(),
				endDate: new Date(),
				status: 'Stopped'
			},
			{
				name: 'Task 2',
				startDate: new Date(),
				endDate: new Date(),
				status: 'Running'
			},
			{
				name: 'Task 3',
				startDate: new Date(),
				endDate: new Date(),
				status: 'Stopped'
			}
		]
	},
	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});
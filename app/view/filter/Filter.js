Ext.define('ExtJsDashboard.view.filter.Filter', {
	extend: 'Ext.panel.Panel',
	xtype: 'ExtJsDashboard-filter',

	controller: 'ExtJsDashboard-filter',

	style: {
		border: '1px solid #e9e9e9'
	},

	items: [
		{
			xtype: 'textfield',
			fieldLabel: 'Name',

			style: {
				'margin-bottom': 0
			},

			//bind: {
			//   value: '{filterValue}'
			//},

			width: 400,
			labelWidth: 50,
			emptyText: 'Enter task name...',

			listeners: {
				change: 'onFilterChange'
			}
		}
	]
});

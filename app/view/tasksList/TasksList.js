
Ext.define('ExtJsDashboard.view.tasksList.TasksList',{
	extend: 'Ext.grid.Panel',
	xtype: 'ExtJsDashboard-taskslist',

	store: {
		type: 'tasks'
	},
    controller: 'ExtJsDashboard-taskslist',
	bind: {
		selection: '{gridSelection}'
	},
	reference: 'tasksListGrid',

	selModel: {
		selType: 'checkboxmodel'
	},
	style: {
		border: '1px solid #e9e9e9',
		marginRight: '10px'
	},

	columns: [
		{
			text: 'Id',
			dataIndex: 'id'
		},
		{
			text: 'Name',
			dataIndex: 'name',
			flex: 1
		},
		{
			xtype: 'datecolumn',
			text: 'Start date',
			dataIndex: 'startDate',
			format: 'd-m-Y H:m:s',
			flex: 1
		},
		{
			xtype: 'datecolumn',
			text: 'End date',
			dataIndex: 'endDate',
			format: 'd-m-Y H:m:s',
			flex: 1
		},
		{
			text: 'Status',
			dataIndex: 'status',
			flex: 1
		}
	],

	listeners: {
		selectionchange: 'onSelectionChange'
	}
});

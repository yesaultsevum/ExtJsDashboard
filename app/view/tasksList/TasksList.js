
Ext.define('ExtJsDashboard.view.tasksList.TasksList',{
	extend: 'Ext.grid.Panel',
	xtype: 'ExtJsDashboard-taskslist',

	store: {
		type: 'tasks'
	},
    controller: 'ExtJsDashboard-taskslist',
	bind: {
		selection: '{selectedRecord}'
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
		{ text: 'Id',  dataIndex: 'id' },
		{ text: 'Name', dataIndex: 'name', flex: 1 },
		{
			text: 'Start date',
			dataIndex: 'startDate',
			formatter: 'date("d-m-Y h:m:s")',
			xtype: 'datecolumn',
			flex: 1
		},
		{
			text: 'End date',
			dataIndex: 'endDate',
			formatter: 'date("d-m-Y h:m:s")',
			xtype: 'datecolumn',
			flex: 1
		},
		{ text: 'Status', dataIndex: 'status', flex: 1 }
	],

	listeners: {
		selectionchange: 'onSelectionChange'
	}
});

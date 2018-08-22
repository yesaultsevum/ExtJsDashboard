Ext.define('ExtJsDashboard.view.main.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-main',

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	controller: 'main',
	viewModel: {
		type: "main"
	},
	store: {
		type: 'tasks'
	},

	ui: 'navigation',

	defaults: {
		bodyPadding: 10
	},

	items: [
		{
			xtype: 'ExtJsDashboard-toolbar'
		},
		{
			xtype: 'ExtJsDashboard-filter'
		},
		{
			xtype: 'panel',
			flex: 1,
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [
				{
					xtype: 'ExtJsDashboard-taskslist',
					flex: 2
				},
				{
					xtype: 'tabpanel',
					defaults: {
						bodyPadding: 10
					},
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					style: {
						border: '1px solid #e9e9e9'
					},
					flex: 1,
					items: [
						{
							title: 'Details',
							items: [
								{
									xtype: 'ExtJsDashboard-form'
								}
							]
						}
					]
				}
			]
		},
		{
			xtype: 'ExtJsDashboard-bottombar'
		},
	]
});

/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJsDashboard.view.main.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-main',

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox',

		'ExtJsDashboard.view.main.MainController',
		'ExtJsDashboard.view.main.MainModel',

		'ExtJsDashboard.view.toolbar.ToolBar',
		'ExtJsDashboard.view.form.Form'
	],

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

	bodyPadding: '20px',

	items: [
		{
			xtype: 'ExtJsDashboard-toolbar'
		},
		{
			xtype: 'ExtJsDashboard-filter'
		},
		{
			xtype: 'panel',
			flex:1,
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			style: {
				marginTop: '10px'
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

/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJsDashboard.view.main.Main', {
	extend: 'Ext.Panel',
	xtype: 'app-main',

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox',

		'ExtJsDashboard.view.main.MainController',
		'ExtJsDashboard.view.main.MainModel',
		'ExtJsDashboard.view.main.TasksList'
	],

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	controller: 'main',
	viewModel: 'main',

	ui: 'navigation',

	responsiveConfig: {
		tall: {
			headerPosition: 'top'
		},
		wide: {
			headerPosition: 'left'
		}
	},

	defaults: {
		bodyPadding: 20,
		tabConfig: {
			plugins: 'responsive',
			responsiveConfig: {
				wide: {
					iconAlign: 'left',
					textAlign: 'left'
				},
				tall: {
					iconAlign: 'top',
					textAlign: 'center',
					width: 120
				}
			}
		}
	},

	items: [{
		items: [{
			xtype: 'taskslist'
		}]
	}]
});

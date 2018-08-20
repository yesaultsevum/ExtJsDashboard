
Ext.define('ExtJsDashboard.view.bottomBar.BottomBar',{
    extend: 'Ext.panel.Panel',
	xtype: 'ExtJsDashboard-bottombar',

    requires: [
        'ExtJsDashboard.view.bottomBar.BottomBarController',
        'ExtJsDashboard.view.bottomBar.BottomBarModel'
    ],

    controller: 'ExtJsDashboard-bottombar',
    //viewModel: {
    //    type: 'bottombar-bottombar'
    //},

	bodyPadding: '10 0 0 0',

	layout : {
		type : 'hbox',
		pack : 'end'
	},

    items: [
        {
            xtype: 'button',
            text: 'Submit',
            bind: {
                disabled: '{selectedRecord}'
            },
            margin: '0 10 0 0',
            handler: 'submitGridChanges'
        },
        {
            xtype: 'button',
            text: 'Cancel',
            bind: {
                disabled: '{selectedRecord}'
            },
            handler: 'rejectGridChanges'
        }
    ]

});

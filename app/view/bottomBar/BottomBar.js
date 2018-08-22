
Ext.define('ExtJsDashboard.view.bottomBar.BottomBar',{
    extend: 'Ext.panel.Panel',
	xtype: 'ExtJsDashboard-bottombar',

    controller: 'ExtJsDashboard-bottombar',

	layout : {
		type : 'hbox',
		pack : 'end'
	},

    items: [
        {
            xtype: 'button',
            text: 'Submit',
            bind: {
                disabled: '{gridSelection}'
            },
            margin: '0 10 0 0',
            handler: 'submitGridChanges'
        },
        {
            xtype: 'button',
            text: 'Cancel',
            bind: {
                disabled: '{gridSelection}'
            },
            handler: 'rejectGridChanges'
        }
    ]

});

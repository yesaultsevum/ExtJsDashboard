
Ext.define('ExtJsDashboard.view.toolbar.ToolBar',{
    extend: 'Ext.panel.Panel',
	xtype: 'ExtJsDashboard-toolbar',

    requires: [
        'ExtJsDashboard.view.toolbar.ToolBarController',
        'ExtJsDashboard.view.toolbar.ToolBarModel'
    ],

    controller: 'ExtJsDashboard-toolbar',

    items: [
	    {
		    xtype: 'toolbar',
		    padding: '0 0 10px 0',
		    items: [
			    {
				    xtype: 'button',
				    iconCls: 'add-icon',
				    text: 'Add',
				    glyph: 'f055@FontAwesome',
				    handler: 'addRecord'
			    },
			    {
				    xtype: 'button',
				    iconCls: 'remove-icon',
				    text: 'Remove',
				    glyph: 'f057@FontAwesome',
				    bind: {
					    disabled: '{!selectedRecord}'
				    },
				    handler: 'removeRecords'
			    },
			    {
			    	xtype: 'tbseparator',
				    height: '100%'
			    },
			    {
				    xtype: 'button',
				    iconCls: 'run-icon',
				    text: 'Run',
				    glyph: 'f04b@FontAwesome',
				    bind: {
					    disabled: '{isRunDisabled}'
				    },
				    handler: 'runTasks'
			    },
			    {
				    xtype: 'button',
				    iconCls: 'stop-icon',
				    text: 'Stop',
				    glyph: 'f04d@FontAwesome',
				    bind: {
					    disabled: '{isStopDisabled}'
				    },
				    handler: 'stopTasks'
			    }
		    ]
	    }
    ]
});

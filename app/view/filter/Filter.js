
Ext.define('ExtJsDashboard.view.filter.Filter',{
    extend: 'Ext.form.Panel',
	xtype: 'ExtJsDashboard-filter',

    requires: [
        'ExtJsDashboard.view.filter.FilterController',
        'ExtJsDashboard.view.filter.FilterModel',
	    'ExtJsDashboard.store.Tasks'
    ],

	store: {
		type: 'tasks'
	},

    controller: 'ExtJsDashboard-filter',
    viewModel: {
        type: 'ExtJsDashboard-filter'
    },

	style: {
		border: '1px solid #e9e9e9'
	},

    items: [
	    {
	    	xtype: 'toolbar',
		    items: [
			    {
				    width: 400,
				    fieldLabel: 'Name',
				    labelWidth: 50,
				    xtype: 'textfield',
				    emptyText:'Enter task name...',
				    store: 'tasks',
				    listeners: {
					    change: {
						    //fn: onTextFieldChange
					    }
				    }
			    }
		    ]
	    }

    ]
});

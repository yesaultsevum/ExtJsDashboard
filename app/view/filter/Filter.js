
Ext.define('ExtJsDashboard.view.filter.Filter',{
    extend: 'Ext.panel.Panel',
	xtype: 'ExtJsDashboard-filter',

    requires: [
        'ExtJsDashboard.view.filter.FilterController',
        'ExtJsDashboard.view.filter.FilterModel',
	    'ExtJsDashboard.store.Tasks'
    ],

    controller: 'ExtJsDashboard-filter',

	style: {
		border: '1px solid #e9e9e9'
	},

    items: [
	    {
	    	xtype: 'toolbar',
		    items: [
			    {
				    xtype: 'textfield',
				    fieldLabel: 'Name',
				    store: 'tasks',

				    reference: 'tasksListFilter',

				    bind: {
					    value: '{filterValue}'
				    },

				    width: 400,
				    labelWidth: 50,
				    emptyText:'Enter task name...',

				    listeners: {
					    change:  'onFilterChange'
				    }
			    }
		    ]
	    }

    ]
});

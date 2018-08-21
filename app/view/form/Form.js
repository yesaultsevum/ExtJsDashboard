
Ext.define('ExtJsDashboard.view.form.Form',{
	extend: 'Ext.form.Panel',
	xtype: 'ExtJsDashboard-form',

    requires: [
        'ExtJsDashboard.view.form.FormController',
        'ExtJsDashboard.view.form.FormModel'
    ],

    controller: 'ExtJsDashboard-form',

    items: [
	    {
	        xtype: 'form',
		    bind: {
			    disabled: '{!selectedRecord}'
		    },
		    items: [
			    {
				    xtype: 'fieldset',
				    title: 'General options',

				    modelValidation: true,

				    layout: 'anchor',
				    defaults: {
					    anchor: '100%'
				    },
				    defaultType: 'textfield',

				    items: [
					    {
						    fieldLabel: 'Id',
						    name: 'id',
						    bind: '{selectedRecord.id}',
						    readOnly: true,
					    },
					    {
						    fieldLabel: 'Name',
						    name: 'name',
						    bind: '{selectedRecord.name}'
					    },
					    {
						    xtype: 'datefield',
						    fieldLabel: 'StartDate',
						    name: 'startDate',
						    format: 'd/m/Y H:m:s',
						    bind: '{selectedRecord.startDate}'
					    },
					    {
						    xtype: 'datefield',
						    fieldLabel: 'EndDate',
						    name: 'endDate',
						    format: 'd/m/Y H:m:s',
						    bind: {
						    	value: '{selectedRecord.endDate}',
							    minValue: '{selectedRecord.startDate}'
						    }
					    }
				    ]
			    }
		    ]
	    }
    ]
});

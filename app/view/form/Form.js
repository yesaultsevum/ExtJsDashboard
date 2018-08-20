
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
			    disabled: '{isFormDisabled}'
		    },
		    items: [
			    {
				    xtype: 'fieldset',
				    title: 'General options',

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
						    fieldLabel: 'StartDate',
						    name: 'startDate',
						    xtype: 'datefield',
						    formatter: 'date("d-m-Y h:m:s")',
						    bind: '{selectedRecord.startDate}',
						    itemId: 'startdt',
						    vtype: 'daterange',
						    endDateField: 'enddt'
					    },
					    {
						    fieldLabel: 'EndDate',
						    name: 'endDate',
						    xtype: 'datefield',
						    formatter: 'date("d-m-Y h:m:s")',
						    bind: '{selectedRecord.endDate}',
						    itemId: 'enddt',
						    vtype: 'daterange',
						    startDateField: 'startdt'
					    }
				    ]
			    }
		    ]
	    }
    ]
});

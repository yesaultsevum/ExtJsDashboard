/**
 * This view is an example list of people.
 */
Ext.define('ExtJsDashboard.view.main.TasksList', {
    extend: 'Ext.grid.Panel',
    xtype: 'taskslist',

    requires: [
        'ExtJsDashboard.store.Tasks'
    ],

    title: 'Tasks',

    store: {
        type: 'tasks'
    },

	  selType: 'checkboxmodel',

    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Start date', dataIndex: 'startDate', formatter: 'date("m/d/Y")', flex: 1 },
        { text: 'End date', dataIndex: 'endDate', formatter: 'date("m/d/Y")', flex: 1 },
        { text: 'Status', dataIndex: 'status', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

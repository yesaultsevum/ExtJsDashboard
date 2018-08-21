Ext.define('ExtJsDashboard.view.toolbar.ToolBarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ExtJsDashboard-toolbar',

	setTasksStatus: function(status) {
		const grid = Ext.ComponentQuery.query('ExtJsDashboard-taskslist')[0];
		const selectedRecords = grid.getSelection();

		selectedRecords.forEach((item) => {
			item.set('status', status)
		});
		grid.store.fireEvent('tasksStatusWereChanged');
	},

	addRecord: function() {
    	const newTask = Ext.create('ExtJsDashboard.model.Task');
    	const tasksStore = Ext.getStore('tasksStore');

		tasksStore.add(newTask);
    },

    removeRecords: function() {
	    const grid = Ext.ComponentQuery.query('ExtJsDashboard-taskslist')[0];
	    const selectedRecords = grid.getSelection();

	    grid.store.remove(selectedRecords);
    },

	runTasks: function() {
		this.setTasksStatus('Running');
	},

	stopTasks: function() {
		this.setTasksStatus('Stopped');
	},

});

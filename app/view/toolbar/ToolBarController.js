Ext.define('ExtJsDashboard.view.toolbar.ToolBarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ExtJsDashboard-toolbar',

	setTasksStatus: function(status) {
		const grid = Ext.ComponentQuery.query('ExtJsDashboard-taskslist')[0];
		const selectedRecords = grid.getSelection();

		selectedRecords.forEach((item) => {
			item.data.status = status;
		});
		grid.getView().refresh();
	},

	addRecord: function() {
    	const newTask = Ext.create('ExtJsDashboard.model.Task');
    	const grid = Ext.ComponentQuery.query('ExtJsDashboard-taskslist')[0];

    	grid.store.add(newTask);
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

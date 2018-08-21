
Ext.define('ExtJsDashboard.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

	init: function () {
		Ext.getStore('tasksStore').on('tasksStatusWereChanged', 'changeRunStopButtonsStatus', this);
	},

    changeRunStopButtonsStatus: function() {
	    const grid = Ext.ComponentQuery.query('ExtJsDashboard-taskslist')[0];
	    const selectedRecords = grid.getSelection();
	    const viewModel = this.getViewModel();
	    const hasStopped = selectedRecords.some(item => item.data.status === 'Stopped');
	    const hasRunning = selectedRecords.some(item => item.data.status === 'Running');

	    viewModel.set({
		    isRunDisabled: !hasStopped,
		    isStopDisabled: !hasRunning
	    });
    }
});

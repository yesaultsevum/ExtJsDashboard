Ext.define('ExtJsDashboard.view.tasksList.TasksListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ExtJsDashboard-taskslist',

	onSelectionChange: function (sender, selected) {
		const selectedRecordsCount = selected.length;
		const areStopped = selected.some(item => item.data.status === 'Stopped');
		const areRunning = selected.some(item => item.data.status === 'Running');
		const viewModel = this.getViewModel();

		viewModel.set({
			isFormDisabled: selectedRecordsCount !== 1,
			isRunDisabled: !areStopped,
			isStopDisabled: !areRunning
		});

	}

});

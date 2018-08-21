Ext.define('ExtJsDashboard.view.tasksList.TasksListController', {
    //extend: 'Ext.app.ViewController',
    extend: 'ExtJsDashboard.view.main.MainController',
    alias: 'controller.ExtJsDashboard-taskslist',

	onSelectionChange: function (sender, selected) {
		const selectedRecordsCount = selected.length;
		const viewModel = this.getViewModel();

		this.changeRunStopButtonsStatus();

		viewModel.set({
			selectedRecord: selectedRecordsCount === 1 ? selected[0] : null
		});
	}

});

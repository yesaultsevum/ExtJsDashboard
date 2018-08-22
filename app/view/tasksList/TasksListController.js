Ext.define('ExtJsDashboard.view.tasksList.TasksListController', {
	extend: 'ExtJsDashboard.view.main.MainController',
	alias: 'controller.ExtJsDashboard-taskslist',

	onSelectionChange: function(sender, selected) {
		const selectedRecordsCount = selected.length;
		const viewModel = this.getViewModel();
		const form = Ext.ComponentQuery.query('ExtJsDashboard-form')[0];

		if (!form.isValid()) {
			this.showToast('Form data is not valid! The last changes were not recorder')
		}

		this.changeRunStopButtonsStatus(selected);

		viewModel.set('selectedRecord', selectedRecordsCount === 1 ? selected[0] : null);
	}

});

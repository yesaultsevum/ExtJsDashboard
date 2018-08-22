
Ext.define('ExtJsDashboard.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    changeRunStopButtonsStatus: function(selectedRecords) {
	    const viewModel = this.getViewModel();
	    const hasStopped = selectedRecords.some(item => item.data.status === 'Stopped');
	    const hasRunning = selectedRecords.some(item => item.data.status === 'Running');

	    viewModel.set({
		    isRunDisabled: !hasStopped,
		    isStopDisabled: !hasRunning
	    });
    },

	showToast: function(message) {
		Ext.toast({
			html: message,
			closable: false,
			align: 't',
			slideDuration: 400,
			maxWidth: 400
		});
	},
});

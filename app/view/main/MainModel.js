/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ExtJsDashboard.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
    	selectedRecord: null,
	    isFormDisabled: true,
	    isRunDisabled: true,
	    isStopDisabled: true
    }

});

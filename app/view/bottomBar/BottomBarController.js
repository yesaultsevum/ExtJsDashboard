Ext.define('ExtJsDashboard.view.bottomBar.BottomBarController', {
	extend: 'ExtJsDashboard.view.main.MainController',
    alias: 'controller.ExtJsDashboard-bottombar',

    showConfirm: function(confirmMessage, method) {
	    Ext.MessageBox.confirm('Confirm', confirmMessage, this.commitOrRejectStoreChanges.bind(this, method), this);
    },

    commitOrRejectStoreChanges: function(method, choice) {
    	if (choice === 'no') return;

	    const tasksStore = Ext.getStore('tasksStore');

	    /***
	     * By default new added records is no valid
	     * Manual check for added records, because method getModifiedRecords work only with valid records.
	     */
	    const invalidNewRecords = tasksStore.data.filterBy((item) => {
		    return item.phantom === true && !item.isValid()
	    });

	    const hasModified = tasksStore.getModifiedRecords().length > 0 || tasksStore.getRemovedRecords().length > 0 || invalidNewRecords.length > 0;

	    if (hasModified) {
		    tasksStore[method]();

		    if (invalidNewRecords.length > 0 && method === 'commitChanges') {
			    this.showToast('Attention, there are invalid records! Changes will be applied only to valid records');
		    } else {
			    this.showToast('The action was successfully committed')
		    }
	    } else {
		    this.showToast('There is no changed data in the grid')
	    }
    },

	submitGridChanges: function() {
		this.showConfirm('Are you sure you want to save changes?', 'commitChanges');
	},

	rejectGridChanges: function() {
		this.showConfirm('Are you sure you want to reject changes?', 'rejectChanges');
	}

});

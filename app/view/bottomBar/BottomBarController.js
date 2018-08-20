Ext.define('ExtJsDashboard.view.bottomBar.BottomBarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ExtJsDashboard-bottombar',

	showToast: function(message) {
		Ext.toast({
			html: message,
			closable: false,
			align: 't',
			slideDUration: 400,
			maxWidth: 400
		});
	},

    showConfirm: function(confirmMessage, operation) {
	    Ext.MessageBox.confirm('Confirm', confirmMessage, this.commitOrRejectStoreChanges.bind(this, operation), this);
    },

    commitOrRejectStoreChanges: function(operation) {
	    const grid = Ext.ComponentQuery.query('ExtJsDashboard-taskslist')[0];
	    const hasModified = grid.store.getModifiedRecords().length !== 0;

	    if (hasModified) {
		    grid.store[operation]();
		    this.showToast('The action was successfully committed')
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

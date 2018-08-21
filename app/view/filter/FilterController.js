Ext.define('ExtJsDashboard.view.filter.FilterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ExtJsDashboard-filter',

	onFilterChange: function(field) {
		const filterValue = field.getValue();
		const tasksStore = Ext.getStore('tasksStore');

		tasksStore.filter({
			property: 'name',
			value: filterValue
		});
	}

});

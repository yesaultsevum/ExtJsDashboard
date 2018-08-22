Ext.define('ExtJsDashboard.view.filter.FilterController', {
	extend: 'ExtJsDashboard.view.main.MainController',
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

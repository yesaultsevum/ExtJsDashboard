/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtJsDashboard.Application',

    name: 'ExtJsDashboard',

    requires: [
        // This will automatically load all classes in the ExtJsDashboard namespace
        // so that application classes do not need to require each other.
        'ExtJsDashboard.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtJsDashboard.view.main.Main'
});

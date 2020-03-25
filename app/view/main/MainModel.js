/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ARM.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        currentView: null,
        version: Ext.manifest.version,
        username: '',
        aboutHeight: 60,
        mainToolbarHeight: 64,
        logoWidth: 300,
        projectTitle: ''
    }
});
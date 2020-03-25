/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ARM.Application',

    name: 'ARM',

    requires: [
        'Ext.*',
        'IServ.*',
        'ARM.*'
        //'IServ.Socket' // чтобы можно было подключить сокеты
    ]
});

Ext.getApplication = function () {
    return ARM.app;
}
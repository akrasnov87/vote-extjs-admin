/**
 * Навигационное меню 
 */
Ext.define('ARM.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '~/menu/NAVIGATION',
        //url: 'resources/menu.json',
        reader: {
            type: 'json'
        }
    }
});
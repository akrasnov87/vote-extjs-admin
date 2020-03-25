/**
 * пользовательское меню 
 */
Ext.define('ARM.store.UserMenu', {
    extend: 'Ext.data.Store',

    storeId: 'usermenu',
    alias: 'store.usermenu',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        // указывается путь к файлу
        url: '~/menu/USER',
        reader: {
            type: 'json'
        }
    }
});
/**
 * Действия для представлений
 */
Ext.define('ARM.store.ViewActions', {
    extend: 'Ext.data.Store',
    alias: 'store.view-actions',
    storeId: 'view-actions',

    proxy: {
        type: 'ajax',
        url: '~/viewactions',
        reader: {
            type: 'json'
        }
    }
});
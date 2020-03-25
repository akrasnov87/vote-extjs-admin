/**
 * Открытый список пользователей 
 * @class Core.store.pv_users
 */
Ext.define('Core.store.pv_users', { 
    extend: 'Ext.data.Store',
    alias: 'store.pv_users',
    autoLoad: false,
    storeId: 'pv_users',
    model: 'Core.model.pv_users',
    remoteSort: true,
    remoteGroup: true,
    remoteFilter: true,
    statefulFilters: false,
    proxy: {
        type: 'direct',
        api: {
            read: 'PN.pv_users.Query'
        },
        reader: {
            rootProperty: 'records',
            successProperty: 'success',
            totalProperty: 'total'
        },
        writer: {
            dateFormat: "Y-m-d H:i:sO"
        }
    }
});
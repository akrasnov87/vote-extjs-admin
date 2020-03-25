/**
 * Закрытый список пользователей 
 * @class Core.store.sv_users
 */
Ext.define('Core.store.sv_users', { 
    extend: 'Ext.data.Store',
    alias: 'store.sv_users',
    autoLoad: false,
    storeId: 'sv_users',
    model: 'Core.model.sv_users',
    remoteSort: true,
    remoteGroup: true,
    remoteFilter: true,
    statefulFilters: false,
    proxy: {
        type: 'direct',
        api: {
            read: 'PN.sv_users.Query'
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
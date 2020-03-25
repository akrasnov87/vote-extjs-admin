/**
 * Пользователи 
 * @class Core.store.pd_users
 */
Ext.define('Core.store.pd_users', { 
    extend: 'Ext.data.Store',
    alias: 'store.pd_users',
    autoLoad: false,
    storeId: 'pd_users',
    model: 'Core.model.pd_users',
    remoteSort: true,
    remoteGroup: true,
    remoteFilter: true,
    statefulFilters: false,
    sorters: [{
        default: true,
        property: 'id',
        direction: 'DESC'
    }],
    proxy: {
        type: 'direct',
        api: {
            create: 'PN.pd_users.Add',
            read: 'PN.pd_users.Query',
            update: 'PN.pd_users.Update',
            destroy: 'PN.pd_users.Delete'
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
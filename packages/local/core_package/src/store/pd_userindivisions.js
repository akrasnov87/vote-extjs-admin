/**
 * Привязка пользователей к отделению или участку 
 * @class Core.store.pd_userindivisions
 */
Ext.define('Core.store.pd_userindivisions', { 
    extend: 'Ext.data.Store',
    alias: 'store.pd_userindivisions',
    autoLoad: false,
    storeId: 'pd_userindivisions',
    model: 'Core.model.pd_userindivisions',
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
            create: 'PN.pd_userindivisions.Add',
            read: 'PN.pd_userindivisions.Query',
            update: 'PN.pd_userindivisions.Update',
            destroy: 'PN.pd_userindivisions.Delete'
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
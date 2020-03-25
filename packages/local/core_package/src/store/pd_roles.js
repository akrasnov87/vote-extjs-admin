/**
 * Роли 
 * @class Core.store.pd_roles
 */
Ext.define('Core.store.pd_roles', { 
    extend: 'Ext.data.Store',
    alias: 'store.pd_roles',
    autoLoad: false,
    storeId: 'pd_roles',
    model: 'Core.model.pd_roles',
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
            create: 'PN.pd_roles.Add',
            read: 'PN.pd_roles.Query',
            update: 'PN.pd_roles.Update',
            destroy: 'PN.pd_roles.Delete'
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
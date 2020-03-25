/**
 * Права доступа 
 * @class Core.store.pd_accesses
 */
Ext.define('Core.store.pd_accesses', { 
    extend: 'Ext.data.Store',
    alias: 'store.pd_accesses',
    autoLoad: false,
    storeId: 'pd_accesses',
    model: 'Core.model.pd_accesses',
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
            create: 'PN.pd_accesses.Add',
            read: 'PN.pd_accesses.Query',
            update: 'PN.pd_accesses.Update',
            destroy: 'PN.pd_accesses.Delete'
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
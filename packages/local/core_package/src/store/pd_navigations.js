/**
 * Навигация 
 * @class Core.store.pd_navigations
 */
Ext.define('Core.store.pd_navigations', { 
    extend: 'Ext.data.Store',
    alias: 'store.pd_navigations',
    autoLoad: false,
    storeId: 'pd_navigations',
    model: 'Core.model.pd_navigations',
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
            create: 'PN.pd_navigations.Add',
            read: 'PN.pd_navigations.Query',
            update: 'PN.pd_navigations.Update',
            destroy: 'PN.pd_navigations.Delete'
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
/**
 * История изменения статусов заданий 
 * @class Core.store.cd_route_history
 */
Ext.define('Core.store.cd_route_history', { 
    extend: 'Ext.data.Store',
    alias: 'store.cd_route_history',
    autoLoad: false,
    storeId: 'cd_route_history',
    model: 'Core.model.cd_route_history',
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
            create: 'PN.cd_route_history.Add',
            read: 'PN.cd_route_history.Query',
            update: 'PN.cd_route_history.Update',
            destroy: 'PN.cd_route_history.Delete'
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
/**
 * Тип результат 
 * @class Core.store.cs_route_statuses
 */
Ext.define('Core.store.cs_route_statuses', { 
    extend: 'Ext.data.Store',
    alias: 'store.cs_route_statuses',
    autoLoad: false,
    storeId: 'cs_route_statuses',
    model: 'Core.model.cs_route_statuses',
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
            create: 'PN.cs_route_statuses.Add',
            read: 'PN.cs_route_statuses.Query',
            update: 'PN.cs_route_statuses.Update',
            destroy: 'PN.cs_route_statuses.Delete'
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
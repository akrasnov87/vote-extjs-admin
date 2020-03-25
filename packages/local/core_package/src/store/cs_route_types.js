/**
 * Тип маршрута 
 * @class Core.store.cs_route_types
 */
Ext.define('Core.store.cs_route_types', { 
    extend: 'Ext.data.Store',
    alias: 'store.cs_route_types',
    autoLoad: false,
    storeId: 'cs_route_types',
    model: 'Core.model.cs_route_types',
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
            create: 'PN.cs_route_types.Add',
            read: 'PN.cs_route_types.Query',
            update: 'PN.cs_route_types.Update',
            destroy: 'PN.cs_route_types.Delete'
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
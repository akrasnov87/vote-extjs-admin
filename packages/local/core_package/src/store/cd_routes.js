/**
 * Маршруты 
 * @class Core.store.cd_routes
 */
Ext.define('Core.store.cd_routes', { 
    extend: 'Ext.data.Store',
    alias: 'store.cd_routes',
    autoLoad: false,
    storeId: 'cd_routes',
    model: 'Core.model.cd_routes',
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
            create: 'PN.cd_routes.Add',
            read: 'PN.cd_routes.Query',
            update: 'PN.cd_routes.Update',
            destroy: 'PN.cd_routes.Delete'
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
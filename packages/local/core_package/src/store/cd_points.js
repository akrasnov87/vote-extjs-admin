/**
 * Точки 
 * @class Core.store.cd_points
 */
Ext.define('Core.store.cd_points', { 
    extend: 'Ext.data.Store',
    alias: 'store.cd_points',
    autoLoad: false,
    storeId: 'cd_points',
    model: 'Core.model.cd_points',
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
            create: 'PN.cd_points.Add',
            read: 'PN.cd_points.Query',
            update: 'PN.cd_points.Update',
            destroy: 'PN.cd_points.Delete'
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
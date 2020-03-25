/**
 * Точки 
 * @class Core.store.cd_user_points
 */
Ext.define('Core.store.cd_user_points', { 
    extend: 'Ext.data.Store',
    alias: 'store.cd_user_points',
    autoLoad: false,
    storeId: 'cd_user_points',
    model: 'Core.model.cd_user_points',
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
            create: 'PN.cd_user_points.Add',
            read: 'PN.cd_user_points.Query',
            update: 'PN.cd_user_points.Update',
            destroy: 'PN.cd_user_points.Delete'
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
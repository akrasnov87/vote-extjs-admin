/**
 * Тип точки 
 * @class Core.store.cs_point_types
 */
Ext.define('Core.store.cs_point_types', { 
    extend: 'Ext.data.Store',
    alias: 'store.cs_point_types',
    autoLoad: false,
    storeId: 'cs_point_types',
    model: 'Core.model.cs_point_types',
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
            create: 'PN.cs_point_types.Add',
            read: 'PN.cs_point_types.Query',
            update: 'PN.cs_point_types.Update',
            destroy: 'PN.cs_point_types.Delete'
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
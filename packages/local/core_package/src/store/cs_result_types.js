/**
 * Тип результат 
 * @class Core.store.cs_result_types
 */
Ext.define('Core.store.cs_result_types', { 
    extend: 'Ext.data.Store',
    alias: 'store.cs_result_types',
    autoLoad: false,
    storeId: 'cs_result_types',
    model: 'Core.model.cs_result_types',
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
            create: 'PN.cs_result_types.Add',
            read: 'PN.cs_result_types.Query',
            update: 'PN.cs_result_types.Update',
            destroy: 'PN.cs_result_types.Delete'
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
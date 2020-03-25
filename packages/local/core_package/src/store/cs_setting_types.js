/**
 * Тип настройки 
 * @class Core.store.cs_setting_types
 */
Ext.define('Core.store.cs_setting_types', { 
    extend: 'Ext.data.Store',
    alias: 'store.cs_setting_types',
    autoLoad: false,
    storeId: 'cs_setting_types',
    model: 'Core.model.cs_setting_types',
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
            create: 'PN.cs_setting_types.Add',
            read: 'PN.cs_setting_types.Query',
            update: 'PN.cs_setting_types.Update',
            destroy: 'PN.cs_setting_types.Delete'
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
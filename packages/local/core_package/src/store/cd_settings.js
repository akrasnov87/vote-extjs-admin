/**
 * Настройки 
 * @class Core.store.cd_settings
 */
Ext.define('Core.store.cd_settings', { 
    extend: 'Ext.data.Store',
    alias: 'store.cd_settings',
    autoLoad: false,
    storeId: 'cd_settings',
    model: 'Core.model.cd_settings',
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
            create: 'PN.cd_settings.Add',
            read: 'PN.cd_settings.Query',
            update: 'PN.cd_settings.Update',
            destroy: 'PN.cd_settings.Delete'
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
/**
 * Информация о мобильных устройствах 
 * @class Core.store.ad_mobile_devices
 */
Ext.define('Core.store.ad_mobile_devices', { 
    extend: 'Ext.data.Store',
    alias: 'store.ad_mobile_devices',
    autoLoad: false,
    storeId: 'ad_mobile_devices',
    model: 'Core.model.ad_mobile_devices',
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
            create: 'PN.ad_mobile_devices.Add',
            read: 'PN.ad_mobile_devices.Query',
            update: 'PN.ad_mobile_devices.Update',
            destroy: 'PN.ad_mobile_devices.Delete'
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
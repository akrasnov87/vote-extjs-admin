/**
 * Показатели мобильного устройства 
 * @class Core.store.ad_mobile_indicators
 */
Ext.define('Core.store.ad_mobile_indicators', { 
    extend: 'Ext.data.Store',
    alias: 'store.ad_mobile_indicators',
    autoLoad: false,
    storeId: 'ad_mobile_indicators',
    model: 'Core.model.ad_mobile_indicators',
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
            create: 'PN.ad_mobile_indicators.Add',
            read: 'PN.ad_mobile_indicators.Query',
            update: 'PN.ad_mobile_indicators.Update',
            destroy: 'PN.ad_mobile_indicators.Delete'
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
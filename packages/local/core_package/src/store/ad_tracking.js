/**
 * Перемещение исполнителя 
 * @class Core.store.ad_tracking
 */
Ext.define('Core.store.ad_tracking', { 
    extend: 'Ext.data.Store',
    alias: 'store.ad_tracking',
    autoLoad: false,
    storeId: 'ad_tracking',
    model: 'Core.model.ad_tracking',
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
            create: 'PN.ad_tracking.Add',
            read: 'PN.ad_tracking.Query',
            update: 'PN.ad_tracking.Update',
            destroy: 'PN.ad_tracking.Delete'
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
/**
 * Действия пользователя 
 * @class Core.store.ad_audits
 */
Ext.define('Core.store.ad_audits', { 
    extend: 'Ext.data.Store',
    alias: 'store.ad_audits',
    autoLoad: false,
    storeId: 'ad_audits',
    model: 'Core.model.ad_audits',
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
            create: 'PN.ad_audits.Add',
            read: 'PN.ad_audits.Query',
            update: 'PN.ad_audits.Update',
            destroy: 'PN.ad_audits.Delete'
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
/**
 * Журнал версий 
 * @class Core.store.sd_digests
 */
Ext.define('Core.store.sd_digests', { 
    extend: 'Ext.data.Store',
    alias: 'store.sd_digests',
    autoLoad: false,
    storeId: 'sd_digests',
    model: 'Core.model.sd_digests',
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
            create: 'PN.sd_digests.Add',
            read: 'PN.sd_digests.Query',
            update: 'PN.sd_digests.Update',
            destroy: 'PN.sd_digests.Delete'
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
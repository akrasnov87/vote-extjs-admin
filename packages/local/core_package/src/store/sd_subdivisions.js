/**
 * Участки 
 * @class Core.store.sd_subdivisions
 */
Ext.define('Core.store.sd_subdivisions', { 
    extend: 'Ext.data.Store',
    alias: 'store.sd_subdivisions',
    autoLoad: false,
    storeId: 'sd_subdivisions',
    model: 'Core.model.sd_subdivisions',
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
            create: 'PN.sd_subdivisions.Add',
            read: 'PN.sd_subdivisions.Query',
            update: 'PN.sd_subdivisions.Update',
            destroy: 'PN.sd_subdivisions.Delete'
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
/**
 * Критерии 
 * @class Core.store.sd_ui_criteries
 */
Ext.define('Core.store.sd_ui_criteries', { 
    extend: 'Ext.data.Store',
    alias: 'store.sd_ui_criteries',
    autoLoad: false,
    storeId: 'sd_ui_criteries',
    model: 'Core.model.sd_ui_criteries',
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
            create: 'PN.sd_ui_criteries.Add',
            read: 'PN.sd_ui_criteries.Query',
            update: 'PN.sd_ui_criteries.Update',
            destroy: 'PN.sd_ui_criteries.Delete'
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
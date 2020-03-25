/**
 * Операции 
 * @class Core.store.sd_ui_actions
 */
Ext.define('Core.store.sd_ui_actions', { 
    extend: 'Ext.data.Store',
    alias: 'store.sd_ui_actions',
    autoLoad: false,
    storeId: 'sd_ui_actions',
    model: 'Core.model.sd_ui_actions',
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
            create: 'PN.sd_ui_actions.Add',
            read: 'PN.sd_ui_actions.Query',
            update: 'PN.sd_ui_actions.Update',
            destroy: 'PN.sd_ui_actions.Delete'
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
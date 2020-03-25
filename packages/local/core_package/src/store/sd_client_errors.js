/**
 * Клиентские ошибки 
 * @class Core.store.sd_client_errors
 */
Ext.define('Core.store.sd_client_errors', { 
    extend: 'Ext.data.Store',
    alias: 'store.sd_client_errors',
    autoLoad: false,
    storeId: 'sd_client_errors',
    model: 'Core.model.sd_client_errors',
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
            create: 'PN.sd_client_errors.Add',
            read: 'PN.sd_client_errors.Query',
            update: 'PN.sd_client_errors.Update',
            destroy: 'PN.sd_client_errors.Delete'
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
/**
 * Статусная схема 
 * @class Core.store.ss_status_schemas
 */
Ext.define('Core.store.ss_status_schemas', { 
    extend: 'Ext.data.Store',
    alias: 'store.ss_status_schemas',
    autoLoad: false,
    storeId: 'ss_status_schemas',
    model: 'Core.model.ss_status_schemas',
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
            create: 'PN.ss_status_schemas.Add',
            read: 'PN.ss_status_schemas.Query',
            update: 'PN.ss_status_schemas.Update',
            destroy: 'PN.ss_status_schemas.Delete'
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
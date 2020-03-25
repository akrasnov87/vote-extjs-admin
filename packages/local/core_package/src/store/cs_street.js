/**
 * Улицы 
 * @class Core.store.cs_street
 */
Ext.define('Core.store.cs_street', { 
    extend: 'Ext.data.Store',
    alias: 'store.cs_street',
    autoLoad: false,
    storeId: 'cs_street',
    model: 'Core.model.cs_street',
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
            create: 'PN.cs_street.Add',
            read: 'PN.cs_street.Query',
            update: 'PN.cs_street.Update',
            destroy: 'PN.cs_street.Delete'
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
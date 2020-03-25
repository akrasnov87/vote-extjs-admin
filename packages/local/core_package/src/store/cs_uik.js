/**
 * Избирательный участок 
 * @class Core.store.cs_uik
 */
Ext.define('Core.store.cs_uik', { 
    extend: 'Ext.data.Store',
    alias: 'store.cs_uik',
    autoLoad: false,
    storeId: 'cs_uik',
    model: 'Core.model.cs_uik',
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
            create: 'PN.cs_uik.Add',
            read: 'PN.cs_uik.Query',
            update: 'PN.cs_uik.Update',
            destroy: 'PN.cs_uik.Delete'
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
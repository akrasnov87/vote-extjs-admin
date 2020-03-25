/**
 * Квартиры 
 * @class Core.store.cs_apartment
 */
Ext.define('Core.store.cs_apartment', { 
    extend: 'Ext.data.Store',
    alias: 'store.cs_apartment',
    autoLoad: false,
    storeId: 'cs_apartment',
    model: 'Core.model.cs_apartment',
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
            create: 'PN.cs_apartment.Add',
            read: 'PN.cs_apartment.Query',
            update: 'PN.cs_apartment.Update',
            destroy: 'PN.cs_apartment.Delete'
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
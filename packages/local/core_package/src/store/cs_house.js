/**
 * Улицы 
 * @class Core.store.cs_house
 */
Ext.define('Core.store.cs_house', { 
    extend: 'Ext.data.Store',
    alias: 'store.cs_house',
    autoLoad: false,
    storeId: 'cs_house',
    model: 'Core.model.cs_house',
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
            create: 'PN.cs_house.Add',
            read: 'PN.cs_house.Query',
            update: 'PN.cs_house.Update',
            destroy: 'PN.cs_house.Delete'
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
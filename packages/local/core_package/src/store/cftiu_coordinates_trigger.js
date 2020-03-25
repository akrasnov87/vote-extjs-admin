/**
 *  
 * @class Core.store.cftiu_coordinates_trigger
 */
Ext.define('Core.store.cftiu_coordinates_trigger', { 
    extend: 'Ext.data.Store',
    alias: 'store.cftiu_coordinates_trigger',
    autoLoad: false,
    storeId: 'cftiu_coordinates_trigger',
    remoteSort: false,
    remoteGroup: false,
    remoteFilter: false,
    pageSize: 10000,
    limitParam: '',
    pageParam: '',
    startParam: '',
    cacheString: '',
    statefulFilters: false,
    proxy: {
        type: 'direct',
        api: {
            read: 'PN.cftiu_coordinates_trigger.Query'
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
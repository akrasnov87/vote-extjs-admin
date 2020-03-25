/**
 *  
 * @class Core.store.sf_accesses
 */
Ext.define('Core.store.sf_accesses', { 
    extend: 'Ext.data.Store',
    alias: 'store.sf_accesses',
    autoLoad: false,
    storeId: 'sf_accesses',
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
            read: 'PN.sf_accesses.Query'
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
/**
 * получение прав доступа для пользователя 
 * @class Core.store.pf_accesses
 */
Ext.define('Core.store.pf_accesses', { 
    extend: 'Ext.data.Store',
    alias: 'store.pf_accesses',
    autoLoad: false,
    storeId: 'pf_accesses',
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
            read: 'PN.pf_accesses.Query'
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
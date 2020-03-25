/**
 * Получение списка хранилищ 
 * @class Core.store.pf_stores
 */
Ext.define('Core.store.pf_stores', { 
    extend: 'Ext.data.Store',
    alias: 'store.pf_stores',
    autoLoad: false,
    storeId: 'pf_stores',
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
            read: 'PN.pf_stores.Query'
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
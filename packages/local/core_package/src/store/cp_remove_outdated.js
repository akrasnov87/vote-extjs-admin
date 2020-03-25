/**
 * Процедура очистки устаревших данных 
 * @class Core.store.cp_remove_outdated
 */
Ext.define('Core.store.cp_remove_outdated', { 
    extend: 'Ext.data.Store',
    alias: 'store.cp_remove_outdated',
    autoLoad: false,
    storeId: 'cp_remove_outdated',
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
            read: 'PN.cp_remove_outdated.Query'
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
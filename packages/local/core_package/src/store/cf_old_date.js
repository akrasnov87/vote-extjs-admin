/**
 * Проверка даты 
 * @class Core.store.cf_old_date
 */
Ext.define('Core.store.cf_old_date', { 
    extend: 'Ext.data.Store',
    alias: 'store.cf_old_date',
    autoLoad: false,
    storeId: 'cf_old_date',
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
            read: 'PN.cf_old_date.Query'
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
/**
 * Процедура логирования действия пользователя 
 * @class Core.store.cft_0_log_action
 */
Ext.define('Core.store.cft_0_log_action', { 
    extend: 'Ext.data.Store',
    alias: 'store.cft_0_log_action',
    autoLoad: false,
    storeId: 'cft_0_log_action',
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
            read: 'PN.cft_0_log_action.Query'
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
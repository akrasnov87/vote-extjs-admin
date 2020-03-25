/**
 * возвращается список кнопок, которые могут выводиться для viewId 
 * @class Core.store.pf_ui_actions
 */
Ext.define('Core.store.pf_ui_actions', { 
    extend: 'Ext.data.Store',
    alias: 'store.pf_ui_actions',
    autoLoad: false,
    storeId: 'pf_ui_actions',
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
            read: 'PN.pf_ui_actions.Query'
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
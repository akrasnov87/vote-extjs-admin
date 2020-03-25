/**
 * Безопасность 
 * @class Core.store.pf_ui_navigations
 */
Ext.define('Core.store.pf_ui_navigations', { 
    extend: 'Ext.data.Store',
    alias: 'store.pf_ui_navigations',
    autoLoad: false,
    storeId: 'pf_ui_navigations',
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
            read: 'PN.pf_ui_navigations.Query'
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
/**
 *  
 * @class Core.store.cf_mui_cd_route_history
 */
Ext.define('Core.store.cf_mui_cd_route_history', { 
    extend: 'Ext.data.Store',
    alias: 'store.cf_mui_cd_route_history',
    autoLoad: false,
    storeId: 'cf_mui_cd_route_history',
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
            read: 'PN.cf_mui_cd_route_history.Query'
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
/**
 *  
 * @class Core.store.cf_mui_cd_routes
 */
Ext.define('Core.store.cf_mui_cd_routes', { 
    extend: 'Ext.data.Store',
    alias: 'store.cf_mui_cd_routes',
    autoLoad: false,
    storeId: 'cf_mui_cd_routes',
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
            read: 'PN.cf_mui_cd_routes.Query'
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
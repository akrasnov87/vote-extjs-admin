/**
 *  
 * @class Core.store.cf_mui_cd_points
 */
Ext.define('Core.store.cf_mui_cd_points', { 
    extend: 'Ext.data.Store',
    alias: 'store.cf_mui_cd_points',
    autoLoad: false,
    storeId: 'cf_mui_cd_points',
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
            read: 'PN.cf_mui_cd_points.Query'
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
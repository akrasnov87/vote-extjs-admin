/**
 *  
 * @class Core.store.cf_mui_ed_registr_pts
 */
Ext.define('Core.store.cf_mui_ed_registr_pts', { 
    extend: 'Ext.data.Store',
    alias: 'store.cf_mui_ed_registr_pts',
    autoLoad: false,
    storeId: 'cf_mui_ed_registr_pts',
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
            read: 'PN.cf_mui_ed_registr_pts.Query'
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
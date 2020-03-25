/**
 * Обновление версии БД 
 * @class Core.store.sf_update_version
 */
Ext.define('Core.store.sf_update_version', { 
    extend: 'Ext.data.Store',
    alias: 'store.sf_update_version',
    autoLoad: false,
    storeId: 'sf_update_version',
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
            read: 'PN.sf_update_version.Query'
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
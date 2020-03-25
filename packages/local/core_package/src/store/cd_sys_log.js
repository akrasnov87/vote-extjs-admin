/**
 *  Логирование job 
 * @class Core.store.cd_sys_log
 */
Ext.define('Core.store.cd_sys_log', { 
    extend: 'Ext.data.Store',
    alias: 'store.cd_sys_log',
    autoLoad: false,
    storeId: 'cd_sys_log',
    model: 'Core.model.cd_sys_log',
    remoteSort: true,
    remoteGroup: true,
    remoteFilter: true,
    statefulFilters: false,
    sorters: [{
        default: true,
        property: 'id',
        direction: 'DESC'
    }],
    proxy: {
        type: 'direct',
        api: {
            create: 'PN.cd_sys_log.Add',
            read: 'PN.cd_sys_log.Query',
            update: 'PN.cd_sys_log.Update',
            destroy: 'PN.cd_sys_log.Delete'
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
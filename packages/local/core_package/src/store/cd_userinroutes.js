/**
 * Исполнители задания 
 * @class Core.store.cd_userinroutes
 */
Ext.define('Core.store.cd_userinroutes', { 
    extend: 'Ext.data.Store',
    alias: 'store.cd_userinroutes',
    autoLoad: false,
    storeId: 'cd_userinroutes',
    model: 'Core.model.cd_userinroutes',
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
            create: 'PN.cd_userinroutes.Add',
            read: 'PN.cd_userinroutes.Query',
            update: 'PN.cd_userinroutes.Update',
            destroy: 'PN.cd_userinroutes.Delete'
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
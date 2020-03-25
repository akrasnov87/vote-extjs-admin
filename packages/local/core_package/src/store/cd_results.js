/**
 * Результат выполнения 
 * @class Core.store.cd_results
 */
Ext.define('Core.store.cd_results', { 
    extend: 'Ext.data.Store',
    alias: 'store.cd_results',
    autoLoad: false,
    storeId: 'cd_results',
    model: 'Core.model.cd_results',
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
            create: 'PN.cd_results.Add',
            read: 'PN.cd_results.Query',
            update: 'PN.cd_results.Update',
            destroy: 'PN.cd_results.Delete'
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
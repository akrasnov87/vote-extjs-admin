/**
 * Речевой модуль 
 * @class Core.store.cs_answer
 */
Ext.define('Core.store.cs_answer', { 
    extend: 'Ext.data.Store',
    alias: 'store.cs_answer',
    autoLoad: false,
    storeId: 'cs_answer',
    model: 'Core.model.cs_answer',
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
            create: 'PN.cs_answer.Add',
            read: 'PN.cs_answer.Query',
            update: 'PN.cs_answer.Update',
            destroy: 'PN.cs_answer.Delete'
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
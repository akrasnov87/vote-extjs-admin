/**
 * Речевой модуль 
 * @class Core.store.cs_question
 */
Ext.define('Core.store.cs_question_next', { 
    extend: 'Ext.data.Store',
    alias: 'store.cs_question_next',
    autoLoad: false,
    storeId: 'cs_question',
    model: 'Core.model.cs_question',
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
            create: 'PN.cs_question.Add',
            read: 'PN.cs_question.Query',
            update: 'PN.cs_question.Update',
            destroy: 'PN.cs_question.Delete'
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
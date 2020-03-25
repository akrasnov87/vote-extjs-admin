/**
 * Пользователи в ролях 
 * @class Core.store.pd_userinroles
 */
Ext.define('Core.store.pd_userinroles', { 
    extend: 'Ext.data.Store',
    alias: 'store.pd_userinroles',
    autoLoad: false,
    storeId: 'pd_userinroles',
    model: 'Core.model.pd_userinroles',
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
            create: 'PN.pd_userinroles.Add',
            read: 'PN.pd_userinroles.Query',
            update: 'PN.pd_userinroles.Update',
            destroy: 'PN.pd_userinroles.Delete'
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
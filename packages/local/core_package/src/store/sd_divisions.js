/**
 * Отделения 
 * @class Core.store.sd_divisions
 */
Ext.define('Core.store.sd_divisions', { 
    extend: 'Ext.data.Store',
    alias: 'store.sd_divisions',
    autoLoad: false,
    storeId: 'sd_divisions',
    model: 'Core.model.sd_divisions',
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
            create: 'PN.sd_divisions.Add',
            read: 'PN.sd_divisions.Query',
            update: 'PN.sd_divisions.Update',
            destroy: 'PN.sd_divisions.Delete'
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
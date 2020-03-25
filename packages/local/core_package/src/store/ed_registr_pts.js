/**
 * Учетный показатель 
 * @class Core.store.ed_registr_pts
 */
Ext.define('Core.store.ed_registr_pts', { 
    extend: 'Ext.data.Store',
    alias: 'store.ed_registr_pts',
    autoLoad: false,
    storeId: 'ed_registr_pts',
    model: 'Core.model.ed_registr_pts',
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
            create: 'PN.ed_registr_pts.Add',
            read: 'PN.ed_registr_pts.Query',
            update: 'PN.ed_registr_pts.Update',
            destroy: 'PN.ed_registr_pts.Delete'
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
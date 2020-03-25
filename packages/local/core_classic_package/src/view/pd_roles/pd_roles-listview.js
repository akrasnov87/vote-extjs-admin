/**
 * Роли 
 * @class Core.view.pd_roles.pd_roles-listview
 */
Ext.define('Core.view.pd_roles.pd_roles-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'pd_roles-listview',

    toolbarConfig: {
        title: 'Роли',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'pd_roles',
            autoLoad: true
        },
        enableAutoResizeColumns: true,
        selModel: {
            selType: 'checkboxmodel',
            listeners: {
                selectionchange: 'onSelectionChange'
            }
        },
        stateful: false,
        stateId: 'pd_roles-listview',
        detailViewName: 'pd_roles-detailview',
        createDetailViewName: 'pd_roles-detailview',
        columns: [
            /*** Идентификатор*/
            {      
                xtype: 'idnumbercolumn',
                dataIndex: 'id',
                text: 'Идентификатор',
                filter: {
                    type: 'int'
                }
            },
            /*** Наименование*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_name',
                text: 'Наименование',
                filter: {
                    type: 'string'
                }
            },
            /*** Описание роли*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_description',
                text: 'Описание роли',
                filter: {
                    type: 'string'
                }
            },
            /*** Приоритет*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_weight',
                text: 'Приоритет',
                filter: {
                    type: 'int'
                }
            },
            /*** Удален*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'sn_delete',
                text: 'Удален',
                filter: {
                    type: 'bool'
                }
            }
        ]
    }]
});
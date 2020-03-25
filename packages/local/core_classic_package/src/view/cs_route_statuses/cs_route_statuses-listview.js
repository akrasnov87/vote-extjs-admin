/**
 * Тип результат 
 * @class Core.view.cs_route_statuses.cs_route_statuses-listview
 */
Ext.define('Core.view.cs_route_statuses.cs_route_statuses-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cs_route_statuses-listview',

    toolbarConfig: {
        title: 'Тип результат',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'cs_route_statuses',
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
        stateId: 'cs_route_statuses-listview',
        detailViewName: 'cs_route_statuses-detailview',
        createDetailViewName: 'cs_route_statuses-detailview',
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
            /*** Код*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_code',
                text: 'Код',
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
            /*** Краткое наименование*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_short_name',
                text: 'Краткое наименование',
                filter: {
                    type: 'string'
                }
            },
            /*** Константа*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_const',
                text: 'Константа',
                filter: {
                    type: 'string'
                }
            },
            /*** Приоритет статуса(чем больше число тем выше статус)*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_order',
                text: 'Приоритет статуса(чем больше число тем выше статус)',
                filter: {
                    type: 'int'
                }
            },
            /*** Отключено*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_disabled',
                text: 'Отключено',
                filter: {
                    type: 'bool'
                }
            }
        ]
    }]
});
/**
 * Тип настройки 
 * @class Core.view.cs_setting_types.cs_setting_types-listview
 */
Ext.define('Core.view.cs_setting_types.cs_setting_types-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cs_setting_types-listview',

    toolbarConfig: {
        title: 'Тип настройки',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'cs_setting_types',
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
        stateId: 'cs_setting_types-listview',
        detailViewName: 'cs_setting_types-detailview',
        createDetailViewName: 'cs_setting_types-detailview',
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
            /*** Сортировка*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_order',
                text: 'Сортировка',
                filter: {
                    type: 'int'
                }
            },
            /*** Отключено*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_default',
                text: 'Отключено',
                filter: {
                    type: 'bool'
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
/**
 * Операции 
 * @class Core.view.sd_ui_actions.sd_ui_actions-listview
 */
Ext.define('Core.view.sd_ui_actions.sd_ui_actions-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'sd_ui_actions-listview',

    toolbarConfig: {
        title: 'Операции',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'sd_ui_actions',
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
        stateId: 'sd_ui_actions-listview',
        detailViewName: 'sd_ui_actions-detailview',
        createDetailViewName: 'sd_ui_actions-detailview',
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
            /*** Идентификатор представления*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_view_id',
                text: 'Идентификатор представления',
                filter: {
                    type: 'string'
                }
            },
            /*** Имя команды*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_text',
                text: 'Имя команды',
                filter: {
                    type: 'string'
                }
            },
            /*** Иконка*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_icon',
                text: 'Иконка',
                filter: {
                    type: 'string'
                }
            },
            /*** Метод*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_operation',
                text: 'Метод',
                filter: {
                    type: 'string'
                }
            },
            /*** Представление*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_action_view',
                text: 'Представление',
                filter: {
                    type: 'string'
                }
            },
            /*** Тип операции*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_xtype',
                text: 'Тип операции',
                filter: {
                    type: 'string'
                }
            },
            /*** Место установки*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_place',
                text: 'Место установки',
                filter: {
                    type: 'string'
                }
            },
            /*** Сортировка по умолчанию*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_sort',
                text: 'Сортировка по умолчанию',
                filter: {
                    type: 'int'
                }
            },
            /*** Описание операции*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_tooltip',
                text: 'Описание операции',
                filter: {
                    type: 'string'
                }
            },
            /*** Стиль*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_ui',
                text: 'Стиль',
                filter: {
                    type: 'string'
                }
            },
            /*** Родительский элемент*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_parent', 
                text: 'Родительский элемент',
                editor: {
                    xtype: 'combobox',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'sd_ui_actions'
                    },
                    displayField: 'c_text',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'c_text',
                valueField: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** Условие выполнения*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_selectiondependencytype',
                text: 'Условие выполнения',
                filter: {
                    type: 'string'
                }
            },
            /*** Сообщение с текстом перед выполнением*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_confirmationmessage',
                text: 'Сообщение с текстом перед выполнением',
                filter: {
                    type: 'string'
                }
            },
            /*** JavaScript-функция*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_javascript_fn',
                text: 'JavaScript-функция',
                filter: {
                    type: 'string'
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
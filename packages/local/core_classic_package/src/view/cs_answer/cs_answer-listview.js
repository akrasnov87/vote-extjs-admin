/**
 * Речевой модуль 
 * @class Core.view.cs_answer.cs_answer-listview
 */
Ext.define('Core.view.cs_answer.cs_answer-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cs_answer-listview',

    toolbarConfig: {
        title: 'Речевой модуль',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'cs_answer',
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
        stateId: 'cs_answer-listview',
        detailViewName: 'cs_answer-detailview',
        createDetailViewName: 'cs_answer-detailview',
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
            /*** Текст*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_text',
                text: 'Текст',
                filter: {
                    type: 'string'
                }
            },
            /*** Вопрос*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_question', 
                text: 'Вопрос',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cs_question'
                    },
                    displayField: 'c_title',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'c_title',
                valueField: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** Следующий вопрос*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_next_question', 
                text: 'Следующий вопрос',
                editor: {
                    xtype: 'combobox',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cs_question'
                    },
                    displayField: 'c_title',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'c_title',
                valueField: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** Действие*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_action',
                text: 'Действие',
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
            /*** Отключить*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_disabled',
                text: 'Отключить',
                filter: {
                    type: 'bool'
                }
            },
            /*** Дата создания*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'dx_created', 
                text: 'Дата создания',
                editor: {
                    xtype: 'datefield'
                },
                filter: {
                    type: 'date',
                    submitFormat: 'Y-m-d H:i:s'
                },
                exportStyle: {
                    format: 'd.m.Y HH:MM:SS',
                    alignment: {
                        horizontal: 'Right'
                    }
                }
            },
            /*** Признак удаленной записи*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'sn_delete',
                text: 'Признак удаленной записи',
                filter: {
                    type: 'bool'
                }
            }
        ]
    }]
});
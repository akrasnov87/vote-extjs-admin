/**
 * Речевой модуль
 * @class Core.view.cs_question.cs_answer___cs_question-collection
 */
Ext.define('Core.view.cs_question.cs_answer___cs_question-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cs_answer___cs_question-collection',
    title: 'Речевой модуль',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'cs_answer',
            autoLoad: false
        },
        enableAutoResizeColumns: true,
        selModel: {
            selType: 'checkboxmodel',
            listeners: {
                selectionchange: 'onSelectionChange'
            }
        },
        stateful: false,
        stateId: 'cs_answer___cs_question-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'cs_answer___cs_question',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'cs_answer-detailview',
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
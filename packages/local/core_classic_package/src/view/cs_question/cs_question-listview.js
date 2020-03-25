/**
 * Речевой модуль 
 * @class Core.view.cs_question.cs_question-listview
 */
Ext.define('Core.view.cs_question.cs_question-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cs_question-listview',

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
            type: 'cs_question',
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
        stateId: 'cs_question-listview',
        detailViewName: 'cs_question-detailview',
        createDetailViewName: 'cs_question-detailview',
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
/**
 * Точки
 * @class Core.view.cd_user_points.cd_results___cd_user_points-collection
 */
Ext.define('Core.view.cd_user_points.cd_results___cd_user_points-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cd_results___cd_user_points-collection',
    title: 'Результат выполнения',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'cd_results',
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
        stateId: 'cd_results___cd_user_points-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'cd_results___cd_user_points',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'cd_results-detailview',
        columns: [
            /*** Идентификатор*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'id',
                text: 'Идентификатор',
                filter: {
                    type: 'string'
                }
            },
            /*** Пользовательская точка*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'fn_user_point', 
                text: 'Пользовательская точка',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cd_user_points'
                    },
                    displayField: 'fn_point',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'fn_point',
                valueField: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** Точка маршрута*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'fn_point',
                text: 'Точка маршрута',
                filter: {
                    type: 'string'
                }
            },
            /*** Тип результат*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'fn_type', 
                text: 'Тип результат',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cs_result_types'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'c_name',
                valueField: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** Пользователь*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'fn_user', 
                text: 'Пользователь',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'pd_users'
                    },
                    displayField: 'c_login',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'c_login',
                valueField: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** Маршрут*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'fn_route',
                text: 'Маршрут',
                filter: {
                    type: 'string'
                }
            },
            /*** Дата создания*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_date', 
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
            /*** Примечание*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_notice',
                text: 'Примечание',
                filter: {
                    type: 'string'
                }
            },
            /*** Ответ*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'f_answer',
                text: 'Ответ',
                filter: {
                    type: 'int'
                }
            },
            /*** Предупреждение*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_warning',
                text: 'Предупреждение',
                filter: {
                    type: 'bool'
                }
            },
            /*** Вопрос*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'f_question',
                text: 'Вопрос',
                filter: {
                    type: 'int'
                }
            },
            /*** JSON данные*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'jb_data',
                text: 'JSON данные',
                filter: {
                    type: 'string'
                }
            },
            /*** Дата создания в БД*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'dx_created', 
                text: 'Дата создания в БД',
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
            }
        ]
    }]
});
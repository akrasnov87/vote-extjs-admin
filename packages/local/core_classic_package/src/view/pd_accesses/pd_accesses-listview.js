/**
 * Права доступа 
 * @class Core.view.pd_accesses.pd_accesses-listview
 */
Ext.define('Core.view.pd_accesses.pd_accesses-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'pd_accesses-listview',

    toolbarConfig: {
        title: 'Права доступа',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'pd_accesses',
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
        stateId: 'pd_accesses-listview',
        detailViewName: 'pd_accesses-detailview',
        createDetailViewName: 'pd_accesses-detailview',
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
            /*** Пользователь*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_user', 
                text: 'Пользователь',
                editor: {
                    xtype: 'combobox',
                    plugins: [{
                        ptype: 'clearable'
                    }],
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
            /*** Роль*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_role', 
                text: 'Роль',
                editor: {
                    xtype: 'combobox',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'pd_roles'
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
            /*** Табл./Предст./Функц.*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_name',
                text: 'Табл./Предст./Функц.',
                filter: {
                    type: 'string'
                }
            },
            /*** Действие*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_action', 
                text: 'Действие',
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
            /*** Серверный фильтр*/
            {      
                xtype: 'criteriacolumn',
                dataIndex: 'c_criteria',
                text: 'Серверный фильтр',
                filter: {
                    type: 'string'
                }
            },
            /*** Путь в файловой системе*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_path',
                text: 'Путь в файловой системе',
                filter: {
                    type: 'string'
                }
            },
            /*** Функция RPC или её часть*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_function',
                text: 'Функция RPC или её часть',
                filter: {
                    type: 'string'
                }
            },
            /*** Запрещенные колонки*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_columns',
                text: 'Запрещенные колонки',
                filter: {
                    type: 'string'
                }
            },
            /*** Разрешено удалени*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_deletable',
                text: 'Разрешено удалени',
                filter: {
                    type: 'bool'
                }
            },
            /*** Разрешено создание*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_creatable',
                text: 'Разрешено создание',
                filter: {
                    type: 'bool'
                }
            },
            /*** Разрешено редактирование*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_editable',
                text: 'Разрешено редактирование',
                filter: {
                    type: 'bool'
                }
            },
            /*** Дополнительный доступ*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_full_control',
                text: 'Дополнительный доступ',
                filter: {
                    type: 'bool'
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
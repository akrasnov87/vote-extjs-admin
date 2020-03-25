/**
 * История изменения статусов заданий 
 * @class Core.view.cd_route_history.cd_route_history-listview
 */
Ext.define('Core.view.cd_route_history.cd_route_history-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cd_route_history-listview',

    toolbarConfig: {
        title: 'История изменения статусов заданий',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'cd_route_history',
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
        stateId: 'cd_route_history-listview',
        detailViewName: 'cd_route_history-detailview',
        createDetailViewName: 'cd_route_history-detailview',
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
            /*** Задание*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'fn_route', 
                text: 'Задание',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cd_routes'
                    },
                    displayField: 'c_number',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'c_number',
                valueField: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** Статус*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'fn_status', 
                text: 'Статус',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cs_route_statuses'
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
            /*** Дата изменения*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_date', 
                text: 'Дата изменения',
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
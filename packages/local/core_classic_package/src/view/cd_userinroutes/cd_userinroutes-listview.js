/**
 * Исполнители задания 
 * @class Core.view.cd_userinroutes.cd_userinroutes-listview
 */
Ext.define('Core.view.cd_userinroutes.cd_userinroutes-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cd_userinroutes-listview',

    toolbarConfig: {
        title: 'Исполнители задания',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'cd_userinroutes',
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
        stateId: 'cd_userinroutes-listview',
        detailViewName: 'cd_userinroutes-detailview',
        createDetailViewName: 'cd_userinroutes-detailview',
        columns: [
            /*** Идентифиактор*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'id',
                text: 'Идентифиактор',
                filter: {
                    type: 'string'
                }
            },
            /*** Маршрут*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_route', 
                text: 'Маршрут',
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
            /*** Пользователь*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_user', 
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
            /*** Является главным*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_main',
                text: 'Является главным',
                filter: {
                    type: 'bool'
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
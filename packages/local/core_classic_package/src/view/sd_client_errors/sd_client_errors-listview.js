/**
 * Клиентские ошибки 
 * @class Core.view.sd_client_errors.sd_client_errors-listview
 */
Ext.define('Core.view.sd_client_errors.sd_client_errors-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'sd_client_errors-listview',

    toolbarConfig: {
        title: 'Клиентские ошибки',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'sd_client_errors',
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
        stateId: 'sd_client_errors-listview',
        detailViewName: 'sd_client_errors-detailview',
        createDetailViewName: 'sd_client_errors-detailview',
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
            /*** Текст ошибки*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_message',
                text: 'Текст ошибки',
                filter: {
                    type: 'string'
                }
            },
            /*** Код ошибки*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_code',
                text: 'Код ошибки',
                filter: {
                    type: 'string'
                }
            },
            /*** Дата возникновения ошибки*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_created', 
                text: 'Дата возникновения ошибки',
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
            /*** Идентификатор пользователя*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'fn_user', 
                text: 'Идентификатор пользователя',
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
            /*** Версия приложения*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_version',
                text: 'Версия приложения',
                filter: {
                    type: 'string'
                }
            },
            /*** Тип платформы*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_platform',
                text: 'Тип платформы',
                filter: {
                    type: 'string'
                }
            },
            /*** Прочии данные*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'jb_data',
                text: 'Прочии данные',
                filter: {
                    type: 'string'
                }
            },
            /*** Дата записи на сервере*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'dx_date', 
                text: 'Дата записи на сервере',
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
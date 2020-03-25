/**
 * Пользователи
 * @class Core.view.pd_users.sd_client_errors___pd_users-collection
 */
Ext.define('Core.view.pd_users.sd_client_errors___pd_users-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'sd_client_errors___pd_users-collection',
    title: 'Клиентские ошибки',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'sd_client_errors',
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
        stateId: 'sd_client_errors___pd_users-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'sd_client_errors___pd_users',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'sd_client_errors-detailview',
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
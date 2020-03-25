/**
 * Пользователи
 * @class Core.view.pd_users.ad_mobile_devices___pd_users-collection
 */
Ext.define('Core.view.pd_users.ad_mobile_devices___pd_users-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'ad_mobile_devices___pd_users-collection',
    title: 'Информация о мобильных устройствах',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'ad_mobile_devices',
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
        stateId: 'ad_mobile_devices___pd_users-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'ad_mobile_devices___pd_users',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'ad_mobile_devices-detailview',
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
            /*** Дата возникновения событий*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_date', 
                text: 'Дата возникновения событий',
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
            /*** Режим отладки*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_debug',
                text: 'Режим отладки',
                filter: {
                    type: 'bool'
                }
            },
            /*** Архитектура устройства*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_architecture',
                text: 'Архитектура устройства',
                filter: {
                    type: 'string'
                }
            },
            /*** Модель телефона*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_phone_model',
                text: 'Модель телефона',
                filter: {
                    type: 'string'
                }
            },
            /*** Версия sdk*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_sdk',
                text: 'Версия sdk',
                filter: {
                    type: 'string'
                }
            },
            /*** Версия ОС*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_os',
                text: 'Версия ОС',
                filter: {
                    type: 'string'
                }
            },
            /*** IMEI*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_imei',
                text: 'IMEI',
                filter: {
                    type: 'string'
                }
            },
            /*** Версия приложения*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_application_version',
                text: 'Версия приложения',
                filter: {
                    type: 'string'
                }
            },
            /*** Создан в БД*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'dx_created', 
                text: 'Создан в БД',
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
/**
 * Пользователи
 * @class Core.view.pd_users.ad_mobile_indicators___pd_users-collection
 */
Ext.define('Core.view.pd_users.ad_mobile_indicators___pd_users-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'ad_mobile_indicators___pd_users-collection',
    title: 'Показатели мобильного устройства',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'ad_mobile_indicators',
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
        stateId: 'ad_mobile_indicators___pd_users-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'ad_mobile_indicators___pd_users',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'ad_mobile_indicators-detailview',
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
            /*** Дата события*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_date', 
                text: 'Дата события',
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
            /*** Тип сети*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_network_type',
                text: 'Тип сети',
                filter: {
                    type: 'string'
                }
            },
            /*** Состояние подключения к сети интернет*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_isonline',
                text: 'Состояние подключения к сети интернет',
                filter: {
                    type: 'bool'
                }
            },
            /*** Размер ОЗУ*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_ram',
                text: 'Размер ОЗУ',
                filter: {
                    type: 'int'
                }
            },
            /*** Размер используемого ОЗУ*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_used_ram',
                text: 'Размер используемого ОЗУ',
                filter: {
                    type: 'int'
                }
            },
            /*** Размер внутренней памяти*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_phone_memory',
                text: 'Размер внутренней памяти',
                filter: {
                    type: 'int'
                }
            },
            /*** Размер используемой внутренней памяти*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_used_phone_memory',
                text: 'Размер используемой внутренней памяти',
                filter: {
                    type: 'int'
                }
            },
            /*** Размер внешней памяти*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_sd_card_memory',
                text: 'Размер внешней памяти',
                filter: {
                    type: 'int'
                }
            },
            /*** Размер используемой внешей памяти*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_used_sd_card_memory',
                text: 'Размер используемой внешей памяти',
                filter: {
                    type: 'int'
                }
            },
            /*** Уровень заряда батареи*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_battery_level',
                text: 'Уровень заряда батареи',
                filter: {
                    type: 'int'
                }
            },
            /*** Смещение времени*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_time',
                text: 'Смещение времени',
                filter: {
                    type: 'int'
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
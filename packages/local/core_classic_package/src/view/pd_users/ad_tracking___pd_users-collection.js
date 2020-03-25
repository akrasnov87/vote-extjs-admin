/**
 * Пользователи
 * @class Core.view.pd_users.ad_tracking___pd_users-collection
 */
Ext.define('Core.view.pd_users.ad_tracking___pd_users-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'ad_tracking___pd_users-collection',
    title: 'Перемещение исполнителя',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'ad_tracking',
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
        stateId: 'ad_tracking___pd_users-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'ad_tracking___pd_users',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'ad_tracking-detailview',
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
            /*** Исполнитель*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'fn_user', 
                text: 'Исполнитель',
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
            /*** Дата*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_date', 
                text: 'Дата',
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
            /*** Долгота*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_longitude',
                text: 'Долгота',
                filter: {
                    type: 'float'
                }
            },
            /*** Широта*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_latitude',
                text: 'Широта',
                filter: {
                    type: 'float'
                }
            },
            /*** Тип сети*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_network_status',
                text: 'Тип сети',
                filter: {
                    type: 'string'
                }
            },
            /*** Географические координаты*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'gx_geodata',
                text: 'Географические координаты',
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
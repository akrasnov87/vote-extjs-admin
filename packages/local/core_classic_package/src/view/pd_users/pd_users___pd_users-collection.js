/**
 * Пользователи
 * @class Core.view.pd_users.pd_users___pd_users-collection
 */
Ext.define('Core.view.pd_users.pd_users___pd_users-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'pd_users___pd_users-collection',
    title: 'Пользователи',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'pd_users',
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
        stateId: 'pd_users___pd_users-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'pd_users___pd_users',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'pd_users-detailview',
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
            /*** Родитель*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_parent', 
                text: 'Родитель',
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
            /*** Логин*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_login',
                text: 'Логин',
                filter: {
                    type: 'string'
                }
            },
            /*** Пароль*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_password',
                text: 'Пароль',
                filter: {
                    type: 'string'
                }
            },
            /*** Salt*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 's_salt',
                text: 'Salt',
                filter: {
                    type: 'string'
                }
            },
            /*** Hash*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 's_hash',
                text: 'Hash',
                filter: {
                    type: 'string'
                }
            },
            /*** Имя*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_firstname',
                text: 'Имя',
                filter: {
                    type: 'string'
                }
            },
            /*** Фамилия*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_lastname',
                text: 'Фамилия',
                filter: {
                    type: 'string'
                }
            },
            /*** Отчество*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_patronymic',
                text: 'Отчество',
                filter: {
                    type: 'string'
                }
            },
            /*** Адрес эл. почты*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_email',
                text: 'Адрес эл. почты',
                filter: {
                    type: 'string'
                }
            },
            /*** Телефон*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_tel',
                text: 'Телефон',
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
            /*** Описание*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_description',
                text: 'Описание',
                filter: {
                    type: 'string'
                }
            },
            /*** Отключен*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_disabled',
                text: 'Отключен',
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
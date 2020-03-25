/**
 * Отделения
 * @class Core.view.sd_divisions.pd_userindivisions___sd_divisions-collection
 */
Ext.define('Core.view.sd_divisions.pd_userindivisions___sd_divisions-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'pd_userindivisions___sd_divisions-collection',
    title: 'Привязка пользователей к отделению или участку',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'pd_userindivisions',
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
        stateId: 'pd_userindivisions___sd_divisions-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'pd_userindivisions___sd_divisions',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'pd_userindivisions-detailview',
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
            /*** Отделение*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_division', 
                text: 'Отделение',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'sd_divisions'
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
            /*** Участок*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_subdivision', 
                text: 'Участок',
                editor: {
                    xtype: 'combobox',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'sd_divisions'
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
            /*** Признак удаленной записи*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'sn_delete',
                text: 'Признак удаленной записи',
                filter: {
                    type: 'bool'
                }
            }
        ]
    }]
});
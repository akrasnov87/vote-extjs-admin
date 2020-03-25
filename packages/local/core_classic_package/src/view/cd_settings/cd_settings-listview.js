/**
 * Настройки 
 * @class Core.view.cd_settings.cd_settings-listview
 */
Ext.define('Core.view.cd_settings.cd_settings-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cd_settings-listview',

    toolbarConfig: {
        title: 'Настройки',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'cd_settings',
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
        stateId: 'cd_settings-listview',
        detailViewName: 'cd_settings-detailview',
        createDetailViewName: 'cd_settings-detailview',
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
            /*** Ключ*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_key',
                text: 'Ключ',
                filter: {
                    type: 'string'
                }
            },
            /*** Значение*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_value',
                text: 'Значение',
                filter: {
                    type: 'string'
                }
            },
            /*** Тип*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_type', 
                text: 'Тип',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cs_setting_types'
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
            /*** Заголовок*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_label',
                text: 'Заголовок',
                filter: {
                    type: 'string'
                }
            },
            /*** Краткое описание*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_summary',
                text: 'Краткое описание',
                filter: {
                    type: 'string'
                }
            },
            /*** Регион*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_division', 
                text: 'Регион',
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
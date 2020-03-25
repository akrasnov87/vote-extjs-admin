/**
 * Действия пользователя 
 * @class Core.view.ad_audits.ad_audits-listview
 */
Ext.define('Core.view.ad_audits.ad_audits-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'ad_audits-listview',

    toolbarConfig: {
        title: 'Действия пользователя',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'ad_audits',
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
        stateId: 'ad_audits-listview',
        detailViewName: 'ad_audits-detailview',
        createDetailViewName: 'ad_audits-detailview',
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
            /*** Дополнительные параметры*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_data',
                text: 'Дополнительные параметры',
                filter: {
                    type: 'string'
                }
            },
            /*** Тип события*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_type',
                text: 'Тип события',
                filter: {
                    type: 'string'
                }
            },
            /*** Имя приложение*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_app_name',
                text: 'Имя приложение',
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
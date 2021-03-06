/**
 * Учетный показатель 
 * @class Core.view.ed_registr_pts.ed_registr_pts-listview
 */
Ext.define('Core.view.ed_registr_pts.ed_registr_pts-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'ed_registr_pts-listview',

    toolbarConfig: {
        title: 'Учетный показатель',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'ed_registr_pts',
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
        stateId: 'ed_registr_pts-listview',
        detailViewName: 'ed_registr_pts-detailview',
        createDetailViewName: 'ed_registr_pts-detailview',
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
            /*** Номер ЛС*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_subscr',
                text: 'Номер ЛС',
                filter: {
                    type: 'string'
                }
            },
            /*** Номер ПУ*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_device',
                text: 'Номер ПУ',
                filter: {
                    type: 'string'
                }
            },
            /*** Номер телефона*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'jb_tel',
                text: 'Номер телефона',
                filter: {
                    type: 'string'
                }
            },
            /*** Эл. почта*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'jb_email',
                text: 'Эл. почта',
                filter: {
                    type: 'string'
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
            /*** Отлючено*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_disabled',
                text: 'Отлючено',
                filter: {
                    type: 'bool'
                }
            },
            /*** Вычисляемое поле*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'gx_geodata',
                text: 'Вычисляемое поле',
                filter: {
                    type: 'string'
                }
            },
            /*** Дата создания*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'dx_created', 
                text: 'Дата создания',
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
            /*** Признак удаленной записи*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'sn_delete',
                text: 'Признак удаленной записи',
                filter: {
                    type: 'bool'
                }
            },
            /*** Адрес*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_address',
                text: 'Адрес',
                filter: {
                    type: 'string'
                }
            },
            /*** ФИО потребителя*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_fio',
                text: 'ФИО потребителя',
                filter: {
                    type: 'string'
                }
            }
        ]
    }]
});
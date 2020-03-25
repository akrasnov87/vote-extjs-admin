/**
 * Точки 
 * @class Core.view.cd_user_points.cd_user_points-listview
 */
Ext.define('Core.view.cd_user_points.cd_user_points-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cd_user_points-listview',

    toolbarConfig: {
        title: 'Точки',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'cd_user_points',
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
        stateId: 'cd_user_points-listview',
        detailViewName: 'cd_user_points-detailview',
        createDetailViewName: 'cd_user_points-detailview',
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
            /*** Точка*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'fn_point', 
                text: 'Точка',
                editor: {
                    xtype: 'combobox',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cd_points'
                    },
                    displayField: 'f_registr_pts',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'f_registr_pts',
                valueField: 'id',
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
            /*** Маршрут*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'fn_route', 
                text: 'Маршрут',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cd_routes'
                    },
                    displayField: 'c_number',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'c_number',
                valueField: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** Тип*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'fn_type', 
                text: 'Тип',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cs_point_types'
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
            /*** Вычисляемое поле*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'gx_geodata',
                text: 'Вычисляемое поле',
                filter: {
                    type: 'string'
                }
            },
            /*** Примечание*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_notice',
                text: 'Примечание',
                filter: {
                    type: 'string'
                }
            },
            /*** Подтверждено*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_check',
                text: 'Подтверждено',
                filter: {
                    type: 'bool'
                }
            },
            /*** JSON данные*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'jb_data',
                text: 'JSON данные',
                filter: {
                    type: 'string'
                }
            },
            /*** Дата подтверждения*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_date_check', 
                text: 'Дата подтверждения',
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
            /*** Дата записи в БД*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'dx_created', 
                text: 'Дата записи в БД',
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
            /*** Дата создания*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_date', 
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
            }
        ]
    }]
});
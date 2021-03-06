/**
 * Тип маршрута
 * @class Core.view.cs_route_types.cd_routes___cs_route_types-collection
 */
Ext.define('Core.view.cs_route_types.cd_routes___cs_route_types-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cd_routes___cs_route_types-collection',
    title: 'Маршруты',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'cd_routes',
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
        stateId: 'cd_routes___cs_route_types-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'cd_routes___cs_route_types',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'cd_routes-detailview',
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
            /*** Тип маршрута*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_type', 
                text: 'Тип маршрута',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cs_route_types'
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
            /*** Номер маршрута*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_number',
                text: 'Номер маршрута',
                filter: {
                    type: 'string'
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
            },
            /*** Дата начала выполнения*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_date_start', 
                text: 'Дата начала выполнения',
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
            /*** Дата завершения выполнения*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_date_end', 
                text: 'Дата завершения выполнения',
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
            /*** Примечание*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_notice',
                text: 'Примечание',
                filter: {
                    type: 'string'
                }
            },
            /*** Продлен*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_extended',
                text: 'Продлен',
                filter: {
                    type: 'bool'
                }
            },
            /*** Продлен до*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_extended', 
                text: 'Продлен до',
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
            /*** JSON данные*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'jb_data',
                text: 'JSON данные',
                filter: {
                    type: 'string'
                }
            },
            /*** Дата создания в БД*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'dx_created', 
                text: 'Дата создания в БД',
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
            /*** Сортировка*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_order',
                text: 'Сортировка',
                filter: {
                    type: 'int'
                }
            }
        ]
    }]
});
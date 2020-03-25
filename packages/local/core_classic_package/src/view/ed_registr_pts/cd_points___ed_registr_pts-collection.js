/**
 * Учетный показатель
 * @class Core.view.ed_registr_pts.cd_points___ed_registr_pts-collection
 */
Ext.define('Core.view.ed_registr_pts.cd_points___ed_registr_pts-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cd_points___ed_registr_pts-collection',
    title: 'Точки',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'cd_points',
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
        stateId: 'cd_points___ed_registr_pts-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'cd_points___ed_registr_pts',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'cd_points-detailview',
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
            /*** Учетный показатель*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_registr_pts', 
                text: 'Учетный показатель',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'ed_registr_pts'
                    },
                    displayField: 'c_address',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'c_address',
                valueField: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** Маршрут*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_route', 
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
            /*** Примечание*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_notice',
                text: 'Примечание',
                filter: {
                    type: 'string'
                }
            },
            /*** Информация*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_info',
                text: 'Информация',
                filter: {
                    type: 'string'
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
/**
 * Улицы 
 * @class Core.view.cs_house.cs_house-listview
 */
Ext.define('Core.view.cs_house.cs_house-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cs_house-listview',

    toolbarConfig: {
        title: 'Улицы',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'cs_house',
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
        stateId: 'cs_house-listview',
        detailViewName: 'cs_house-detailview',
        createDetailViewName: 'cs_house-detailview',
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
            /*** Улица*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_street', 
                text: 'Улица',
                editor: {
                    xtype: 'combobox',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cs_street'
                    },
                    displayField: 'c_type',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'c_type',
                valueField: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** Номер дома*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_house_num',
                text: 'Номер дома',
                filter: {
                    type: 'string'
                }
            },
            /*** Корпус*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_build_num',
                text: 'Корпус',
                filter: {
                    type: 'string'
                }
            },
            /*** Строение*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_struc_num',
                text: 'Строение',
                filter: {
                    type: 'string'
                }
            },
            /*** Дома/квартиры через запятую*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_data',
                text: 'Дома/квартиры через запятую',
                filter: {
                    type: 'string'
                }
            },
            /*** Студенческое общежитие*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_student_hostel',
                text: 'Студенческое общежитие',
                filter: {
                    type: 'bool'
                }
            },
            /*** sn_delete*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'sn_delete',
                text: 'sn_delete',
                filter: {
                    type: 'bool'
                }
            },
            /*** f_user*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_user', 
                text: 'f_user',
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
            /*** c_number*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_number',
                text: 'c_number',
                filter: {
                    type: 'string'
                }
            },
            /*** n_latitude*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_latitude',
                text: 'n_latitude',
                filter: {
                    type: 'float'
                }
            },
            /*** n_longitude*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_longitude',
                text: 'n_longitude',
                filter: {
                    type: 'float'
                }
            },
            /*** n_number*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_number',
                text: 'n_number',
                filter: {
                    type: 'int'
                }
            },
            /*** dx_created*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'dx_created', 
                text: 'dx_created',
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
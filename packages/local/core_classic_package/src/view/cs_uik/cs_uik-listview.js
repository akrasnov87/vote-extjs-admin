/**
 * Избирательный участок 
 * @class Core.view.cs_uik.cs_uik-listview
 */
Ext.define('Core.view.cs_uik.cs_uik-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cs_uik-listview',

    toolbarConfig: {
        title: 'Избирательный участок',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'cs_uik',
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
        stateId: 'cs_uik-listview',
        detailViewName: 'cs_uik-detailview',
        createDetailViewName: 'cs_uik-detailview',
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
            /*** Район*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_area',
                text: 'Район',
                filter: {
                    type: 'string'
                }
            },
            /*** Наименование*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_name',
                text: 'Наименование',
                filter: {
                    type: 'string'
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
            /*** Телефон*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_phone',
                text: 'Телефон',
                filter: {
                    type: 'string'
                }
            },
            /*** Куратор*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_user', 
                text: 'Куратор',
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
            /*** ФИО потребителя*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_boundary',
                text: 'ФИО потребителя',
                filter: {
                    type: 'string'
                }
            },
            /*** Количество избирателей*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_count',
                text: 'Количество избирателей',
                filter: {
                    type: 'int'
                }
            }
        ]
    }]
});
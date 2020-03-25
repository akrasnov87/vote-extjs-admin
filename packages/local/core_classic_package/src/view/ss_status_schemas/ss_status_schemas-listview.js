/**
 * Статусная схема 
 * @class Core.view.ss_status_schemas.ss_status_schemas-listview
 */
Ext.define('Core.view.ss_status_schemas.ss_status_schemas-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'ss_status_schemas-listview',

    toolbarConfig: {
        title: 'Статусная схема',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'ss_status_schemas',
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
        stateId: 'ss_status_schemas-listview',
        detailViewName: 'ss_status_schemas-detailview',
        createDetailViewName: 'ss_status_schemas-detailview',
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
            /*** Начальный статус*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_start', 
                text: 'Начальный статус',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cs_route_statuses'
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
            /*** Конечный статус*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_end', 
                text: 'Конечный статус',
                editor: {
                    xtype: 'combobox',
                    
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cs_route_statuses'
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
            /*** Признак отключенной записи*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_disabled',
                text: 'Признак отключенной записи',
                filter: {
                    type: 'bool'
                }
            }
        ]
    }]
});
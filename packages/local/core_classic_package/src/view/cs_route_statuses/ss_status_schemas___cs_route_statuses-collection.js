/**
 * Тип результат
 * @class Core.view.cs_route_statuses.ss_status_schemas___cs_route_statuses-collection
 */
Ext.define('Core.view.cs_route_statuses.ss_status_schemas___cs_route_statuses-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'ss_status_schemas___cs_route_statuses-collection',
    title: 'Статусная схема',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'ss_status_schemas',
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
        stateId: 'ss_status_schemas___cs_route_statuses-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'ss_status_schemas___cs_route_statuses',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'ss_status_schemas-detailview',
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
/**
 * Улицы
 * @class Core.view.cs_house.cs_apartment___cs_house-collection
 */
Ext.define('Core.view.cs_house.cs_apartment___cs_house-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cs_apartment___cs_house-collection',
    title: 'Квартиры',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'cs_apartment',
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
        stateId: 'cs_apartment___cs_house-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'cs_apartment___cs_house',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'cs_apartment-detailview',
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
            /*** Дом*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_house', 
                text: 'Дом',
                editor: {
                    xtype: 'combobox',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'cs_house'
                    },
                    displayField: 'id',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                displayField: 'id',
                valueField: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** Префикс*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_prefix',
                text: 'Префикс',
                filter: {
                    type: 'string'
                }
            },
            /*** Номер*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_number',
                text: 'Номер',
                filter: {
                    type: 'string'
                }
            },
            /*** Номер*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_number',
                text: 'Номер',
                filter: {
                    type: 'int'
                }
            },
            /*** Собственное*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_custom',
                text: 'Собственное',
                filter: {
                    type: 'bool'
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
            },
            /*** sn_delete*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'sn_delete',
                text: 'sn_delete',
                filter: {
                    type: 'bool'
                }
            }
        ]
    }]
});
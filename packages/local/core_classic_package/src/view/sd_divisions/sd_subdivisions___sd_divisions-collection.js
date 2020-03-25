/**
 * Отделения
 * @class Core.view.sd_divisions.sd_subdivisions___sd_divisions-collection
 */
Ext.define('Core.view.sd_divisions.sd_subdivisions___sd_divisions-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'sd_subdivisions___sd_divisions-collection',
    title: 'Участки',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'sd_subdivisions',
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
        stateId: 'sd_subdivisions___sd_divisions-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'sd_subdivisions___sd_divisions',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'sd_subdivisions-detailview',
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
            /*** Код*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_code',
                text: 'Код',
                filter: {
                    type: 'int'
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
            /*** Отключено*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_disabled',
                text: 'Отключено',
                filter: {
                    type: 'bool'
                }
            }
        ]
    }]
});
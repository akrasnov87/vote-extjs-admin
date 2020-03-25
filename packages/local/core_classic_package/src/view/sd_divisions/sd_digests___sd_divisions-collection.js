/**
 * Отделения
 * @class Core.view.sd_divisions.sd_digests___sd_divisions-collection
 */
Ext.define('Core.view.sd_divisions.sd_digests___sd_divisions-collection', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'sd_digests___sd_divisions-collection',
    title: 'Журнал версий',
    toolbarConfig: {
        refresh: true,
        creatable: false
    },

    items: [{
        xtype: 'listviewsubgrid',
        store: {
            type: 'sd_digests',
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
        stateId: 'sd_digests___sd_divisions-collection',
        /*** дополнительные параметры передаваемые серверу */
        params: {
            viewId: 'sd_digests___sd_divisions',
            recordId: -2147483648 // данный параметр передается внутри
        },

        /**
         * наименование представления которое будет использоваться для карточки
         */
        detailViewName: 'sd_digests-detailview',
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
            /*** Версия*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_version',
                text: 'Версия',
                filter: {
                    type: 'string'
                }
            },
            /*** Описание*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_description',
                text: 'Описание',
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
            /*** Имя приложения*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_app_name',
                text: 'Имя приложения',
                filter: {
                    type: 'string'
                }
            },
            /*** Скрыт*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_hidden',
                text: 'Скрыт',
                filter: {
                    type: 'bool'
                }
            }
        ]
    }]
});
/**
 * Журнал версий 
 * @class Core.view.sd_digests.sd_digests-listview
 */
Ext.define('Core.view.sd_digests.sd_digests-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'sd_digests-listview',

    toolbarConfig: {
        title: 'Журнал версий',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'sd_digests',
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
        stateId: 'sd_digests-listview',
        detailViewName: 'sd_digests-detailview',
        createDetailViewName: 'sd_digests-detailview',
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
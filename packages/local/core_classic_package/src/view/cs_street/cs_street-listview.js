/**
 * Улицы 
 * @class Core.view.cs_street.cs_street-listview
 */
Ext.define('Core.view.cs_street.cs_street-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cs_street-listview',

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
            type: 'cs_street',
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
        stateId: 'cs_street-listview',
        detailViewName: 'cs_street-detailview',
        createDetailViewName: 'cs_street-detailview',
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
            /*** Наименование*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_name',
                text: 'Наименование',
                filter: {
                    type: 'string'
                }
            },
            /*** Тип*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_type',
                text: 'Тип',
                filter: {
                    type: 'string'
                }
            },
            /*** Имя*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_street_name',
                text: 'Имя',
                filter: {
                    type: 'string'
                }
            },
            /*** Имя в yandex*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_yandex_name',
                text: 'Имя в yandex',
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
            }
        ]
    }]
});
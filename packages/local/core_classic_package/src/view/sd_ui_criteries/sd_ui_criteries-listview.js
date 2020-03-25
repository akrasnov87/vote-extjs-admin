/**
 * Критерии 
 * @class Core.view.sd_ui_criteries.sd_ui_criteries-listview
 */
Ext.define('Core.view.sd_ui_criteries.sd_ui_criteries-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'sd_ui_criteries-listview',

    toolbarConfig: {
        title: 'Критерии',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'sd_ui_criteries',
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
        stateId: 'sd_ui_criteries-listview',
        detailViewName: 'sd_ui_criteries-detailview',
        createDetailViewName: 'sd_ui_criteries-detailview',
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
            /*** Идентификатор представления*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_view_id',
                text: 'Идентификатор представления',
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
            /*** Фильтр*/
            {      
                xtype: 'criteriacolumn',
                dataIndex: 'c_filter_criteria',
                text: 'Фильтр',
                filter: {
                    type: 'string'
                }
            },
            /*** JavaScript-функция*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_filter_fn',
                text: 'JavaScript-функция',
                filter: {
                    type: 'string'
                }
            },
            /*** CSS класс*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_cls',
                text: 'CSS класс',
                filter: {
                    type: 'string'
                }
            },
            /*** Стили|Свойства*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_styles',
                text: 'Стили|Свойства',
                filter: {
                    type: 'string'
                }
            },
            /*** Сообщение*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_message',
                text: 'Сообщение',
                filter: {
                    type: 'string'
                }
            },
            /*** Роли*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_roles',
                text: 'Роли',
                filter: {
                    type: 'string'
                }
            },
            /*** Поле*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_field',
                text: 'Поле',
                filter: {
                    type: 'string'
                }
            }
        ]
    }]
});
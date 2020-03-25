/**
 * Навигация 
 * @class Core.view.pd_navigations.pd_navigations-listview
 */
Ext.define('Core.view.pd_navigations.pd_navigations-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'pd_navigations-listview',

    toolbarConfig: {
        title: 'Навигация',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'pd_navigations',
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
        stateId: 'pd_navigations-listview',
        detailViewName: 'pd_navigations-detailview',
        createDetailViewName: 'pd_navigations-detailview',
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
            /*** Тип представления*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_view_type',
                text: 'Тип представления',
                filter: {
                    type: 'string'
                }
            },
            /*** Корневое представление*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_alias',
                text: 'Корневое представление',
                filter: {
                    type: 'string'
                }
            },
            /*** Без дочерних элементов*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_leaf',
                text: 'Без дочерних элементов',
                filter: {
                    type: 'bool'
                }
            },
            /*** Класс иконки*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_icon_cls',
                text: 'Класс иконки',
                filter: {
                    type: 'string'
                }
            },
            /*** Родительская запись*/
            {      
                xtype: 'fcolumn',
                dataIndex: 'f_parent', 
                text: 'Родительская запись',
                editor: {
                    xtype: 'combobox',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    defaultListConfig: {
                        minWidth: 400
                    },
                    store: {
                        type: 'pd_navigations'
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
            /*** Заголовок*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_name',
                text: 'Заголовок',
                filter: {
                    type: 'string'
                }
            },
            /*** Страница по умолчанию*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_default_token',
                text: 'Страница по умолчанию',
                filter: {
                    type: 'bool'
                }
            },
            /*** Тип меню*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_type',
                text: 'Тип меню',
                filter: {
                    type: 'string'
                }
            },
            /*** Видимость*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_visible',
                text: 'Видимость',
                filter: {
                    type: 'bool'
                }
            },
            /*** Иконка в формате base64*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_icon',
                text: 'Иконка в формате base64',
                filter: {
                    type: 'string'
                }
            },
            /*** Выбираемый*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_selectable',
                text: 'Выбираемый',
                filter: {
                    type: 'bool'
                }
            },
            /*** В развернутом виде*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_expanded',
                text: 'В развернутом виде',
                filter: {
                    type: 'bool'
                }
            },
            /*** Сортировка*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_sort',
                text: 'Сортировка',
                filter: {
                    type: 'int'
                }
            },
            /*** Доступен без авторизации*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_not_auth',
                text: 'Доступен без авторизации',
                filter: {
                    type: 'bool'
                }
            },
            /*** Удален*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'sn_delete',
                text: 'Удален',
                filter: {
                    type: 'bool'
                }
            }
        ]
    }]
});
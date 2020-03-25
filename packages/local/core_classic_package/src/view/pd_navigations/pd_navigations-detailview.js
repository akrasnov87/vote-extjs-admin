/**
 * Навигация 
 * @class Core.view.pd_navigations.pd_navigations-detailview
 */
Ext.define('Core.view.pd_navigations.pd_navigations-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'pd_navigations-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.pd_navigations'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.pd_navigations',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'pd_navigations-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'pd_navigations-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Навигация',
        /**
         * описание карточки
         */
         description: ''
    },

    header: false,

    
    layout: {
        type: 'vbox',
        pack: 'start'
    },
    defaults: {
        width: '100%'
    },
    
    items: [{
            xtype: 'form',
            itemId: 'formpanel',
            header: false,
            defaults: {
                width: '100%',
                labelAlign: 'top',
                readOnly: true
            },
            flex: 1,
            scrollable: true,
            items: [
                                /*** Идентификатор*/
                {      
                    xtype: 'displayfield',
                    fieldLabel: 'Идентификатор',
                    submitValue: true,
                    name: 'id'
                },
                                /*** Тип представления*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Тип представления',
                    name: 'c_view_type'
                },
                                /*** Корневое представление*/
                {
                    xtype: 'combobox',
                    fieldLabel: 'Корневое представление',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    store: {
                        type: 'pf_stores',
                        autoLoad: true
                    },
                    queryMode: 'local',
                    displayField: 'table_name',
                    valueField: 'table_name',
                    tpl: Ext.create('Ext.XTemplate',
                        '<ul class="x-list-plain"><tpl for=".">',
                        '<li role="option" class="x-boundlist-item">{table_name} - <i>{table_title}</i></li>',
                        '</tpl></ul>'
                    ),
                    name: 'c_alias',
                    bind: {
                        value: '{c_alias}',
                        readOnly: '{readOnly}'
                    }
                },
                                /*** Без дочерних элементов*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Без дочерних элементов',
                    uncheckedValue: 'off',
                    name: 'b_leaf'
                },
                                /*** Класс иконки*/
                {
                    xtype: 'fontawesomefield',
                    fieldLabel: 'Класс иконки',
                    queryMode: 'local',
                    displayField: 'value',
                    valueField: 'value',
                    forceSelection: true,
                    name: 'c_icon_cls',
                    bind: {
                        value: '{c_icon_cls}',
                        readOnly: '{readOnly}'
                    }
                },
                                /*** Родительская запись*/
                {
                    xtype: 'combobox',
                    name: 'f_parent', 
                    fieldLabel: 'Родительская запись',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    store: {
                        type: 'pd_navigations'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Заголовок*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Заголовок',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_name'
                },
                                /*** Страница по умолчанию*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Страница по умолчанию',
                    uncheckedValue: 'off',
                    name: 'b_default_token'
                },
                                /*** Тип меню*/
                {
                    xtype: 'combobox',
                    fieldLabel: 'Тип меню',
                    store: {
                        data: [{
                            value: 'NAVIGATION'
                        }, {
                            value: 'USER'
                        }]
                    },
                    queryMode: 'local',
                    displayField: 'value',
                    valueField: 'value',
                    name: 'c_type',
                    bind: {
                        value: '{c_type}',
                        readOnly: '{readOnly}'
                    }
                },
                                /*** Видимость*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Видимость',
                    uncheckedValue: 'off',
                    name: 'b_visible'
                },
                                /*** Иконка в формате base64*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Иконка в формате base64',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_icon'
                },
                                /*** Выбираемый*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Выбираемый',
                    uncheckedValue: 'off',
                    name: 'b_selectable'
                },
                                /*** В развернутом виде*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'В развернутом виде',
                    uncheckedValue: 'off',
                    name: 'b_expanded'
                },
                                /*** Сортировка*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Сортировка',
                    name: 'n_sort'
                },
                                /*** Доступен без авторизации*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Доступен без авторизации',
                    uncheckedValue: 'off',
                    name: 'b_not_auth'
                },
                                /*** Удален*/                
                {
                    xtype: 'checkboxfield',
                    name: 'sn_delete', 
                    fieldLabel: 'Удален',
                    uncheckedValue: 'off',
                    bind: {
                        value: '{sn_delete}',
                        readOnly: '{readOnly}'
                    },
                    hidden: true
                }
            ]
        },
        {
            xtype: 'tabcollection',
            collapsible: true,
            collapsed: true,
            title: 'Связи',
            height: 400,
            padding: '10px 0 0 0',
            defaults: {
                layout: 'fit'
            },
            items: [{
                xtype: "pd_navigations___pd_navigations-collection"
            }]
        }
    ]
});
/**
 * Тип маршрута 
 * @class Core.view.cs_route_types.cs_route_types-detailview
 */
Ext.define('Core.view.cs_route_types.cs_route_types-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cs_route_types-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cs_route_types'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cs_route_types',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cs_route_types-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cs_route_types-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Тип маршрута',
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
                                /*** Код*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Код',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_code'
                },
                                /*** Наименование*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Наименование',
                    name: 'c_name'
                },
                                /*** Краткое наименование*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Краткое наименование',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_short_name'
                },
                                /*** Константа*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Константа',
                    name: 'c_const'
                },
                                /*** Сортировка*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Сортировка',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_order'
                },
                                /*** По умолчанию*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'По умолчанию',
                    uncheckedValue: 'off',
                    name: 'b_default'
                },
                                /*** Отключено*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Отключено',
                    uncheckedValue: 'off',
                    name: 'b_disabled'
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
                xtype: "cd_routes___cs_route_types-collection"
            }]
        }
    ]
});
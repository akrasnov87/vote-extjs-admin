/**
 * Тип результат 
 * @class Core.view.cs_route_statuses.cs_route_statuses-detailview
 */
Ext.define('Core.view.cs_route_statuses.cs_route_statuses-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cs_route_statuses-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cs_route_statuses'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cs_route_statuses',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cs_route_statuses-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cs_route_statuses-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Тип результат',
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
                                /*** Приоритет статуса(чем больше число тем выше статус)*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Приоритет статуса(чем больше число тем выше статус)',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_order'
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
                xtype: "ss_status_schemas___cs_route_statuses-collection"
            }, {
                xtype: "ss_status_schemas___cs_route_statuses-collection"
            }, {
                xtype: "cd_route_history___cs_route_statuses-collection"
            }]
        }
    ]
});
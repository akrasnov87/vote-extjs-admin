/**
 * Маршруты 
 * @class Core.view.cd_routes.cd_routes-detailview
 */
Ext.define('Core.view.cd_routes.cd_routes-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cd_routes-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cd_routes'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cd_routes',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cd_routes-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cd_routes-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Маршруты',
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
                    xtype: 'textfield',
                    fieldLabel: 'Идентификатор',
                    name: 'id'
                },
                                /*** Тип маршрута*/
                {
                    xtype: 'combobox',
                    name: 'f_type', 
                    fieldLabel: 'Тип маршрута',
                    
                    store: {
                        type: 'cs_route_types'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Номер маршрута*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Номер маршрута',
                    name: 'c_number'
                },
                                /*** Дата создания*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата создания',
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_date'
                },
                                /*** Дата начала выполнения*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата начала выполнения',
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_date_start'
                },
                                /*** Дата завершения выполнения*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата завершения выполнения',
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_date_end'
                },
                                /*** Примечание*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Примечание',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_notice'
                },
                                /*** Продлен*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Продлен',
                    uncheckedValue: 'off',
                    name: 'b_extended'
                },
                                /*** Продлен до*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Продлен до',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_extended'
                },
                                /*** JSON данные*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'JSON данные',
                    name: 'jb_data'
                },
                                /*** Дата создания в БД*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата создания в БД',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'dx_created'
                },
                                /*** Сортировка*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Сортировка',
                    name: 'n_order'
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
                xtype: "cd_points___cd_routes-collection"
            }, {
                xtype: "cd_userinroutes___cd_routes-collection"
            }, {
                xtype: "cd_route_history___cd_routes-collection"
            }, {
                xtype: "cd_user_points___cd_routes-collection"
            }, {
                xtype: "cd_userinroutes___cd_routes-collection"
            }]
        }
    ]
});
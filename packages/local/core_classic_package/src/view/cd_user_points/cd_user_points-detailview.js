/**
 * Точки 
 * @class Core.view.cd_user_points.cd_user_points-detailview
 */
Ext.define('Core.view.cd_user_points.cd_user_points-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cd_user_points-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cd_user_points'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cd_user_points',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cd_user_points-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cd_user_points-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Точки',
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
                                /*** Точка*/
                {
                    xtype: 'combobox',
                    name: 'fn_point', 
                    fieldLabel: 'Точка',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    store: {
                        type: 'cd_points'
                    },
                    displayField: 'f_registr_pts',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Пользователь*/
                {
                    xtype: 'combobox',
                    name: 'fn_user', 
                    fieldLabel: 'Пользователь',
                    
                    store: {
                        type: 'pd_users'
                    },
                    displayField: 'c_login',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Маршрут*/
                {
                    xtype: 'combobox',
                    name: 'fn_route', 
                    fieldLabel: 'Маршрут',
                    
                    store: {
                        type: 'cd_routes'
                    },
                    displayField: 'c_number',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Тип*/
                {
                    xtype: 'combobox',
                    name: 'fn_type', 
                    fieldLabel: 'Тип',
                    
                    store: {
                        type: 'cs_point_types'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Номер телефона*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Номер телефона',
                    name: 'jb_tel'
                },
                                /*** Эл. почта*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Эл. почта',
                    name: 'jb_email'
                },
                                /*** Долгота*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Долгота',
                    name: 'n_longitude'
                },
                                /*** Широта*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Широта',
                    name: 'n_latitude'
                },
                                /*** Вычисляемое поле*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Вычисляемое поле',
                    name: 'gx_geodata'
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
                                /*** Подтверждено*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Подтверждено',
                    uncheckedValue: 'off',
                    name: 'b_check'
                },
                                /*** JSON данные*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'JSON данные',
                    name: 'jb_data'
                },
                                /*** Дата подтверждения*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата подтверждения',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_date_check'
                },
                                /*** Дата записи в БД*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата записи в БД',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'dx_created'
                },
                                /*** Дата создания*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата создания',
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_date'
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
                xtype: "cd_results___cd_user_points-collection"
            }]
        }
    ]
});
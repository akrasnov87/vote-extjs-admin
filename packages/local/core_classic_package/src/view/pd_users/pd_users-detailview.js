/**
 * Пользователи 
 * @class Core.view.pd_users.pd_users-detailview
 */
Ext.define('Core.view.pd_users.pd_users-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'pd_users-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.pd_users'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.pd_users',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'pd_users-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'pd_users-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Пользователи',
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
                                /*** Родитель*/
                {
                    xtype: 'combobox',
                    name: 'f_parent', 
                    fieldLabel: 'Родитель',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    store: {
                        type: 'pd_users'
                    },
                    displayField: 'c_login',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Логин*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Логин',
                    name: 'c_login'
                },
                                /*** Пароль*/                
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Пароль',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_password',
                    hidden: true,
                    listeners: {
                        change: function (sender, value) {
                            if (!value) {
                                sender.hide();
                            } else {
                                sender.show();
                            }
                        }
                    }
                },
                                /*** Salt*/                
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Salt',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 's_salt',
                    hidden: true,
                    listeners: {
                        change: function (sender, value) {
                            if (!value) {
                                sender.hide();
                            } else {
                                sender.show();
                            }
                        }
                    }
                },
                                /*** Hash*/                
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Hash',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 's_hash',
                    hidden: true,
                    listeners: {
                        change: function (sender, value) {
                            if (!value) {
                                sender.hide();
                            } else {
                                sender.show();
                            }
                        }
                    }
                },
                                /*** Имя*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Имя',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_firstname'
                },
                                /*** Фамилия*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Фамилия',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_lastname'
                },
                                /*** Отчество*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Отчество',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_patronymic'
                },
                                /*** Адрес эл. почты*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Адрес эл. почты',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_email'
                },
                                /*** Телефон*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Телефон',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_tel'
                },
                                /*** IMEI*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'IMEI',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_imei'
                },
                                /*** Описание*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Описание',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_description'
                },
                                /*** Отключен*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Отключен',
                    uncheckedValue: 'off',
                    name: 'b_disabled'
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
                xtype: "cd_settings___pd_users-collection"
            }, {
                xtype: "cd_userinroutes___pd_users-collection"
            }, {
                xtype: "cs_house___pd_users-collection"
            }, {
                xtype: "cs_uik___pd_users-collection"
            }, {
                xtype: "ed_registr_pts___pd_users-collection"
            }, {
                xtype: "pd_accesses___pd_users-collection"
            }, {
                xtype: "pd_userindivisions___pd_users-collection"
            }, {
                xtype: "pd_userinroles___pd_users-collection"
            }, {
                xtype: "pd_users___pd_users-collection"
            }, {
                xtype: "cd_route_history___pd_users-collection"
            }, {
                xtype: "cd_user_points___pd_users-collection"
            }, {
                xtype: "cd_results___pd_users-collection"
            }, {
                xtype: "cd_userinroutes___pd_users-collection"
            }, {
                xtype: "ad_mobile_indicators___pd_users-collection"
            }, {
                xtype: "ad_tracking___pd_users-collection"
            }, {
                xtype: "ad_mobile_devices___pd_users-collection"
            }, {
                xtype: "ad_audits___pd_users-collection"
            }, {
                xtype: "sd_client_errors___pd_users-collection"
            }]
        }
    ]
});
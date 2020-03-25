/**
 * Информация о мобильных устройствах 
 * @class Core.view.ad_mobile_devices.ad_mobile_devices-detailview
 */
Ext.define('Core.view.ad_mobile_devices.ad_mobile_devices-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'ad_mobile_devices-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.ad_mobile_devices'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.ad_mobile_devices',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'ad_mobile_devices-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'ad_mobile_devices-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Информация о мобильных устройствах',
        /**
         * описание карточки
         */
         description: ''
    },

    header: false,

    scrollable: true,
    items: [{
            xtype: 'form',
            itemId: 'formpanel',
            header: false,
            defaults: {
                width: '100%',
                labelAlign: 'top',
                readOnly: true
            },
            items: [
                                /*** Идентификатор*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Идентификатор',
                    name: 'id'
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
                                /*** Дата возникновения событий*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата возникновения событий',
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_date'
                },
                                /*** Режим отладки*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Режим отладки',
                    uncheckedValue: 'off',
                    name: 'b_debug'
                },
                                /*** Архитектура устройства*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Архитектура устройства',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_architecture'
                },
                                /*** Модель телефона*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Модель телефона',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_phone_model'
                },
                                /*** Версия sdk*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Версия sdk',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_sdk'
                },
                                /*** Версия ОС*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Версия ОС',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_os'
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
                                /*** Версия приложения*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Версия приложения',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_application_version'
                },
                                /*** Создан в БД*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Создан в БД',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'dx_created'
                }
            ]
        }]
});
/**
 * Показатели мобильного устройства 
 * @class Core.view.ad_mobile_indicators.ad_mobile_indicators-detailview
 */
Ext.define('Core.view.ad_mobile_indicators.ad_mobile_indicators-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'ad_mobile_indicators-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.ad_mobile_indicators'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.ad_mobile_indicators',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'ad_mobile_indicators-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'ad_mobile_indicators-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Показатели мобильного устройства',
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
                                /*** Дата события*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата события',
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_date'
                },
                                /*** Тип сети*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Тип сети',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_network_type'
                },
                                /*** Состояние подключения к сети интернет*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Состояние подключения к сети интернет',
                    uncheckedValue: 'off',
                    name: 'b_isonline'
                },
                                /*** Размер ОЗУ*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Размер ОЗУ',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_ram'
                },
                                /*** Размер используемого ОЗУ*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Размер используемого ОЗУ',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_used_ram'
                },
                                /*** Размер внутренней памяти*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Размер внутренней памяти',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_phone_memory'
                },
                                /*** Размер используемой внутренней памяти*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Размер используемой внутренней памяти',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_used_phone_memory'
                },
                                /*** Размер внешней памяти*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Размер внешней памяти',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_sd_card_memory'
                },
                                /*** Размер используемой внешей памяти*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Размер используемой внешей памяти',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_used_sd_card_memory'
                },
                                /*** Уровень заряда батареи*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Уровень заряда батареи',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_battery_level'
                },
                                /*** Смещение времени*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Смещение времени',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_time'
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
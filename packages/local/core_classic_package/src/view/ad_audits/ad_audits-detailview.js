/**
 * Действия пользователя 
 * @class Core.view.ad_audits.ad_audits-detailview
 */
Ext.define('Core.view.ad_audits.ad_audits-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'ad_audits-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.ad_audits'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.ad_audits',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'ad_audits-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'ad_audits-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Действия пользователя',
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
                    xtype: 'displayfield',
                    fieldLabel: 'Идентификатор',
                    submitValue: true,
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
                                /*** Дополнительные параметры*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Дополнительные параметры',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_data'
                },
                                /*** Тип события*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Тип события',
                    name: 'c_type'
                },
                                /*** Имя приложение*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Имя приложение',
                    name: 'c_app_name'
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
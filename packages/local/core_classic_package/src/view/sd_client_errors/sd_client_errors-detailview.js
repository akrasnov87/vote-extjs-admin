/**
 * Клиентские ошибки 
 * @class Core.view.sd_client_errors.sd_client_errors-detailview
 */
Ext.define('Core.view.sd_client_errors.sd_client_errors-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'sd_client_errors-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.sd_client_errors'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.sd_client_errors',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'sd_client_errors-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'sd_client_errors-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Клиентские ошибки',
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
                                /*** Текст ошибки*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Текст ошибки',
                    name: 'c_message'
                },
                                /*** Код ошибки*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Код ошибки',
                    name: 'c_code'
                },
                                /*** Дата возникновения ошибки*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата возникновения ошибки',
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_created'
                },
                                /*** Идентификатор пользователя*/
                {
                    xtype: 'combobox',
                    name: 'fn_user', 
                    fieldLabel: 'Идентификатор пользователя',
                    
                    store: {
                        type: 'pd_users'
                    },
                    displayField: 'c_login',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Версия приложения*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Версия приложения',
                    name: 'c_version'
                },
                                /*** Тип платформы*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Тип платформы',
                    name: 'c_platform'
                },
                                /*** Прочии данные*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Прочии данные',
                    name: 'jb_data'
                },
                                /*** Дата записи на сервере*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата записи на сервере',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'dx_date'
                }
            ]
        }]
});
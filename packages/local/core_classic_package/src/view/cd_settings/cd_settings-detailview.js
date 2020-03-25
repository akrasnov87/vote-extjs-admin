/**
 * Настройки 
 * @class Core.view.cd_settings.cd_settings-detailview
 */
Ext.define('Core.view.cd_settings.cd_settings-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cd_settings-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cd_settings'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cd_settings',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cd_settings-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cd_settings-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Настройки',
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
                                /*** Ключ*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Ключ',
                    name: 'c_key'
                },
                                /*** Значение*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Значение',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_value'
                },
                                /*** Тип*/
                {
                    xtype: 'combobox',
                    name: 'f_type', 
                    fieldLabel: 'Тип',
                    
                    store: {
                        type: 'cs_setting_types'
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
                    name: 'c_label'
                },
                                /*** Краткое описание*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Краткое описание',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_summary'
                },
                                /*** Регион*/
                {
                    xtype: 'combobox',
                    name: 'f_division', 
                    fieldLabel: 'Регион',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    store: {
                        type: 'sd_divisions'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Пользователь*/
                {
                    xtype: 'combobox',
                    name: 'f_user', 
                    fieldLabel: 'Пользователь',
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
        }]
});
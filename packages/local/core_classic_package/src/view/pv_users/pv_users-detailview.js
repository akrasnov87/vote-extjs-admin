/**
 * Открытый список пользователей 
 * @class Core.view.pv_users.pv_users-detailview
 */
Ext.define('Core.view.pv_users.pv_users-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'pv_users-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.pv_users'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.pv_users',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'pv_users-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'pv_users-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Открытый список пользователей',
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
                                /*** c_all_divisions*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_all_divisions',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_all_divisions'
                },
                                /*** c_lastname*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_lastname',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_lastname'
                },
                                /*** c_claims*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_claims',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_claims'
                },
                                /*** c_description*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_description',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_description'
                },
                                /*** c_divisions*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_divisions',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_divisions'
                },
                                /*** c_email*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_email',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_email'
                },
                                /*** c_firstname*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_firstname',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_firstname'
                },
                                /*** b_disabled*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'b_disabled',
                    uncheckedValue: 'off',
                    name: 'b_disabled'
                },
                                /*** c_login*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_login',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_login'
                },
                                /*** c_patronymic*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_patronymic',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_patronymic'
                },
                                /*** c_subdivisions*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_subdivisions',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_subdivisions'
                },
                                /*** c_tel*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_tel',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_tel'
                },
                                /*** f_parent*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'f_parent',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'f_parent'
                },
                                /*** id*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'id',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'id'
                }
            ]
        }]
});
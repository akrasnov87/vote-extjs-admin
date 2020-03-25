/**
 * Закрытый список пользователей 
 * @class Core.view.sv_users.sv_users-detailview
 */
Ext.define('Core.view.sv_users.sv_users-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'sv_users-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.sv_users'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.sv_users',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'sv_users-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'sv_users-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Закрытый список пользователей',
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
                                /*** b_disabled*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'b_disabled',
                    uncheckedValue: 'off',
                    name: 'b_disabled'
                },
                                /*** c_all_divisions*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_all_divisions',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_all_divisions'
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
                                /*** c_login*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_login',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_login'
                },
                                /*** c_password*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_password',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_password'
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
                },
                                /*** s_hash*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 's_hash',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 's_hash'
                },
                                /*** s_salt*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 's_salt',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 's_salt'
                }
            ]
        }]
});
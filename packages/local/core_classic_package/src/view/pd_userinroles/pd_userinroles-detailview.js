/**
 * Пользователи в ролях 
 * @class Core.view.pd_userinroles.pd_userinroles-detailview
 */
Ext.define('Core.view.pd_userinroles.pd_userinroles-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'pd_userinroles-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.pd_userinroles'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.pd_userinroles',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'pd_userinroles-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'pd_userinroles-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Пользователи в ролях',
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
                    name: 'f_user', 
                    fieldLabel: 'Пользователь',
                    
                    store: {
                        type: 'pd_users'
                    },
                    displayField: 'c_login',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Роль*/
                {
                    xtype: 'combobox',
                    name: 'f_role', 
                    fieldLabel: 'Роль',
                    
                    store: {
                        type: 'pd_roles'
                    },
                    displayField: 'c_name',
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
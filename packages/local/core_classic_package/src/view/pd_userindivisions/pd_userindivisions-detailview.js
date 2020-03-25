/**
 * Привязка пользователей к отделению или участку 
 * @class Core.view.pd_userindivisions.pd_userindivisions-detailview
 */
Ext.define('Core.view.pd_userindivisions.pd_userindivisions-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'pd_userindivisions-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.pd_userindivisions'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.pd_userindivisions',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'pd_userindivisions-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'pd_userindivisions-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Привязка пользователей к отделению или участку',
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
                                /*** Отделение*/
                {
                    xtype: 'combobox',
                    name: 'f_division', 
                    fieldLabel: 'Отделение',
                    
                    store: {
                        type: 'sd_divisions'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Участок*/
                {
                    xtype: 'combobox',
                    name: 'f_subdivision', 
                    fieldLabel: 'Участок',
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
                                /*** Признак удаленной записи*/                
                {
                    xtype: 'checkboxfield',
                    name: 'sn_delete', 
                    fieldLabel: 'Признак удаленной записи',
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
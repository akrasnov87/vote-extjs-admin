/**
 * Исполнители задания 
 * @class Core.view.cd_userinroutes.cd_userinroutes-detailview
 */
Ext.define('Core.view.cd_userinroutes.cd_userinroutes-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cd_userinroutes-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cd_userinroutes'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cd_userinroutes',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cd_userinroutes-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cd_userinroutes-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Исполнители задания',
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
                                /*** Идентифиактор*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Идентифиактор',
                    name: 'id'
                },
                                /*** Маршрут*/
                {
                    xtype: 'combobox',
                    name: 'f_route', 
                    fieldLabel: 'Маршрут',
                    
                    store: {
                        type: 'cd_routes'
                    },
                    displayField: 'c_number',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
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
                                /*** Является главным*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Является главным',
                    uncheckedValue: 'off',
                    name: 'b_main'
                },
                                /*** Дата создания в БД*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата создания в БД',
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
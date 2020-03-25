/**
 * История изменения статусов заданий 
 * @class Core.view.cd_route_history.cd_route_history-detailview
 */
Ext.define('Core.view.cd_route_history.cd_route_history-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cd_route_history-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cd_route_history'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cd_route_history',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cd_route_history-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cd_route_history-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'История изменения статусов заданий',
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
                                /*** Задание*/
                {
                    xtype: 'combobox',
                    name: 'fn_route', 
                    fieldLabel: 'Задание',
                    
                    store: {
                        type: 'cd_routes'
                    },
                    displayField: 'c_number',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Статус*/
                {
                    xtype: 'combobox',
                    name: 'fn_status', 
                    fieldLabel: 'Статус',
                    
                    store: {
                        type: 'cs_route_statuses'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
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
                                /*** Дата изменения*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата изменения',
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_date'
                },
                                /*** Примечание*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Примечание',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_notice'
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
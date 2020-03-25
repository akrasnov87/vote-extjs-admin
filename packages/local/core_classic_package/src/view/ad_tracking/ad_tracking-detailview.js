/**
 * Перемещение исполнителя 
 * @class Core.view.ad_tracking.ad_tracking-detailview
 */
Ext.define('Core.view.ad_tracking.ad_tracking-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'ad_tracking-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.ad_tracking'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.ad_tracking',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'ad_tracking-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'ad_tracking-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Перемещение исполнителя',
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
                                /*** Исполнитель*/
                {
                    xtype: 'combobox',
                    name: 'fn_user', 
                    fieldLabel: 'Исполнитель',
                    
                    store: {
                        type: 'pd_users'
                    },
                    displayField: 'c_login',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Дата*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата',
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_date'
                },
                                /*** Долгота*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Долгота',
                    name: 'n_longitude'
                },
                                /*** Широта*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Широта',
                    name: 'n_latitude'
                },
                                /*** Тип сети*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Тип сети',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_network_status'
                },
                                /*** Географические координаты*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Географические координаты',
                    name: 'gx_geodata'
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
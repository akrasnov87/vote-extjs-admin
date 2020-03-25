/**
 * Точки 
 * @class Core.view.cd_points.cd_points-detailview
 */
Ext.define('Core.view.cd_points.cd_points-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cd_points-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cd_points'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cd_points',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cd_points-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cd_points-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Точки',
        /**
         * описание карточки
         */
         description: ''
    },

    header: false,

    
    layout: {
        type: 'vbox',
        pack: 'start'
    },
    defaults: {
        width: '100%'
    },
    
    items: [{
            xtype: 'form',
            itemId: 'formpanel',
            header: false,
            defaults: {
                width: '100%',
                labelAlign: 'top',
                readOnly: true
            },
            flex: 1,
            scrollable: true,
            items: [
                                /*** Идентификатор*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Идентификатор',
                    name: 'id'
                },
                                /*** Учетный показатель*/
                {
                    xtype: 'combobox',
                    name: 'f_registr_pts', 
                    fieldLabel: 'Учетный показатель',
                    
                    store: {
                        type: 'ed_registr_pts'
                    },
                    displayField: 'c_address',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
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
                                /*** Примечание*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Примечание',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_notice'
                },
                                /*** Информация*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Информация',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_info'
                },
                                /*** JSON данные*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'JSON данные',
                    name: 'jb_data'
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
                },
                                /*** Сортировка*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Сортировка',
                    name: 'n_order'
                }
            ]
        },
        {
            xtype: 'tabcollection',
            collapsible: true,
            collapsed: true,
            title: 'Связи',
            height: 400,
            padding: '10px 0 0 0',
            defaults: {
                layout: 'fit'
            },
            items: [{
                xtype: "cd_user_points___cd_points-collection"
            }]
        }
    ]
});
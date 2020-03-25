/**
 * Учетный показатель 
 * @class Core.view.ed_registr_pts.ed_registr_pts-detailview
 */
Ext.define('Core.view.ed_registr_pts.ed_registr_pts-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'ed_registr_pts-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.ed_registr_pts'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.ed_registr_pts',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'ed_registr_pts-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'ed_registr_pts-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Учетный показатель',
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
                                /*** Номер ЛС*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Номер ЛС',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_subscr'
                },
                                /*** Номер ПУ*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Номер ПУ',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_device'
                },
                                /*** Номер телефона*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Номер телефона',
                    name: 'jb_tel'
                },
                                /*** Эл. почта*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Эл. почта',
                    name: 'jb_email'
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
                                /*** Отлючено*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Отлючено',
                    uncheckedValue: 'off',
                    name: 'b_disabled'
                },
                                /*** Вычисляемое поле*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Вычисляемое поле',
                    name: 'gx_geodata'
                },
                                /*** Дата создания*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата создания',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'dx_created'
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
                },
                                /*** Адрес*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Адрес',
                    name: 'c_address'
                },
                                /*** ФИО потребителя*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'ФИО потребителя',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_fio'
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
                xtype: "cd_points___ed_registr_pts-collection"
            }]
        }
    ]
});
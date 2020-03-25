/**
 * Улицы 
 * @class Core.view.cs_house.cs_house-detailview
 */
Ext.define('Core.view.cs_house.cs_house-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cs_house-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cs_house'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cs_house',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cs_house-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cs_house-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Улицы',
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
                                /*** Улица*/
                {
                    xtype: 'combobox',
                    name: 'f_street', 
                    fieldLabel: 'Улица',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    store: {
                        type: 'cs_street'
                    },
                    displayField: 'c_type',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Номер дома*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Номер дома',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_house_num'
                },
                                /*** Корпус*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Корпус',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_build_num'
                },
                                /*** Строение*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Строение',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_struc_num'
                },
                                /*** Дома/квартиры через запятую*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Дома/квартиры через запятую',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_data'
                },
                                /*** Студенческое общежитие*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Студенческое общежитие',
                    uncheckedValue: 'off',
                    name: 'b_student_hostel'
                },
                                /*** sn_delete*/                
                {
                    xtype: 'checkboxfield',
                    name: 'sn_delete', 
                    fieldLabel: 'sn_delete',
                    uncheckedValue: 'off',
                    bind: {
                        value: '{sn_delete}',
                        readOnly: '{readOnly}'
                    },
                    hidden: true
                },
                                /*** f_user*/
                {
                    xtype: 'combobox',
                    name: 'f_user', 
                    fieldLabel: 'f_user',
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
                                /*** c_number*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_number',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_number'
                },
                                /*** n_latitude*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'n_latitude',
                    name: 'n_latitude'
                },
                                /*** n_longitude*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'n_longitude',
                    name: 'n_longitude'
                },
                                /*** n_number*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'n_number',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_number'
                },
                                /*** dx_created*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'dx_created',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'dx_created'
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
                xtype: "cs_apartment___cs_house-collection"
            }]
        }
    ]
});
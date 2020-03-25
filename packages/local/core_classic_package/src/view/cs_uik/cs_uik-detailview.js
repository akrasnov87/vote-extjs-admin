/**
 * Избирательный участок 
 * @class Core.view.cs_uik.cs_uik-detailview
 */
Ext.define('Core.view.cs_uik.cs_uik-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cs_uik-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cs_uik'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cs_uik',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cs_uik-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cs_uik-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Избирательный участок',
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
                                /*** Район*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Район',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_area'
                },
                                /*** Наименование*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Наименование',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_name'
                },
                                /*** Адрес*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Адрес',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_address'
                },
                                /*** Телефон*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Телефон',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_phone'
                },
                                /*** Куратор*/
                {
                    xtype: 'combobox',
                    name: 'f_user', 
                    fieldLabel: 'Куратор',
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
                                /*** ФИО потребителя*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'ФИО потребителя',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_boundary'
                },
                                /*** Количество избирателей*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Количество избирателей',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_count'
                }
            ]
        }]
});
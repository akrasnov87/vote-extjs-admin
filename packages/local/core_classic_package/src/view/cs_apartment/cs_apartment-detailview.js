/**
 * Квартиры 
 * @class Core.view.cs_apartment.cs_apartment-detailview
 */
Ext.define('Core.view.cs_apartment.cs_apartment-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cs_apartment-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cs_apartment'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cs_apartment',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cs_apartment-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cs_apartment-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Квартиры',
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
                                /*** Дом*/
                {
                    xtype: 'combobox',
                    name: 'f_house', 
                    fieldLabel: 'Дом',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    store: {
                        type: 'cs_house'
                    },
                    displayField: 'id',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Префикс*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Префикс',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_prefix'
                },
                                /*** Номер*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Номер',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_number'
                },
                                /*** Номер*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Номер',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_number'
                },
                                /*** Собственное*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Собственное',
                    uncheckedValue: 'off',
                    name: 'b_custom'
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
                }
            ]
        }]
});
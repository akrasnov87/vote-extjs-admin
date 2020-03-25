/**
 * Улицы 
 * @class Core.view.cs_street.cs_street-detailview
 */
Ext.define('Core.view.cs_street.cs_street-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cs_street-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cs_street'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cs_street',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cs_street-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cs_street-listview'
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
                                /*** Наименование*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Наименование',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_name'
                },
                                /*** Тип*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Тип',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_type'
                },
                                /*** Имя*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Имя',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_street_name'
                },
                                /*** Имя в yandex*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Имя в yandex',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_yandex_name'
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
                xtype: "cs_house___cs_street-collection"
            }]
        }
    ]
});
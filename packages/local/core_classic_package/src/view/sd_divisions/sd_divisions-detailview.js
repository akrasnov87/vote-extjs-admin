/**
 * Отделения 
 * @class Core.view.sd_divisions.sd_divisions-detailview
 */
Ext.define('Core.view.sd_divisions.sd_divisions-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'sd_divisions-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.sd_divisions'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.sd_divisions',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'sd_divisions-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'sd_divisions-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Отделения',
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
                    xtype: 'displayfield',
                    fieldLabel: 'Идентификатор',
                    submitValue: true,
                    name: 'id'
                },
                                /*** Вышестоящее отделение*/
                {
                    xtype: 'combobox',
                    name: 'f_division', 
                    fieldLabel: 'Вышестоящее отделение',
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
                                /*** Наименование*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Наименование',
                    name: 'c_name'
                },
                                /*** Код отделения (филиала)*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Код отделения (филиала)',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_dep_code'
                },
                                /*** Код*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Код',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_code'
                },
                                /*** Отключено*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Отключено',
                    uncheckedValue: 'off',
                    name: 'b_disabled'
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
                xtype: "cd_settings___sd_divisions-collection"
            }, {
                xtype: "ed_registr_pts___sd_divisions-collection"
            }, {
                xtype: "ed_registr_pts___sd_divisions-collection"
            }, {
                xtype: "pd_userindivisions___sd_divisions-collection"
            }, {
                xtype: "pd_userindivisions___sd_divisions-collection"
            }, {
                xtype: "sd_digests___sd_divisions-collection"
            }, {
                xtype: "sd_divisions___sd_divisions-collection"
            }, {
                xtype: "sd_subdivisions___sd_divisions-collection"
            }]
        }
    ]
});
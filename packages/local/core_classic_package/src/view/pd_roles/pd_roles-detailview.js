/**
 * Роли 
 * @class Core.view.pd_roles.pd_roles-detailview
 */
Ext.define('Core.view.pd_roles.pd_roles-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'pd_roles-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.pd_roles'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.pd_roles',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'pd_roles-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'pd_roles-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Роли',
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
                                /*** Наименование*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Наименование',
                    name: 'c_name'
                },
                                /*** Описание роли*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Описание роли',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_description'
                },
                                /*** Приоритет*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Приоритет',
                    name: 'n_weight'
                },
                                /*** Удален*/                
                {
                    xtype: 'checkboxfield',
                    name: 'sn_delete', 
                    fieldLabel: 'Удален',
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
                xtype: "pd_accesses___pd_roles-collection"
            }, {
                xtype: "pd_userinroles___pd_roles-collection"
            }]
        }
    ]
});
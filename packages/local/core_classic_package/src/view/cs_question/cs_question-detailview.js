/**
 * Речевой модуль 
 * @class Core.view.cs_question.cs_question-detailview
 */
Ext.define('Core.view.cs_question.cs_question-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cs_question-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cs_question'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cs_question',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cs_question-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cs_question-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Речевой модуль',
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
                                /*** Заголовок*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Заголовок',
                    name: 'c_title'
                },
                                /*** Описание*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Описание',
                    name: 'c_description'
                },
                                /*** Текст*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Текст',
                    name: 'c_text'
                },
                                /*** Сортировка*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Сортировка',
                    name: 'n_order'
                },
                                /*** Отключить*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Отключить',
                    uncheckedValue: 'off',
                    name: 'b_disabled'
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
                xtype: "cs_answer___cs_question-collection"
            }, {
                xtype: "cs_answer___cs_question-collection"
            }]
        }
    ]
});
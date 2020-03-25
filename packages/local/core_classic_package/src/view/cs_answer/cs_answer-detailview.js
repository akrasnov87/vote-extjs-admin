/**
 * Речевой модуль 
 * @class Core.view.cs_answer.cs_answer-detailview
 */
Ext.define('Core.view.cs_answer.cs_answer-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cs_answer-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cs_answer'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cs_answer',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cs_answer-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cs_answer-listview'
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
                                /*** Текст*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Текст',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_text'
                },
                                /*** Вопрос*/
                {
                    xtype: 'combobox',
                    name: 'f_question', 
                    fieldLabel: 'Вопрос',
                    
                    store: {
                        type: 'cs_question'
                    },
                    displayField: 'id',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Следующий вопрос*/
                {
                    xtype: 'combobox',
                    name: 'f_next_question', 
                    fieldLabel: 'Следующий вопрос',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    store: {
                        type: 'cs_question'
                    },
                    displayField: 'id',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
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
        }]
});
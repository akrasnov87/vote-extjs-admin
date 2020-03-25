/**
 * Операции 
 * @class Core.view.sd_ui_actions.sd_ui_actions-detailview
 */
Ext.define('Core.view.sd_ui_actions.sd_ui_actions-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'sd_ui_actions-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.sd_ui_actions'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.sd_ui_actions',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'sd_ui_actions-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'sd_ui_actions-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Операции',
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
                                /*** Идентификатор представления*/
                {
                    xtype: 'combobox',
                    fieldLabel: 'Идентификатор представления',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    store: {
                        type: 'pf_stores',
                        autoLoad: true
                    },
                    queryMode: 'local',
                    displayField: 'table_name',
                    valueField: 'table_name',
                    tpl: Ext.create('Ext.XTemplate',
                        '<ul class="x-list-plain"><tpl for=".">',
                        '<li role="option" class="x-boundlist-item">{table_name} - <i>{table_title}</i></li>',
                        '</tpl></ul>'
                    ),
                    name: 'c_view_id',
                    bind: {
                        value: '{c_view_id}',
                        readOnly: '{readOnly}'
                    }
                },
                                /*** Имя команды*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Имя команды',
                    name: 'c_text'
                },
                                /*** Иконка*/
                {
                    xtype: 'fontawesomefield',
                    fieldLabel: 'Иконка',
                    queryMode: 'local',
                    displayField: 'value',
                    valueField: 'value',
                    forceSelection: true,
                    name: 'c_icon',
                    bind: {
                        value: '{c_icon}',
                        readOnly: '{readOnly}'
                    }
                },
                                /*** Метод*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Метод',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_operation'
                },
                                /*** Представление*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Представление',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_action_view'
                },
                                /*** Тип операции*/
                {
                    xtype: 'combobox',
                    fieldLabel: 'Тип операции',
                    store: {
                        data: [{
                            value: 'operationitem',
                            text: 'Элемент меню'
                        }, {
                            value: 'operationbutton',
                            text: 'Кнопка'
                        }, {
                            value: 'actionoperationbutton',
                            text: 'Кнопка с выводом формы'
                        }, {
                            value: 'actionoperationitem',
                            text: 'Элемент меню с выводом формы'
                        }, {
                            value: 'socketoperationbutton',
                            text: 'socketoperationbutton'
                        }, {
                            value: 'socketoperationitem',
                            text: 'socketoperationbutton'
                        }, {
                            value: 'operationsplitbutton',
                            text: 'Группированная кнопка'
                        }]
                    },
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    name: 'c_xtype',
                    bind: {
                        value: '{c_xtype}',
                        readOnly: '{readOnly}'
                    }
                },
                                /*** Место установки*/
                {
                    xtype: 'combobox',
                    fieldLabel: 'Место установки',
                    store: {
                        data: [{
                            value: 'DEFAULT'
                        }, {
                            value: 'BEFORE_ACTIONS'
                        }, {
                            value: 'AFTER_ACTIONS'
                        }]
                    },
                    queryMode: 'local',
                    displayField: 'value',
                    valueField: 'value',
                    name: 'c_place',
                    bind: {
                        value: '{c_place}',
                        readOnly: '{readOnly}'
                    }
                },
                                /*** Сортировка по умолчанию*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Сортировка по умолчанию',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_sort'
                },
                                /*** Описание операции*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Описание операции',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_tooltip'
                },
                                /*** Стиль*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Стиль',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_ui'
                },
                                /*** Родительский элемент*/
                {
                    xtype: 'combobox',
                    name: 'f_parent', 
                    fieldLabel: 'Родительский элемент',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    store: {
                        type: 'sd_ui_actions'
                    },
                    displayField: 'c_text',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Условие выполнения*/
                {
                    xtype: 'combobox',
                    fieldLabel: 'Условие выполнения',
                    store: {
                        data: [{
                            value: 'independent',
                            text: 'Без разницы сколько записей выбрано'
                        }, {
                            value: 'requireMultipleObjects',
                            text: 'Должна быть выбрана одна или более записей'
                        }, {
                            value: 'requireSingleObject',
                            text: 'Должна быть выбрана одна запись'
                        }]
                    },
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    name: 'c_selectiondependencytype',
                    bind: {
                        value: '{c_selectiondependencytype}',
                        readOnly: '{readOnly}'
                    }
                },
                                /*** Сообщение с текстом перед выполнением*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Сообщение с текстом перед выполнением',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_confirmationmessage'
                },
                                /*** JavaScript-функция*/
                {
                    xtype: 'textareafield',
                    name: 'c_javascript_fn',
                    fieldLabel: 'JavaScript-функция',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    tooltip: `Пример: (function(e, callback){
console.log(e.sender);
callback({meta:{success: true, msg: 'Выполнено'}});
})`
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
                xtype: "pd_accesses___sd_ui_actions-collection"
            }, {
                xtype: "sd_ui_actions___sd_ui_actions-collection"
            }]
        }
    ]
});
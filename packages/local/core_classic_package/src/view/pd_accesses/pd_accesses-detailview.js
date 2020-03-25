/**
 * Права доступа 
 * @class Core.view.pd_accesses.pd_accesses-detailview
 */
Ext.define('Core.view.pd_accesses.pd_accesses-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'pd_accesses-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.pd_accesses'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.pd_accesses',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'pd_accesses-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'pd_accesses-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Права доступа',
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
                                /*** Пользователь*/
                {
                    xtype: 'combobox',
                    name: 'f_user', 
                    fieldLabel: 'Пользователь',
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
                                /*** Роль*/
                {
                    xtype: 'combobox',
                    name: 'f_role', 
                    fieldLabel: 'Роль',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    store: {
                        type: 'pd_roles'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Табл./Предст./Функц.*/
                {
                    xtype: 'combobox',
                    fieldLabel: 'Табл./Предст./Функц.',
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
                    name: 'c_name',
                    bind: {
                        value: '{c_name}',
                        readOnly: '{readOnly}'
                    },
                    listeners: {
                        change: function (sender, value) {
                            if (value) {
                                var form = this.up('form');
                                var criteria = form.down('[name="c_criteria"]');
                                criteria.setModel('Core.model.' + Utilits.getNameView(value));
                            }
                        }
                    }
                },
                                /*** Действие*/
                {
                    xtype: 'combobox',
                    name: 'f_action', 
                    fieldLabel: 'Действие',
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
                                /*** Серверный фильтр*/
                {
                    xtype: 'criteriafield',
                    name: 'c_criteria',
                    fieldLabel: 'Серверный фильтр',
                    model: 'Core.model.pd_accesses'
                },
                                /*** Путь в файловой системе*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Путь в файловой системе',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_path'
                },
                                /*** Функция RPC или её часть*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Функция RPC или её часть',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_function'
                },
                                /*** Запрещенные колонки*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Запрещенные колонки',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_columns'
                },
                                /*** Разрешено удалени*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Разрешено удалени',
                    uncheckedValue: 'off',
                    name: 'b_deletable'
                },
                                /*** Разрешено создание*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Разрешено создание',
                    uncheckedValue: 'off',
                    name: 'b_creatable'
                },
                                /*** Разрешено редактирование*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Разрешено редактирование',
                    uncheckedValue: 'off',
                    name: 'b_editable'
                },
                                /*** Дополнительный доступ*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Дополнительный доступ',
                    uncheckedValue: 'off',
                    name: 'b_full_control'
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
        }]
});
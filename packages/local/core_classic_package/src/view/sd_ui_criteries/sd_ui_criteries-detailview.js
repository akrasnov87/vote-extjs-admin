/**
 * Критерии 
 * @class Core.view.sd_ui_criteries.sd_ui_criteries-detailview
 */
Ext.define('Core.view.sd_ui_criteries.sd_ui_criteries-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'sd_ui_criteries-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.sd_ui_criteries'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.sd_ui_criteries',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'sd_ui_criteries-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'sd_ui_criteries-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Критерии',
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
                    listeners: {
                        change: function (sender, value) {
                            if (value) {
                                var form = this.up('form');
                                var criteria = form.down('[name="filter_criteria"]');
                                criteria.setModel('Core.model.' + Utilits.getNameView(value));
                            }
                        }
                    }
                },
                                /*** Тип*/
                {
                    xtype: 'combobox',
                    fieldLabel: 'Тип',
                    store: {
                        data: [{
                            text: 'row criteria',
                            description: 'Выделение строки списка',
                            value: 'row_criteria'
                        }, {
                            text: 'cell criteria',
                            description: 'Выделение ячейки списка',
                            value: 'cell_criteria'
                        }, {
                            text: 'form criteria',
                            description: 'Условие сохранения формы',
                            value: 'form_criteria'
                        }, {
                            text: 'user level',
                            description: 'Вывести или скрыть компонент на основе имени пользователя',
                            value: 'user_level'
                        }, {
                            text: 'role level',
                            description: 'Вывести или скрыть компонент на основе роли',
                            value: 'role_level'
                        }]
                    },
                    queryMode: 'local',
                    displayField: 'text',
                    valueField: 'value',
                    // Template for the dropdown menu.
                    // Note the use of the "x-list-plain" and "x-boundlist-item" class,
                    // this is required to make the items selectable.
                    tpl: Ext.create('Ext.XTemplate',
                        '<ul class="x-list-plain"><tpl for=".">',
                            '<li role="option" class="x-boundlist-item">{text}<br /><i>{description}</i></li>',
                        '</tpl></ul>'
                    ),
                    name: 'c_type',
                    listeners: {
                        change: function (sender, value) {
                            var form = this.up('form');
    
                            form.down('[name="cls"]').show();
                            form.down('[name="field"]').show();
                            form.down('[name="roles"]').show();
                            form.down('[name="styles"]').show();
                            form.down('[name="filter_criteria"]').show();
                            form.down('[name="filter_fn"]').show();
                            form.down('[name="message"]').show();
    
                            switch (value) {
                                case 'form_criteria':
                                    form.down('[name="cls"]').hide();
                                    form.down('[name="field"]').hide();
                                    form.down('[name="roles"]').hide();
                                    form.down('[name="styles"]').hide();
                                    break;
                                case 'role_level':
                                    form.down('[name="cls"]').hide();
                                    form.down('[name="filter_criteria"]').hide();
                                    form.down('[name="filter_fn"]').hide();
                                    form.down('[name="message"]').hide();
                                    break;
                                case 'user_level':
                                    form.down('[name="cls"]').hide();
                                    form.down('[name="roles"]').hide();
                                    form.down('[name="message"]').hide();
                                    break;
                                case 'cell_criteria':
                                    form.down('[name="roles"]').hide();
                                    form.down('[name="message"]').hide();
                                    break;
                                case 'row_criteria':
                                    form.down('[name="field"]').hide();
                                    form.down('[name="roles"]').hide();
                                    form.down('[name="message"]').hide();
                                    break;
                            }
                        }
                    }
                },
                                /*** Фильтр*/
                {
                    xtype: 'criteriafield',
                    name: 'c_filter_criteria',
                    fieldLabel: 'Фильтр',
                    model: 'Core.model.sd_ui_criteries'
                },
                                /*** JavaScript-функция*/
                {
                    xtype: 'textareafield',
                    name: 'c_filter_fn',
                    fieldLabel: 'JavaScript-функция',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    tooltip: 'Для доступа к переменной использовать объект item. Результатом должно быть boolean выражение.'
                },
                                /*** CSS класс*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'CSS класс',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_cls'
                },
                                /*** Стили|Свойства*/
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Стили|Свойства',
                    name: 'c_styles',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    json: true
                },
                                /*** Сообщение*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Сообщение',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_message'
                },
                                /*** Роли*/
                {
                    xtype: 'stringtagfield',
                    fieldLabel: 'Роли',
                    store: {
                        type: 'pd_roles',
                        autoLoad: true
                    },
                    displayField: 'description',
                    valueField: 'name',
                    name: 'c_roles'
                },
                                /*** Поле*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Поле',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_field'
                }
            ]
        }]
});
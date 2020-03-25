/**
 * Результат выполнения 
 * @class Core.view.cd_results.cd_results-detailview
 */
Ext.define('Core.view.cd_results.cd_results-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cd_results-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cd_results'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cd_results',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cd_results-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cd_results-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Результат выполнения',
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
                                /*** Пользовательская точка*/
                {
                    xtype: 'combobox',
                    name: 'fn_user_point', 
                    fieldLabel: 'Пользовательская точка',
                    
                    store: {
                        type: 'cd_user_points'
                    },
                    displayField: 'fn_point',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Точка маршрута*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Точка маршрута',
                    name: 'fn_point'
                },
                                /*** Тип результат*/
                {
                    xtype: 'combobox',
                    name: 'fn_type', 
                    fieldLabel: 'Тип результат',
                    
                    store: {
                        type: 'cs_result_types'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Пользователь*/
                {
                    xtype: 'combobox',
                    name: 'fn_user', 
                    fieldLabel: 'Пользователь',
                    
                    store: {
                        type: 'pd_users'
                    },
                    displayField: 'c_login',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Маршрут*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'Маршрут',
                    name: 'fn_route'
                },
                                /*** Дата создания*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата создания',
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_date'
                },
                                /*** Примечание*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Примечание',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_notice'
                },
                                /*** Ответ*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Ответ',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'f_answer'
                },
                                /*** Предупреждение*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Предупреждение',
                    uncheckedValue: 'off',
                    name: 'b_warning'
                },
                                /*** Вопрос*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: 'Вопрос',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'f_question'
                },
                                /*** JSON данные*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'JSON данные',
                    name: 'jb_data'
                },
                                /*** Дата создания в БД*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'Дата создания в БД',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'dx_created'
                }
            ]
        }]
});
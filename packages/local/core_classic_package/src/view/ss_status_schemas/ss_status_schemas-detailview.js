/**
 * Статусная схема 
 * @class Core.view.ss_status_schemas.ss_status_schemas-detailview
 */
Ext.define('Core.view.ss_status_schemas.ss_status_schemas-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'ss_status_schemas-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.ss_status_schemas'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.ss_status_schemas',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'ss_status_schemas-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'ss_status_schemas-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Статусная схема',
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
                                /*** Начальный статус*/
                {
                    xtype: 'combobox',
                    name: 'f_start', 
                    fieldLabel: 'Начальный статус',
                    
                    store: {
                        type: 'cs_route_statuses'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Конечный статус*/
                {
                    xtype: 'combobox',
                    name: 'f_end', 
                    fieldLabel: 'Конечный статус',
                    
                    store: {
                        type: 'cs_route_statuses'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
                },
                                /*** Признак отключенной записи*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Признак отключенной записи',
                    uncheckedValue: 'off',
                    name: 'b_disabled'
                }
            ]
        }]
});
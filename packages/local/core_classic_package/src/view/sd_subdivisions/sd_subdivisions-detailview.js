/**
 * Участки 
 * @class Core.view.sd_subdivisions.sd_subdivisions-detailview
 */
Ext.define('Core.view.sd_subdivisions.sd_subdivisions-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'sd_subdivisions-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.sd_subdivisions'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.sd_subdivisions',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'sd_subdivisions-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'sd_subdivisions-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Участки',
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
                                /*** Отделение*/
                {
                    xtype: 'combobox',
                    name: 'f_division', 
                    fieldLabel: 'Отделение',
                    
                    store: {
                        type: 'sd_divisions'
                    },
                    displayField: 'c_name',
                    valueField: 'id',
                    queryMode: 'remote',
                    pageSize: 25
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
                                /*** Наименование*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Наименование',
                    name: 'c_name'
                },
                                /*** Отключено*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Отключено',
                    uncheckedValue: 'off',
                    name: 'b_disabled'
                }
            ]
        }]
});
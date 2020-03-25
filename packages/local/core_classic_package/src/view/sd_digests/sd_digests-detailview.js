/**
 * Журнал версий 
 * @class Core.view.sd_digests.sd_digests-detailview
 */
Ext.define('Core.view.sd_digests.sd_digests-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'sd_digests-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.sd_digests'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.sd_digests',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'sd_digests-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'sd_digests-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: 'Журнал версий',
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
                                /*** Версия*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Версия',
                    name: 'c_version'
                },
                                /*** Описание*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Описание',
                    name: 'c_description'
                },
                                /*** Отделение*/
                {
                    xtype: 'combobox',
                    name: 'f_division', 
                    fieldLabel: 'Отделение',
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
                                /*** Имя приложения*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'Имя приложения',
                    name: 'c_app_name'
                },
                                /*** Скрыт*/
                {      
                    xtype: 'checkboxfield',
                    fieldLabel: 'Скрыт',
                    uncheckedValue: 'off',
                    name: 'b_hidden'
                }
            ]
        }]
});
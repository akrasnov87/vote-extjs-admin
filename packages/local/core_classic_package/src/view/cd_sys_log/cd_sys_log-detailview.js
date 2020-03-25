/**
 *  Логирование job 
 * @class Core.view.cd_sys_log.cd_sys_log-detailview
 */
Ext.define('Core.view.cd_sys_log.cd_sys_log-detailview', { 
    extend: 'IServ.UI.Classic.DetailViewPanel', 
    xtype: 'cd_sys_log-detailview',

    requires: [
        /**
         * обязательно загружаем
         */
        'Core.store.cd_sys_log'
    ],

    config: {
        /**
         * ссылка на хранилище
         */
        store: 'Core.store.cd_sys_log',
        /**
         * имя представления для создания записи
         */
        createDetailViewName: 'cd_sys_log-detailview',
        /**
         * имя представления для просмотра списка
         */
        listViewName: 'cd_sys_log-listview'
    },

    toolbarConfig: {
        /**
         * заголовки для карточки
         */
        title: ' Логирование job',
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
                                /*** c_descr*/
                {      
                    xtype: 'textareafield',
                    fieldLabel: 'c_descr',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'c_descr'
                },
                                /*** d_timestamp*/
                {      
                    xtype: 'datefield',
                    fieldLabel: 'd_timestamp',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    format: 'd.m.Y',
                    submitFormat: 'Y-m-d H:i:sO',
                    name: 'd_timestamp'
                },
                                /*** id*/
                {      
                    xtype: 'textfield',
                    fieldLabel: 'id',
                    name: 'id'
                },
                                /*** 0 - сообщение1 - предупрежденние2 - ошибка*/
                {      
                    xtype: 'numberfield',
                    fieldLabel: '0 - сообщение1 - предупрежденние2 - ошибка',
                    plugins: [{
                        ptype: 'clearable'
                    }],
                    name: 'n_level_msg'
                }
            ]
        }]
});
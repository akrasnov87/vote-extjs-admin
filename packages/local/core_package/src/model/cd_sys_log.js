/**
 *  Логирование job 
 * @class Core.model.cd_sys_log
 */
Ext.define('Core.model.cd_sys_log', { 
    extend: 'Ext.data.Model',
    idProperty: 'id', 
    displayProperty: '', // поле для вывода значения в списке
    identifier: '',
    fields: [
        /**
         * c_descr
         */
        { 
            name: 'c_descr', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * d_timestamp
         */
        { 
            name: 'd_timestamp', 
            type: 'date', 
            allowNull: true 
        },
        /**
         * id
         */
        { 
            name: 'id', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * 0 - сообщение1 - предупрежденние2 - ошибка
         */
        { 
            name: 'n_level_msg', 
            type: 'int', 
            allowNull: true 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }]  
    }
});
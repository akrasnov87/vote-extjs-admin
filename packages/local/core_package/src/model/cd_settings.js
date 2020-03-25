/**
 * Настройки 
 * @class Core.model.cd_settings
 */
Ext.define('Core.model.cd_settings', { 
    extend: 'Ext.data.Model',
    idProperty: 'id', 
    displayProperty: '', // поле для вывода значения в списке
    identifier: 'sequential',
    fields: [
        /**
         * Идентификатор
         */
        { 
            name: 'id', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Ключ
         */
        { 
            name: 'c_key', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Значение
         */
        { 
            name: 'c_value', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Тип
         */
        { 
            name: 'f_type', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Заголовок
         */
        { 
            name: 'c_label', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Краткое описание
         */
        { 
            name: 'c_summary', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Регион
         */
        { 
            name: 'f_division', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Пользователь
         */
        { 
            name: 'f_user', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Удален
         */
        { 
            name: 'sn_delete', 
            type: 'boolean',
            defaultValue: null 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        c_key: [{
            type: 'presence'
        }],  
    
        f_type: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }]  
    }
});
/**
 * Тип настройки 
 * @class Core.model.cs_setting_types
 */
Ext.define('Core.model.cs_setting_types', { 
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
         * Код
         */
        { 
            name: 'n_code', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Наименование
         */
        { 
            name: 'c_name', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Краткое наименование
         */
        { 
            name: 'c_short_name', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Константа
         */
        { 
            name: 'c_const', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Сортировка
         */
        { 
            name: 'n_order', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Отключено
         */
        { 
            name: 'b_default', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Отключено
         */
        { 
            name: 'b_disabled', 
            type: 'boolean',
            defaultValue: null 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        c_name: [{
            type: 'presence'
        }],  
    
        c_const: [{
            type: 'presence'
        }],  
    
        b_default: [{
            type: 'presence'
        }],  
    
        b_disabled: [{
            type: 'presence'
        }]  
    }
});
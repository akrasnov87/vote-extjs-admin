/**
 * Отделения 
 * @class Core.model.sd_divisions
 */
Ext.define('Core.model.sd_divisions', { 
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
         * Вышестоящее отделение
         */
        { 
            name: 'f_division', 
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
         * Код отделения (филиала)
         */
        { 
            name: 'c_dep_code', 
            type: 'string', 
            allowNull: true 
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
    
        b_disabled: [{
            type: 'presence'
        }]  
    }
});
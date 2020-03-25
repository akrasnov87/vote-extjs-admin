/**
 * Участки 
 * @class Core.model.sd_subdivisions
 */
Ext.define('Core.model.sd_subdivisions', { 
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
         * Отделение
         */
        { 
            name: 'f_division', 
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
    
        f_division: [{
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
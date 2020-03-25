/**
 * Статусная схема 
 * @class Core.model.ss_status_schemas
 */
Ext.define('Core.model.ss_status_schemas', { 
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
         * Начальный статус
         */
        { 
            name: 'f_start', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Конечный статус
         */
        { 
            name: 'f_end', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Признак отключенной записи
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
    
        f_start: [{
            type: 'presence'
        }],  
    
        f_end: [{
            type: 'presence'
        }],  
    
        b_disabled: [{
            type: 'presence'
        }]  
    }
});
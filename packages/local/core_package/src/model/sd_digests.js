/**
 * Журнал версий 
 * @class Core.model.sd_digests
 */
Ext.define('Core.model.sd_digests', { 
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
         * Версия
         */
        { 
            name: 'c_version', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Описание
         */
        { 
            name: 'c_description', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Отделение
         */
        { 
            name: 'f_division', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Имя приложения
         */
        { 
            name: 'c_app_name', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Скрыт
         */
        { 
            name: 'b_hidden', 
            type: 'boolean',
            defaultValue: null 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        c_version: [{
            type: 'presence'
        }],  
    
        c_description: [{
            type: 'presence'
        }],  
    
        c_app_name: [{
            type: 'presence'
        }],  
    
        b_hidden: [{
            type: 'presence'
        }]  
    }
});
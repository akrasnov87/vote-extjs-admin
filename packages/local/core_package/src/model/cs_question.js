/**
 * Речевой модуль 
 * @class Core.model.cs_question
 */
Ext.define('Core.model.cs_question', { 
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
         * Заголовок
         */
        { 
            name: 'c_title', 
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
         * Текст
         */
        { 
            name: 'c_text', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Сортировка
         */
        { 
            name: 'n_order', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Отключить
         */
        { 
            name: 'b_disabled', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Дата создания
         */
        { 
            name: 'dx_created', 
            type: 'date', 
            allowNull: true 
        },
        /**
         * Признак удаленной записи
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
    
        c_title: [{
            type: 'presence'
        }],  
    
        c_description: [{
            type: 'presence'
        }],  
    
        c_text: [{
            type: 'presence'
        }],  
    
        n_order: [{
            type: 'presence'
        }],  
    
        b_disabled: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }]  
    }
});
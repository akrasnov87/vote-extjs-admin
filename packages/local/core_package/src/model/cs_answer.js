/**
 * Речевой модуль 
 * @class Core.model.cs_answer
 */
Ext.define('Core.model.cs_answer', { 
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
         * Текст
         */
        { 
            name: 'c_text', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Вопрос
         */
        { 
            name: 'f_question', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Следующий вопрос
         */
        { 
            name: 'f_next_question', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Действие
         */
        { 
            name: 'c_action', 
            type: 'string', 
            allowNull: true 
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
    
        f_question: [{
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
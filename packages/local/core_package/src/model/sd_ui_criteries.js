/**
 * Критерии 
 * @class Core.model.sd_ui_criteries
 */
Ext.define('Core.model.sd_ui_criteries', { 
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
         * Идентификатор представления
         */
        { 
            name: 'c_view_id', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Тип
         */
        { 
            name: 'c_type', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Фильтр
         */
        { 
            name: 'c_filter_criteria', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * JavaScript-функция
         */
        { 
            name: 'c_filter_fn', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * CSS класс
         */
        { 
            name: 'c_cls', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Стили|Свойства
         */
        { 
            name: 'c_styles', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Сообщение
         */
        { 
            name: 'c_message', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Роли
         */
        { 
            name: 'c_roles', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Поле
         */
        { 
            name: 'c_field', 
            type: 'string', 
            allowNull: true 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        c_view_id: [{
            type: 'presence'
        }],  
    
        c_type: [{
            type: 'presence'
        }]  
    }
});
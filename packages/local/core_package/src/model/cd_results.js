/**
 * Результат выполнения 
 * @class Core.model.cd_results
 */
Ext.define('Core.model.cd_results', { 
    extend: 'Ext.data.Model',
    idProperty: 'id', 
    displayProperty: '', // поле для вывода значения в списке
    identifier: '',
    fields: [
        /**
         * Идентификатор
         */
        { 
            name: 'id', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Пользовательская точка
         */
        { 
            name: 'fn_user_point', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Точка маршрута
         */
        { 
            name: 'fn_point', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Тип результат
         */
        { 
            name: 'fn_type', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Пользователь
         */
        { 
            name: 'fn_user', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Маршрут
         */
        { 
            name: 'fn_route', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Дата создания
         */
        { 
            name: 'd_date', 
            type: 'date' 
        },
        /**
         * Примечание
         */
        { 
            name: 'c_notice', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Ответ
         */
        { 
            name: 'f_answer', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Предупреждение
         */
        { 
            name: 'b_warning', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Вопрос
         */
        { 
            name: 'f_question', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * JSON данные
         */
        { 
            name: 'jb_data', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Дата создания в БД
         */
        { 
            name: 'dx_created', 
            type: 'date', 
            allowNull: true 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        fn_user_point: [{
            type: 'presence'
        }],  
    
        fn_point: [{
            type: 'presence'
        }],  
    
        fn_type: [{
            type: 'presence'
        }],  
    
        fn_user: [{
            type: 'presence'
        }],  
    
        fn_route: [{
            type: 'presence'
        }],  
    
        d_date: [{
            type: 'presence'
        }],  
    
        b_warning: [{
            type: 'presence'
        }]  
    }
});
/**
 * Точки 
 * @class Core.model.cd_user_points
 */
Ext.define('Core.model.cd_user_points', { 
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
         * Точка
         */
        { 
            name: 'fn_point', 
            type: 'string', 
            allowNull: true 
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
         * Тип
         */
        { 
            name: 'fn_type', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Номер телефона
         */
        { 
            name: 'jb_tel', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Эл. почта
         */
        { 
            name: 'jb_email', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Долгота
         */
        { 
            name: 'n_longitude', 
            type: 'number',
            defaultValue: null 
        },
        /**
         * Широта
         */
        { 
            name: 'n_latitude', 
            type: 'number',
            defaultValue: null 
        },
        /**
         * Вычисляемое поле
         */
        { 
            name: 'gx_geodata', 
            type: 'string', 
            allowNull: true 
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
         * Подтверждено
         */
        { 
            name: 'b_check', 
            type: 'boolean',
            defaultValue: null 
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
         * Дата подтверждения
         */
        { 
            name: 'd_date_check', 
            type: 'date', 
            allowNull: true 
        },
        /**
         * Дата записи в БД
         */
        { 
            name: 'dx_created', 
            type: 'date', 
            allowNull: true 
        },
        /**
         * Дата создания
         */
        { 
            name: 'd_date', 
            type: 'date' 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        fn_user: [{
            type: 'presence'
        }],  
    
        fn_route: [{
            type: 'presence'
        }],  
    
        fn_type: [{
            type: 'presence'
        }],  
    
        n_longitude: [{
            type: 'presence'
        }],  
    
        n_latitude: [{
            type: 'presence'
        }],  
    
        b_check: [{
            type: 'presence'
        }],  
    
        d_date: [{
            type: 'presence'
        }]  
    }
});
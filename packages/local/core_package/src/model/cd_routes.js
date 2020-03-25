/**
 * Маршруты 
 * @class Core.model.cd_routes
 */
Ext.define('Core.model.cd_routes', { 
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
         * Тип маршрута
         */
        { 
            name: 'f_type', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Номер маршрута
         */
        { 
            name: 'c_number', 
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
         * Дата начала выполнения
         */
        { 
            name: 'd_date_start', 
            type: 'date' 
        },
        /**
         * Дата завершения выполнения
         */
        { 
            name: 'd_date_end', 
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
         * Продлен
         */
        { 
            name: 'b_extended', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Продлен до
         */
        { 
            name: 'd_extended', 
            type: 'date', 
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
        },
        /**
         * Сортировка
         */
        { 
            name: 'n_order', 
            type: 'int',
            defaultValue: null 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        f_type: [{
            type: 'presence'
        }],  
    
        c_number: [{
            type: 'presence'
        }],  
    
        d_date: [{
            type: 'presence'
        }],  
    
        d_date_start: [{
            type: 'presence'
        }],  
    
        d_date_end: [{
            type: 'presence'
        }],  
    
        b_extended: [{
            type: 'presence'
        }],  
    
        n_order: [{
            type: 'presence'
        }]  
    }
});
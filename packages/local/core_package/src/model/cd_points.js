/**
 * Точки 
 * @class Core.model.cd_points
 */
Ext.define('Core.model.cd_points', { 
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
         * Учетный показатель
         */
        { 
            name: 'f_registr_pts', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Маршрут
         */
        { 
            name: 'f_route', 
            type: 'string',
            defaultValue: null 
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
         * Информация
         */
        { 
            name: 'c_info', 
            type: 'string', 
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
    
        f_registr_pts: [{
            type: 'presence'
        }],  
    
        f_route: [{
            type: 'presence'
        }],  
    
        n_order: [{
            type: 'presence'
        }]  
    }
});
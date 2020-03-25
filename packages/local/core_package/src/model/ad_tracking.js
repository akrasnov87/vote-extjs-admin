/**
 * Перемещение исполнителя 
 * @class Core.model.ad_tracking
 */
Ext.define('Core.model.ad_tracking', { 
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
         * Исполнитель
         */
        { 
            name: 'fn_user', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Дата
         */
        { 
            name: 'd_date', 
            type: 'date' 
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
         * Тип сети
         */
        { 
            name: 'c_network_status', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Географические координаты
         */
        { 
            name: 'gx_geodata', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Создан в БД
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
    
        fn_user: [{
            type: 'presence'
        }],  
    
        d_date: [{
            type: 'presence'
        }],  
    
        n_longitude: [{
            type: 'presence'
        }],  
    
        n_latitude: [{
            type: 'presence'
        }]  
    }
});
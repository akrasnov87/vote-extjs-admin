/**
 * История изменения статусов заданий 
 * @class Core.model.cd_route_history
 */
Ext.define('Core.model.cd_route_history', { 
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
         * Задание
         */
        { 
            name: 'fn_route', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Статус
         */
        { 
            name: 'fn_status', 
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
         * Дата изменения
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
    
        fn_route: [{
            type: 'presence'
        }],  
    
        fn_status: [{
            type: 'presence'
        }],  
    
        fn_user: [{
            type: 'presence'
        }],  
    
        d_date: [{
            type: 'presence'
        }]  
    }
});
/**
 * Действия пользователя 
 * @class Core.model.ad_audits
 */
Ext.define('Core.model.ad_audits', { 
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
         * Пользователь
         */
        { 
            name: 'fn_user', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Дата события
         */
        { 
            name: 'd_date', 
            type: 'date' 
        },
        /**
         * Дополнительные параметры
         */
        { 
            name: 'c_data', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Тип события
         */
        { 
            name: 'c_type', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Имя приложение
         */
        { 
            name: 'c_app_name', 
            type: 'string',
            defaultValue: null 
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
    
        c_type: [{
            type: 'presence'
        }],  
    
        c_app_name: [{
            type: 'presence'
        }]  
    }
});
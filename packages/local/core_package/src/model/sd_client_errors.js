/**
 * Клиентские ошибки 
 * @class Core.model.sd_client_errors
 */
Ext.define('Core.model.sd_client_errors', { 
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
         * Текст ошибки
         */
        { 
            name: 'c_message', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Код ошибки
         */
        { 
            name: 'c_code', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Дата возникновения ошибки
         */
        { 
            name: 'd_created', 
            type: 'date' 
        },
        /**
         * Идентификатор пользователя
         */
        { 
            name: 'fn_user', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Версия приложения
         */
        { 
            name: 'c_version', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Тип платформы
         */
        { 
            name: 'c_platform', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Прочии данные
         */
        { 
            name: 'jb_data', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Дата записи на сервере
         */
        { 
            name: 'dx_date', 
            type: 'date', 
            allowNull: true 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        c_message: [{
            type: 'presence'
        }],  
    
        c_code: [{
            type: 'presence'
        }],  
    
        d_created: [{
            type: 'presence'
        }],  
    
        fn_user: [{
            type: 'presence'
        }],  
    
        c_version: [{
            type: 'presence'
        }],  
    
        c_platform: [{
            type: 'presence'
        }]  
    }
});
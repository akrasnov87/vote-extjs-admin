/**
 * Информация о мобильных устройствах 
 * @class Core.model.ad_mobile_devices
 */
Ext.define('Core.model.ad_mobile_devices', { 
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
         * Пользователь
         */
        { 
            name: 'fn_user', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Дата возникновения событий
         */
        { 
            name: 'd_date', 
            type: 'date' 
        },
        /**
         * Режим отладки
         */
        { 
            name: 'b_debug', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Архитектура устройства
         */
        { 
            name: 'c_architecture', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Модель телефона
         */
        { 
            name: 'c_phone_model', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Версия sdk
         */
        { 
            name: 'c_sdk', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Версия ОС
         */
        { 
            name: 'c_os', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * IMEI
         */
        { 
            name: 'c_imei', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Версия приложения
         */
        { 
            name: 'c_application_version', 
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
    
        b_debug: [{
            type: 'presence'
        }]  
    }
});
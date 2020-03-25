/**
 * Пользователи 
 * @class Core.model.pd_users
 */
Ext.define('Core.model.pd_users', { 
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
         * Родитель
         */
        { 
            name: 'f_parent', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Логин
         */
        { 
            name: 'c_login', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Пароль
         */
        { 
            name: 'c_password', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Salt
         */
        { 
            name: 's_salt', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Hash
         */
        { 
            name: 's_hash', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Имя
         */
        { 
            name: 'c_firstname', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Фамилия
         */
        { 
            name: 'c_lastname', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Отчество
         */
        { 
            name: 'c_patronymic', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Адрес эл. почты
         */
        { 
            name: 'c_email', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Телефон
         */
        { 
            name: 'c_tel', 
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
         * Описание
         */
        { 
            name: 'c_description', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Отключен
         */
        { 
            name: 'b_disabled', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Удален
         */
        { 
            name: 'sn_delete', 
            type: 'boolean',
            defaultValue: null 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        c_login: [{
            type: 'presence'
        }],  
    
        b_disabled: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }]  
    }
});
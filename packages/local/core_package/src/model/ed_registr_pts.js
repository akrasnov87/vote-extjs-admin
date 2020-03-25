/**
 * Учетный показатель 
 * @class Core.model.ed_registr_pts
 */
Ext.define('Core.model.ed_registr_pts', { 
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
         * Номер ЛС
         */
        { 
            name: 'c_subscr', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Номер ПУ
         */
        { 
            name: 'c_device', 
            type: 'string', 
            allowNull: true 
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
         * Пользователь
         */
        { 
            name: 'f_user', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Отделение
         */
        { 
            name: 'f_division', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Участок
         */
        { 
            name: 'f_subdivision', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Отлючено
         */
        { 
            name: 'b_disabled', 
            type: 'boolean',
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
         * Дата создания
         */
        { 
            name: 'dx_created', 
            type: 'date', 
            allowNull: true 
        },
        /**
         * Признак удаленной записи
         */
        { 
            name: 'sn_delete', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Адрес
         */
        { 
            name: 'c_address', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * ФИО потребителя
         */
        { 
            name: 'c_fio', 
            type: 'string', 
            allowNull: true 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        n_longitude: [{
            type: 'presence'
        }],  
    
        n_latitude: [{
            type: 'presence'
        }],  
    
        f_user: [{
            type: 'presence'
        }],  
    
        f_division: [{
            type: 'presence'
        }],  
    
        b_disabled: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }],  
    
        c_address: [{
            type: 'presence'
        }]  
    }
});
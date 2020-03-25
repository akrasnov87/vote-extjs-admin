/**
 * Показатели мобильного устройства 
 * @class Core.model.ad_mobile_indicators
 */
Ext.define('Core.model.ad_mobile_indicators', { 
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
         * Дата события
         */
        { 
            name: 'd_date', 
            type: 'date' 
        },
        /**
         * Тип сети
         */
        { 
            name: 'c_network_type', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Состояние подключения к сети интернет
         */
        { 
            name: 'b_isonline', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Размер ОЗУ
         */
        { 
            name: 'n_ram', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Размер используемого ОЗУ
         */
        { 
            name: 'n_used_ram', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Размер внутренней памяти
         */
        { 
            name: 'n_phone_memory', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Размер используемой внутренней памяти
         */
        { 
            name: 'n_used_phone_memory', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Размер внешней памяти
         */
        { 
            name: 'n_sd_card_memory', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Размер используемой внешей памяти
         */
        { 
            name: 'n_used_sd_card_memory', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Уровень заряда батареи
         */
        { 
            name: 'n_battery_level', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Смещение времени
         */
        { 
            name: 'n_time', 
            type: 'int', 
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
    
        b_isonline: [{
            type: 'presence'
        }]  
    }
});
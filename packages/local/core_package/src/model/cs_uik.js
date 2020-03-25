/**
 * Избирательный участок 
 * @class Core.model.cs_uik
 */
Ext.define('Core.model.cs_uik', { 
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
         * Район
         */
        { 
            name: 'c_area', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Наименование
         */
        { 
            name: 'c_name', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Адрес
         */
        { 
            name: 'c_address', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Телефон
         */
        { 
            name: 'c_phone', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Куратор
         */
        { 
            name: 'f_user', 
            type: 'int', 
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
         * ФИО потребителя
         */
        { 
            name: 'c_boundary', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Количество избирателей
         */
        { 
            name: 'n_count', 
            type: 'int', 
            allowNull: true 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }]  
    }
});
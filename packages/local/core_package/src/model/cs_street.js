/**
 * Улицы 
 * @class Core.model.cs_street
 */
Ext.define('Core.model.cs_street', { 
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
         * Наименование
         */
        { 
            name: 'c_name', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Тип
         */
        { 
            name: 'c_type', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Имя
         */
        { 
            name: 'c_street_name', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Имя в yandex
         */
        { 
            name: 'c_yandex_name', 
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
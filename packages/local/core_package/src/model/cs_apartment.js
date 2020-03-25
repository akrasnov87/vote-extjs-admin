/**
 * Квартиры 
 * @class Core.model.cs_apartment
 */
Ext.define('Core.model.cs_apartment', { 
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
         * Дом
         */
        { 
            name: 'f_house', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Префикс
         */
        { 
            name: 'c_prefix', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Номер
         */
        { 
            name: 'c_number', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Номер
         */
        { 
            name: 'n_number', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Собственное
         */
        { 
            name: 'b_custom', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * dx_created
         */
        { 
            name: 'dx_created', 
            type: 'date', 
            allowNull: true 
        },
        /**
         * sn_delete
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
    
        b_custom: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }]  
    }
});
/**
 * Роли 
 * @class Core.model.pd_roles
 */
Ext.define('Core.model.pd_roles', { 
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
         * Наименование
         */
        { 
            name: 'c_name', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Описание роли
         */
        { 
            name: 'c_description', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Приоритет
         */
        { 
            name: 'n_weight', 
            type: 'int',
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
    
        c_name: [{
            type: 'presence'
        }],  
    
        n_weight: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }]  
    }
});
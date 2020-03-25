/**
 * Привязка пользователей к отделению или участку 
 * @class Core.model.pd_userindivisions
 */
Ext.define('Core.model.pd_userindivisions', { 
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
    
        f_user: [{
            type: 'presence'
        }],  
    
        f_division: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }]  
    }
});
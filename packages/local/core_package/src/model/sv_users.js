/**
 * Закрытый список пользователей 
 * @class Core.model.sv_users
 */
Ext.define('Core.model.sv_users', { 
    extend: 'Ext.data.Model',
     
    displayProperty: '', // поле для вывода значения в списке
    identifier: '',
    fields: [
        /**
         * b_disabled
         */
        { 
            name: 'b_disabled', 
            type: 'boolean', 
            allowNull: true 
        },
        /**
         * c_all_divisions
         */
        { 
            name: 'c_all_divisions', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * c_claims
         */
        { 
            name: 'c_claims', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * c_login
         */
        { 
            name: 'c_login', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * c_password
         */
        { 
            name: 'c_password', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * f_parent
         */
        { 
            name: 'f_parent', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * id
         */
        { 
            name: 'id', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * s_hash
         */
        { 
            name: 's_hash', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * s_salt
         */
        { 
            name: 's_salt', 
            type: 'string', 
            allowNull: true 
        }
    ],
    validators: {}
});
/**
 * Открытый список пользователей 
 * @class Core.model.pv_users
 */
Ext.define('Core.model.pv_users', { 
    extend: 'Ext.data.Model',
     
    displayProperty: '', // поле для вывода значения в списке
    identifier: '',
    fields: [
        /**
         * c_all_divisions
         */
        { 
            name: 'c_all_divisions', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * c_lastname
         */
        { 
            name: 'c_lastname', 
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
         * c_description
         */
        { 
            name: 'c_description', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * c_divisions
         */
        { 
            name: 'c_divisions', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * c_email
         */
        { 
            name: 'c_email', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * c_firstname
         */
        { 
            name: 'c_firstname', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * b_disabled
         */
        { 
            name: 'b_disabled', 
            type: 'boolean', 
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
         * c_patronymic
         */
        { 
            name: 'c_patronymic', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * c_subdivisions
         */
        { 
            name: 'c_subdivisions', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * c_tel
         */
        { 
            name: 'c_tel', 
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
        }
    ],
    validators: {}
});
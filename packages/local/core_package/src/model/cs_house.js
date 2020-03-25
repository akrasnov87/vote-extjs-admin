/**
 * Улицы 
 * @class Core.model.cs_house
 */
Ext.define('Core.model.cs_house', { 
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
         * Улица
         */
        { 
            name: 'f_street', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Номер дома
         */
        { 
            name: 'c_house_num', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Корпус
         */
        { 
            name: 'c_build_num', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Строение
         */
        { 
            name: 'c_struc_num', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Дома/квартиры через запятую
         */
        { 
            name: 'c_data', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Студенческое общежитие
         */
        { 
            name: 'b_student_hostel', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * sn_delete
         */
        { 
            name: 'sn_delete', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * f_user
         */
        { 
            name: 'f_user', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * c_number
         */
        { 
            name: 'c_number', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * n_latitude
         */
        { 
            name: 'n_latitude', 
            type: 'number',
            defaultValue: null 
        },
        /**
         * n_longitude
         */
        { 
            name: 'n_longitude', 
            type: 'number',
            defaultValue: null 
        },
        /**
         * n_number
         */
        { 
            name: 'n_number', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * dx_created
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
    
        b_student_hostel: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }],  
    
        n_latitude: [{
            type: 'presence'
        }],  
    
        n_longitude: [{
            type: 'presence'
        }]  
    }
});
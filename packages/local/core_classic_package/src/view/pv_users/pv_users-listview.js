/**
 * Открытый список пользователей 
 * @class Core.view.pv_users.pv_users-listview
 */
Ext.define('Core.view.pv_users.pv_users-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'pv_users-listview',

    toolbarConfig: {
        title: 'Открытый список пользователей',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'pv_users',
            autoLoad: true
        },
        enableAutoResizeColumns: true,
        selModel: {
            selType: 'checkboxmodel',
            listeners: {
                selectionchange: 'onSelectionChange'
            }
        },
        stateful: false,
        stateId: 'pv_users-listview',
        detailViewName: 'pv_users-detailview',
        createDetailViewName: 'pv_users-detailview',
        columns: [
            /*** c_all_divisions*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_all_divisions',
                text: 'c_all_divisions',
                filter: {
                    type: 'string'
                }
            },
            /*** c_lastname*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_lastname',
                text: 'c_lastname',
                filter: {
                    type: 'string'
                }
            },
            /*** c_claims*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_claims',
                text: 'c_claims',
                filter: {
                    type: 'string'
                }
            },
            /*** c_description*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_description',
                text: 'c_description',
                filter: {
                    type: 'string'
                }
            },
            /*** c_divisions*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_divisions',
                text: 'c_divisions',
                filter: {
                    type: 'string'
                }
            },
            /*** c_email*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_email',
                text: 'c_email',
                filter: {
                    type: 'string'
                }
            },
            /*** c_firstname*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_firstname',
                text: 'c_firstname',
                filter: {
                    type: 'string'
                }
            },
            /*** b_disabled*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_disabled',
                text: 'b_disabled',
                filter: {
                    type: 'bool'
                }
            },
            /*** c_login*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_login',
                text: 'c_login',
                filter: {
                    type: 'string'
                }
            },
            /*** c_patronymic*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_patronymic',
                text: 'c_patronymic',
                filter: {
                    type: 'string'
                }
            },
            /*** c_subdivisions*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_subdivisions',
                text: 'c_subdivisions',
                filter: {
                    type: 'string'
                }
            },
            /*** c_tel*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_tel',
                text: 'c_tel',
                filter: {
                    type: 'string'
                }
            },
            /*** f_parent*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'f_parent',
                text: 'f_parent',
                filter: {
                    type: 'int'
                }
            },
            /*** id*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'id',
                text: 'id',
                filter: {
                    type: 'int'
                }
            }
        ]
    }]
});
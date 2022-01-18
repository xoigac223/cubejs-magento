cube(`Customer`, {

    sql: `SELECT * FROM magento.customer_entity`,

    dimensions: {

        entityId: {
            sql: `entity_id`,
            type: `number`,
            title: `ID`,
            primaryKey: true,
            shown: false
        },

        firstName: {
            sql: `firstname`,
            type: `string`
        },

        lastName: {
            sql: `lastname`,
            type: `string`
        },

        fullName: {
            sql: `CONCAT(${CUBE}.firstname, ' ', ${CUBE}.lastname)`,
            type: `string`
        },

        gender: {
            type: `string`,
            case: {
                when: [
                    {
                        sql: `${CUBE}.gender = 1`,
                        label: `Male`
                    },
                    {
                        sql: `${CUBE}.gender = 2`,
                        label: 'Female'
                    }
                ],
                else: { label: `Unknown`}
            }
        }
    },

    measures: {
        customerCount: {
            sql: `entity_id`,
            type: `count`
        },

        maleCustomerCount: {
            sql: `entity_id`,
            type: `count`,
            filters: [
                {
                    sql: `${CUBE}.gender = '1'`
                }
            ]
        }
    },

    joins: {
        Order: {
            relationship: `hasMany`,
            sql: `${Customer}.entity_id = ${Order}.customer_id`
        }
    },

    refreshKey: {
        sql: `SELECT UNIX_TIMESTAMP()`
    }
});
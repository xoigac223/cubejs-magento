cube(`Visitor`, {
    sql: `SELECT * FROM magento.customer_visitor`,

    refreshKey: {
        sql: `SELECT UNIX_TIMESTAMP()`
    },

    joins: {
        Customer: {
            relationship: `belongsTo`,
            sql: `${Visitor}.customer_id = ${Customer}.entity_id`
        }
    },

    dimensions: {

        visitorId: {
            sql: `visitor_id`,
            type: `number`,
            primaryKey: true
        },

        createdAt: {
            sql: `created_at`,
            type: `time`
        }
    },

    measures: {
        
        count: {
            sql: `visitor_id`,
            type: `count`
        }
    },

    segments: {
        maleCustomer: {
            sql: `${Customer}.gender = '1'`
        }
    }
});
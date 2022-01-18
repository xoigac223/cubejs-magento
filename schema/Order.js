cube(`Order`, {
    sql: `SELECT * FROM sales_order `,

    dimensions: {

        entityID: {
            sql: `entity_id`,
            type: `number`,
            primaryKey: true,
            shown: false
        },

        state: {
            sql: `state`,
            type: `string`
        },

        status: {
            sql: `status`,
            type: `string`
        },

        customerFullName: {
            sql: `CONCAT(${CUBE}.customer_firstname, ' ', ${CUBE}.customer_lastname)`,
            type: `string`
        },

        shippngDescription: {
            sql: `shippping_description`,
            type: `string`
        },

        created_at: {
            sql: `created_at`,
            type: `time`,
            shown: false
        }
    },

    measures: {
        count: {
            sql: `entity_id`,
            type: `count`
        },

        total: {
            sql: `subtotal`,
            type: `sum`
        },

        avgTotalItemCount: {
            sql: `total_item_count`,
            type: `avg`,
            format: `currency`
        }
    },

    refreshKey: {
        sql: `SELECT UNIX_TIMESTAMP()`
    }

});
cube(`LineItem`, {

    sql: `SELECT * FROM sales_order_item`,

    dimensions: {

        itemID: {
            sql: `item_id`,
            type: `number`,
            primaryKey: true,
            shown: false
        },

        name: {
            sql: `name`,
            type: `string`
        }
    },

    measures: {

        count: {
            sql: `item_id`,
            type: `count`
        },

        totalPrice: {
            sql: `price`,
            type: `sum`
        }
    },

    refreshKey: {
        sql: `SELECT UNIX_TIMESTAMP()`
    }

});
cube(`Product`, {

    sql: `SELECT * FROM catalog_product_entity LEFT OUTER JOIN catalog_product_super_link ON catalog_product_entity.entity_id = catalog_product_super_link.product_id`,

    dimensions: {

        entityID: {
            sql: `entity_id`,
            type: `number`,
            primaryKey: true,
            shown: false
        },

        type: {
            sql: `type_id`,
            type: `string`
        },

        createdAt: {
            sql: `created_at`,
            type: `time`,
            shown: false
        }
    },

    measures: {
        count: {
            sql: `entity_id`,
            type: `count`
        }
    },

    segments: {
        nonSuperLink: {
            sql: `${CUBE}.parent_id IS NULL`
        }
    },

    refreshKey: {
        sql: `SELECT UNIX_TIMESTAMP()`
    }
});
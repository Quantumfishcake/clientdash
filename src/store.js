import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [
            {name: 'tom', age: 28},
            {name: 'steve', age: 30},
        ],
        topPerforming: [
            {name: '/buy/afterpay-glasshouse-candles', sessions: 255, transactions: 34, revenue: 2700.2},
            {name: '/buy/ghd-hair-straightener-in-australia', sessions: 342, transactions: 54, revenue: 3634.3},
            {name: '/buy/ghd/hair-dryer-afterplay', sessions: 765, transactions: 11, revenue: 2700.2},
            {name: '/buy/afterpay-glasshouse-candles', sessions: 123, transactions: 12, revenue: 2700.2},
            {name: '/buy/ghd-hair-straightener-in-australia', sessions: 432, transactions: 96, revenue: 2700.2},
            {name: '/buy/ghd/hair-dryer-afterplay', sessions: 999, transactions: 43, revenue: 2700.2},
            {name: '/buy/afterpay-glasshouse-candles', sessions: 379, transactions: 87, revenue: 2700.2},
            {name: '/buy/ghd-hair-straightener-in-australia', sessions: 411, transactions: 42, revenue: 2700.2},
            {name: '/buy/ghd/hair-dryer-afterplay', sessions: 753, transactions: 77, revenue: 2700.2},
        ],
        seosem: [
            {seo: true},
            {sem: false}
        ],
        data: []
    }
})
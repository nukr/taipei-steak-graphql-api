import moment from 'moment'

export const meals = [
  {
    id: '0',
    name: '美菲',
    price: 500,
    category: '一般'
  },
  {
    id: '1',
    name: '美沙',
    price: 500,
    category: '七五折'
  }
]

export const orders = [
  {
    id: '0',
    items: [
      { name: '美菲', price: 500, qty: 1 },
      { name: '美沙', price: 600, qty: 1 }
    ],
    credit: true,
    serviceTip: 0.1,
    discount: 0.12,
    createdAt: moment().subtract(10, 'day').valueOf(),
    updatedAt: moment().subtract(5, 'day').valueOf()
  },
  {
    id: '1',
    items: [
      { name: '美菲', price: 500, qty: 2 },
      { name: '美沙', price: 600, qty: 1 }
    ],
    credit: true,
    serviceTip: 0.1,
    discount: 0.12,
    createdAt: moment().subtract(20, 'day').valueOf(),
    updatedAt: moment().subtract(8, 'day').valueOf()
  }
]

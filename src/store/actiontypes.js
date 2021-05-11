const actiontypes = () => {
  return {
    productCatalog: {
      setProducts: 'SET_PRODUCTS_CATALOG',
      setProduct: 'SET_PRODUCT_CATALOG',
      reversedProducts: 'REVERSED_PRODUCTS',
      bottoms: 'BOTTOMS',
      dresses: 'DRESSES',
      tops: 'TOPS',
      revBottoms: 'REV_BOTTOMS',
      revDresses: 'REV_DRESSES',
      revTops: 'REV_TOPS'
    },
    cart: {
      add: 'ADD_TO_CART',
      remove: 'REMOVE_FROM_CART',
      delete: 'DELETE_PRODUCT',
      empty: 'EMPTY_CART'
    },
    users: {
      users: 'SET_USERS',
      setUser: 'SET_USER',
      user: 'USER',
      oneUser: 'ONE_USER', 
      loggedIn: 'LOGGED_IN',
      buildUser: 'BUILD_USER',
      admin: 'ADMIN'
    },
    orders: {
      setOrders: 'SET_ORDERS',
      order: 'ORDER',
      orderId: 'ORDER_ID',
      sortedOrders: 'SORT_ORDERS',
      lastOrder: 'LAST_ORDER'
    }
  }
}

export default actiontypes;
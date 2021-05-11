import actiontypes from '../actiontypes'

const initState = {
  products: [],
  reversedProducts: [],
  product: null,
  bottoms: [],
  dresses: [],
  tops: [],
  revBottoms: [],
  revDresses: [],
  revTops: []
}

const ProductReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().productCatalog.setProducts:
      return {
        ...state,
        products: action.payload
      }

    case actiontypes().productCatalog.reversedProducts:
      return {
        ...state,
        reversedProducts: action.payload
      }

    case actiontypes().productCatalog.setProduct:
      return {
        ...state,
        product: action.payload
      }
    case actiontypes().productCatalog.bottoms:
      return {
        ...state,
        bottoms: action.payload
      }
    case actiontypes().productCatalog.dresses:
      return {
        ...state,
        dresses: action.payload
      }
    case actiontypes().productCatalog.tops:
      return {
        ...state,
        tops: action.payload
      }
    case actiontypes().productCatalog.revBottoms:
      return {
        ...state,
        revBottoms: action.payload
      }
    case actiontypes().productCatalog.revDresses:
      return {
        ...state,
        revDresses: action.payload
      }
    case actiontypes().productCatalog.revTops:
      return {
        ...state,
        revTops: action.payload
      }
      
    default:
      return state
  }
}

export default ProductReducer;
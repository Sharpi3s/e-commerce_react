import actiontypes from '../actiontypes';
import db from '../../db/firebase'

export const getProducts = () => {
  return dispatch => {
    let array = []

    db.collection('products').get().then(SnappShot => {
      SnappShot.forEach(product => {
        const data = {
          'id': product.id,
          'title': product.data().title,
          'desc': product.data().desc,
          'color': product.data().color,
          'img': product.data().img,
          'price': product.data().price,
          'category': product.data().category
        }
        array.push(data)
      })

      let bottoms = array.filter(x => x.category === 'Bottoms')
      let dresses = array.filter(x => x.category === 'Dresses')
      let tops = array.filter(x => x.category === 'Tops')

      if(bottoms) {
        dispatch(getBottoms(bottoms))
      }
      
      if(dresses) {
        dispatch(getDresses(dresses))
      }
      
      if(tops) {
        dispatch(getTops(tops))
      }
      
      dispatch(setProducts(array))

    })
  }
}

export const setProducts = products => {
  return {
    type: actiontypes().productCatalog.setProducts,
    payload: products
  }
}

export const getBottoms = bottoms => {
  return {
    type: actiontypes().productCatalog.bottoms,
    payload: bottoms
  }
}

export const getDresses = dresses => {
  return {
    type: actiontypes().productCatalog.dresses,
    payload: dresses
  }
}

export const getTops = tops => {
  return {
    type: actiontypes().productCatalog.tops,
    payload: tops
  }
}

export const getRevProducts = () => {
  return dispatch => {
    let array = []

    db.collection('products').get().then(SnappShot => {
      SnappShot.forEach(product => {
        const data = {
          'id': product.id,
          'title': product.data().title,
          'desc': product.data().desc,
          'color': product.data().color,
          'img': product.data().img,
          'price': product.data().price,
          'category': product.data().category
        }
        array.push(data)
      })

      let bottoms = array.filter(x => x.category === 'Bottoms')
      let dresses = array.filter(x => x.category === 'Dresses')
      let tops = array.filter(x => x.category === 'Tops')

      if(bottoms) {
        dispatch(getRevBottoms(bottoms))
      }
      
      if(dresses) {
        dispatch(getRevDresses(dresses))
      }
      
      if(tops) {
        dispatch(getRevTops(tops))
      }

      dispatch(getReversedProducts(array))

    })
  }
}

export const getReversedProducts = reversedProducts => {
  return {
    type: actiontypes().productCatalog.reversedProducts,
    payload: reversedProducts.reverse()
  }
}

export const getRevBottoms = bottoms => {
  return {
    type: actiontypes().productCatalog.revBottoms,
    payload: bottoms.reverse()
  }
}

export const getRevDresses = dresses => {
  return {
    type: actiontypes().productCatalog.revDresses,
    payload: dresses.reverse()
  }
}

export const getRevTops = tops => {
  return {
    type: actiontypes().productCatalog.revTops,
    payload: tops.reverse()
  }
}

export const getOneProduct = (id) => {
  return dispatch => {
  
    db.collection('products').doc(id).get().then(product => {
    
        const data = {
          'id': product.id,
          'title': product.data().title,
          'desc': product.data().desc,
          'color': product.data().color,
          'img': product.data().img,
          'price': product.data().price,
          'category': product.data().category
        }
        dispatch(setProduct(data))
      })
  }
}

export const setProduct = product => {
  return {
    type: actiontypes().productCatalog.setProduct,
    payload: product
  }
}


export const addProduct = (data) => {
  let newProduct = {
    category: data.category,
    color: data.color,
    desc: data.desc,
    img: data.img,
    price: data.price,
    title: data.title
  }

  return dispatch => {
    console.log(newProduct)
    db.collection('products').add(newProduct)
    .then(res => { 
      console.log(res)
      console.log('success')
      
      // dispatch(addNewProduct())
      // dispatch(test())
    })
    .catch(err => console.log(err))
  }
}

export const deleteProduct = (id) => {

  return dispatch => {
    console.log(id)
    db.collection('products').doc(id).delete()
    .then(() => {  
      console.log('Product is deleted')
      dispatch(getProducts())
    })
    .catch((err) => console.log(err))
  }
}
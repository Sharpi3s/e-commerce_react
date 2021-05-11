import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import { getProducts} from '../store/actions/ProductCatalogActions'
// import { getProducts, getBottoms, getDresses, getTops } from '../store/actions/ProductCatalogActions'

const Products = () => {

  const dispatch = useDispatch()

  let bottoms = useSelector(state => state.ProductReducer.bottoms)
  let dresses = useSelector(state => state.ProductReducer.dresses)
  let tops = useSelector(state => state.ProductReducer.tops)
  let products = useSelector(state => state.ProductReducer.products)

  let [bo, setBo] = useState(false)
  let [dr, setDr] = useState(false)
  let [to, setTo] = useState(false) 
  let [pr, setPr] = useState(true)
 
  const map = () => {
    if(pr) {
      return showPr
    }
    if(bo) {
      return showBo
    }
    if(dr) {
      return showDr
    }
    if(to) {
      return showTo
    }
    else {
      console.log('error')
    }
  }

  const b = () => {
    setBo(true)
    setDr(false)
    setTo(false)
    setPr(false)
  }
  const d = () => {
    setBo(false)
    setDr(true)
    setTo(false)
    setPr(false)
  }
  const t = () => {
    setBo(false)
    setDr(false)
    setTo(true)
    setPr(false)
  }
  const allProducts = () => {
    setBo(false)
    setDr(false)
    setTo(false)
    setPr(true)
  }

  const showPr = (
    products && products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))
  )
  const showBo = (
    bottoms && bottoms.map(product => (
      <ProductCard key={product.id} product={product} />
    ))
  )
  const showDr = (
    dresses && dresses.map(product => (
      <ProductCard key={product.id} product={product} />
    ))
  )
  const showTo = (
    tops && tops.map(product => (
      <ProductCard key={product.id} product={product} />
    ))
  )

    
  useEffect(() => {
    dispatch(getProducts())
    console.log('Hämtar från db')
  }, [dispatch])
  
  return (

    <div className="container mt-5">
    
      {
        products || bottoms || dresses || tops ?
        <div>
          <ul className="list-inline mb-5">
            <li className={`list-inline-item pointer text-hover h5 me-5 ${pr ? 'text-decoration-underline' : ''}`} onClick={allProducts} >All products</li>
            <li className={`list-inline-item pointer text-hover h5 me-5 ${bo ? 'text-decoration-underline' : ''}`} onClick={b} >Bottoms</li>
            <li className={`list-inline-item pointer text-hover h5 me-5 ${dr ? 'text-decoration-underline' : ''}`} onClick={d} >Dresses</li>
            <li className={`list-inline-item pointer text-hover h5 me-5 ${to ? 'text-decoration-underline' : ''}`} onClick={t} >Tops</li>
          </ul>
          {/* <div className="row my-5 d-flex justify-content-between text-center text-md-start text-lg-center products">
            <p className="h5 col-4 col-md-3 pointer" onClick={b}>Bottoms</p>
            <p className="h5 col-4 col-md-3 pointer" onClick={d}>Dresses</p>
            <p className="h5 col-4 col-md-3 mb-4 pointer" onClick={t}>Tops</p>
            <p className="h5 col-12 col-md-3 pointer" onClick={allProducts}>See All Products</p>
          </div> */}
        
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
            {/* {
              products && products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            } */}
            {
              map()
            }
          </div>
        </div>
        : 
        <div className="height">Loading...</div>
      }

    </div>

  )
}

export default Products

import { useEffect,  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts} from '../../store/actions/ProductCatalogActions'
import AdminProdctDetails from '../admin/AdminProductDetails'
import AdminAddProduct from './AdminAddProduct';

const AdminProducts = () => {
  const dispatch = useDispatch()

  let bottoms = useSelector(state => state.ProductReducer.bottoms)
  let dresses = useSelector(state => state.ProductReducer.dresses)
  let tops = useSelector(state => state.ProductReducer.tops)
  let products = useSelector(state => state.ProductReducer.products)

  let [bo, setBo] = useState(false)
  let [dr, setDr] = useState(false)
  let [to, setTo] = useState(false) 
  let [pr, setPr] = useState(true)

  let [toggle, setToggle] = useState(false)

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
  const addProduct = () => {
    if(!toggle) {
      setToggle(true)

      console.log('set to true')
    } else {
      setToggle(false)
      dispatch(getProducts())
      console.log('hämtar produkter ')
    }
  }

  const showPr = (
    products && products.map(product => (
      <AdminProdctDetails key={ product.id } product={ product } />
    ))
  )
  const showBo = (
    bottoms && bottoms.map(product => (
      <AdminProdctDetails key={ product.id } product={ product } />
    ))
  )
  const showDr = (
    dresses && dresses.map(product => (
      <AdminProdctDetails key={ product.id } product={ product } />
    ))
  )
  const showTo = (
    tops && tops.map(product => (
      <AdminProdctDetails key={ product.id } product={ product } />
    ))
  )

  const add = (
    <AdminAddProduct />
  )
  const show = (
    <div >
      <div className="card-body card-row">
        <table className="table table-responsive-md mb-0">
          <thead>
            <tr>
              <th className="col-1"></th>
              <th>
                <strong>Product nr</strong>
              </th>
              <th>
                <strong>Title</strong>
              </th>
              <th>
                <strong>Color</strong>
              </th>
              <th>
                <strong>Category</strong>
              </th>
              <th>
                <strong>Price</strong>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody >   
            {
              map()
            }            

          </tbody>
        </table>
      </div>
    </div>
  )

  useEffect(() => {
    dispatch(getProducts())
    console.log('Hämtar från db')
    
  }, [dispatch])

  return (
    <div className="bg-light py-5 px-5">
      {
        products || bottoms || dresses || tops ? 
        <div >
          <div className="d-flex justify-content-between">
            <ul className="list-inline mb-0 product-category-ul">
            
              <li className={`list-inline-item pointer text-hover h5 me-5 mb-0 bg-white px-3 py-2 ${pr ? 'text-decoration-underline' : ''}`} onClick={allProducts} >{toggle ? '' : 'All products'}</li>
              {/* <li className="list-inline-item pointer text-hover h5 me-5 text-decoration-underline" onClick={allProducts}>{toggle ? '' : 'All products'}</li> */}
              <li className={`list-inline-item pointer text-hover h5 me-5  ${bo ? 'text-decoration-underline' : ''}`} onClick={b}>{toggle ? '' : 'Bottoms'}</li>
              <li className={`list-inline-item pointer text-hover h5 me-5 ${dr ? 'text-decoration-underline' : ''}`} onClick={d}>{toggle ? '' : 'Dresses'}</li>
              <li className={`list-inline-item pointer text-hover h5 me-5 ${to ? 'text-decoration-underline' : ''}`} onClick={t}>{toggle ? '' : 'Tops'}</li>
            </ul>
            <ul className="list-inline">
              <li className="list-inline-item pointer text-hover h5 me-5" onClick={addProduct}>{!toggle ? 'Add Product' : 'Show products'}</li>
            </ul>
          </div>
          <div className="card">
          {
            toggle ?
            add
            : show
          }
          </div>
      </div>
      : <div>Loading...</div>
      }


    </div>

  )
}

export default AdminProducts

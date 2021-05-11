import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../store/actions/ProductCatalogActions'

const AdminAddProduct = () => {

  const dispatch = useDispatch()
  const admin = useSelector(state => state.userReducer.admin)

  const [values, setValues] = useState({
    title: "",
    catergory: "",
    color: "",
    price: "",
    desc: "",
    img: ""
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  let option = useRef()

  const handleTitle = (e) => {
    setValues({...values, title: e.target.value})
  }

  const handleCategory = (e) => {
    setValues({...values, category: e.target.value})
  }

  const handleColor = (e) => {
    setValues({...values, color: e.target.value})
  }

  const handlePrice = (e) => {
    setValues({...values, price: parseInt(e.target.value)})
  }

  const handleDesc = (e) => {
    setValues({...values, desc: e.target.value})
  }

  const handleImg = (e) => {
    setValues({...values, img: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(admin) {
      if(values.title && option.current.value !== "" && values.color && values.desc && values.price && values.img) {
        setValid(true)

        let newProduct = {
          category: option.current.value,
          color: values.color,
          desc: values.desc,
          img: values.img,
          price: values.price,
          title: values.title
        }

        console.log(newProduct)
        dispatch(addProduct(newProduct))
        console.log('Yeeey')
        setValues({...values, title: "", category: "", color: "", price: "", desc: "", img: ""})
        option.current.value = ""
      }
      setSubmitted(true)
      
    }
    else {
      console.log('error')
    }

  }

  // useEffect(() => {
  //   setFeedbackText()
  //   console.log('hämtar')
  // }, [feedback])

  return (
    <div className="reg-new-product mt-5">
    {
      submitted && valid ? 
        <div className="headlineAdd text-center col-8 m-auto mt-5">
          <h1>The product have been created successfully!</h1>
        </div>
      :
      <form className="col-6 m-auto p-3 mb-5 shadow-1" id="formReg" onSubmit={handleSubmit}>
        <div className="text-center ">
                <h2 className="m-auto mb-3 pb-2 add-new-product col-7">Add New Product</h2>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <div className="">
              <label className="form-label">Name</label>
              <input 
                onChange={handleTitle}
                type="text" 
                id="title" 
                className="form-control" 
                value={values.title} />
              {submitted && !values.title ? <span>Please enter a name for the product</span> : null}
              
            </div>
          </div>

          <div className=" d-flex flex-column col-6">
            <label className="form-label">Category</label>
            <select 
              onChange={handleCategory}
              name="category" 
              id="category" 
              className="form-label" 
              ref={option}
              >
              <option value="">--Please choose an option--</option>
              <option value="Bottoms">Bottoms</option>
              <option value="Dresses">Dresses</option>
              <option value="Tops">Tops</option>
            </select>
            {submitted && !values.category ? <span>Please choose a category</span> : null}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Color</label>
            <input 
              onChange={handleColor}
              type="text" 
              id="color" 
              className="form-control" 
              value={values.color} />
            {submitted && !values.color ? <span>Please enter a color for the product</span> : null}
          </div>
          <div className="col">
            <label className="form-label">Price</label>
            <input 
              onChange={handlePrice}
              type="number" 
              id="price" 
              className="form-control" 
              value={values.price} />
            {submitted && !values.price ? <span>Please enter a price</span> : null}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea 
            onChange={handleDesc}
            type="text" 
            id="description" 
            className="form-control" 
            value={values.desc} ></textarea>
          {submitted && !values.desc ? <span>Please enter a discription for the product</span> : null}
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input 
            onChange={handleImg}
            type="text" 
            id="img" 
            className="form-control" 
            value={values.img} />
          {submitted && !values.img ? <span>Please enter a url for the image</span> : null}
        </div>

        {/* <small><p className="feedback" id="feedback">{ feedbackText }</p></small> */}

        <div className="col-2 m-auto">
            <button type="submit" className="btn btn-pink btn-block mb-4 text-white">Add!</button>
        </div>

      </form>
    }
    </div>
    )
  }

export default AdminAddProduct

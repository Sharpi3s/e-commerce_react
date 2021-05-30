import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getRevProducts } from '../../store/actions/ProductCatalogActions'

const Carousel = () => {

  const dispatch = useDispatch()

  let bottoms = useSelector(state => state.ProductReducer.revBottoms)
  let dresses = useSelector(state => state.ProductReducer.revDresses)
  let tops = useSelector(state => state.ProductReducer.revTops)

  useEffect(() => {
    dispatch(getRevProducts())
  }, [dispatch])

  return (
    <div id="carouselExampleIndicators" className="carousel slide my-5 carousel-dark" data-mdb-ride="carousel">
        {/* <!--carousel-indicators --> */}
        <div className="carousel-indicators ">
          <button
            type="button"
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselDarkVariant"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        {/* <!--carousel-indicators stop--> */}
        {/* <!-- carousel inner --> */}
        <div className="carousel-inner">
          {/* <!-- first slide --> */}
          <div className="carousel-item active">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 item" >
            {              
              dresses && dresses.slice(0, 4).map(dress => (
              <div className="col" key={dress.id} dress={dress}>                  
                  <div className="card" > 
                    <Link to={`productdetails/${ dress.id }`} className="bg-image hover-zoom">
                      <img
                        src={ dress.img }
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <strong className="card-title">{ dress.title }</strong>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                      <h5><strong>${ dress.price }</strong></h5>
                    </div>
                  </div>
              </div>
              ))
            }
            </div>
          </div>
          {/* <!-- seccond slide --> */}
          <div className="carousel-item">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 item" >
            {              
              bottoms && bottoms.slice(0, 4).map(bottom => (
              <div className="col" key={bottom.id} bottom={bottom}>
                  <div className="card" > 
                    <Link to={`productdetails/${ bottom.id }`} className="bg-image hover-zoom">
                      <img
                        src={ bottom.img }
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <strong className="card-title">{ bottom.title }</strong>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                      <h5><strong>${ bottom.price }</strong></h5>
                    </div>
                  </div>
              </div>
              ))
            }
            </div>
          </div>
          {/* <!-- third slide --> */}
          <div className="carousel-item">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 item" >
            {              
              tops && tops.slice(0, 4).map(top => (
              <div className="col" key={top.id} top={top}>
                  <div className="card" >                   
                    <Link to={`productdetails/${ top.id }`} className="bg-image hover-zoom">
                      <img
                        src={ top.img }
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <strong className="card-title">{ top.title }</strong>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                      <h5><strong>${ top.price }</strong></h5>
                    </div>
                  </div>
              </div>
              ))
            }
            </div>
          </div>
        </div>
        {/* <!-- carousel inner stop --> */}
        <button
          className="carousel-control-prev text-dark"
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next text-dark"
          type="button"
          data-mdb-target="#carouselExampleIndicators"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
  )
}

export default Carousel

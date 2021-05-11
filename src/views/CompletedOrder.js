import React from 'react'

const CompletedOrder = () => {



  
  return (
    <div className="container mt-5" >

      <div className="col-8 m-auto my-5">
        <div className="my-5 text-center">
          <h2>Thanks for your order!</h2>
          <h5>This is your confirmation email. We'll be in touch soon to let you <br/>know when your order has been shipped. Below is your order info.</h5>
        </div>
        <hr/>
        <div className="d-flex justify-content-between col-8 py-4">
          <div>
            <div>
              <p className="text-muted">Order number</p>
              {/* <p><strong>{ lastOrder._id }</strong></p> */}
            </div>
            <div>
              <p className="text-muted">Order date</p>
              {/* <p><strong>{ lastOrder.createdAt }</strong></p> */}
            </div>
            <div>
              <p className="text-muted">Delivery method</p>
              <p><strong>Standard pick up location</strong> </p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-muted">Name</p>
              {/* <p><strong>{ oneUser.firstName } { oneUser.lastName }</strong></p> */}
            </div>
            <div>
              <p className="text-muted">Email</p>
              {/* <p><strong>{ oneUser.email }</strong></p> */}
            </div>
          </div>
        </div>
        <hr/>
        <div className="my-5">
          <h5>Details:</h5>
          <table className="table table-hover  mb-5">
            
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Item Nr</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>

            <tbody>
              {/* <my-order-products v-for="product in lastOrder.cart" :key="product._id" :product="product" /> */}
            </tbody>

          </table>

          <hr/>
          <div className="pt-3 d-flex flex-column align-items-end">
            
            <div className="col-4 ">
              <div className="d-flex justify-content-between">
                <h6 className="text-muted">Products total</h6>
                {/* <h6 className="text-muted">$ { lastOrder.totalprice }</h6> */}
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="text-muted">Delivery</h6>
                {/* <h6 className="text-muted">$ { delivery }</h6> */}
              </div>
              <hr/>
              <div className="d-flex justify-content-between mt-4">
                <h4>TOTAL</h4>
                {/* <h4>$ { lastOrder.totalprice  }</h4> */}
              </div>
            </div>
          </div>

        </div> 
      </div>

    </div>
  )
}

export default CompletedOrder

import React from 'react';
import "./pay.css";

const Pay = () => {
    return (
        <div class="paym">
        <div class="container d-flex justify-content-center mt-5 mb-5"></div>
    <div class="row g-3"></div>
                    <div class="card">
                        <div class="card-header p-0" id="headingTwo">

        <div class="d-flex align-items-center justify-content-between"> <span>Paypal</span> <img src="https://i.imgur.com/7kQEsHU.png" width="30"></img> </div>
        <div class="d-flex align-items-center justify-content-between"> <span>Credit card</span><img src="https://i.imgur.com/2ISgYja.png" width="30"></img><img src="https://i.imgur.com/W1vtnOV.png" width="30"></img><img src="https://i.imgur.com/35tC99g.png" width="30"></img><img src="https://i.imgur.com/2ISgYja.png" width="30"></img> </div>
        <div class="card-body payment-card-body"> <span class="font-weight-normal card-text">Card Number</span></div>
        <div class="input"> <i class="fa fa-credit-card"></i> <input type="text" class="form-control" placeholder="0000 0000 0000 0000"></input> </div>
        <div class="row mt-3 mb-3"></div>
        <div class="col-md-6"> <span class="font-weight-normal card-text">Expiry Date</span>
                                        <div class="input"> <i class="fa fa-calendar"></i> <input type="text" class="form-control" placeholder="MM/YY"></input> </div>
            <div class="col-md-6"> <span class="font-weight-normal card-text">CVC/CVV</span></div>
            <div class="input"> <i class="fa fa-lock"></i> <input type="text" class="form-control" placeholder="000"></input> </div>
            <div> <span class="text-muted certificate-text"><i class="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>  </div>
                <hr class="mt-0 line"></hr>
                <div class="p-3">
                </div>
           
                <div class="p-3"> <a href="/Crypto" class="btn btn-primary btn-block free-button">Try it free for 30 days</a>
                    <div class="text-center"> <a href="#">Have a promo code?</a> </div>
                </div>


                </div>
                                    </div>
                                    </div>
          </div>
        
      );
    };

export default Pay;

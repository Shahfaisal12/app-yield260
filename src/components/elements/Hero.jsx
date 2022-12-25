import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    fetch("https://api.bscscan.com/api?module=transaction&action=gettxreceiptstatus&txhash=0xe9975702518c79caf81d5da65dea689dcac701fcdd063f848d4f03c85392fd00&apikey=QPW52AUZE2BECQ7YRS478NRTRD5HXU3JR3")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="Hero-section pt-5">
        <div className="container">
          <div className="row">
            <div className="h1 text-white text-start card-data">Y360 Dashboard</div>
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="card-bg">
                  <div className="card-body">
                    <p className="">Y360 Price</p>
                    <h1 className="">$0.00</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-bg">
                  <div className="card-body">
                    <p className="">Market Cap</p>
                    <h1 className="">$336,192.07</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-bg">
                  <div className="card-body">
                    <p className="">Circulating Supply</p>
                    <h1 className="">360,000</h1>
                    <p className="">Y360</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-bg">
                  <div className="card-body">
                    <p className="">Backed Liquidity</p>
                    <h1 className="">100%</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-bg">
                  <div className="card-body">
                    <p className="">Next Rebase</p>
                    <h1 className="">10:49</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-bg">
                  <div className="card-body">
                    <p className="">Max Supply</p>
                    <h1 className="">360,000,000</h1>
                    <p className="">Y360</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="card-data text-center">
                  <p>Y360 Insurance Fund Value</p>
                  <h1>$0.00</h1>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-data text-center">
                  <p>Market Value of Treasury Asset</p>
                  <h1>$0.00</h1>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-data text-center">
                  <p>BNB Liquidity Value</p>
                  <h1>0.00 BNB</h1>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-data text-center">
                  <p>Pool Value</p>
                  <h1>$0.00</h1>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="card-data text-center">
                  <p># Value of FirePit [Y360]</p>
                  <h1>0.00 Y360</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-data text-center">
                  <p>$ Value of FirePit</p>
                  <h1>$0.00</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-data text-center">
                  <p>% FirePit : Supply</p>
                  <h1>0.00%</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

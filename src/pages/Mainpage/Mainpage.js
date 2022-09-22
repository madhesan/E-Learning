import React from 'react';
// import Header from '../../components/header/header';
import image1 from "../../images/hero.png"; 
import './Mainpage.css';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon,CDBBox } from 'cdbreact';
const Mainpage = () => {
    return (
        <div>
       
        <div className="top_container">
        
          <header className="header_section">
            <div className="container">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" >
                  <span>
                    BA
                  </span>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav  ">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html"> Courses <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="about.html"> About Us</a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="admission.html"> Blog </a>
                      </li>
                    
                      <li className="nav-item">
                        <button className='nav-link btn btn-primary'>Sign Up</button>
                      </li>
                    </ul>
                  </div>
                </div></nav>
            </div>
          </header>
          <section className="hero_section ">
            <div className="hero-container container">
              <div className="hero_detail-box">
                <h1>
                  A New Different Way 
                  To Improve Your Skills
                  During Online Situation
                </h1>
                <p>
                 Infographic Learning Curve Innovator.Vesting
                 Period Success Intraction
                </p>
                <div className="hero_btn-continer">
                  <a href className="btn btn-primary">
                    Start Now
                  </a>
                </div>
                <ul><b><p>The Best Online Plateform</p></b></ul>
              </div>
              <div className="hero_img-container">
                <div>
                  <img src={image1} alt="" className="img-fluid" style={{ height: '25rem',width:'25rem'}}/>
                </div>
              </div>
            </div>
          </section>
        </div>
     
        <div className="common_style">

          
          {/* admission section */}
          <section className="admission_section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="admission_detail-box">
                    <h3>
                    About Us
                    </h3>
                    <p>
                    Infographic Learning Curve Innovator. Vesting Period Success Interaction Design Bandwidth Burn Rate IPhone Incubator Deployment Creative Responsive Web Design Value Proposition GenZ A / B Testing Equity Pivot Ecosystem Pitch Churn Rate Assets Supply Chain Ownership Customer Burn Rate
                    </p>
                    <div className>
                      <a href className="call_to-btn btn_white-border">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="admission_img-container">
                    <img src="images/admission.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end admission section */}
         
        </div>
      
        
        <CDBFooter className="shadow1">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '50%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          
          <CDBBox>
            <p className="h5 mb-2" style={{ fontWeight: '600',color:'white' }}>
              Home
            </p>
            
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-2" style={{ fontWeight: '600',color:'white' }}>
              Experience
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-2" style={{ fontWeight: '600',color:'white' }}>
              News
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-2" style={{ fontWeight: '600',color:'white' }}>
              About Us
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-2" style={{ fontWeight: '600',color:'white' }}>
              Courses
            </p>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
        <small className="text-center mt-5">&copy; Devwares, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
        
        
       
      </div>
    );
};

export default Mainpage;
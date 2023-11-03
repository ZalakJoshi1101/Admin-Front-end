import React from 'react'
import image1 from '../images/golden.avif';
import image2 from '../images/ring.avif';
import Signinform from './SigninForm';


const Frontpage = () => {
  return (
    <div className='w-100 login-page'>
      <div className='flex'>
        <div className='left'>
          <img src={image1} alt="Loading" style={{ height: "80px", marginTop: "30px", width: "200px", marginLeft: "26%" }}></img>

          <img src={image2} alt="Loading" style={{ height: "340px", width: "340px", borderRadius: "70%", marginLeft: "18%", marginTop: "30px" }}></img>

          <h2>- Evergreen Daimond</h2>

        </div>
        {/* -----Form----- */}
        <div className='right'>
          {/* 100 % no class kya chhe  */}
          {/* have ruko  */}

          <h2 style={{ fontFamily: "cursive", color: "rgb(133, 68, 68)" }}>Welcome to Golden Bird</h2>

          <h3 style={{ color: "gray" }}>Need an account ?</h3>
          <span>
            <a href=''>
              <h3>Sign Up</h3>
            </a>
          </span>
          <button style={{ background: "#ff4081" }}>Admin</button>
          <button style={{ background: "#3f51b5" }}>Employee</button>
          <button style={{ background: "#f44336" }}>Team-Leader</button>

          <Signinform />


        </div>
      </div>
    </div>
  )
}

export default Frontpage
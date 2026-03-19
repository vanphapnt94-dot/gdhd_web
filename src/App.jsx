import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="login-wrapper">
      <div className="header">
        <div className="logo-circle">
          <img src="/images/logo-gdhd.png" alt="Logo" className="logo-img" />
        </div>
        <h1>QUẢN LÝ GIA ĐÌNH<br/>HƯNG ĐẠO</h1>
      </div>

      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <i className="fa-solid fa-user input-icon-left"></i>
          <input type="text" placeholder="Tên người dùng / Số điện thoại" required />
        </div>

        <div className="input-group">
          <i className="fa-solid fa-lock input-icon-left"></i>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Mật khẩu" 
            required 
          />
          <i 
            className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} input-icon-right`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>

        <div className="form-actions">
          <label className="remember-me">
            <input type="checkbox" /> Ghi nhớ đăng nhập
          </label>
          <a href="#" className="forgot-pw">Quên mật khẩu?</a>
        </div>

        <button type="submit" className="submit-btn">ĐĂNG NHẬP</button>
      </form>

      <div className="social-login">
        <p>Hoặc đăng nhập bằng</p>
        <div className="social-icons">
          <div className="social-btn google-btn">
            <i className="fa-brands fa-google"></i>
          </div>
          <div className="social-btn facebook-btn">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
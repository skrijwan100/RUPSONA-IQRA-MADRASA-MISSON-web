import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      backgroundColor: "#f8f9fa",
      color: "#333",
      marginTop: "30px",
      boxShadow: "0px -1px 10px rgba(0, 0, 0, 0.1)"
    }}>
      {/* Logo Icons */}
      <div className="logo" style={{
        display: "flex",
        gap: "40px",
        marginBottom: "20px"
      }}>
        <div className="logoicon">
          <Link to="" target='_blank'>
            <lord-icon
              src="https://cdn.lordicon.com/bfoumeno.json"
              trigger="hover"
              style={{ width: "50px", height: "50px" }}>
            </lord-icon>
          </Link>
        </div>
        <div className="logoicon">
          <Link to="https://skrijwanprotfolio.netlify.app/" target='_blank'>
            <lord-icon
              src="https://cdn.lordicon.com/japmxdiq.json"
              trigger="hover"
              colors="primary:#121331,secondary:#000000"
              style={{ width: "50px", height: "50px" }}>
            </lord-icon>
          </Link>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact" style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{
          fontSize: "24px",
          color: "#007bff",
          fontWeight: "500",
          margin: "0",
          fontFamily:"play"
        }}>
          For Admission Inquiries, Call <br /> 9735183059 | 9907653727
        </h2>
      </div>

      {/* Footer Text */}
      <div className="texfooter" style={{
        fontFamily: "play, sans-serif",
        fontSize: "16px",
        color: "#666",
        textAlign: "center",
      }}>
        © 2021 RUPSONA IQRA MADRASA MISSION. All Rights Reserved.
      </div>
    </footer>
  );
}

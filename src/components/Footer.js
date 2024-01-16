import React from "react";
import "../styles/styles-components/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-inf">
          <p>Trabaja con nosotros</p>
          <p>Terminos y condiciones</p>
          <p>Como cuidamos tu privacidad</p>
          <p>Accesibilidad</p>
          <p>Ayuda / PQR</p>
          <p>www.sic.gov.co</p>
        </div>
        <p>Copyright © 1999-2023 MercadoLibre Colombia LTDA.</p>
        <p>Carrera XX Numero XX - XX Piso X, Bogotá D.C., Colombia</p>
        <p>Un Clon de una pagina XXX DDD</p>
      </div>
      <div className="footer-container-seguridad">
        <img src="img/footer/seguridad2.png" alt="seguridad2" />
        <img src="img/footer/seguridad1.png" alt="seguridad1" />
      </div>
    </footer>
  );
}

export default Footer;

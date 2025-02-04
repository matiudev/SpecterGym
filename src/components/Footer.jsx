import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          Programado por <span className="font-semibold">matiuDev</span>
        </p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

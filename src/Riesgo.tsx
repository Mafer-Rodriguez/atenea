function Riesgo() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Barra de navegación fija */}
      <div className="fixed top-0 w-full z-50 bg-white shadow-lg">
        <div className="menu flex justify-between items-center p-3">
          <div className="logo">
            <img
              src="https://ucarecdn.com/d962db80-ee9f-4e6a-8543-b14cf73994af/logoAtenea.jpeg"
              alt="logo"
              className="w-32"
            />
          </div>

          {/* Parte derecha: QR e icono derecho */}
          <div className="logoDerecha flex items-center space-x-4">
            <div className="imagenCentral">
              <img
                src="https://ucarecdn.com/0099ad8e-81e1-4bd0-b659-df0694bf2631/Capturadepantalla20241017141149.png"
                alt="imagen"
                className="w-20"
              />
            </div>
            <img
              src="https://ucarecdn.com/771ef9be-fb12-4d03-b15f-be2d6a5af014/qr.png"
              alt="qr"
              className="w-12"
            />
            <img
              src="https:/ucarecdn.com/d962db80-ee9f-4e6a-8543-b14cf73994af/logoAtenea.jpeg"
              alt="logo"
              className="w-20"
            />
          </div>
        </div>

        {/* Parte inferior (barra de navegación azul oscuro) */}
        <div className="w-full bg-[#1F2B6C] flex justify-between items-center py-3 px-8">
          <ul className="flex space-x-8 text-white font-semibold">
            <li>
              <button className="hover:text-gray-300">Inicio</button>
            </li>
            <li>
              <button className="hover:text-gray-300">Historial</button>
            </li>
            <li>
              <button className="hover:text-gray-300">Mapa</button>
            </li>
            <li>
              <button className="hover:text-gray-300">Blockchain</button>
            </li>
            <li>
              <button className="hover:text-gray-300">Contacto</button>
            </li>
          </ul>

          {/* Barra de búsqueda y botón */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                className="px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300"
                placeholder="Buscar"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </span>
            </div>
            <button className="bg-[#9ab2fa] text-white rounded-lg px-6 py-2 shadow-md hover:bg-[#7f9cf0] transition">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>

      {/* Sección de héroe */}
      <div
        className="hero flex justify-center items-center bg-cover bg-center min-h-screen relative"
        style={{
          backgroundImage: `url('https://ucarecdn.com/2c811c68-1d70-491a-9c54-eb7546cb5710/reportes.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Zona de Riesgo
          </h1>
          <div className="absolute bottom-0 mb-10 flex justify-center space-x-6">
            <div className="bg-blue-500 p-4 rounded-lg text-center shadow-md">
              <img
                src="https://ucarecdn.com/01f21916-23a3-48bf-8c9f-2c1fde510773/zone_person_urgent_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.png"
                alt="Zonas de Riesgo"
                className="mx-auto mb-2"
              />
              <h3 className="text-xl font-bold">Zonas de Riesgo</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Mapa y secciones adicionales */}
      <div className="p-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://ucarecdn.com/9b496881-2427-4125-b1c8-804120e931a1/Mapa.jpg"
            alt="Mapa"
            className="w-full h-auto rounded-md"
          />
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-4">
          <img
            src="https://ucarecdn.com/abfc92a0-feb0-4fd1-8e85-6eb3999d699a/emergencia.jpg"
            alt="Emergencia"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* AVISO1 */}
        <div className="flex justify-center mt-8 space-x-4 mb-8">
  <img
    src="https://ucarecdn.com/a0157651-19eb-4194-add2-060fb6f1060f/aviso1.jpg"
    alt="Aviso 1"
    className="w-90 h-60 rounded-md"
  />
  <img
    src="https://ucarecdn.com/9faff87f-66bd-4f52-9c34-afc01452b6c7/Aviso2.jpg"
    alt="Aviso 2"
    className="w-90 h-60 rounded-md"
  />
</div>
      {/* Pie de página */}
      <footer className="bg-gray-900 text-white py-8 mb-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div className="w-full lg:w-1/4 mb-4 lg:mb-10">
              <img
                src="https://ucarecdn.com/3c489268-9922-46ec-88bb-3d96119a8a09/LOGOBLANCO.png"
                alt="Logo de Atenea"
                className="mb-9 w-36"
              />
              <p>
                Atenea optimiza la gestión de denuncias ciudadanas, mejorando la
                seguridad pública.
              </p>
            </div>
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h3 className="font-bold mb-2">Contáctanos</h3>
              <p>Av. Gerónimo de la Cueva s/n, Villas del Río, Aguascalientes</p>
              <p>
                <a href="mailto:contacto@atenea.com" className="text-white">
                  contacto@atenea.com
                </a>
              </p>
              <p>
                <a href="tel:+521234567890" className="text-white">
                  +52 123 456 7890
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>IRIS 2024 © Atenea - Gestión de Reportes</p>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Riesgo;

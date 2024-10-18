import PiePagina from "./piePagina";

function PerfilesCriminales() {
  return (
    <div>
      <div className="fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="menu flex justify-between p-3">
          <div className="logo">
            <img
              src="https://ucarecdn.com/d962db80-ee9f-4e6a-8543-b14cf73994af/logoAtenea.jpeg"
              alt="logo"
              style={{ width: "150px", height: "auto" }}
            />
          </div>

          {/* Parte derecha: QR e icono derecho */}
          <div className="logoDerecha flex items-center space-x-4">
            <div className="imagenCentral flex items-center">
              <img
                src="https://ucarecdn.com/0099ad8e-81e1-4bd0-b659-df0694bf2631/Capturadepantalla20241017141149.png" // Aquí puedes reemplazar la URL por la imagen que desees
                alt="imagen"
                style={{ width: "80px", height: "auto" }}
              />
            </div>
            {/* QR */}
            <img
              src="https://ucarecdn.com/771ef9be-fb12-4d03-b15f-be2d6a5af014/qr.png" // Reemplaza esta URL con tu imagen de QR
              alt="qr"
              style={{ width: "50px", height: "auto" }}
            />
            {/* Segundo logo */}
            <img
              src="https://ucarecdn.com/d962db80-ee9f-4e6a-8543-b14cf73994af/logoAtenea.jpeg"
              alt="logo"
              style={{ width: "80px", height: "auto" }}
            />
          </div>
        </div>

        {/* Parte inferior (azul oscuro) */}
        <div className="w-full bg-[#1F2B6C] flex justify-between items-center py-3 px-8">

          {/* Enlaces de Navegación */}
          <ul className="flex space-x-8 text-white font-semibold">
            <li>
              <button className="text-white hover:text-gray-300">Inicio</button>
            </li>
            <li>
              <button className="text-white hover:text-gray-300">Historial</button>
            </li>
            <li>
              <button className="text-white hover:text-gray-300">Mapa</button>
            </li>
            <li>
              <button className="text-white hover:text-gray-300">Blockchain</button>
            </li>
            <li>
              <button className="text-white hover:text-gray-300">Contacto</button>
            </li>
          </ul>

        </div>

      </div>

      {/* Sección de héroe */}
      <div
        className="hero flex justify-center items-center bg-cover bg-center min-h-screen relative"
        style={{
          backgroundImage: `url('https://ucarecdn.com/a1e6aaa3-3555-411d-902e-230d2c262942/WhatsAppImage20241018at20003AM.jpeg')`,
        }}
      >
        <div></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          {/* Texto principal */}
          <h1 className="text-5xl md:text-7xl font-bold">
            Perfil Criminales
          </h1>

          {/* Espacio vacío para ajustar la posición del texto */}
          <div className="pb-20"></div>

          {/* Contenedores de íconos que estarán hasta abajo */}
          <div className="absolute bottom-0 left-0 right-0 mb-10 flex justify-center space-x-6">
            {/* Bloque 3: Zonas de Riesgo */}
            <div className="bg-blue-500 p-4 rounded-lg text-center shadow-md">
              <img src="https://ucarecdn.com/01f21916-23a3-48bf-8c9f-2c1fde510773/zone_person_urgent_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.png" alt="Zonas de Riesgo" className="mx-auto mb-2" />
              <h3 className="text-xl font-bold">Zonas de Riesgo</h3>
            </div>
          </div>
        </div>



      </div>

      <div className="flex flex-col items-center space-y-8 p-6">
        <div
          className="hero flex justify-center items-center bg-cover bg-center h-40 w-full md:h-40 md:w-3/4 relative"
          style={{
            backgroundImage: `url('https://ucarecdn.com/ce2c09ac-0a1c-4806-a8ff-43de125ba7eb/WhatsAppImage20241018at100452AM.jpeg')`,
          }}
        ></div>
        <div
          className="hero flex justify-center items-center bg-cover bg-center h-64 w-full md:h-50 md:w-3/4 relative"
          style={{
            backgroundImage: `url('https://ucarecdn.com/d68a1bd7-a44b-4ebd-84a3-0b4f51791c21/WhatsAppImage20241018at100427AM.jpeg')`,
          }}
        ></div>

        <div
          className="hero flex justify-center items-center bg-cover bg-center h-64 w-full md:h-50 md:w-3/4 relative"
          style={{
            backgroundImage: `url('https://ucarecdn.com/326b4e98-6715-4cab-8215-4ede946d341a/Capturadepantalla20241018102911.png')`,
          }}
        ></div>




      </div>
      <div>
        <PiePagina />
      </div>



    </div>
  );
}
export default PerfilesCriminales 
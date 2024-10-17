function Index() {
  return (
    <div>
      {/* Barra de navegación fija */}
      <div className="fixed top-0 w-full z-50 shadow-md">

        {/* Parte superior (blanca) */}
        <div className="w-full bg-white flex justify-between items-center py-2 px-8">
          {/* Logo izquierda */}
          <div className="logoIzquierda">
            <img
              src="https://ucarecdn.com/d962db80-ee9f-4e6a-8543-b14cf73994af/logoAtenea.jpeg"
              alt="logo"
              style={{ width: "90px", height: "auto" }}
            />
          </div>

          {/* Parte derecha: QR e icono derecho */}
          <div className="logoDerecha flex items-center space-x-4">
          <div className="imagenCentral flex items-center">
            <img
              src="https://via.placeholder.com/100x40" // Aquí puedes reemplazar la URL por la imagen que desees
              alt="imagen"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
            {/* QR */}
            <img
              src="https://via.placeholder.com/50" // Reemplaza esta URL con tu imagen de QR
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

          {/* Barra de búsqueda y botón */}
          <div className="flex items-center space-x-4">
            {/* Barra de búsqueda */}
            <div className="relative">
              <input
                type="text"
                className="px-4 py-2 rounded-full bg-white text-gray-700"
                placeholder="Buscar"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">
                🔍
              </span>
            </div>

            {/* Botón de sesión */}
            <button className="bg-[#9ab2fa] text-white rounded-lg px-6 py-2">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>



      {/* Sección de héroe */}
      <div
        className="hero flex justify-center items-center bg-cover bg-center min-h-screen relative"
        style={{
          backgroundImage: `url('https://ucarecdn.com/0df6fe97-effb-4321-b595-25706a712765/varunaFondo1.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text- text-white">
          <h1 className="text-5xl md:text-7xl font-bold">
          SISTEMA DE GESTIÓN 
          <br></br>
          DE REPORTES 
          <br></br>
          ATENEA
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-center">
            Una Plataforma Diseñada Para Optimizar Y Asegurar La Gestión De
            Denuncias Ciudadanas
          </p>
        </div>
      </div>

      <div>

      </div>

      {/* Sección de Bienvenida */}
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Bienvenido</h2>
          <p className="text-lg mb-6">
            Atenea optimiza el proceso de reportes ciudadanos y mejora la
            seguridad pública.
          </p>
        </div>
        <div className="flex justify-between space-x-6">
          {/* Tres características */}
          <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-bold">Seguridad Mejorada</h3>
            <p>Mejor manejo de denuncias ciudadanas.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-bold">Reporte Visual</h3>
            <p>Facilita el registro de incidentes visuales.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-bold">Plataforma Integrada</h3>
            <p>Conexión directa con autoridades.</p>
          </div>
        </div>
      </div>

      {/* Sección de la App */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Atenea App</h2>
          <div className="flex justify-center">
            <img
              src="https://ucarecdn.com/abc123/app-demo-image.png"
              alt="Atenea App"
              className="w-64 h-auto"
            />
          </div>
          <p className="mt-6">
            Descarga nuestra aplicación móvil para un acceso rápido y fácil a
            reportes de seguridad en tiempo real.
          </p>
        </div>
      </div>

      {/* Pie de página */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <img
                src="https://ucarecdn.com/d962db80-ee9f-4e6a-8543-b14cf73994af/logoAtenea.jpeg"
                alt="Atenea Logo"
                className="mb-4"
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
          <p>2024 © Atenea - Gestión de Reportes</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;




function Historial() {
  return (
    <div>
     {/* Barra de navegación fija */}
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
              src="https:/ucarecdn.com/d962db80-ee9f-4e6a-8543-b14cf73994af/logoAtenea.jpeg"
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
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
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
    backgroundImage: `url('https://ucarecdn.com/2c811c68-1d70-491a-9c54-eb7546cb5710/reportes.jpg')`,
  }}
>
        <div></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          {/* Texto principal */}
          <h1 className="text-5xl md:text-7xl font-bold">
            HISTORIAL  DE  REPORTES
          </h1>

          {/* Espacio vacío para ajustar la posición del texto */}
          <div className="pb-20"></div>

          {/* Contenedores de íconos que estarán hasta abajo */}
          <div className="absolute bottom-0 left-0 right-0 mb-10 flex justify-center space-x-6">
            {/* Bloque 1: Blockchain */}
            <div className="bg-blue-900 p-4 rounded-lg text-center shadow-md">
              <img src="https://ucarecdn.com/e186682f-314c-4afe-af52-c71863e1fc04/currency_bitcoin_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.png" alt="Blockchain" className="mx-auto mb-2" />
              <h3 className="text-xl font-bold">Blockchain</h3>
            </div>

            {/* Bloque 2: Modificaciones */}
            <div className="bg-blue-200 p-4 rounded-lg text-center shadow-md">
              <img src="https://ucarecdn.com/bd20b58b-149e-4440-bc80-72764f4b5282/contract_edit_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.png" alt="Modificaciones" className="mx-auto mb-2" />
              <h3 className="text-xl font-bold">Modificaciones</h3>
            </div>

          
          </div>
        </div>
        
      </div>
      {/* Sección de Bienvenida */}
      <div className="p-20 rounded-lg">
            <img
          src="https://ucarecdn.com/f98806e1-5752-4cd8-926f-642bd6342d75/datos.jpg"
          alt="Datos"
           className="w-auto h-auto"
        />
      </div>
      <div className="container mx-auto p-9">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Empieza por realizar una búsqueda para localizar más rápidamente los
            reportes
          </h2>
          <ul className="flex space-x-10 text-blue-900 font-semibold"></ul>
          <p className="text-lg mb-6">
          Visualiza, y modifica los reportes enviados por los usuarios desde la App de ATENEA
          </p>
        </div>
        <div className="flex justify-between space-x-6">
          {/* Tres características */}
        </div>
      </div>

      {/* Sección de la App */}
      <div className="text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6"></h2>
          <div className="flex justify-center">
            <img
              src="https://ucarecdn.com/65828248-c357-43a0-93c4-a44ec3a802ef/historiall.jpg"
              alt="Demostración de la aplicación Atenea"
              className="w-79 h-auto"
            />
          </div>
          <p className="mt-6">
            
          </p>
        </div>
      </div>


      {/*tabla de datos*/}
     
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Municipio
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
              
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Tipo de delito
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Subtipo
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
              
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Entidad
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
              
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Hora
                <a href="">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
              
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Bien Juridico Afectado
                <a href="#">
                  <svg
                    className="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
              
              
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
        
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Reporte
            </th>
            <td className="px-6 py-4">Calvillo</td>
            <td className="px-6 py-4">Robo</td>
            <td className="px-6 py-4">Robo a mano armada</td>
            <td className="px-6 py-4">Aguascalientes</td>
            <td className="px-6 py-4">18:00 AM</td>
            <td className="px-6 py-4">Integridad física</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Mostrar información completa
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Denuncia
            </th>
            <td className="px-6 py-4">Aguascalientes</td>
            <td className="px-6 py-4">Homicidio</td>
            <td className="px-6 py-4">Homicidio culposo</td>
            <td className="px-6 py-4">Aguascalientes</td>
            <td className="px-6 py-4">13:00 AM</td>
            <td className="px-6 py-4">Integridad física</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Mostrar información completa
              </a>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Pendiente
            </th>
            <td className="px-6 py-4">Tepezala</td>
            <td className="px-6 py-4">Riña</td>
            <td className="px-6 py-4">Homicidio culposo</td>
            <td className="px-6 py-4">Aguascalientes</td>
            <td className="px-6 py-4">11:00 AM</td>
            <td className="px-6 py-4">Integridad física</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Mostrar información completa
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  
      {/* Pie de página */}
      <footer className="bg-gray-900 text-white py-8 mb-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <img
                src="https://ucarecdn.com/3c489268-9922-46ec-88bb-3d96119a8a09/LOGOBLANCO.png"
                alt="Logo de Atenea"
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
          <p>IRIS 2024 © Atenea - Gestión de Reportes</p>
        </div>
      </footer>
    </div>
  );
}

export default Historial;

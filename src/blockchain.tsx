import PiePagina from "./piePagina";
function Blockchain() {
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

                    {/* Header con enlaces de navegación adicionales */}
                    <header className="flex items-center space-x-6">
                        <nav className="space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white">Company</a>
                            <a href="#" className="text-gray-400 hover:text-white">Product</a>
                            <a href="#" className="text-gray-400 hover:text-white">Artist</a>
                            <a href="#" className="text-gray-400 hover:text-white">Wallet</a>
                        </nav>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#FFFFFF"
                                className="mr-2"
                                style={{ width: "20px", height: "auto" }}
                            >
                                <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/>
                            </svg>
                            Eng
                        </button>
                    </header>
                </div>


            </div>
            <br />
            <br />
            <br />
            <div className="flex justify-center p-5"></div>

            {/* Sección de héroe */}
            <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white flex flex-col items-center justify-center text-center p-6">
                <main className="flex flex-col md:flex-row items-center justify-between text-left w-full max-w-4xl">
                    {/* Contenedor del Texto */}
                    <div className="flex flex-col items-start justify-center text-left">
                        <p className="text-gray-300 mb-2 text-lg md:text-xl">Blockchain Is New Brands!</p>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">BLOCKCHAIN</h1>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 mb-8 shadow-lg">
                            Get Started
                        </button>
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            REPORTES CREADOS POR LOS USUARIOS DE LA APP ATENEA
                        </h2>
                    </div>

                    {/* Contenedor de la Imagen */}
                    <div className="relative w-60 h-60 md:w-96 md:h-96 mb-10 md:mb-0">
                        <img
                            src="https://ucarecdn.com/095908d3-956e-41d7-895d-cc68b40ee559/blockchain.png"
                            alt="Blockchain Icon"
                            className="w-full h-full object-contain"
                        />
                    </div>

                </main>

                {/*Seccion de logo */}
                <div className="flex justify-center p-5">
                    <img
                        src="https://ucarecdn.com/bf514a6a-bc47-4f69-be69-79c92bb48807/infinityremovebgpreview.png"
                        alt="logo"
                        style={{ width: "300px", height: "auto" }}
                    />
                </div>

                {/* Dos imagenes */}
                <div className="flex justify-center p-5 space-x-5">
                    <img
                        src="https://ucarecdn.com/1a82c720-b81b-4e55-b92c-151453fddcdb/WhatsAppImage20241018at11306AM.jpeg"
                        alt="imagen"
                        style={{ width: "300px", height: "auto" }}
                    />
                    <img
                        src="https://ucarecdn.com/1a82c720-b81b-4e55-b92c-151453fddcdb/WhatsAppImage20241018at11306AM.jpeg"
                        alt="imagen"
                        style={{ width: "300px", height: "auto" }}
                    />
                </div>
            </div>


            <div>
                <PiePagina />
            </div>

        </div>


    );
}

export default Blockchain
import React, { useState } from 'react';
import varunaLogo from './imagenes/VarunaLogo.jpeg';
import notificasion from './imagenes/notificasion.jpeg';
import lupa from './imagenes/lupita.png';
import grafica from './imagenes/Grafica (2).jpeg';
import mensaje from './imagenes/mensajito.jpeg';
import personas from './imagenes/personas.jpeg';
import documento from './imagenes/documento.png';
import post from './imagenes/post.png';
import archivo from './imagenes/archivoSub.png';
import iris from './imagenes/iris.jpeg';
import usuario1 from './imagenes/usuariosVa.jpeg';
import admid from './imagenes/admid.jpeg';
import chat from './imagenes/chatBot.jpeg';
import gerente from './imagenes/gerente.jpeg';
import gerente1 from './imagenes/gerenteMujer.jpeg';
import sierra from './imagenes/sierra.jpeg';

interface Plant {
    id: number;
    name: string;
    location: string;
}

function App() {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPlant: Plant = {
            id: Math.floor(Math.random() * 10000), // Generar ID aleatorio
            name,
            location,
        };
        setPlants([...plants, newPlant]);
        setName('');
        setLocation('');
    };

    return (
        <div className="bg-gray-100 font-sans antialiased min-h-screen flex flex-col">
            {/* Navbar */}
            <header className="bg-white shadow-md p-4 flex justify-between items-center w-full">
                <div className="flex items-center space-x-4">
                    <img src={varunaLogo} alt="Logo" className="w-20 h-20" />
                    <span className="text-lg font-semibold">VARUNA PLATFORM</span>
                </div>
                <nav className="flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-gray-800">Panel</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Resultados</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Posts</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Perfil</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Usuarios</a>
                </nav>
                <div className="relative">
                    <input type="text" className="bg-gray-200 rounded-full pl-4 pr-10 py-2" placeholder="Buscar..." />
                    <span className="material-icons absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <img src={lupa} alt="Buscar" className="h-4 w-4" />
                    </span>
                </div>
                <div>
                    {/* Botón de notificaciones */}
                    <button className="mr-2">
                        <img src={notificasion} alt="Notificación" className="h-7 w-7" />
                    </button>
                    <button className="mr-2">
                        <img src={mensaje} alt="Mensaje" className="h-7 w-7" />
                    </button>
                    <button className="mr-2">
                        <img src={personas} alt="Personas" className="h-7 w-7" />
                    </button>
                    <button className="mr-2">
                        <img src={grafica} alt="Gráfica" className="h-7 w-7" />
                    </button>
                </div>
            </header>

            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-md p-6">
                    <nav className="space-y-4">
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <div className="bg-blue-600 text-white p-3 rounded-lg flex justify-between items-center">
                                <span>Panel</span>
                                <div className="bg-blue-800 rounded-full h-6 w-6 flex items-center justify-center">1</div>
                            </div>
                            <div className="mt-4 space-y-4">
                                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="bg-purple-500 rounded-full h-6 w-6 flex items-center justify-center mr-2">
                                            <img src={documento} alt="Resultados" className="h-4 w-4" />
                                        </div>
                                        <span>Resultados</span>
                                    </div>
                                    <div className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center">3</div>
                                </div>
                                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center mr-2">
                                            <img src={post} alt="Posts" className="h-4 w-4" />
                                        </div>
                                        <span>Posts</span>
                                    </div>
                                    <div className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">NEW</div>
                                </div>
                                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="bg-blue-500 rounded-full h-6 w-6 flex items-center justify-center mr-2">
                                            <img src={archivo} alt="Archivos subidos" className="h-4 w-4" />
                                        </div>
                                        <span>Archivos subidos</span>
                                    </div>
                                    <div className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center">3</div>
                                </div>
                            </div>
                        </div>

                        {/* Usuarios */}
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <div className="bg-blue-600 text-white p-3 rounded-lg flex justify-between items-center">
                                <span>Usuarios</span>
                                <div className="bg-blue-800 rounded-full h-6 w-6 flex items-center justify-center">8</div>
                            </div>
                            <div className="mt-4 space-y-4">
                                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <img src={iris} alt="Equipo VARUNA" className="rounded-full mr-2 w-7 h-7" />
                                    <span className="text-gray-700">IRIS</span>
                                    <span className="ml-auto bg-green-500 rounded-full w-3 h-3"></span>
                                </div>
                                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <img src={usuario1} alt="Usuario 1" className="rounded-full mr-2  w-7 h-7" />
                                    <span className="text-gray-700">Usuario 1</span>
                                    <span className="ml-auto bg-gray-400 rounded-full w-3 h-3"></span>
                                </div>
                                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <img src={admid} alt="Admin" className="rounded-full mr-2 w-7 h-7" />
                                    <span className="text-gray-700">Admin</span>
                                    <span className="ml-auto bg-green-500 rounded-full w-3 h-3"></span>
                                </div>
                                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <img src={chat} alt="Chatbot" className="rounded-full mr-2 w-7 h-7" />
                                    <span className="text-gray-700">Chatbot</span>
                                    <span className="ml-auto bg-green-500 rounded-full w-3 h-3"></span>
                                </div>
                                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <img src={gerente} alt="Gerente" className="rounded-full mr-2 w-7 h-7" />
                                    <span className="text-gray-700">Gerente</span>
                                    <span className="ml-auto bg-yellow-400 rounded-full w-3 h-3"></span>
                                </div>
                                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <img src={gerente1} alt="Usuario 2" className="rounded-full mr-2 w-7 h-7" />
                                    <span className="text-gray-700">Usuario 2</span>
                                    <span className="ml-auto bg-yellow-400 rounded-full w-3 h-3"></span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <aside className="g-white rounded-lg shadow-lg p-4">
                                <div className="flex items-center space-x-2 mb-6">
                                    <img src={sierra} alt="Logo" className="h-10 w-10 rounded-full " />
                                    <div>
                                        <h1 className="text-lg font-semibold">La Sierra - Planta Tratadora</h1>
                                        <p className="text-sm text-gray-500">lasierra@gmail.com</p>
                                    </div>
                                </div>
                                <nav>
                                    <ul>
                                        <li className="mb-4">
                                            <a href="#" className="flex items-center space-x-3 text-blue-500">
                                                <span className="text-xl">
                                                    <i className="fas fa-list"></i>
                                                </span>
                                                <span>Categorías</span>
                                                <span className="ml-auto bg-blue-100 text-blue-500 rounded-full px-3 py-1 text-xs">1</span>
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="flex items-center space-x-3 text-red-500">
                                                <span className="text-xl">
                                                    <i className="fas fa-tag"></i>
                                                </span>
                                                <span>Tags</span>
                                                <span className="ml-auto bg-red-100 text-red-500 rounded-full px-3 py-1 text-xs">1</span>
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="flex items-center space-x-3 text-green-500">
                                                <span className="text-xl">
                                                    <i className="fas fa-comments"></i>
                                                </span>
                                                <span>Comentarios</span>
                                                <span className="ml-auto bg-green-100 text-green-500 rounded-full px-3 py-1 text-xs">5</span>
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="flex items-center space-x-3 text-yellow-500">
                                                <span className="text-xl">
                                                    <i className="fas fa-cog"></i>
                                                </span>
                                                <span>Configuración</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="mt-6">
                                    <a href="#" className="flex items-center space-x-3 text-red-500">
                                        <span className="text-xl">
                                            <i className="fas fa-sign-out-alt"></i>
                                        </span>
                                        <span>Cerrar Sesión</span>
                                    </a>
                                </div>
                            </aside>
                        </div>
                    </nav>
                </aside>

                {/* Main content */}
                <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Añadir Nueva Planta Tratadora</h2>
                        <div className="mb-2">
                            <label htmlFor="name" className="block text-gray-700">Nombre:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="location" className="block text-gray-700">Ubicación:</label>
                            <input
                                type="text"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Añadir Planta
                        </button>
                    </form>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Lista de Plantas Tratadoras</h2>
                        <ul className="space-y-2">
                            {plants.map((plant) => (
                                <li key={plant.id} className="bg-gray-100 p-2 rounded-lg shadow-sm">
                                    <span className="block text-gray-800">{plant.name}</span>
                                    <span className="block text-gray-500">{plant.location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;

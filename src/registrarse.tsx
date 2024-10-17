import React from 'react';


const Registrarse: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg flex max-w-4xl mx-auto overflow-hidden">
        {/* Left Side: Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">REGISTRATE</h2>
          <p className="mb-6">Ingresa a nuestra plataforma</p>
          
          <form action="#">
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                <i className="fas fa-user mr-2"></i> ID Policia 
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                <i className="fas fa-lock mr-2"></i> Correo electrónico
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                <i className="fas fa-lock mr-2"></i> Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg">Crea tu cuenta</button>
          </form>

          <p className="mb-6">¿Ya tienes una cuenta? inicia sesión</p>
          
          <div className="my-4 flex items-center justify-center">
            <span className="block h-px w-16 bg-gray-300"></span>
            <span className="mx-4 text-gray-500">o</span>
            <span className="block h-px w-16 bg-gray-300"></span>
          </div>
          
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center border border-gray-400 p-3 rounded-lg">
              <img src="https://ucarecdn.com/1bcf1884-fd80-4b78-9669-d6587213ca46/crome.png" className="w-5 h-5 mr-3" alt="Google" />
              Continuar con <span className="ml-2 text-gray-600 font-medium">Google</span>
            </button>
            
            <button className="w-full flex items-center justify-center border border-gray-400 p-3 rounded-lg">
              <img src="https://ucarecdn.com/01dd59fb-132e-4513-a045-ae7372499a03/ididentity.png" className="w-5 h-5 mr-3" alt="Internet Identity" />
              Continuar con <span className="ml-2 text-gray-600 font-medium">Internet Identity</span>
            </button>
          </div>
        </div>
        {/* Right Side: Information */}
        <div
          className="w-1/2 flex items-center justify-center p-8 text-white relative"
          
        >
        
        
              <img 
              src="https://ucarecdn.com/3cf1b934-eaf8-4480-8fd9-459072721a83/policias.jpg" 
              alt="Policías"
              className="w-full h-full object-cover"
            />
                
      
        </div>
      </div>
    </div>
  );
};

export default Registrarse;

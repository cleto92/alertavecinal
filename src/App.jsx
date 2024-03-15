import { useState } from "react";
import Logo from "./assets/logo.png";
import AndroidLogo from "./assets/AndroidLogo.jpg";
import Vigmo from "./assets/Vigmo.png";
import Palique from "./assets/palique.jpg";
import PaliqueLed from "./assets/paled.png";
import Pocket from "./assets/poc.jpg";
import PocketLed from "./assets/poc led.jpg";
import "animate.css";
import { Link, Element } from "react-scroll";
import Whatsapp from './assets/Whatsapp.png'

const App = () => {


const whatsappLink = 'https://wa.me/541161615652'
const [formData, setFormData] = useState({
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  mensaje: ''
})


const handleChange = (e) => {
  const {nombre, value} = e.target
  setFormData(prevState => ({
    ...prevState, 
    [nombre]: value
  }))
}

const handleSubmit = (e) => {
  e.preventDefault()
  const {nombre, apellido, mensaje} = formData
  const mensajeWhatsapp = `Hola, mi nombre es ${nombre} ${apellido}, ${mensaje}`
  const codificarMensaje = encodeURIComponent(mensajeWhatsapp)

  const whatsappUrl = `${whatsappLink}?text=${codificarMensaje}`;
  window.open(whatsappUrl, '_blank');
}



  return (
    <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white ">
      <nav className="z-20 bg-white dark:bg-slate-800 fixed top-0 left-0 right-0 w-full border-b shadow-lg dark:border-none">
        <div className="p-6 container mx-auto flex justify-between items-center ">
          <div className="z-20" name="Logo">
            <img className="flex items-center" src={Logo} alt="logo" />
          </div>
          <div name="cuerpoMenu" className="">
            <input
              type="checkbox"
              hidden
              name="hamburguer"
              id="hamburguer"
              className="peer"
            />
            <label
              htmlFor="hamburguer"
              className="peer-checked:hamburguer block z-20 cursor-pointer md:hidden transition p-5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded"
            >
              <div className="h-0.5 w-6 bg-black dark:bg-white transition"></div>
              <div className="mt-2 h-0.5 w-6 bg-black dark:bg-white transition"></div>
            </label>
            <div className="bg-white dark:bg-slate-900 dark:md:bg-slate-800 w-3/5 shadow-lg transition flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0 md:w-auto md:static md:shadow-none md:translate-x-0 md:flex-row">
              <div className="px-6 pt-32 flex flex-col md:flex-row md:items-center gap-3 md:p-0">
                <a
                  href=""
                  className="tracking-wide cursor-pointer px-3 py-2 rounded hover:text-white font-bold text-lg transition hover:bg-red-600"
                >
                  Nosotros
                </a>
                <Link
                  to="alarmaPaliqueSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="tracking-wide cursor-pointer px-3 py-2 rounded hover:text-white font-bold text-lg transition hover:bg-red-600"
                >
                  Alarmas
                </Link>
                <Link
                  to="Vigmo"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="tracking-wide cursor-pointer px-3 py-2 rounded hover:text-white font-bold text-lg transition hover:bg-red-600"
                >
                  Vigmo
                </Link>
                <Link
                  to="Contacto"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  className="tracking-wide cursor-pointer px-3 py-2 rounded hover:text-white font-bold text-lg transition hover:bg-red-600"
                >
                  Contacto
                </Link>
                <Link
                  to="demo"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="tracking-wide cursor-pointer px-3 py-2 rounded hover:text-white font-bold text-lg transition hover:bg-red-600"
                >
                  Video Demostrativo
                </Link>
                <a
                  href="https://vapore.com.ar/33f-Novedades"
                  className="tracking-wide text-white cursor-pointer bg-slate-600 px-3 py-2 rounded font-bold text-lg transition"
                >
                  Distribuidores
                </a>
              </div>
              <div className="block md:hidden border-t py-8 px-6 md:border-t-0 dark:border-slate-700 md:py-0 md:pr-0 md:pl-6">
                <a
                  href=""
                  className="block px-6 py-2 rounded text-center text-white text-lg font-bold transition bg-blue-500 hover:bg-blue-600"
                >
                  Descargar Aplicación
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
            <a 
              href={whatsappLink}
              className="fixed bottom-4 right-4  text-white font-bold p-1 rounded-full flex items-center z-50"
              target="_blank"
              rel="noopener noreferrer"
              
            >
                  <img src={Whatsapp} className="w-12 h-12 mr-2"/>
            </a>
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Un poco sobre Nosotros
            </h2>
            <p className="text-xl lg:text-2xl font-light py-10">
              Explora lo que nos hace únicos en la industria de la seguridad
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            <div className="w-full md:w-1/3 bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-500 ease-in-out">
              <h3 className="font-bold text-xl mb-4">Nuestra Misión</h3>
              <p>
                Nos enfocamos en anticiparnos y resolver con excelencia todos
                los requerimientos tecnológicos en seguridad, brindando
                servicios de vanguardia y promoviendo el crecimiento industrial.
              </p>
            </div>

            <div className="w-full md:w-1/3 bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-500 ease-in-out">
              <h3 className="font-bold text-xl mb-4">Nuestra Filosofía</h3>
              <p>
                Estamos a la vanguardia de la innovación, desarrollando
                soluciones que protegen y empoderan a nuestros clientes,
                liderando el mercado con calidad y excelencia.
              </p>
            </div>

            <div className="w-full md:w-1/3 bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-500 ease-in-out">
              <h3 className="font-bold text-xl mb-4">Nuestras Ventajas</h3>
              <ul className="list-disc pl-5">
                <li>Atención personalizada</li>
                <li>Vanguardia tecnológica</li>
                <li>Liderazgo en la industria</li>
                <li>Fabricación propia</li>
                <li>Fácil instalación</li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-500 ease-in-out">
              <h3 className="font-bold text-xl mb-4">Nuestro Compromiso</h3>
              <p>
                Nuestro compromiso es con la excelencia y la mejora continua,
                asegurando que cada solución que ofrecemos no solo cumpla con
                las expectativas de nuestros clientes sino que las supere.
                Estamos dedicados a la innovación sostenible, reduciendo nuestro
                impacto ambiental mientras lideramos el camino en tecnologías de
                seguridad avanzadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-300 py-14 lg:py-20">
        <h1 className="lg:text-6xl text-5xl mb-4 font-bold text-center animate__animated animate__bounce text-blue-800">
          NUESTRAS ALARMAS
        </h1>
      </div>


      {/* Inicio de las Secciones de las Alarmas */}

      <Element name="alarmaPaliqueSection">
        <section
          style={{ animation: "fadeIn 2s forwards" }}
          className="py-14 lg:py-2 bg-gray-100"
        >
          <div
            id="Palique"
            className="container mx-auto flex flex-wrap px-8 md:flex-row flex-col items-center animate__animated animate__bounceInLeft"
          >
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="sm:text-4xl text-3xl mb-4 font-semibold py-9 text-blue-800">
                ALARMA PALIQUE
              </h1>
              <hr className="border-t border-gray-300 my-4 w-full" />
              <p className="mb-8 leading-relaxed text-lg font-medium text-black">
                La Alarma PALIQUE fortalece la seguridad comunitaria con un
                eficaz sistema de alerta. Cuenta con indicadores sonoros que
                activan sonidos disuasivos y de alerta inmediata, cubriendo
                áreas de hasta 170 metros. Su control activado asegura una
                respuesta rápida ante cualquier incidencia.
              </p>
              <div className="text-left w-full">
                <p className="font-bold text-2xl mb-4 text-black">Detalles:</p>
                <ul className="list-inside list-disc space-y-2 text-lg text-black">
                  <li className="font-semibold">Bocinas Náuticas 30W</li>
                  <li className="font-semibold">Cubre 180 metros Lineales</li>
                  <li className="font-semibold">Hasta 1000 Controles</li>
                  <li className="font-semibold">Sonido de Disuasión</li>
                  <li className="font-semibold">Aviso sonoro de control</li>
                  <li className="font-semibold">Sonido secuencial de robo</li>
                  <li className="font-semibold">
                    Sonido continuo de Emergencia
                  </li>
                  <li className="font-semibold">Compatibilidad con Vigmo</li>
                </ul>
              </div>
            </div>
            <div
              id="imagenesContenedor"
              className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto"
            >
              <img
                src={Palique}
                className="object-cover object-center rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <hr className="border-16 border-blue-900 my-8 mx-auto w-full" />
       
       </section>
      </Element>

      <section
        style={{ animation: "fadeIn 2s forwards" }}
        className="py-14 lg:py-20 bg-gray-100"
      >
        <div
          id="PaliqueLed"
          className="container mx-auto flex px-8 md:flex-row flex-col items-center animate__animated animate__backInRight"
        >
          <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-semibold py-9 text-blue-800">
              ALARMA PALIQUE LED
            </h1>
            <hr className="border-t border-gray-300 my-4 w-full" />
            <p className="mb-8 leading-relaxed text-lg font-medium text-black">
              El modelo Palique LED extiende las funcionalidades del PALIQUE
              original al incorporar un avanzado sistema de iluminación. Incluye
              tres potentes reflectores de 500 watts, con capacidad de expansión
              hasta ocho reflectores, gracias a su contactor de 30 Amperes.
              Ideal para iluminar y disuadir efectivamente en cualquier
              situación.
            </p>
            <div className="text-left w-full">
              <p className="font-bold text-2xl mb-4 text-black">Detalles:</p>
              <ul className="list-inside list-disc space-y-2 text-lg text-black">
                <li className="font-semibold">Bocinas Náuticas 30W</li>
                <li className="font-semibold">3 Reflectores de 30w Led</li>
                <li className="font-semibold">Cubre 180 metros Lineales</li>
                <li className="font-semibold">Sonido de Disuasión</li>
                <li className="font-semibold">Aviso sonoro de control</li>
                <li className="font-semibold">Sonido secuencial de robo</li>
                <li className="font-semibold">Sonido continuo de Emergencia</li>
                <li className="font-semibold">Compatibilidad con Vigmo</li>
              </ul>
            </div>
          </div>
          <div
            id="imagenesContenedor"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:order-first"
          >
            <img
              src={PaliqueLed}
              className="object-cover object-center rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section
        style={{ animation: "fadeIn 2s forwards" }}
        className="py-14 lg:py-20 bg-gray-100"
      >
      <hr className="border-16 border-blue-900 my-8 mx-auto w-full" />
        <div
          id="Palique"
          className="container mx-auto flex px-8 md:flex-row flex-col items-center animate__animated animate__bounceInLeft"
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-semibold py-9 text-blue-800">
              ALARMA POCKET
            </h1>
            <hr className="border-t border-gray-300 my-4 w-full " />
            <p className="mb-8 leading-relaxed text-lg font-medium text-black">
              La Alarma PALIQUE fortalece la seguridad comunitaria con un eficaz
              sistema de alerta. Cuenta con indicadores sonoros que activan
              sonidos disuasivos y de alerta inmediata, cubriendo áreas de hasta
              170 metros. Su control activado asegura una respuesta rápida ante
              cualquier incidencia.
            </p>
            <div className="text-left w-full">
              <p className="font-bold text-2xl mb-4 text-black">Detalles:</p>
              <ul className="list-inside list-disc space-y-2 text-lg text-black">
                <li className="font-semibold">
                  Bocina Náutica 30W de alta potencia
                </li>
                <li className="font-semibold">Cubre 180 metros Lineales</li>
                <li className="font-semibold">Sonido de Disuasión</li>
                <li className="font-semibold">Aviso sonoro de control</li>
                <li className="font-semibold">Sonido secuencial de robo</li>
                <li className="font-semibold">Sonido continuo de Emergencia</li>
                <li className="font-semibold">Compatibilidad con Vigmo</li>
              </ul>
            </div>
          </div>
          <div
            id="imagenesContenedor"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <img
              src={Pocket}
              className="object-cover object-center rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        <hr className="border-16 border-blue-900 my-8 mx-auto w-full" />
      
      </section>

      <section
        style={{ animation: "fadeIn 2s forwards" }}
        className="py-14 lg:py-20 bg-gray-100"
      >
        <div
          id="PocketLed"
          className="container mx-auto flex px-8 md:flex-row flex-col items-center animate__animated animate__backInRight"
        >
          <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-semibold py-9 text-blue-800">
              ALARMA POCKET LED
            </h1>
            <hr className="border-t border-gray-300 my-4 w-full" />
            <p className="mb-8 leading-relaxed text-lg font-medium text-black">
              El modelo Palique LED extiende las funcionalidades del PALIQUE
              original al incorporar un avanzado sistema de iluminación. Incluye
              tres potentes reflectores de 500 watts, con capacidad de expansión
              hasta ocho reflectores, gracias a su contactor de 30 Amperes.
              Ideal para iluminar y disuadir efectivamente en cualquier
              situación.
            </p>
            <div className="text-left w-full">
              <p className="font-bold text-2xl mb-4 text-black">Detalles:</p>
              <ul className="list-inside list-disc space-y-2 text-lg text-black">
                <li className="font-semibold">Bocinas Náuticas 30W</li>
                <li className="font-semibold">3 Reflectores de 30w Led</li>
                <li className="font-semibold">Cubre 180 metros Lineales</li>
                <li className="font-semibold">Sonido de Disuasión</li>
                <li className="font-semibold">Aviso sonoro de control</li>
                <li className="font-semibold">Sonido secuencial de robo</li>
                <li className="font-semibold">Sonido continuo de Emergencia</li>
                <li className="font-semibold">Compatibilidad con Vigmo</li>
              </ul>
            </div>
          </div>
          <div
            id="imagenesContenedor"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:order-first"
          >
            <img
              src={PocketLed}
              className="object-cover object-center rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section
        style={{ animation: "fadeIn 2s forwards" }}
        className="py-14 lg:py-20 bg-blue-900"
      >
        <div
          id="Vigmo"
          className="container mx-auto flex px-8 md:flex-row flex-col items-center animate__animated animate__backInRight"
        >
          <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="sm:text-4xl text-3xl mb-4 font-semibold py-9 text-white">
              Vigmo - Tu Seguridad Móvil
            </h1>
            <hr className="border-t border-gray-300 my-4 w-full" />
            <p className="mb-8 leading-relaxed text-lg font-medium text-gray-300">
              Vigmo redefine la seguridad personal con su avanzada aplicación
              móvil. Integrando tecnología de punta, permite controlar sistemas
              de alarma, recibir notificaciones en tiempo real y gestionar
              dispositivos de seguridad desde cualquier lugar. Perfecta para el
              usuario moderno que busca tranquilidad y control al alcance de su
              mano.
            </p>
            <div className="text-left w-full">
              <p className="font-bold text-2xl mb-4 text-white">
                Características Destacadas:
              </p>
              <ul className="list-inside list-disc space-y-2 text-lg text-gray-300">
                <li className="font-semibold">Control total desde tu móvil</li>
                <li className="font-semibold">Notificaciones en tiempo real</li>
                <li className="font-semibold">
                  Gestión de múltiples dispositivos
                </li>
                <li className="font-semibold">
                  Interfaz amigable y personalizable
                </li>
                <li className="font-semibold">
                  Compatibilidad con sistemas de alarma PALIQUE
                </li>
              </ul>
            </div>
          </div>
          <div
            id="imagenesContenedor"
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:order-first flex flex-col items-center"
          >
            <img
              src={Vigmo}
              className="object-cover object-center rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
            />
            <button
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.pilsendigital.vigmo&hl=es_AR&gl=US"
                )
              }
              className="btn-download mt-4 xl:mt-4"
            >
              <img src={AndroidLogo} alt="LogoAndroid" className="w-14 h-12" />
              <span className="ml-4 flex items-start flex-col leading-none text-white">
                <span className="text-xs uppercase">Descargar para:</span>
                <span className="font-medium text-xl">Android</span>
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-400 text-white">
        <div
          id="demo"
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Demostración en Video
          </h2>
          <p className="text-xl font-light mb-8">
            Explora las capacidades de nuestro equipo a través de este video
            demostrativo.
          </p>
          <div className="flex justify-center">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src="https://www.youtube.com/embed/FzJN-_2iwx8"
                title="Video Demostrativo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-20 bg-gray-100">
  <div id="Contacto" className="container mx-auto px-8">
    <div className="text-center mb-10">
      <h1 className="sm:text-4xl text-3xl font-semibold py-9 text-blue-800">
        Contáctanos
      </h1>
      <p className="text-lg text-gray-700 mb-5">
        ¿Tienes preguntas? Nos encantaría escucharte. Completa el
        formulario a continuación y nos pondremos en contacto contigo lo
        antes posible.
      </p>
    </div>
    <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-black">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="mt-1 p-3 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="apellido" className="text-sm font-medium text-gray-700">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            className="text-black mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-black mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="text-sm font-medium text-gray-700">
            Telefono
          </label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="text-black mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            id="message"
            name="mensaje" 
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
            required
            className="text-black mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="py-3 px-6 bg-blue-800 text-white rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

      <footer className="bg-blue-900 text-white">
        <div className="container mx-auto px-8 py-12">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <a href="#" className="text-2xl font-semibold">
                LogoEmpresa
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-6">
              <a href="#" className="text-lg hover:text-blue-300">
                Inicio
              </a>
              <a href="#" className="text-lg hover:text-blue-300">
                Productos
              </a>
              <a href="#" className="text-lg hover:text-blue-300">
                Sobre Nosotros
              </a>
              <a href="#" className="text-lg hover:text-blue-300">
                Contacto
              </a>
            </div>
          </div>
          <div className="mt-12 text-center md:text-left">
            <p>
              &copy; 2024 Empresa de Alarmas. Todos los derechos reservados.
            </p>
            <p>Seguinos en nuestras redes sociales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

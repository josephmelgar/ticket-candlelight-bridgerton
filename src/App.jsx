import React, { useState } from 'react';
import { Heart, Calendar, MapPin, Music, Star, Gift, ChevronRight } from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Detalles del evento extraídos del PDF
  const eventDetails = {
    title: "Candlelight: Lo Mejor de Bridgerton",
    location: "Ilustre Colegio Oficial de Médicos de Madrid (ICOMEM)",
    address: "Calle de Santa Isabel, 51, Madrid",
    date: "Viernes, 10 de Abril",
    time: "21:00 (09:00 p.m.)",
    seat: "Zona A",
    from: "Nery Joseph Melgar Canelo",
    to: "Laura Brazales"
  };

  // Generador de enlace para Google Calendar
  // Fecha: 10 de Abril 2026 (vie 10 abr coincide con 2026), 21:00h
  const googleCalendarUrl = () => {
    const title = encodeURIComponent(eventDetails.title);
    const details = encodeURIComponent(`Regalo de San Valentín de ${eventDetails.from} para ${eventDetails.to}. ¡Te quiero!`);
    const location = encodeURIComponent(`${eventDetails.location}, ${eventDetails.address}`);
    // Formato: YYYYMMDDTHHMMSS
    // Asumiendo duración de 1.5 horas aprox
    const start = "20260410T210000";
    const end = "20260410T223000";
    
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}&sf=true&output=xml`;
  };

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4 font-serif">
        <div 
          onClick={() => setIsOpen(true)}
          className="cursor-pointer group relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-rose-100 to-pink-200 rounded-xl shadow-2xl flex flex-col items-center justify-center border-4 border-white transition-all duration-500 hover:scale-105 hover:shadow-rose-300/50"
        >
          {/* Decoración del sobre */}
          <div className="absolute inset-0 border-double border-4 border-white/50 m-4 rounded-lg pointer-events-none"></div>
          
          <div className="bg-white p-6 rounded-full shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
          
          <h1 className="text-3xl text-rose-800 font-bold mb-2 tracking-wider text-center">Para Laura</h1>
          <p className="text-rose-600 italic">De Nery</p>
          
          <div className="mt-8 flex items-center gap-2 text-rose-500 text-sm font-semibold uppercase tracking-widest animate-bounce">
            Toca para abrir <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-rose-100 py-12 px-4 font-serif overflow-y-auto">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-rose-100">
        
        {/* Header con imagen sugerida de glicinias/flores (estilo Bridgerton) */}
        <div className="h-48 bg-gradient-to-r from-purple-300 to-rose-300 relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/40 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-pink-200" />
              <span className="text-sm font-medium tracking-widest uppercase">San Valentín 2026</span>
            </div>
            <h1 className="text-4xl font-bold font-serif mb-1">Lady Laura,</h1>
            <p className="text-pink-100 text-lg">Esta temporada, el diamante eres tú.</p>
          </div>
        </div>

        <div className="p-8">
          {/* Mensaje Principal */}
          <div className="text-center mb-10">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              "No hay mayor deleite que compartir la música y la luz de las velas con la persona que hace brillar mi mundo. 
              Espero que disfrutes de esta noche mágica tanto como yo disfruto de cada día contigo."
            </p>
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent rounded-full"></div>
          </div>

          {/* Tarjeta del Evento */}
          <div className="bg-[#fffdf5] border border-stone-200 rounded-xl p-6 relative shadow-sm mb-8">
            {/* Esquinas decorativas */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400 rounded-tl-lg m-2"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-400 rounded-tr-lg m-2"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-400 rounded-bl-lg m-2"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400 rounded-br-lg m-2"></div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-stone-900 text-amber-50 rounded-lg p-4 text-center min-w-[120px]">
                <Music className="w-8 h-8 mx-auto mb-2 text-amber-400" />
                <span className="block text-sm opacity-80 uppercase tracking-widest">Fever</span>
                <span className="block text-xs opacity-60">Presents</span>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{eventDetails.title}</h2>
                <div className="space-y-2 text-gray-600 text-sm">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Calendar className="w-4 h-4 text-rose-500" />
                    <span>{eventDetails.date} • {eventDetails.time}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span>{eventDetails.location}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Star className="w-4 h-4 text-rose-500" />
                    <span className="font-bold text-gray-800">{eventDetails.seat}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Línea divisoria punteada */}
            <div className="my-6 border-t-2 border-dashed border-gray-200 relative">
              <div className="absolute left-0 -top-1.5 -ml-8 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute right-0 -top-1.5 -mr-8 w-3 h-3 bg-white rounded-full"></div>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-400 uppercase tracking-wider">
              <span>Ticket ID: 120818726</span>
              <span>Admit One</span>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="space-y-4">
            <a 
              href={googleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-pink-700 transition-all text-center flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Añadir a Google Calendar
            </a>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Te quiero mucho, <br/>
              <span className="font-bold text-rose-500 text-lg font-serif">{eventDetails.from}</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-rose-300 text-sm">
        <Heart className="w-4 h-4 inline-block mr-1 fill-current" /> Feliz San Valentín
      </div>
    </div>
  );
};

export default App;
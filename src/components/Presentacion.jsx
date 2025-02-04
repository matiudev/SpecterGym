import React from "react";
import { Dumbbell, ChevronDown, DollarSign, Users, Trophy } from "lucide-react";

function Presentacion() {
    return (
        <header className="relative min-h-screen flex items-center">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video-header.mp4" type="video/mp4" />
                </video>
                {/* Overlay negro con opacidad */}
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Contenido */}
            <div className="relative container mx-auto px-4 py-20">
                <div className="flex flex-col items-center text-center text-white">
                    {/* Logo y título */}
                    <div className="flex items-center space-x-4 mb-8 animate-fade-in">
                        <Dumbbell className="w-16 h-16" />
                        <h1 className="text-6xl font-bold tracking-tight">SPECTER GYM</h1>
                    </div>

                    {/* Subtítulo principal */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        TRANSFORMA TU VIDA HOY
                    </h2>

                    {/* Descripción */}
                    <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-300">
                        Descubre un espacio diseñado para superar tus límites. Equipamiento
                        de última generación, entrenadores expertos y una comunidad que te
                        impulsa hacia tus objetivos.
                    </p>

                    {/* Características destacadas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl">
                        <div className="flex flex-col items-center space-y-2">
                            <DollarSign className="w-8 h-8 text-white" />
                            <span className="font-semibold">Accesible</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <Users className="w-8 h-8 text-white" />
                            <span className="font-semibold">Clases Grupales</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <Trophy className="w-8 h-8 text-white" />
                            <span className="font-semibold">Entrenadores Elite</span>
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all" onClick={() => window.location.href = '#reserva'}>
                            INSCRIBETE AHORA
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all" onClick={() => window.location.href = '#caracteristicas'}>
                            CONOCE MÁS
                        </button>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-white" />
                    </div>
                </div>
            </div>

            {/* Estilos adicionales */}
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
            `}</style>
        </header>
    );
}

export default Presentacion;

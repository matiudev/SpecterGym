import React from 'react'
import { CheckCircle, BarChart, ArrowRight, ShowerHead } from 'lucide-react'

const características = [
    {
        icon: CheckCircle,
        color: "text-green-500",
        bgHover: "hover:bg-green-50",
        title: "Equipamiento Completo",
        description: "Zona de entrenamiento totalmente equipada con máquinas de última generación y áreas especializadas para cada tipo de ejercicio.",
        features: [
            "Área de peso libre y mancuernas",
            "Zona cardio con máquinas modernas",
            "Boxing y artes marciales",
            "Zumba y baile fitness",
            "Área de estiramientos y yoga"
        ],
        stats: {
            efficiency: "+50",
            text: "equipos disponibles"
        }
    },
    {
        icon: BarChart,
        color: "text-orange-500",
        bgHover: "hover:bg-orange-50",
        title: "Entrenamiento Personalizado",
        description: "Coaches profesionales certificados que te guiarán en tu camino hacia tus objetivos, adaptando los entrenamientos a tu nivel y necesidades.",
        features: [
            "Evaluación física inicial gratuita",
            "Planes de entrenamiento personalizados",
            "Seguimiento nutricional",
            "Mediciones mensuales de progreso",
            "Ajuste de rutinas según objetivos"
        ],
        stats: {
            efficiency: "100%",
            text: "coaches certificados"
        }
    },
    {
        icon: ShowerHead, // Necesitarías importar de lucide-react
        color: "text-teal-500",
        bgHover: "hover:bg-teal-50",
        title: "Instalaciones Premium",
        description: "Instalaciones modernas y completamente equipadas para que tu experiencia de entrenamiento sea cómoda y agradable.",
        features: [
            "Vestidores amplios con lockers",
            "Duchas con agua caliente",
            "Área de hidratación gratuita",
            "Estacionamiento privado",
            "Wifi de alta velocidad"
        ],
        stats: {
            efficiency: "4.8",
            text: "calificación promedio"
        }
    }
]

function CharacteristicCard({ icon: Icon, color, bgHover, title, description, features }) {
    return (
        <div className={`group flex flex-col items-center space-y-4 bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl ${bgHover}`}>
            <div className={`p-4 rounded-full ${color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-8 h-8 ${color}`} />
            </div>
            
            <span className="font-bold text-xl text-gray-800">{title}</span>
            
            <p className="text-center text-gray-600 leading-relaxed">
                {description}
            </p>
            
            <ul className="w-full space-y-2 mt-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-700">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <span className='text-start'>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function Characteristics() {
    return (
        <div className="pt-14 min-h-[100vh] bg-gradient-to-b from-[#f0f3f4] to-white" id="caracteristicas">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Características Principales
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Descubre todas las herramientas que tenemos para ayudarte a mejorar tu productividad
                        y alcanzar tus objetivos de manera eficiente.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-12">
                    {características.map((característica, index) => (
                        <CharacteristicCard key={index} {...característica} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Characteristics
import React, { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

function DatosEnviados({ isOpen, onClose }) {
    const [showCheck, setShowCheck] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            setShowCheck(true)
            
            // Crear múltiples confetis con diferentes emojis
            const emojis = ['🎉', '✨', '🎊', '🌟']
            const newConfetti = Array(20).fill().map((_, i) => ({
                id: i,
                emoji: emojis[Math.floor(Math.random() * emojis.length)]
            }))
        } else {
            document.body.style.overflow = 'auto'
            setShowCheck(false)
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <style>
                {`
                    @keyframes fall {
                        0% { transform: translateY(-100%) rotate(0deg); }
                        100% { transform: translateY(100vh) rotate(360deg); }
                    }
                    @keyframes fade-out {
                        0% { opacity: 1; }
                        100% { opacity: 0; }
                    }
                    @keyframes scale-check {
                        0% { transform: scale(0); }
                        50% { transform: scale(1.2); }
                        100% { transform: scale(1); }
                    }
                    .animate-fall {
                        position: absolute;
                        will-change: transform;
                    }
                    .check-animation {
                        animation: scale-check 0.5s ease-out forwards;
                    }
                `}
            </style>

            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={onClose}
            />

            <div className="relative z-50 mx-auto p-8 bg-white rounded-2xl shadow-xl max-w-md w-full m-4 overflow-hidden">
                {/* Check animado */}
                <div className="flex justify-center mb-6">
                    <div className={`bg-green-100 rounded-full p-4 ${showCheck ? 'check-animation' : ''}`}>
                        <Check className="w-12 h-12 text-green-500" strokeWidth={3} />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
                    ¡Datos Enviados!
                </h2>
                
                <p className="text-gray-600 text-center mb-6">
                    Gracias por enviar tus datos, pronto nos pondremos en contacto contigo.
                </p>

                <button
                    onClick={onClose}
                    className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                    Cerrar
                </button>
            </div>
        </div>
    )
}

export default DatosEnviados
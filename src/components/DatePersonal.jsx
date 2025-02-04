import React, { useState } from 'react';
import { User, Mail, Phone, Edit } from 'lucide-react';
import DatosEnviados from './DatosEnviados';



function DatePersonal() {
    const [openModal, setOpenModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [note, setNote] = useState('');


    const handleDateReserve = () => {
        setOpenModal(true);
        setName('');
        setEmail('');
        setPhone('');
        setNote('');
    }

    return (
        <div className="mx-auto p-6 bg-white rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Personal Information</h2>
            <form className="personal-form space-y-6">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-600">Name:</label>
                    <div className='flex items-center space-x-3'>
                        <User className="w-6 h-6 text-gray-600" />
                        <input
                            type="text"
                            id= "name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-600">Email:</label>
                    <div className='flex items-center space-x-3'>
                        <Mail className="w-6 h-6 text-gray-600" />
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                </div>

                {/* Phone Input */}
                <div>
                    <label htmlFor="phone" className="text-sm font-medium text-gray-600">Phone:</label>
                    <div className='flex items-center space-x-3'>
                        <Phone className="w-6 h-6 text-gray-600" />
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                </div>

                {/* Extra Note Textarea */}
                <div className="form-group flex items-center space-x-3">
                    <Edit className="w-6 h-6 text-gray-600" />
                    <div className="w-full">
                        <label htmlFor="note" className="text-sm font-medium text-gray-600">Extra Note:</label>
                        <textarea
                            id="note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            rows="4"
                            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                        ></textarea>
                    </div>
                </div>

            </form>
            {/* Submit Button */}
            <button
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 mt-6"
                onClick={() => handleDateReserve()}
            >
                Inscribirme
            </button>

            {/* Modal */}
            <DatosEnviados isOpen={openModal} onClose={() => setOpenModal(false)} />
        </div>
    );
}

export default DatePersonal;

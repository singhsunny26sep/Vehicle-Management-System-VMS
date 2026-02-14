import { useState, useEffect } from "react";

export default function EditVehicleModal({ visible, onClose, onSave, vehicle, categories, owners }) {
    const [form, setForm] = useState({
        plateNumber: "",
        brand: "",
        model: "",
        year: "",
        categoryId: "",
        ownerId: ""
    });

    useEffect(() => {
        if (vehicle) {
            setForm({
                _id: vehicle._id,
                plateNumber: vehicle.plateNumber || "",
                brand: vehicle.brand || "",
                model: vehicle.model || "",
                year: vehicle.year || "",
                categoryId: vehicle.categoryId?._id || "",
                ownerId: vehicle.ownerId?._id || ""
            });
        }
    }, [vehicle]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onSave({ ...form, year: parseInt(form.year, 10) });
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96 space-y-4">
                <h2 className="text-xl font-bold">Edit Vehicle</h2>
                <input name="plateNumber" value={form.plateNumber} onChange={handleChange} placeholder="Name of Company" className="w-full border p-2 rounded" />
                <input name="brand" value={form.brand} onChange={handleChange} placeholder="Add Booking" className="w-full border p-2 rounded" />
                <input name="model" value={form.model} onChange={handleChange} placeholder="Status" className="w-full border p-2 rounded" />
                
            </div>
        </div>
    );
}

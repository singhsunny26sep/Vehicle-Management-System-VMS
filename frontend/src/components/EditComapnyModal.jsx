import { useState, useEffect } from "react";

export default function EditVehicleModal({ visible, onClose, onSave, Vehicle, categories, owners }) {
    const [form, setForm] = useState({
        plateNumber: "",
        brand: "",
        model: "",
        year: "",
        categoryId: "",
        ownerId: ""
    });

    useEffect(() => {
        if (Vehicle) {
            setForm({
                _id: Vehicle._id,
                plateNumber: Vehicle.plateNumber || "",
                brand: Vehicle.brand || "",
                model: Vehicle.model || "",
                year: Vehicle.year || "",
                categoryId: Vehicle.categoryId?._id || "",
                ownerId: Vehicle.ownerId?._id || ""
            });
        }
    }, [Vehicle]);

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
                <input name="plateNumber" value={form.plateNumber} onChange={handleChange} placeholder="Name Of The Vehicle" className="w-full border p-2 rounded" />
                <input name="brand" value={form.brand} onChange={handleChange} placeholder="Brand" className="w-full border p-2 rounded" />
                <input name="model" value={form.model} onChange={handleChange} placeholder="Model" className="w-full border p-2 rounded" />
                <input name="year" value={form.year} onChange={handleChange} placeholder="Year" type="number" className="w-full border p-2 rounded" />

                <select name="categoryId" value={form.categoryId} onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="">-- Select Category --</option>
                    {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                </select>

                <select name="ownerId" value={form.ownerId} onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="">-- Select Owner --</option>
                    {owners.map(o => <option key={o._id} value={o._id}>{o.firstName} {o.lastName}</option>)}
                </select>

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    cedula: "",
    fechaNacimiento: "",
    ciudadNacimiento: "",
    ciudadResidencia: "",
    estadoCivil: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://tu-api.com/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Datos enviados correctamente");
      } else {
        alert("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Error de red");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-800">
          Nombres:
        </label>
        <input
          type="text"
          name="nombres"
          value={formData.nombres}
          onChange={handleChange}
          required
          placeholder="Ingrese sus nombres"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-800">
          Apellidos:
        </label>
        <input
          type="text"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
          placeholder="Ingrese sus apellidos"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-800">
          Cédula:
        </label>
        <input
          type="text"
          name="cedula"
          value={formData.cedula}
          onChange={handleChange}
          required
          placeholder="Ingrese su cédula"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-800">
          Fecha de nacimiento:
        </label>
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          required
          placeholder="Seleccione su fecha de nacimiento"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-800">
          Ciudad de nacimiento:
        </label>
        <input
          type="text"
          name="ciudadNacimiento"
          value={formData.ciudadNacimiento}
          onChange={handleChange}
          required
          placeholder="Ingrese su ciudad de nacimiento"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-gray-800">
          Ciudad de residencia:
        </label>
        <input
          type="text"
          name="ciudadResidencia"
          value={formData.ciudadResidencia}
          onChange={handleChange}
          required
          placeholder="Ingrese su ciudad de residencia"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-700"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-1 font-semibold text-gray-800">
          Estado civil:
        </label>
        <select
          name="estadoCivil"
          value={formData.estadoCivil}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
        >
          <option value="">Seleccione</option>
          <option value="soltero">Soltero</option>
          <option value="casado">Casado</option>
          <option value="divorciado">Divorciado</option>
          <option value="viudo">Viudo</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;

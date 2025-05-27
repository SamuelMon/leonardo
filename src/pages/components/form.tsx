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
    // Aquí puedes cambiar la URL por la de tu API real
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombres:</label>
        <input
          type="text"
          name="nombres"
          value={formData.nombres}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Apellidos:</label>
        <input
          type="text"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Cédula:</label>
        <input
          type="text"
          name="cedula"
          value={formData.cedula}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Fecha de nacimiento:</label>
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Ciudad de nacimiento:</label>
        <input
          type="text"
          name="ciudadNacimiento"
          value={formData.ciudadNacimiento}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Ciudad de residencia:</label>
        <input
          type="text"
          name="ciudadResidencia"
          value={formData.ciudadResidencia}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Estado civil:</label>
        <select
          name="estadoCivil"
          value={formData.estadoCivil}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione</option>
          <option value="soltero">Soltero</option>
          <option value="casado">Casado</option>
          <option value="divorciado">Divorciado</option>
          <option value="viudo">Viudo</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;

import { TextInput, Label, Select } from "flowbite-react";

// eslint-disable-next-line react/prop-types
function ReservationForm({ handleChange }) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:space-x-2 md:grid-flow-col">
        <div>
          <Label htmlFor="service" value="Servicio a Reservar" />
          <Select id="service" onChange={handleChange} name="service">
            <option>Selecciona un servicio</option>
            <option value="Hospedaje">Hospedaje</option>
            <option value="Evento Royal">Evento Royal</option>
            <option value="Acceso a Alberca">Acceso a Alberca</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="phone_number" value="Numero de Teléfono" />
          <TextInput
            type="number"
            name="phone_number"
            id="phone_number"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="md:w-2/3">
        <Label htmlFor="date" value="Fecha a Reservar" />
        <TextInput type="date" name="date" id="date" onChange={handleChange} />
      </div>
    </section>
  );
}

export default ReservationForm;

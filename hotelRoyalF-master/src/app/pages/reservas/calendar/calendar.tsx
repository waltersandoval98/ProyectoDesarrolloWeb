import React, { useState, useEffect, useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { Card } from 'react-bootstrap';
import { ContentContext } from './context';
import Example from './formCalendar';

const Calendar = () => {
  const { reservaData } = useContext(ContentContext);
  const [events, setEvents] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const { show, handleShow, handleClose, creaetUpdate, oneData } = useContext(ContentContext);

  useEffect(() => {
    const formattedEvents = reservaData.map((reserva: any) => ({
      title: reserva.nombre,
      start: reserva.fechaIngreso,
      end: reserva.fechaSalida,
      id: reserva.id, // Agregar el ID del evento
    }));
    setEvents(formattedEvents);
  }, [reservaData]);

  const OpenEvent = (info: any) => {
    // Obtén el evento seleccionado por su ID
    const selected = events.find((event) => event.id === info.event.id);
    if (selected) {
      setSelectedEvent(selected);
      handleShow();
    }
  };

  const handleDateClick = (arg: any) => {
    // Puedes implementar la lógica para crear un nuevo evento al hacer clic en una fecha.
    // Ejemplo:
    // createNewEvent(arg.dateStr);
  };

  const handleDatesSet = (dateInfo: any) => {
    // Aquí puedes personalizar las fechas que se muestran en el calendario.
    // Por ejemplo, si deseas mostrar fechas pasadas, puedes hacer lo siguiente:
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Configura la hora a medianoche para que incluya el día actual
    dateInfo.start = today; // Establece la fecha de inicio en el día actual
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            weekends={true}
            editable
            selectable
            selectMirror
            dayMaxEvents
            nowIndicator
            themeSystem='bootstrap'
            // validRange={{ start: new Date() }}
            locale={esLocale}
            events={events}
            eventClick={OpenEvent}
            dateClick={handleDateClick}
            datesSet={handleDatesSet}
          />
        </Card.Body>
      </Card>
      {selectedEvent && (
        <Example selectedEventId={selectedEvent.id} /> // Muestra el modal con el evento seleccionado
      )}
    </div>
  );
};

export default Calendar;

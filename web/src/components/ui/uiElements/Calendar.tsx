"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  return (
    <>
      <article className="w-full">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </article>
    </>
  );
};

export default Calendar;

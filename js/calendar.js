function getMoonPhase(date){

  const knownNewMoon =
    new Date(
      Date.UTC(
        2000,
        0,
        6,
        18,
        14
      )
    );

  const lunarCycle =
    29.53058867;

  const days =
    (
      date
      -
      knownNewMoon
    )
    /
    86400000;

  const age =
    (
      (
        days
        %
        lunarCycle
      )
      +
      lunarCycle
    )
    %
    lunarCycle;


  if(
    age < 1.85
    ||
    age >= 27.68
  ){

    return{
      name:"Luna nueva",
      icon:"🌑"
    };

  }


  if(age < 5.54){

    return{
      name:"Creciente",
      icon:"🌒"
    };

  }


  if(age < 9.23){

    return{
      name:"Cuarto creciente",
      icon:"🌓"
    };

  }


  if(age < 12.92){

    return{
      name:"Gibosa creciente",
      icon:"🌔"
    };

  }


  if(age < 16.61){

    return{
      name:"Luna llena",
      icon:"🌕"
    };

  }


  if(age < 20.30){

    return{
      name:"Gibosa menguante",
      icon:"🌖"
    };

  }


  if(age < 23.99){

    return{
      name:"Cuarto menguante",
      icon:"🌗"
    };

  }


  return{
    name:"Menguante",
    icon:"🌘"
  };

}


function eventIcon(type){

  if(type==="birthday"){
    return "🎂";
  }

  if(type==="holiday"){
    return "🎉";
  }

  return "💗";

}


function getEventsForDate(
  month,
  day
){

  const key =
    String(month)
      .padStart(
        2,
        "0"
      )
    +
    "-"
    +
    String(day)
      .padStart(
        2,
        "0"
      );


  return annualEvents.filter(
    event =>
      event.date === key
  );

}


function renderCalendar(){

  const now =
    new Date();

  const year =
    now.getFullYear();

  const month =
    now.getMonth();


  document
    .getElementById(
      "calendarTitle"
    )
    .textContent =
    now.toLocaleDateString(
      "es-ES",
      {
        month:"long",
        year:"numeric"
      }
    );


  const currentMoon =
    getMoonPhase(
      now
    );


  document
    .getElementById(
      "monthMoon"
    )
    .innerHTML =
    currentMoon.icon
    +
    "<br>"
    +
    currentMoon.name;


  const grid =
    document.getElementById(
      "calendarGrid"
    );


  grid.innerHTML =
    "";


  const firstDay =
    new Date(
      year,
      month,
      1
    );


  const lastDay =
    new Date(
      year,
      month + 1,
      0
    );


  const daysInMonth =
    lastDay.getDate();


  const mondayIndex =
    (
      firstDay.getDay()
      +
      6
    )
    %
    7;


  const previousMonthDays =
    new Date(
      year,
      month,
      0
    )
    .getDate();


  for(
    let cellIndex = 0;
    cellIndex < 42;
    cellIndex++
  ){

    let day;
    let cellMonth = month;
    let cellYear = year;
    let outside = false;


    if(
      cellIndex
      <
      mondayIndex
    ){

      day =
        previousMonthDays
        -
        mondayIndex
        +
        cellIndex
        +
        1;

      cellMonth =
        month - 1;

      outside =
        true;

    }

    else if(
      cellIndex
      >=
      mondayIndex
      +
      daysInMonth
    ){

      day =
        cellIndex
        -
        mondayIndex
        -
        daysInMonth
        +
        1;

      cellMonth =
        month + 1;

      outside =
        true;

    }

    else{

      day =
        cellIndex
        -
        mondayIndex
        +
        1;

    }


    if(cellMonth < 0){

      cellMonth = 11;
      cellYear--;

    }


    if(cellMonth > 11){

      cellMonth = 0;
      cellYear++;

    }


    const date =
      new Date(
        cellYear,
        cellMonth,
        day
      );


    const events =
      getEventsForDate(
        cellMonth + 1,
        day
      );


    const moon =
      getMoonPhase(
        date
      );


    const importantMoon =
      [
        "Luna nueva",
        "Cuarto creciente",
        "Luna llena",
        "Cuarto menguante"
      ]
      .includes(
        moon.name
      );


    const cell =
      document.createElement(
        "div"
      );


    cell.className =
      "calendar-day";


    if(outside){

      cell
        .classList
        .add(
          "other-month"
        );

    }


    if(
      !outside
      &&
      day === now.getDate()
    ){

      cell
        .classList
        .add(
          "today"
        );

    }


    let html =
      `<div class="day-number">${day}</div>`;


    if(importantMoon){

      html +=
        `<span class="moon-day">${moon.icon}</span>`;

    }


    if(events.length){

      html +=
        '<div class="day-events">';


      events.forEach(
        event=>{

          html +=
            `<span
              class="day-event-icon"
              title="${event.title}"
            >
              ${eventIcon(event.type)}
            </span>`;

        }
      );


      html +=
        "</div>";

    }


    cell.innerHTML =
      html;


    grid.appendChild(
      cell
    );

  }

}
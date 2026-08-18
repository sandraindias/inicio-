/* =====================================================
   RELOJ + FECHA
===================================================== */

function updateClock(){

  const now = new Date();

  document.getElementById("bigTime").textContent =
    now.toLocaleTimeString(
      "es-ES",
      {
        hour:"2-digit",
        minute:"2-digit"
      }
    );

  document.getElementById("todayDate").textContent =
    now.toLocaleDateString(
      "es-ES",
      {
        weekday:"long",
        day:"numeric",
        month:"long"
      }
    );

}


/* =====================================================
   ABRIR APPS
===================================================== */

function launchDirect(url){

  const link =
    document.createElement("a");

  link.href = url;

  link.style.display = "none";

  document.body.appendChild(link);

  link.click();

  setTimeout(
    () => link.remove(),
    500
  );

}


/* =====================================================
   AMOR AL ARTE / FIN DE SEMANA
===================================================== */

function isWeekendMode(){

  const now = new Date();

  const day =
    now.getDay();

  const minutes =
    now.getHours() * 60
    +
    now.getMinutes();


  /*
    Viernes desde 17:00
    hasta domingo 21:00
  */

  if(day === 5 && minutes >= 1020){
    return true;
  }

  if(day === 6){
    return true;
  }

  if(day === 0 && minutes < 1260){
    return true;
  }

  return false;

}


function updateLifeMode(){

  const badge =
    document.getElementById(
      "lifeModeBadge"
    );

  if(!badge){
    return;
  }


  if(isWeekendMode()){

    badge.textContent =
      "🪩 Fin de semana";

  }

  else{

    badge.textContent =
      "🎨 Amor al arte";

  }

}


/* =====================================================
   TU DÍA
===================================================== */

function renderDay(){

  const grid =
    document.getElementById(
      "dayGrid"
    );

  if(!grid){
    return;
  }


  const now =
    new Date();

  const minutes =
    now.getHours() * 60
    +
    now.getMinutes();


  grid.innerHTML = "";


  weekdaySchedule.forEach(
    slot => {

      const active =
        minutes >= slot.start
        &&
        (
          slot.end === 1440
          ?
          true
          :
          minutes < slot.end
        );


      const card =
        document.createElement(
          "div"
        );


      card.className =
        "day-card "
        +
        slot.className
        +
        (
          active
          ?
          " now"
          :
          ""
        );


      card.innerHTML = `

        ${
          active
          ?
          '<span class="now-badge">Ahora</span>'
          :
          ''
        }

        <div class="day-hours">
          ${slot.hours}
        </div>

        <div class="day-title">
          ${slot.title}
        </div>

        <div class="day-desc">
          ${slot.description}
        </div>

      `;


      grid.appendChild(
        card
      );

    }
  );

}


/* =====================================================
   SUGERENCIAS
===================================================== */

function renderSuggestions(){

  const container =
    document.getElementById(
      "suggestionList"
    );

  if(!container){
    return;
  }


  const month =
    new Date()
      .getMonth();


  const suggestions =
    monthlySuggestions[month]
    ||
    [];


  container.innerHTML =
    "";


  suggestions.forEach(
    item => {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "suggestion";


      card.innerHTML = `

        <b>
          ${item.icon}
          ${item.title}
        </b>

        <small>
          ${item.text}
        </small>

      `;


      container.appendChild(
        card
      );

    }
  );

}


/* =====================================================
   CICLO MENSTRUAL
===================================================== */

function getCycleData(){

  const saved =
    localStorage.getItem(
      "periodStart"
    );


  if(!saved){

    return null;

  }


  const start =
    new Date(
      saved
      +
      "T12:00:00"
    );


  const now =
    new Date();


  const elapsed =
    Math.max(
      0,
      Math.floor(
        (
          now
          -
          start
        )
        /
        86400000
      )
    );


  /*
    De momento usamos 28 días como referencia.
    Más adelante podremos añadir duración personalizada.
  */

  const day =
    (
      elapsed
      %
      28
    )
    +
    1;


  if(day <= 5){

    return{

      day:day,

      phase:"Menstruación",

      icon:"🌹",

      advice:
        "Puede ser un buen momento para bajar un poco el ritmo si lo necesitas. Prioriza descanso, comodidad y planes tranquilos."

    };

  }


  if(day <= 13){

    return{

      day:day,

      phase:"Fase folicular",

      icon:"🌱",

      advice:
        "La energía puede ir aumentando. Puede ser buen momento para iniciar cosas, organizarte o hacer planes más activos."

    };

  }


  if(day <= 16){

    return{

      day:day,

      phase:"Fase ovulatoria estimada",

      icon:"🌸",

      advice:
        "Algunas personas notan más energía o sociabilidad. Úsalo solo como orientación y manda siempre cómo te encuentres tú."

    };

  }


  return{

    day:day,

    phase:"Fase lútea",

    icon:"🌙",

    advice:
      "Puedes notar cambios de energía, ánimo o ganas de socializar. Intenta dejar más margen y elegir planes que encajen contigo."

  };

}


function updateCycleUI(){

  const miniTitle =
    document.getElementById(
      "cycleMiniTitle"
    );

  const miniText =
    document.getElementById(
      "cycleMiniText"
    );

  const phase =
    document.getElementById(
      "cyclePhase"
    );

  const advice =
    document.getElementById(
      "cycleAdvice"
    );


  const data =
    getCycleData();


  if(!data){

    miniTitle.textContent =
      "Ciclo";

    miniText.textContent =
      "Sin registrar";

    phase.textContent =
      "Sin registrar";

    advice.textContent =
      "Marca el primer día de la menstruación cuando ocurra.";

    return;

  }


  miniTitle.textContent =
    data.icon
    +
    " Día "
    +
    data.day;


  miniText.textContent =
    data.phase;


  phase.textContent =
    "Día "
    +
    data.day
    +
    " · "
    +
    data.phase;


  advice.textContent =
    data.advice
    +
    " Esta estimación sirve solo para orientación personal y organización.";

}


function registerPeriodToday(){

  const today =
    new Date()
      .toISOString()
      .slice(
        0,
        10
      );


  localStorage.setItem(
    "periodStart",
    today
  );


  updateCycleUI();

}


function clearPeriod(){

  localStorage.removeItem(
    "periodStart"
  );


  updateCycleUI();

}


function openCyclePanel(){

  document
    .getElementById(
      "cyclePanel"
    )
    .classList
    .add(
      "show"
    );

}


function closeCyclePanel(event){

  if(
    event.target.id
    ===
    "cyclePanel"
  ){

    document
      .getElementById(
        "cyclePanel"
      )
      .classList
      .remove(
        "show"
      );

  }

}


/* =====================================================
   LUNA EN HERO
===================================================== */

function updateMoonMini(){

  const data =
    getMoonPhase(
      new Date()
    );


  document.getElementById(
    "moonMiniIcon"
  ).textContent =
    data.icon;


  document.getElementById(
    "moonMiniText"
  ).textContent =
    data.name;

}


/* =====================================================
   ARRANQUE
===================================================== */

function startApp(){

  updateClock();

  updateLifeMode();

  renderDay();

  renderSuggestions();

  updateCycleUI();

  updateMoonMini();

  renderCalendar();


  setInterval(
    () => {

      updateClock();

      updateLifeMode();

      renderDay();

    },
    60000
  );

}


startApp();
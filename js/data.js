const annualEvents = [

  {
    date:"01-01",
    title:"Año Nuevo",
    type:"holiday"
  },

  {
    date:"01-03",
    title:"Cumple Juampa",
    type:"birthday"
  },

  {
    date:"01-06",
    title:"Reyes",
    type:"holiday"
  },

  {
    date:"01-06",
    title:"Cumple Tita Juli",
    type:"birthday"
  },

  {
    date:"01-16",
    title:"Cumple Mete",
    type:"birthday"
  },


  {
    date:"02-10",
    title:"Cumple Fate",
    type:"birthday"
  },

  {
    date:"02-14",
    title:"San Valentín",
    type:"special"
  },


  {
    date:"03-05",
    title:"Cumple Tita Dolo",
    type:"birthday"
  },

  {
    date:"03-07",
    title:"Cumple Tito Manolo",
    type:"birthday"
  },

  {
    date:"03-19",
    title:"Día del Padre · San José",
    type:"special"
  },


  {
    date:"04-11",
    title:"Cumple Roci",
    type:"birthday"
  },

  {
    date:"04-23",
    title:"Cumple yayo José",
    type:"birthday"
  },

  {
    date:"04-30",
    title:"Cumple yaya Rosario",
    type:"birthday"
  },


  {
    date:"05-01",
    title:"Día del Trabajo",
    type:"holiday"
  },

  {
    date:"05-15",
    title:"San Isidro · Romería",
    type:"special"
  },

  {
    date:"05-18",
    title:"Cumple papá",
    type:"birthday"
  },

  {
    date:"05-22",
    title:"Emerita Lúdica",
    type:"special"
  },


  {
    date:"06-20",
    title:"Cumple Daniel y Karim",
    type:"birthday"
  },

  {
    date:"06-22",
    title:"Mi cumple + José A",
    type:"birthday"
  },

  {
    date:"06-24",
    title:"Cumple tata Rosi",
    type:"birthday"
  },

  {
    date:"06-30",
    title:"Cumple marido",
    type:"birthday"
  },


  {
    date:"07-23",
    title:"Aniversario yayos",
    type:"special"
  },


  {
    date:"08-05",
    title:"Aniversario papis",
    type:"special"
  },

  {
    date:"08-11",
    title:"Cumple Malva",
    type:"birthday"
  },

  {
    date:"08-14",
    title:"Cumple Manuel",
    type:"birthday"
  },

  {
    date:"08-27",
    title:"Cumple María",
    type:"birthday"
  },


  {
    date:"09-08",
    title:"Día de Extremadura",
    type:"holiday"
  },

  {
    date:"09-16",
    title:"Cumple yayo Eugenio",
    type:"birthday"
  },

  {
    date:"09-20",
    title:"Cumple Paula",
    type:"birthday"
  },

  {
    date:"09-21",
    title:"Cumple Mami",
    type:"birthday"
  },


  {
    date:"10-31",
    title:"Halloween",
    type:"special"
  },


  {
    date:"11-01",
    title:"Todos los Santos",
    type:"holiday"
  },

  {
    date:"11-06",
    title:"Aniversario Synapse",
    type:"special"
  },

  {
    date:"11-11",
    title:"Cumple Julia",
    type:"birthday"
  },

  {
    date:"11-28",
    title:"Cumple Vero y Evita",
    type:"birthday"
  },


  {
    date:"12-02",
    title:"Cumple yaya Manuela",
    type:"birthday"
  },

  {
    date:"12-03",
    title:"Cumple Aby",
    type:"birthday"
  },

  {
    date:"12-05",
    title:"Cumple Jose",
    type:"birthday"
  },

  {
    date:"12-08",
    title:"Inmaculada Concepción",
    type:"holiday"
  },

  {
    date:"12-10",
    title:"Santa Eulalia",
    type:"holiday"
  },

  {
    date:"12-24",
    title:"Nochebuena + cumple Irene",
    type:"special"
  },

  {
    date:"12-25",
    title:"Navidad",
    type:"holiday"
  },

  {
    date:"12-30",
    title:"Cumple Mi Rubia",
    type:"birthday"
  },

  {
    date:"12-31",
    title:"Nochevieja",
    type:"special"
  }

];


const monthlySuggestions = {

  0:[
    {
      icon:"🧘",
      title:"Pilates",
      text:"Empieza el año moviéndote sin meter presión."
    },

    {
      icon:"🧩",
      title:"Puzzle",
      text:"Plan tranquilo para una tarde de invierno."
    },

    {
      icon:"🎯",
      title:"Vision board",
      text:"Revisar qué quieres vivir este año."
    },

    {
      icon:"👨‍👩‍👧",
      title:"Juegos en familia",
      text:"Tarde sin móvil."
    }
  ],


  1:[
    {
      icon:"🧗",
      title:"Escalar",
      text:"Una actividad distinta durante el invierno."
    },

    {
      icon:"⛷️",
      title:"Sierra Nevada",
      text:"Buscar una semana para ir a esquiar."
    },

    {
      icon:"💗",
      title:"San Valentín contigo",
      text:"Un finde pensado solo para ti."
    }
  ],


  2:[
    {
      icon:"🎭",
      title:"Carnaval de Badajoz",
      text:"Planifica el finde de carnaval."
    },

    {
      icon:"🏙️",
      title:"Badajoz",
      text:"Haz un plan diferente por la ciudad."
    }
  ],


  3:[
    {
      icon:"🌸",
      title:"Primavera",
      text:"Haz una escapada o paseo diferente."
    },

    {
      icon:"✝️",
      title:"Semana Santa",
      text:"Tiempo en Vva y familia."
    }
  ],


  4:[
    {
      icon:"🥾",
      title:"Camino de Santiago",
      text:"Mes ideal para preparar o hacer la experiencia."
    },

    {
      icon:"🎡",
      title:"Romerías",
      text:"Reserva los findes importantes."
    },

    {
      icon:"🏛️",
      title:"Emerita Lúdica",
      text:"Plan cultural para mayo."
    }
  ],


  5:[
    {
      icon:"🎂",
      title:"Tu mes",
      text:"Organiza tu celebración de cumpleaños."
    },

    {
      icon:"🎡",
      title:"Feria de Badajoz",
      text:"Tercera semana de junio."
    },

    {
      icon:"📸",
      title:"Fotos",
      text:"Empieza el álbum del verano."
    }
  ],


  6:[
    {
      icon:"🏖️",
      title:"Playa",
      text:"Reserva algún finde para costa."
    },

    {
      icon:"💦",
      title:"Ruidera",
      text:"Plan de agua y desconexión."
    },

    {
      icon:"👯",
      title:"Viaje con amigos",
      text:"Viaje relacionado con tu cumpleaños."
    }
  ],


  7:[
    {
      icon:"💦",
      title:"Ruidera / Vva",
      text:"Última semana del mes."
    },

    {
      icon:"📸",
      title:"Álbum de verano",
      text:"Organiza fotos antes de que se acumulen."
    },

    {
      icon:"🌅",
      title:"Plan al aire libre",
      text:"Aprovecha las tardes largas."
    }
  ],


  8:[
    {
      icon:"🧗",
      title:"Escalar",
      text:"Vuelve a actividades que te gustan."
    },

    {
      icon:"🔄",
      title:"Segundo enero",
      text:"Revisa cómo va el año y reajusta."
    }
  ],


  9:[
    {
      icon:"✈️",
      title:"Viaje de otoño",
      text:"Busca una escapada corta."
    },

    {
      icon:"🧘",
      title:"Pilates",
      text:"Vuelve a una rutina de movimiento."
    },

    {
      icon:"🎃",
      title:"Halloween",
      text:"Piensa un plan para el 31."
    }
  ],


  10:[
    {
      icon:"🛍️",
      title:"Black Friday",
      text:"Haz primero una lista de lo que realmente necesitas."
    },

    {
      icon:"🍂",
      title:"Plan de otoño",
      text:"Algo tranquilo y acogedor."
    }
  ],


  11:[
    {
      icon:"🎁",
      title:"Regalos",
      text:"Organízalos con antelación."
    },

    {
      icon:"👨‍👩‍👧",
      title:"Familia",
      text:"Reserva tiempo para estar juntos."
    },

    {
      icon:"🎲",
      title:"Juegos",
      text:"Recupera tardes de juegos en familia."
    },

    {
      icon:"🧘",
      title:"Pilates",
      text:"Mantén algo de movimiento durante Navidad."
    }
  ]

};


const weekdaySchedule = [

  {
    start:480,
    end:900,
    title:"💼 Trabajo",
    hours:"08:00 – 15:00",
    description:"Momento de foco y acción.",
    className:"work"
  },

  {
    start:900,
    end:1020,
    title:"🏋️ Gym",
    hours:"15:00 – 17:00",
    description:"Entrena y despeja la mente.",
    className:"gym"
  },

  {
    start:1020,
    end:1230,
    title:"✨ Mi tiempo",
    hours:"17:00 – 20:30",
    description:"Adelanta tus proyectos.",
    className:"personal"
  },

  {
    start:1230,
    end:1290,
    title:"📱 Ocio",
    hours:"20:30 – 21:30",
    description:"Tu hora para enredar.",
    className:"ocio"
  },

  {
    start:1290,
    end:1360,
    title:"👟 Andar",
    hours:"21:30 – 22:40",
    description:"Muévete y desconecta.",
    className:"walk"
  },

  {
    start:1360,
    end:1440,
    title:"🌙 Noche",
    hours:"22:40 →",
    description:"Cierra el día.",
    className:"sleep"
  }

];
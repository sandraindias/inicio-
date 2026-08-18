/* =====================================================
   APPS Y ATAJOS
===================================================== */

function navigateExternal(url){

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


function launchDirect(url){

  navigateExternal(url);

}


function launchShortcut(name){

  navigateExternal(
    "shortcuts://run-shortcut?name="
    +
    encodeURIComponent(name)
  );

}


function openExternalWeb(url){

  const link =
    document.createElement("a");

  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";

  document.body.appendChild(link);

  link.click();

  link.remove();

}


function launchWithFallback(
  directUrl,
  webUrl
){

  let leftPage = false;


  document.addEventListener(
    "visibilitychange",
    () => {

      if(document.hidden){

        leftPage = true;

      }

    },
    {
      once:true
    }
  );


  navigateExternal(
    directUrl
  );


  setTimeout(
    () => {

      if(
        !leftPage
        &&
        webUrl
      ){

        openExternalWeb(
          webUrl
        );

      }

    },
    900
  );

}


/* =====================================================
   CONTADOR DE FRANJA
===================================================== */

function setupCountdown(
  startHour,
  startMinute,
  endHour,
  endMinute,
  countdownId,
  statusId,
  textId
){

  function update(){

    const now =
      new Date();


    const start =
      new Date();


    start.setHours(
      startHour,
      startMinute,
      0,
      0
    );


    const end =
      new Date();


    end.setHours(
      endHour,
      endMinute,
      0,
      0
    );


    const countdown =
      document.getElementById(
        countdownId
      );


    const status =
      document.getElementById(
        statusId
      );


    const text =
      document.getElementById(
        textId
      );


    if(!countdown){

      return;

    }


    let seconds;


    if(now < start){

      seconds =
        Math.floor(
          (
            end
            -
            start
          )
          /
          1000
        );


      if(status){

        status.textContent =
          "Pendiente";

      }


      if(text){

        text.textContent =
          "Todavía no ha empezado";

      }

    }

    else if(now < end){

      seconds =
        Math.floor(
          (
            end
            -
            now
          )
          /
          1000
        );


      if(status){

        status.textContent =
          "Ahora";

      }


      if(text){

        text.textContent =
          "Tiempo restante";

      }

    }

    else{

      seconds = 0;


      if(status){

        status.textContent =
          "Finalizado";

      }


      if(text){

        text.textContent =
          "Terminado por hoy";

      }

    }


    const hours =
      Math.floor(
        seconds
        /
        3600
      );


    const minutes =
      Math.floor(
        (
          seconds
          %
          3600
        )
        /
        60
      );


    const secs =
      seconds
      %
      60;


    countdown.textContent =

      String(hours)
        .padStart(
          2,
          "0"
        )

      +

      ":"

      +

      String(minutes)
        .padStart(
          2,
          "0"
        )

      +

      ":"

      +

      String(secs)
        .padStart(
          2,
          "0"
        );

  }


  update();


  setInterval(
    update,
    1000
  );

}


/* =====================================================
   POMODORO
===================================================== */

let pomoSeconds =
  25
  *
  60;


let pomoRunning =
  false;


let pomoBreak =
  false;


let pomoInterval =
  null;


function setupPomodoro(){

  const sessions =
    document.getElementById(
      "sessions"
    );


  if(sessions){

    sessions.textContent =
      localStorage.getItem(
        "pomodoroSessions"
      )
      ||
      "0";

  }


  drawPomodoro();

}


function drawPomodoro(){

  const element =
    document.getElementById(
      "pomoTime"
    );


  if(!element){

    return;

  }


  const minutes =
    Math.floor(
      pomoSeconds
      /
      60
    );


  const seconds =
    pomoSeconds
    %
    60;


  element.textContent =

    String(minutes)
      .padStart(
        2,
        "0"
      )

    +

    ":"

    +

    String(seconds)
      .padStart(
        2,
        "0"
      );

}


function togglePomodoro(){

  if(pomoRunning){

    clearInterval(
      pomoInterval
    );


    pomoRunning =
      false;


    const button =
      document.getElementById(
        "playButton"
      );


    if(button){

      button.textContent =
        "▶";

    }


    return;

  }


  pomoRunning =
    true;


  const button =
    document.getElementById(
      "playButton"
    );


  if(button){

    button.textContent =
      "Ⅱ";

  }


  pomoInterval =
    setInterval(
      () => {

        pomoSeconds--;


        drawPomodoro();


        if(
          pomoSeconds
          <=
          0
        ){

          clearInterval(
            pomoInterval
          );


          pomoRunning =
            false;


          if(!pomoBreak){

            let sessions =
              Number(
                localStorage.getItem(
                  "pomodoroSessions"
                )
                ||
                0
              );


            sessions++;


            localStorage.setItem(
              "pomodoroSessions",
              sessions
            );


            const sessionElement =
              document.getElementById(
                "sessions"
              );


            if(sessionElement){

              sessionElement.textContent =
                sessions;

            }


            pomoBreak =
              true;


            pomoSeconds =
              5
              *
              60;


            const state =
              document.getElementById(
                "pomoState"
              );


            if(state){

              state.textContent =
                "● Descanso";

            }

          }

          else{

            pomoBreak =
              false;


            pomoSeconds =
              25
              *
              60;


            const state =
              document.getElementById(
                "pomoState"
              );


            if(state){

              state.textContent =
                "● Concentración";

            }

          }


          if(button){

            button.textContent =
              "▶";

          }


          drawPomodoro();

        }

      },
      1000
    );

}


function resetPomodoro(){

  clearInterval(
    pomoInterval
  );


  pomoRunning =
    false;


  pomoBreak =
    false;


  pomoSeconds =
    25
    *
    60;


  const button =
    document.getElementById(
      "playButton"
    );


  if(button){

    button.textContent =
      "▶";

  }


  const state =
    document.getElementById(
      "pomoState"
    );


  if(state){

    state.textContent =
      "● Concentración";

  }


  drawPomodoro();

}
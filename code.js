function lafecha() {
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();


  document.getElementById("clase").textcontent = "test";
}

tday=new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
tmonth=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

horario = new Array(
  ["Domingo!", "Domingo!", "Domingo!", "Domingo!", "Domingo!", "Domingo!", "Domingo!", "Domingo!", "Domingo!"],
  ["Libre!", "Bio Geo 3ºB", "Biología 4ºB", "C.Científica 1ºB Bach", "TP", "C.Científica 1ºA Bach", "PP", "Recreo", "Terminado el día"],
  ["Libre!", "AC", "Biología 2ºA Bach", "Reunión BG", "Biología 4ºB", "Bio Geo 3ºB", "Bio Geo 3ºA", "Recreo", "Terminado el día"],
  ["Biología 2ºA Bach", "Guardia Aula", "Reunión REECC", "AAEE", "C.Científica 1ºB Bach", "AC", "PP", "Recreo", "Terminado el día"],
  ["Libre!", "JAE", "JAE", "Bio Geo 3ºA", "Biología 2ºA Bach", "Biología 4ºB", "Guardia Aula", "Recreo", "Terminado el día"],
  ["Libre!", "Biología 2ºA Bach", "Bio Geo 3ºA", "Reunión Lab.", "Bio Geo 3ºB", "C.Científica 1ºA Bach", "Libre!", "Recreo", "Terminado el día"],
  ["Sábado", "Sábado", "Sábado", "Sábado", "Sábado", "Sábado", "Sábado", "Sábado", "Sábado"]
);

function GetClock(){
  var d=new Date();
  var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
  var nhour=d.getHours(),nmin=d.getMinutes();
  if(nmin<=9) nmin="0"+nmin

  document.getElementById("dia").innerHTML = tday[nday] + " " + ndate + " de " + tmonth[nmonth] + ", " + nyear;
  document.getElementById("hora").innerHTML = nhour + ":" + nmin;
}

function GetClase(){
  var d2 = new Date();
  var dia3 = d2.getDay();
  var hora2 = d2.getHours();
  var min2 = d2.getMinutes();
  var clasenow = "No se";
  var clasenext = "No se";
  var hora3 = 0;

  if ((hora2==10 && min2>=45) && (hora2==11 && min2<5) || (hora2==12 && min2>55) && (hora2==13 && min2<10)) {
    hora3 = 7
  } else if (hora2>=15 && min2>=0) {
    clasenow = "Terminado el día!"
    hora3 = 8
  } else if ((hora2=8 && min2>=0) && (hora2=8 && min2<55)) {
    hora3 = 0;
  } else if ((hora2=8 && min2>=55) && (hora2=9 && min2<50)) {
    hora3 = 1;
  } else if ((hora2=9 && min2>=50) && (hora2=10 && min2<45)) {
    hora3 = 2;
  } else if ((hora2=11 && min2>=5) && (hora2=12 && min2<00)) {
    hora3 = 3;
  } else if ((hora2=12 && min2>=0) && (hora2=12 && min2<55)) {
    hora3 = 4;
  } else if ((hora2=13 && min2>=10) && (hora2=14 && min2<5)) {
    hora3 = 5;
  } else if ((hora2=14 && min2>=5) && (hora2=15 && min2<0)) {
    hora3 = 6;
  }

  clasenow = "Ahora: " + horario[dia3][hora3]
  document.getElementById("clase").innerHTML = clasenow;

  var horanext = hora3 + 1
  if (horanext == 9) {horanext = 0, dia3 = dia3+1}
  clasenext = "Siguiente: " + horario[dia3][horanext]
  document.getElementById("siguiente").innerHTML = clasenext;
}

window.onload=function(){
  lafecha()
  GetClock();
  setInterval(GetClock,1000);
  GetClase()
  setInterval(GetClase,1000);
}

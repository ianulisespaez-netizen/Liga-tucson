/* =========================================================
   LIGA TUCSON
   TORNEO ANUAL DE FÚTBOL 2026 - CLAUSURA
   CATEGORÍA 1° DIVISIÓN "A"

   - Se mantienen las 14 fechas.
   - Los partidos sin resultado quedan pendientes.
   - Las tablas se calculan automáticamente.
   - Los resultados se cargan solamente en RESULTADOS OFICIALES.
   ========================================================= */

const datosLiga = {
  torneo: "Primera División A - Clausura 2026",
  fechaActual: 5,

  zonas: {
    A: [
      { equipo:"Talleres" },
      { equipo:"Juventud Unida" },
      { equipo:"Estación Experimental" },
      { equipo:"Central Norte" },
      { equipo:"Villa Mitre" },
      { equipo:"All Boys" },
      { equipo:"San José" }
    ],

    B: [
      { equipo:"Argentinos del Norte" },
      { equipo:"San Martín" },
      { equipo:"San Antonio" },
      { equipo:"Atlético Tucumán" },
      { equipo:"Sportivo Guzmán" },
      { equipo:"Amalia" },
      { equipo:"Tucumán Central" }
    ],

    C: [
      { equipo:"Garmendia" },
      { equipo:"Atlético Concepción" },
      { equipo:"San Juan" },
      { equipo:"San Lorenzo (DG)" },
      { equipo:"Unión del Norte" },
      { equipo:"Lastenia" },
      { equipo:"Cruz Alta" }
    ],

    D: [
      { equipo:"Bella Vista" },
      { equipo:"San Fernando" },
      { equipo:"Almirante Brown" },
      { equipo:"Famaillá" },
      { equipo:"Ateneo Parroquial Alderetes" },
      { equipo:"Santa Lucía" },
      { equipo:"San Pablo" }
    ],

    E: [
      { equipo:"Alto Verde" },
      { equipo:"Concepción FC" },
      { equipo:"Azucarera Argentina" },
      { equipo:"Ñuñorco" },
      { equipo:"Unión Simoca" },
      { equipo:"San Ramón" },
      { equipo:"Santa Rosa" },
      { equipo:"La Providencia" }
    ],

    F: [
      { equipo:"Deportivo Aguilares" },
      { equipo:"San Lorenzo (SA)" },
      { equipo:"Jorge Newbery" },
      { equipo:"Graneros" },
      { equipo:"Santa Ana" },
      { equipo:"Trinidad" },
      { equipo:"Marapa" },
      { equipo:"Llorens" }
    ]
  },

  partidos:[]
};


/* =========================================================
   FIXTURE OFICIAL
   Cada string representa:
   local>visitante
   ========================================================= */

const fixtureBase = {

A: [
"Villa Mitre>San José;All Boys>Juventud Unida;Estación Experimental>Central Norte",
"San José>All Boys;Talleres>Estación Experimental;Central Norte>Juventud Unida",
"All Boys>Central Norte;Talleres>Villa Mitre;Juventud Unida>Estación Experimental",
"Central Norte>Villa Mitre;San José>Talleres;Estación Experimental>All Boys",
"Villa Mitre>Estación Experimental;Juventud Unida>San José;Talleres>Central Norte",
"All Boys>Villa Mitre;San José>Central Norte;Juventud Unida>Talleres",
"Estación Experimental>All Boys;Villa Mitre>Juventud Unida;San José>Talleres"
],

B: [
"Tucumán Central>Atlético Tucumán;San Martín>Amalia;Argentinos del Norte>San Antonio",
"Atlético Tucumán>San Martín;Sportivo Guzmán>Argentinos del Norte;San Antonio>Amalia",
"San Martín>San Antonio;Sportivo Guzmán>Tucumán Central;Amalia>Argentinos del Norte",
"San Antonio>Tucumán Central;Atlético Tucumán>Sportivo Guzmán;Argentinos del Norte>San Martín",
"Tucumán Central>Argentinos del Norte;Amalia>Atlético Tucumán;Sportivo Guzmán>San Antonio",
"San Martín>Tucumán Central;Atlético Tucumán>San Antonio;Amalia>Sportivo Guzmán",
"Argentinos del Norte>San Martín;Tucumán Central>Amalia;Atlético Tucumán>Sportivo Guzmán"
],

C: [
"Atlético Concepción>Lastenia;San Lorenzo (DG)>Garmendia;Unión del Norte>Cruz Alta",
"Lastenia>San Lorenzo (DG);San Juan>Unión del Norte;Cruz Alta>Garmendia",
"San Lorenzo (DG)>Cruz Alta;San Juan>Atlético Concepción;Garmendia>Unión del Norte",
"Cruz Alta>Atlético Concepción;Lastenia>San Juan;Unión del Norte>San Lorenzo (DG)",
"Atlético Concepción>Unión del Norte;Garmendia>Lastenia;San Juan>Cruz Alta",
"San Lorenzo (DG)>Atlético Concepción;Lastenia>Cruz Alta;Garmendia>San Juan",
"Unión del Norte>San Lorenzo (DG);Atlético Concepción>Garmendia;Lastenia>San Juan"
],

D: [
"San Pablo>Bella Vista;San Fernando>Almirante Brown;Ateneo Parroquial Alderetes>Famaillá",
"Bella Vista>San Fernando;Santa Lucía>Ateneo Parroquial Alderetes;Famaillá>Almirante Brown",
"San Fernando>Famaillá;Santa Lucía>San Pablo;Almirante Brown>Ateneo Parroquial Alderetes",
"Famaillá>San Pablo;Bella Vista>Santa Lucía;Ateneo Parroquial Alderetes>San Fernando",
"San Pablo>Ateneo Parroquial Alderetes;Almirante Brown>Bella Vista;Santa Lucía>Famaillá",
"San Fernando>San Pablo;Bella Vista>Famaillá;Almirante Brown>Santa Lucía",
"Ateneo Parroquial Alderetes>San Fernando;San Pablo>Almirante Brown;Bella Vista>Santa Lucía"
],

E: [
"Concepción FC>Azucarera Argentina;La Providencia>Alto Verde;Unión Simoca>San Ramón;Santa Rosa>Ñuñorco",
"Ñuñorco>Concepción FC;Santa Rosa>Unión Simoca;San Ramón>La Providencia;Alto Verde>Azucarera Argentina",
"Concepción FC>Alto Verde;Azucarera Argentina>San Ramón;La Providencia>Santa Rosa;Unión Simoca>Ñuñorco",
"Unión Simoca>Concepción FC;Ñuñorco>La Providencia;Santa Rosa>Azucarera Argentina;San Ramón>Alto Verde",
"Concepción FC>San Ramón;Alto Verde>Santa Rosa;Azucarera Argentina>Ñuñorco;La Providencia>Unión Simoca",
"La Providencia>Concepción FC;Unión Simoca>Azucarera Argentina;Ñuñorco>Alto Verde;Santa Rosa>San Ramón",
"Concepción FC>Santa Rosa;San Ramón>Ñuñorco;Alto Verde>Unión Simoca;Azucarera Argentina>La Providencia"
],

F: [
"Deportivo Aguilares>Santa Ana;San Lorenzo (SA)>Graneros;Marapa>Jorge Newbery;Llorens>Trinidad",
"Llorens>Deportivo Aguilares;Trinidad>Marapa;Jorge Newbery>San Lorenzo (SA);Graneros>Santa Ana",
"Deportivo Aguilares>Graneros;Santa Ana>Jorge Newbery;San Lorenzo (SA)>Trinidad;Marapa>Llorens",
"Marapa>Deportivo Aguilares;Llorens>San Lorenzo (SA);Trinidad>Santa Ana;Jorge Newbery>Graneros",
"Deportivo Aguilares>Jorge Newbery;Graneros>Trinidad;Santa Ana>Llorens;San Lorenzo (SA)>Marapa",
"San Lorenzo (SA)>Deportivo Aguilares;Marapa>Santa Ana;Llorens>Graneros;Trinidad>Jorge Newbery",
"Deportivo Aguilares>Trinidad;Jorge Newbery>Llorens;Graneros>Marapa;Santa Ana>San Lorenzo (SA)"
]
};


/* =========================================================
   INTERZONALES A-D
   ========================================================= */

const interzonalesAD = [
  "Santa Lucía>Talleres",
  "Villa Mitre>San Pablo",
  "Bella Vista>San José",
  "Almirante Brown>Juventud Unida",
  "San Fernando>All Boys",
  "Ateneo Parroquial Alderetes>Estación Experimental",
  "Central Norte>Famaillá",
  "Talleres>Santa Lucía",
  "San Pablo>Villa Mitre",
  "San José>Bella Vista",
  "Juventud Unida>Almirante Brown",
  "All Boys>San Fernando",
  "Estación Experimental>Ateneo Parroquial Alderetes",
  "Famaillá>Central Norte"
];


/* =========================================================
   INTERZONALES B-C
   ========================================================= */

const interzonalesBC = [
  "San Juan>Sportivo Guzmán",
  "Tucumán Central>Atlético Concepción",
  "Lastenia>Atlético Tucumán",
  "Garmendia>Amalia",
  "San Lorenzo (DG)>San Martín",
  "Unión del Norte>Argentinos del Norte",
  "San Antonio>Cruz Alta",
  "Sportivo Guzmán>San Juan",
  "Atlético Concepción>Tucumán Central",
  "Atlético Tucumán>Lastenia",
  "Amalia>Garmendia",
  "San Martín>San Lorenzo (DG)",
  "Argentinos del Norte>Unión del Norte",
  "Cruz Alta>San Antonio"
];


/* =========================================================
   RESULTADOS OFICIALES
   Formato:
   "LOCAL>VISITANTE=GOLESLOCAL-GOLESVISITANTE"
   
   Si un partido no aparece acá, queda sin resultado.
   ========================================================= */

const resultadosOficiales = {

1: [
"Villa Mitre>San José=2-0",
"All Boys>Juventud Unida=1-3",
"Estación Experimental>Central Norte=2-1",

"Tucumán Central>Atlético Tucumán=1-1",
"San Martín>Amalia=0-0",
"Argentinos del Norte>San Antonio=3-2",

"Atlético Concepción>Lastenia=2-1",
"San Lorenzo (DG)>Garmendia=0-1",
"Unión del Norte>Cruz Alta=3-0",

"San Pablo>Bella Vista=2-1",
"San Fernando>Almirante Brown=2-1",
"Ateneo Parroquial Alderetes>Famaillá=0-2",

"Santa Lucía>Talleres=0-0",

"Concepción FC>Azucarera Argentina=1-1",
"La Providencia>Alto Verde=1-3",
"Unión Simoca>San Ramón=1-2",
"Ñuñorco>Santa Rosa=0-2",

"Llorens>Trinidad=1-0",
"Deportivo Aguilares>Santa Ana=2-1",
"San Lorenzo (SA)>Graneros=1-2",
"Marapa>Jorge Newbery=1-3"
],

2: [
"San José>All Boys=1-0",
"Talleres>Estación Experimental=2-1",
"Central Norte>Juventud Unida=0-0",

"Atlético Tucumán>San Martín=1-1",
"Sportivo Guzmán>Argentinos del Norte=0-1",
"San Antonio>Amalia=2-0",

"Lastenia>San Lorenzo (DG)=0-1",
"San Juan>Unión del Norte=1-1",
"Cruz Alta>Garmendia=0-1",

"Bella Vista>San Fernando=3-1",
"Santa Lucía>Ateneo Parroquial Alderetes=1-1",
"Famaillá>Almirante Brown=0-3",

"Villa Mitre>San Pablo=2-3",
"Tucumán Central>Atlético Concepción=1-1",

"Ñuñorco>Concepción FC=0-1",
"Santa Rosa>Unión Simoca=1-1",
"San Ramón>La Providencia=0-0",
"Alto Verde>Azucarera Argentina=6-0",

"Llorens>Deportivo Aguilares=2-3",
"Trinidad>Marapa=1-1",
"Jorge Newbery>San Lorenzo (SA)=0-0",
"Graneros>Santa Ana=3-0"
],

3: [
"All Boys>Central Norte=1-0",
"Talleres>Villa Mitre=1-0",
"Juventud Unida>Estación Experimental=0-1",

"San Martín>San Antonio=1-0",
"Sportivo Guzmán>Tucumán Central=1-1",
"Amalia>Argentinos del Norte=1-1",

"San Lorenzo (DG)>Cruz Alta=3-1",
"San Juan>Atlético Concepción=3-1",
"Garmendia>Unión del Norte=0-0",

"San Fernando>Famaillá=2-1",
"Santa Lucía>San Pablo=1-0",
"Almirante Brown>Ateneo Parroquial Alderetes=3-3",

"Bella Vista>San José=1-0",
"Lastenia>Atlético Tucumán=1-0",

"Concepción FC>Alto Verde=2-1",
"Azucarera Argentina>San Ramón=0-2",
"La Providencia>Santa Rosa=1-0",
"Unión Simoca>Ñuñorco=1-2",

"Deportivo Aguilares>Graneros=1-0",
"Santa Ana>Jorge Newbery=0-0",
"San Lorenzo (SA)>Trinidad=2-1",
"Marapa>Llorens=3-2"
],

4: [
"Central Norte>Villa Mitre=2-1",
"San José>Talleres=0-1",
"Estación Experimental>All Boys=0-1",

"San Antonio>Tucumán Central=1-0",
"Atlético Tucumán>Sportivo Guzmán=0-1",
"Argentinos del Norte>San Martín=3-1",

"Cruz Alta>Atlético Concepción=1-4",
"Lastenia>San Juan=1-1",
"Unión del Norte>San Lorenzo (DG)=1-1",

"Bella Vista>Santa Lucía=5-0",
"Ateneo Parroquial Alderetes>San Fernando=3-0",

"Almirante Brown>Juventud Unida=5-0",
"Garmendia>Amalia=1-0",

"Unión Simoca>Concepción FC=1-1",
"Ñuñorco>La Providencia=3-0",
"Santa Rosa>Azucarera Argentina=0-1",
"San Ramón>Alto Verde=1-2",

"Marapa>Deportivo Aguilares=1-6",
"Llorens>San Lorenzo (SA)=1-2",
"Trinidad>Santa Ana=2-1",
"Jorge Newbery>Graneros=2-1"
],

5: [
"Villa Mitre>Estación Experimental=0-1",
"Juventud Unida>San José=3-1",

"Tucumán Central>Argentinos del Norte=1-1",
"Amalia>Atlético Tucumán=0-2",

"Atlético Concepción>Unión del Norte=1-1",
"Garmendia>Lastenia=0-0",
"San Juan>Cruz Alta=4-0",

"San Pablo>Ateneo Parroquial Alderetes=2-1",
"Almirante Brown>Bella Vista=1-1",
"Santa Lucía>Famaillá=0-1",

"San Fernando>All Boys=3-1",
"San Lorenzo (DG)>San Martín=1-2",

"Alto Verde>Santa Rosa=2-1",
"Azucarera Argentina>Ñuñorco=2-1",
"La Providencia>Unión Simoca=0-1",

"Deportivo Aguilares>Jorge Newbery=1-0",
"Graneros>Trinidad=2-1",
"Santa Ana>Llorens=4-0",
"San Lorenzo (SA)>Marapa=1-0"
]

};


/* =========================================================
   FUNCIONES AUXILIARES
   ========================================================= */

function parsePartido(texto) {
  const partes = texto.split(">");
  return [partes[0], partes[1]];
}


function parseFixture(texto) {
  return texto
    .split(";")
    .filter(Boolean)
    .map(parsePartido);
}


function crearPartido(
  fecha,
  local,
  visitante,
  zona,
  interzonal = false,
  zonas = []
) {
  return {
    fecha: fecha,
    local: local,
    visitante: visitante,
    zona: zona,
    interzonal: interzonal,
    zonas: zonas,
    golesLocal: null,
    golesVisitante: null
  };
}


/* =========================================================
   GENERAR LAS 14 FECHAS
   ========================================================= */

function generarFixtureCompleto() {

  const partidos = [];

  for (const zona of ["A","B","C","D","E","F"]) {

    for (let fecha = 1; fecha <= 14; fecha++) {

      const numeroBase =
        fecha <= 7 ? fecha : fecha - 7;

      const partidosBase =
        parseFixture(
          fixtureBase[zona][numeroBase - 1]
        );

      partidosBase.forEach(([local, visitante]) => {

        if (fecha <= 7) {

          partidos.push(
            crearPartido(
              fecha,
              local,
              visitante,
              zona,
              false,
              [zona]
            )
          );

        } else {

          partidos.push(
            crearPartido(
              fecha,
              visitante,
              local,
              zona,
              false,
              [zona]
            )
          );

        }

      });
    }
  }


  /* Interzonales A-D */

  interzonalesAD.forEach((texto, indice) => {

    const [local, visitante] =
      parsePartido(texto);

    partidos.push(
      crearPartido(
        indice + 1,
        local,
        visitante,
        "INTERZONAL",
        true,
        ["A","D"]
      )
    );

  });


  /* Interzonales B-C */

  interzonalesBC.forEach((texto, indice) => {

    const [local, visitante] =
      parsePartido(texto);

    partidos.push(
      crearPartido(
        indice + 1,
        local,
        visitante,
        "INTERZONAL",
        true,
        ["B","C"]
      )
    );

  });


  return partidos;
}


/* =========================================================
   APLICAR RESULTADOS
   ========================================================= */

function aplicarResultados() {

  for (const fecha in resultadosOficiales) {

    resultadosOficiales[fecha].forEach(resultado => {

      const partes =
        resultado.split("=");

      const equipos =
        partes[0].split(">");

      const marcador =
        partes[1].split("-");

      const local = equipos[0];
      const visitante = equipos[1];

      const golesLocal =
        Number(marcador[0]);

      const golesVisitante =
        Number(marcador[1]);


      const partido =
        datosLiga.partidos.find(p =>
          Number(p.fecha) === Number(fecha) &&
          p.local === local &&
          p.visitante === visitante
        );


      if (partido) {

        partido.golesLocal =
          golesLocal;

        partido.golesVisitante =
          golesVisitante;

      }

    });

  }
}


/* =========================================================
   BUSCAR EQUIPO
   ========================================================= */

function buscarEquipo(nombre) {

  for (const zona in datosLiga.zonas) {

    const equipo =
      datosLiga.zonas[zona].find(
        e => e.equipo === nombre
      );

    if (equipo) return equipo;
  }

  return null;
}


/* =========================================================
   ACTUALIZAR TABLAS AUTOMÁTICAMENTE
   ========================================================= */

function actualizarTablasAutomaticamente() {

  /* Reiniciar estadísticas */

  for (const zona in datosLiga.zonas) {

    datosLiga.zonas[zona].forEach(equipo => {

      equipo.pj = 0;
      equipo.pg = 0;
      equipo.pe = 0;
      equipo.pp = 0;
      equipo.gf = 0;
      equipo.gc = 0;
      equipo.dg = 0;
      equipo.pts = 0;

    });
  }


  /* Procesar partidos jugados */

  datosLiga.partidos.forEach(partido => {

    if (
      partido.golesLocal === null ||
      partido.golesVisitante === null
    ) {
      return;
    }


    const local =
      buscarEquipo(partido.local);

    const visitante =
      buscarEquipo(partido.visitante);


    if (!local || !visitante) return;


    local.pj++;
    visitante.pj++;

    local.gf += partido.golesLocal;
    local.gc += partido.golesVisitante;

    visitante.gf += partido.golesVisitante;
    visitante.gc += partido.golesLocal;


    if (
      partido.golesLocal >
      partido.golesVisitante
    ) {

      local.pg++;
      visitante.pp++;

      local.pts += 3;

    } else if (
      partido.golesLocal <
      partido.golesVisitante
    ) {

      visitante.pg++;
      local.pp++;

      visitante.pts += 3;

    } else {

      local.pe++;
      visitante.pe++;

      local.pts++;
      visitante.pts++;

    }

  });


  /* Diferencia de gol */

  for (const zona in datosLiga.zonas) {

    datosLiga.zonas[zona].forEach(equipo => {

      equipo.dg =
        equipo.gf - equipo.gc;

    });
  }
}


/* =========================================================
   ORDENAR TABLA
   ========================================================= */

function ordenarTabla(equipos) {

  return [...equipos].sort((a,b) => {

    if (b.pts !== a.pts)
      return b.pts - a.pts;

    if (b.dg !== a.dg)
      return b.dg - a.dg;

    if (b.gf !== a.gf)
      return b.gf - a.gf;

    if (a.gc !== b.gc)
      return a.gc - b.gc;

    return a.equipo.localeCompare(
      b.equipo,
      "es"
    );

  });
}


/* =========================================================
   OBTENER TABLA DE ZONA
   ========================================================= */

function obtenerTablaZona(zona) {

  if (!datosLiga.zonas[zona]) {
    return [];
  }

  return ordenarTabla(
    datosLiga.zonas[zona]
  );
}


/* =========================================================
   PARTIDOS DE UNA FECHA
   ========================================================= */

function obtenerPartidosFecha(fecha) {

  return datosLiga.partidos.filter(
    partido =>
      Number(partido.fecha) === Number(fecha)
  );
}


/* =========================================================
   PARTIDOS DE UN EQUIPO
   ========================================================= */

function obtenerPartidosEquipo(nombre) {

  return datosLiga.partidos
    .filter(partido =>
      partido.local === nombre ||
      partido.visitante === nombre
    )
    .sort((a,b) =>
      Number(a.fecha) -
      Number(b.fecha)
    );
}


/* =========================================================
   SABER SI UN PARTIDO YA SE JUGÓ
   ========================================================= */

function partidoJugado(partido) {

  return (
    partido.golesLocal !== null &&
    partido.golesLocal !== undefined &&
    partido.golesVisitante !== null &&
    partido.golesVisitante !== undefined
  );

}


/* =========================================================
   PLAY-OFF
   ========================================================= */

const resultadosPlayoff = {};


function compararClasificacionPlayoff(a,b) {

  if (b.pts !== a.pts)
    return b.pts - a.pts;

  if (b.dg !== a.dg)
    return b.dg - a.dg;

  if (b.gf !== a.gf)
    return b.gf - a.gf;

  if (a.gc !== b.gc)
    return a.gc - b.gc;

  return a.equipo.localeCompare(
    b.equipo,
    "es"
  );
}


/* =========================================================
   RANKING PLAY-OFF
   ========================================================= */

function rankingPlayoff() {

  const primeros = [];
  const puestos2a4 = [];
  const quintos = [];


  for (const zona of [
    "A","B","C","D","E","F"
  ]) {

    const tabla =
      obtenerTablaZona(zona);

    if (!tabla.length) continue;


    /* Primero de cada zona */

    primeros.push({
      equipo: tabla[0].equipo,
      zona: zona,
      puestoZona: 1,
      pts: tabla[0].pts,
      dg: tabla[0].dg,
      gf: tabla[0].gf,
      gc: tabla[0].gc
    });


    /* Segundo a cuarto */

    tabla
      .slice(1,4)
      .forEach((equipo,index) => {

        puestos2a4.push({
          equipo: equipo.equipo,
          zona: zona,
          puestoZona: index + 2,
          pts: equipo.pts,
          dg: equipo.dg,
          gf: equipo.gf,
          gc: equipo.gc
        });

      });


    /* Quinto */

    if (tabla[4]) {

      quintos.push({
        equipo: tabla[4].equipo,
        zona: zona,
        puestoZona: 5,
        pts: tabla[4].pts,
        dg: tabla[4].dg,
        gf: tabla[4].gf,
        gc: tabla[4].gc
      });

    }

  }


  quintos.sort(
    compararClasificacionPlayoff
  );


  const dosMejoresQuintos =
    quintos.slice(0,2);


  const clasificados = [

    ...primeros,

    ...puestos2a4,

    ...dosMejoresQuintos

  ];


  return clasificados.sort(
    compararClasificacionPlayoff
  );
}


/* =========================================================
   PRIMERA RONDA
   7 vs 26
   8 vs 25
   9 vs 24
   ...
   16 vs 17
   ========================================================= */

function crearLlavesPrimeraRonda() {

  const ranking =
    rankingPlayoff();


  const equipos =
    ranking.filter(
      equipo =>
        equipo.puestoZona !== 1
    );


  const llaves = [];


  for (
    let i = 0;
    i < equipos.length / 2;
    i++
  ) {

    const mejor =
      equipos[i];

    const peor =
      equipos[
        equipos.length - 1 - i
      ];


    llaves.push({

      ronda: "Primera ronda",

      seedLocal:
        ranking.findIndex(
          e =>
            e.equipo === mejor.equipo
        ) + 1,

      seedVisitante:
        ranking.findIndex(
          e =>
            e.equipo === peor.equipo
        ) + 1,

      local: mejor.equipo,

      visitante: peor.equipo,

      ganador: null

    });

  }


  return llaves;
}


/* =========================================================
   GANADOR DE LLAVE
   ========================================================= */

function ganadorDeLlave(llave) {

  if (
    llave.golesLocal === undefined ||
    llave.golesVisitante === undefined
  ) {
    return null;
  }


  if (
    llave.golesLocal === null ||
    llave.golesVisitante === null
  ) {
    return null;
  }


  if (
    llave.golesLocal >
    llave.golesVisitante
  ) {
    return llave.local;
  }


  if (
    llave.golesVisitante >
    llave.golesLocal
  ) {
    return llave.visitante;
  }


  return null;
}


/* =========================================================
   SEGUNDA RONDA
   ========================================================= */

function crearLlavesSegundaRonda() {

  const ranking =
    rankingPlayoff();


  const ganadoresZona =
    ranking.filter(
      equipo =>
        equipo.puestoZona === 1
    );


  const primeraRonda =
    crearLlavesPrimeraRonda();


  const ganadoresPrimera =
    primeraRonda
      .map(
        llave =>
          ganadorDeLlave(llave)
      )
      .filter(Boolean);


  const disponibles = [];


  ganadoresZona.forEach(equipo => {

    disponibles.push({

      equipo: equipo.equipo,

      seed:
        ranking.findIndex(
          x =>
            x.equipo === equipo.equipo
        ) + 1

    });

  });


  ganadoresPrimera.forEach(nombre => {

    disponibles.push({

      equipo: nombre,

      seed:
        ranking.findIndex(
          x =>
            x.equipo === nombre
        ) + 1

    });

  });


  disponibles.sort(
    (a,b) =>
      a.seed - b.seed
  );


  const llaves = [];


  for (
    let i = 0;
    i < disponibles.length / 2;
    i++
  ) {

    const mejor =
      disponibles[i];

    const peor =
      disponibles[
        disponibles.length - 1 - i
      ];


    llaves.push({

      ronda: "Segunda ronda",

      seedLocal:
        mejor.seed,

      seedVisitante:
        peor.seed,

      local:
        mejor.equipo,

      visitante:
        peor.equipo,

      ganador: null

    });

  }


  return llaves;
}


/* =========================================================
   RONDAS SIGUIENTES
   ========================================================= */

function crearLlavesSiguienteRonda(equipos) {

  const lista =
    [...equipos].sort(
      (a,b) =>
        a.seed - b.seed
    );


  const llaves = [];


  for (
    let i = 0;
    i < lista.length / 2;
    i++
  ) {

    const mejor =
      lista[i];

    const peor =
      lista[
        lista.length - 1 - i
      ];


    llaves.push({

      local: mejor.equipo,

      visitante: peor.equipo,

      seedLocal:
        mejor.seed,

      seedVisitante:
        peor.seed,

      ganador: null

    });

  }


  return llaves;
}


/* =========================================================
   INFORMACIÓN COMPLETA DEL PLAY-OFF
   ========================================================= */

function obtenerPlayoffs() {

  const ranking =
    rankingPlayoff();


  const primeraRonda =
    crearLlavesPrimeraRonda();


  return {

    ranking: ranking,

    ganadoresZona:
      ranking.filter(
        equipo =>
          equipo.puestoZona === 1
      ),

    primeraRonda:
      primeraRonda,

    segundaRonda:
      crearLlavesSegundaRonda(),

    resultados:
      resultadosPlayoff

  };

}


/* =========================================================
   INICIALIZAR
   ========================================================= */

datosLiga.partidos =
  generarFixtureCompleto();

aplicarResultados();

actualizarTablasAutomaticamente();


/* =========================================================
   COMPATIBILIDAD CON LAS OTRAS PÁGINAS
   ========================================================= */

window.datosLiga =
  datosLiga;

window.fixtureBase =
  fixtureBase;

window.resultadosOficiales =
  resultadosOficiales;

window.obtenerTablaZona =
  obtenerTablaZona;

window.obtenerPartidosFecha =
  obtenerPartidosFecha;

window.obtenerPartidosEquipo =
  obtenerPartidosEquipo;

window.partidoJugado =
  partidoJugado;

window.obtenerPlayoffs =
  obtenerPlayoffs;

window.crearLlavesPrimeraRonda =
  crearLlavesPrimeraRonda;

window.crearLlavesSegundaRonda =
  crearLlavesSegundaRonda;

window.crearLlavesSiguienteRonda =
  crearLlavesSiguienteRonda;

window.ordenarTabla =
  ordenarTabla;

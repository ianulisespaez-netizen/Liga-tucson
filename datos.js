/* =========================================================
   LIGA TUCSON
   DATOS GENERALES - CLAUSURA 2026 + TABLA ANUAL 2026
   ========================================================= */

const datosLiga = {
  torneo: "Primera División A - Clausura 2026",
  fechaActual: 5,

  zonas: {
    A: [
      "Talleres",
      "Juventud Unida",
      "Estación Experimental",
      "Central Norte",
      "Villa Mitre",
      "All Boys",
      "San José"
    ],

    B: [
      "Argentinos del Norte",
      "San Martín",
      "San Antonio",
      "Atlético Tucumán",
      "Sportivo Guzmán",
      "Amalia",
      "Tucumán Central"
    ],

    C: [
      "Garmendia",
      "Atlético Concepción",
      "San Juan",
      "San Lorenzo (DG)",
      "Unión del Norte",
      "Lastenia",
      "Cruz Alta"
    ],

    D: [
      "Bella Vista",
      "San Fernando",
      "Almirante Brown",
      "Famaillá",
      "Ateneo Parroquial Alderetes",
      "Santa Lucía",
      "San Pablo"
    ],

    E: [
      "Alto Verde",
      "Concepción FC",
      "Azucarera Argentina",
      "Ñuñorco",
      "Unión Simoca",
      "San Ramón",
      "Santa Rosa",
      "La Providencia"
    ],

    F: [
      "Deportivo Aguilares",
      "San Lorenzo (SA)",
      "Jorge Newbery",
      "Graneros",
      "Santa Ana",
      "Trinidad",
      "Marapa",
      "Llorens"
    ]
  },

  partidos: [],
  tablaAnual: []
};


/* =========================================================
   TABLA ANUAL OFICIAL
   SITUACIÓN AL FINAL DE LA FECHA 4
   ========================================================= */

const tablaAnualBase = {

  "Graneros": {
    pts: 39,
    pj: 18,
    pg: 12,
    pe: 3,
    pp: 3,
    gf: 39,
    gc: 10
  },

  "Deportivo Aguilares": {
    pts: 36,
    pj: 18,
    pg: 11,
    pe: 3,
    pp: 4,
    gf: 35,
    gc: 16
  },

  "Concepción FC": {
    pts: 39,
    pj: 18,
    pg: 11,
    pe: 6,
    pp: 1,
    gf: 32,
    gc: 17
  },

  "Talleres": {
    pts: 34,
    pj: 18,
    pg: 10,
    pe: 4,
    pp: 4,
    gf: 26,
    gc: 17
  },

  "Ñuñorco": {
    pts: 33,
    pj: 18,
    pg: 10,
    pe: 3,
    pp: 5,
    gf: 33,
    gc: 17
  },

  "Almirante Brown": {
    pts: 33,
    pj: 18,
    pg: 10,
    pe: 3,
    pp: 5,
    gf: 29,
    gc: 15
  },

  "Jorge Newbery": {
    pts: 33,
    pj: 18,
    pg: 9,
    pe: 6,
    pp: 3,
    gf: 28,
    gc: 14
  },

  "Ateneo Parroquial Alderetes": {
    pts: 32,
    pj: 18,
    pg: 9,
    pe: 5,
    pp: 4,
    gf: 30,
    gc: 18
  },

  "Atlético Concepción": {
    pts: 34,
    pj: 18,
    pg: 10,
    pe: 4,
    pp: 4,
    gf: 30,
    gc: 17
  },

  "Estación Experimental": {
    pts: 32,
    pj: 17,
    pg: 9,
    pe: 5,
    pp: 3,
    gf: 28,
    gc: 16
  },

  "Garmendia": {
    pts: 32,
    pj: 18,
    pg: 9,
    pe: 5,
    pp: 4,
    gf: 20,
    gc: 11
  },

  "Bella Vista": {
    pts: 31,
    pj: 18,
    pg: 10,
    pe: 1,
    pp: 7,
    gf: 34,
    gc: 18
  },

  "Unión del Norte": {
    pts: 30,
    pj: 18,
    pg: 7,
    pe: 9,
    pp: 2,
    gf: 26,
    gc: 13
  },

  "Sportivo Guzmán": {
    pts: 30,
    pj: 17,
    pg: 8,
    pe: 6,
    pp: 3,
    gf: 24,
    gc: 12
  },

  "San Fernando": {
    pts: 30,
    pj: 18,
    pg: 10,
    pe: 0,
    pp: 8,
    gf: 25,
    gc: 24
  },

  "Central Norte": {
    pts: 29,
    pj: 18,
    pg: 8,
    pe: 5,
    pp: 5,
    gf: 28,
    gc: 17
  },

  "San Martín": {
    pts: 28,
    pj: 18,
    pg: 7,
    pe: 7,
    pp: 4,
    gf: 18,
    gc: 15
  },

  "Atlético Tucumán": {
    pts: 26,
    pj: 18,
    pg: 7,
    pe: 5,
    pp: 6,
    gf: 19,
    gc: 17
  },

  "San Pablo": {
    pts: 25,
    pj: 17,
    pg: 8,
    pe: 1,
    pp: 8,
    gf: 18,
    gc: 12
  },

  "San Juan": {
    pts: 25,
    pj: 17,
    pg: 6,
    pe: 7,
    pp: 4,
    gf: 18,
    gc: 19
  },

  "Unión Simoca": {
    pts: 25,
    pj: 18,
    pg: 6,
    pe: 7,
    pp: 5,
    gf: 17,
    gc: 20
  },

  "Argentinos del Norte": {
    pts: 24,
    pj: 18,
    pg: 6,
    pe: 6,
    pp: 6,
    gf: 27,
    gc: 23
  },

  "Villa Mitre": {
    pts: 24,
    pj: 18,
    pg: 6,
    pe: 6,
    pp: 6,
    gf: 19,
    gc: 20
  },

  "Tucumán Central": {
    pts: 24,
    pj: 18,
    pg: 6,
    pe: 6,
    pp: 6,
    gf: 20,
    gc: 22
  },

  "Famaillá": {
    pts: 21,
    pj: 16,
    pg: 6,
    pe: 3,
    pp: 7,
    gf: 18,
    gc: 22
  },

  "Juventud Unida": {
    pts: 24,
    pj: 18,
    pg: 7,
    pe: 3,
    pp: 8,
    gf: 18,
    gc: 23
  },

  "Alto Verde": {
    pts: 23,
    pj: 18,
    pg: 7,
    pe: 2,
    pp: 9,
    gf: 31,
    gc: 29
  },

  "Azucarera Argentina": {
    pts: 26,
    pj: 18,
    pg: 7,
    pe: 5,
    pp: 6,
    gf: 21,
    gc: 28
  },

  "Lastenia": {
    pts: 22,
    pj: 18,
    pg: 6,
    pe: 4,
    pp: 8,
    gf: 21,
    gc: 19
  },

  "San Lorenzo (DG)": {
    pts: 22,
    pj: 18,
    pg: 6,
    pe: 4,
    pp: 8,
    gf: 23,
    gc: 29
  },

  "San Antonio": {
    pts: 22,
    pj: 18,
    pg: 7,
    pe: 1,
    pp: 10,
    gf: 19,
    gc: 25
  },

  "San Lorenzo (SA)": {
    pts: 21,
    pj: 18,
    pg: 5,
    pe: 6,
    pp: 7,
    gf: 13,
    gc: 19
  },

  "San Ramón": {
    pts: 20,
    pj: 17,
    pg: 5,
    pe: 5,
    pp: 7,
    gf: 17,
    gc: 25
  },

  "Marapa": {
    pts: 21,
    pj: 18,
    pg: 5,
    pe: 6,
    pp: 7,
    gf: 14,
    gc: 22
  },

  "La Providencia": {
    pts: 19,
    pj: 17,
    pg: 4,
    pe: 7,
    pp: 6,
    gf: 20,
    gc: 24
  },

  "Llorens": {
    pts: 20,
    pj: 18,
    pg: 6,
    pe: 2,
    pp: 10,
    gf: 23,
    gc: 35
  },

  "Santa Ana": {
    pts: 18,
    pj: 18,
    pg: 4,
    pe: 6,
    pp: 8,
    gf: 12,
    gc: 23
  },

  "Amalia": {
    pts: 16,
    pj: 18,
    pg: 5,
    pe: 1,
    pp: 12,
    gf: 10,
    gc: 24
  },

  "Santa Rosa": {
    pts: 15,
    pj: 18,
    pg: 4,
    pe: 3,
    pp: 11,
    gf: 16,
    gc: 27
  },

  "San José": {
    pts: 14,
    pj: 18,
    pg: 4,
    pe: 2,
    pp: 12,
    gf: 14,
    gc: 31
  },

  "Santa Lucía": {
    pts: 12,
    pj: 18,
    pg: 2,
    pe: 6,
    pp: 10,
    gf: 8,
    gc: 30
  },

  "Trinidad": {
    pts: 10,
    pj: 18,
    pg: 2,
    pe: 4,
    pp: 12,
    gf: 10,
    gc: 35
  },

  "Cruz Alta": {
    pts: 5,
    pj: 18,
    pg: 0,
    pe: 5,
    pp: 13,
    gf: 8,
    gc: 36
  },

  "All Boys": {
    pts: 5,
    pj: 17,
    pg: 1,
    pe: 2,
    pp: 14,
    gf: 9,
    gc: 41
  }
};


/* =========================================================
   FIXTURE BASE
   ========================================================= */

const fixtureBase = {

  A: [
    [
      ["Villa Mitre", "San José"],
      ["All Boys", "Juventud Unida"],
      ["Estación Experimental", "Central Norte"]
    ],
    [
      ["San José", "All Boys"],
      ["Talleres", "Estación Experimental"],
      ["Central Norte", "Juventud Unida"]
    ],
    [
      ["All Boys", "Central Norte"],
      ["Talleres", "Villa Mitre"],
      ["Juventud Unida", "Estación Experimental"]
    ],
    [
      ["Central Norte", "Villa Mitre"],
      ["San José", "Talleres"],
      ["Estación Experimental", "All Boys"]
    ],
    [
      ["Villa Mitre", "Estación Experimental"],
      ["Juventud Unida", "San José"],
      ["Talleres", "Central Norte"]
    ],
    [
      ["All Boys", "Villa Mitre"],
      ["San José", "Central Norte"],
      ["Juventud Unida", "Talleres"]
    ],
    [
      ["Estación Experimental", "All Boys"],
      ["Villa Mitre", "Juventud Unida"],
      ["San José", "Talleres"]
    ]
  ],

  B: [
    [
      ["Tucumán Central", "Atlético Tucumán"],
      ["San Martín", "Amalia"],
      ["Argentinos del Norte", "San Antonio"]
    ],
    [
      ["Atlético Tucumán", "San Martín"],
      ["Sportivo Guzmán", "Argentinos del Norte"],
      ["San Antonio", "Amalia"]
    ],
    [
      ["San Martín", "San Antonio"],
      ["Sportivo Guzmán", "Tucumán Central"],
      ["Amalia", "Argentinos del Norte"]
    ],
    [
      ["San Antonio", "Tucumán Central"],
      ["Atlético Tucumán", "Sportivo Guzmán"],
      ["Argentinos del Norte", "San Martín"]
    ],
    [
      ["Tucumán Central", "Argentinos del Norte"],
      ["Amalia", "Atlético Tucumán"],
      ["Sportivo Guzmán", "San Antonio"]
    ],
    [
      ["San Martín", "Tucumán Central"],
      ["Atlético Tucumán", "San Antonio"],
      ["Amalia", "Sportivo Guzmán"]
    ],
    [
      ["Argentinos del Norte", "San Martín"],
      ["Tucumán Central", "Amalia"],
      ["Atlético Tucumán", "Sportivo Guzmán"]
    ]
  ],

  C: [
    [
      ["Atlético Concepción", "Lastenia"],
      ["San Lorenzo (DG)", "Garmendia"],
      ["Unión del Norte", "Cruz Alta"]
    ],
    [
      ["Lastenia", "San Lorenzo (DG)"],
      ["San Juan", "Unión del Norte"],
      ["Cruz Alta", "Garmendia"]
    ],
    [
      ["San Lorenzo (DG)", "Cruz Alta"],
      ["San Juan", "Atlético Concepción"],
      ["Garmendia", "Unión del Norte"]
    ],
    [
      ["Cruz Alta", "Atlético Concepción"],
      ["Lastenia", "San Juan"],
      ["Unión del Norte", "San Lorenzo (DG)"]
    ],
    [
      ["Atlético Concepción", "Unión del Norte"],
      ["Garmendia", "Lastenia"],
      ["San Juan", "Cruz Alta"]
    ],
    [
      ["San Lorenzo (DG)", "Atlético Concepción"],
      ["Lastenia", "Cruz Alta"],
      ["Garmendia", "San Juan"]
    ],
    [
      ["Unión del Norte", "San Lorenzo (DG)"],
      ["Atlético Concepción", "Garmendia"],
      ["Lastenia", "San Juan"]
    ]
  ],

  D: [
    [
      ["San Pablo", "Bella Vista"],
      ["San Fernando", "Almirante Brown"],
      ["Ateneo Parroquial Alderetes", "Famaillá"]
    ],
    [
      ["Bella Vista", "San Fernando"],
      ["Santa Lucía", "Ateneo Parroquial Alderetes"],
      ["Famaillá", "Almirante Brown"]
    ],
    [
      ["San Fernando", "Famaillá"],
      ["Santa Lucía", "San Pablo"],
      ["Almirante Brown", "Ateneo Parroquial Alderetes"]
    ],
    [
      ["Famaillá", "San Pablo"],
      ["Bella Vista", "Santa Lucía"],
      ["Ateneo Parroquial Alderetes", "San Fernando"]
    ],
    [
      ["San Pablo", "Ateneo Parroquial Alderetes"],
      ["Almirante Brown", "Bella Vista"],
      ["Santa Lucía", "Famaillá"]
    ],
    [
      ["San Fernando", "San Pablo"],
      ["Bella Vista", "Famaillá"],
      ["Almirante Brown", "Santa Lucía"]
    ],
    [
      ["Ateneo Parroquial Alderetes", "San Fernando"],
      ["San Pablo", "Almirante Brown"],
      ["Bella Vista", "Santa Lucía"]
    ]
  ],

  E: [
    [
      ["Concepción FC", "Azucarera Argentina"],
      ["La Providencia", "Alto Verde"],
      ["Unión Simoca", "San Ramón"],
      ["Santa Rosa", "Ñuñorco"]
    ],
    [
      ["Ñuñorco", "Concepción FC"],
      ["Santa Rosa", "Unión Simoca"],
      ["San Ramón", "La Providencia"],
      ["Alto Verde", "Azucarera Argentina"]
    ],
    [
      ["Concepción FC", "Alto Verde"],
      ["Azucarera Argentina", "San Ramón"],
      ["La Providencia", "Santa Rosa"],
      ["Unión Simoca", "Ñuñorco"]
    ],
    [
      ["Unión Simoca", "Concepción FC"],
      ["Ñuñorco", "La Providencia"],
      ["Santa Rosa", "Azucarera Argentina"],
      ["San Ramón", "Alto Verde"]
    ],
    [
      ["Concepción FC", "San Ramón"],
      ["Alto Verde", "Santa Rosa"],
      ["Azucarera Argentina", "Ñuñorco"],
      ["La Providencia", "Unión Simoca"]
    ],
    [
      ["La Providencia", "Concepción FC"],
      ["Unión Simoca", "Azucarera Argentina"],
      ["Ñuñorco", "Alto Verde"],
      ["Santa Rosa", "San Ramón"]
    ],
    [
      ["Concepción FC", "Santa Rosa"],
      ["San Ramón", "Ñuñorco"],
      ["Alto Verde", "Unión Simoca"],
      ["Azucarera Argentina", "La Providencia"]
    ]
  ],

  F: [
    [
      ["Deportivo Aguilares", "Santa Ana"],
      ["San Lorenzo (SA)", "Graneros"],
      ["Marapa", "Jorge Newbery"],
      ["Llorens", "Trinidad"]
    ],
    [
      ["Llorens", "Deportivo Aguilares"],
      ["Trinidad", "Marapa"],
      ["Jorge Newbery", "San Lorenzo (SA)"],
      ["Graneros", "Santa Ana"]
    ],
    [
      ["Deportivo Aguilares", "Graneros"],
      ["Santa Ana", "Jorge Newbery"],
      ["San Lorenzo (SA)", "Trinidad"],
      ["Marapa", "Llorens"]
    ],
    [
      ["Marapa", "Deportivo Aguilares"],
      ["Llorens", "San Lorenzo (SA)"],
      ["Trinidad", "Santa Ana"],
      ["Jorge Newbery", "Graneros"]
    ],
    [
      ["Deportivo Aguilares", "Jorge Newbery"],
      ["Graneros", "Trinidad"],
      ["Santa Ana", "Llorens"],
      ["San Lorenzo (SA)", "Marapa"]
    ],
    [
      ["San Lorenzo (SA)", "Deportivo Aguilares"],
      ["Marapa", "Santa Ana"],
      ["Llorens", "Graneros"],
      ["Trinidad", "Jorge Newbery"]
    ],
    [
      ["Deportivo Aguilares", "Trinidad"],
      ["Jorge Newbery", "Llorens"],
      ["Graneros", "Marapa"],
      ["Santa Ana", "San Lorenzo (SA)"]
    ]
  ]
};


/* =========================================================
   INTERZONALES
   ========================================================= */

const interzonalesAD = [
  ["Santa Lucía", "Talleres"],
  ["Villa Mitre", "San Pablo"],
  ["Bella Vista", "San José"],
  ["Almirante Brown", "Juventud Unida"],
  ["San Fernando", "All Boys"],
  ["Estación Experimental", "Ateneo Parroquial Alderetes"],
  ["Famaillá", "Central Norte"],
  ["Talleres", "Santa Lucía"],
  ["San Pablo", "Villa Mitre"],
  ["San José", "Bella Vista"],
  ["Juventud Unida", "Almirante Brown"],
  ["All Boys", "San Fernando"],
  ["Ateneo Parroquial Alderetes", "Estación Experimental"],
  ["Central Norte", "Famaillá"]
];

const interzonalesBC = [
  ["San Juan", "Sportivo Guzmán"],
  ["Tucumán Central", "Atlético Concepción"],
  ["Lastenia", "Atlético Tucumán"],
  ["Garmendia", "Amalia"],
  ["San Lorenzo (DG)", "San Martín"],
  ["Unión del Norte", "Argentinos del Norte"],
  ["San Antonio", "Cruz Alta"],
  ["Sportivo Guzmán", "San Juan"],
  ["Atlético Concepción", "Tucumán Central"],
  ["Atlético Tucumán", "Lastenia"],
  ["Amalia", "Garmendia"],
  ["San Martín", "San Lorenzo (DG)"],
  ["Argentinos del Norte", "Unión del Norte"],
  ["Cruz Alta", "San Antonio"]
];


/* =========================================================
   RESULTADOS CLAUSURA 2026
   ========================================================= */

const resultadosClausura = [

  /* =========================
     FECHA 1
     ========================= */

  {
    fecha: 1,
    local: "Villa Mitre",
    visitante: "San José",
    golesLocal: 2,
    golesVisitante: 0
  },

  {
    fecha: 1,
    local: "All Boys",
    visitante: "Juventud Unida",
    golesLocal: 1,
    golesVisitante: 3
  },

  {
    fecha: 1,
    local: "Estación Experimental",
    visitante: "Central Norte",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 1,
    local: "Tucumán Central",
    visitante: "Atlético Tucumán",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 1,
    local: "San Martín",
    visitante: "Amalia",
    golesLocal: 0,
    golesVisitante: 0
  },

  {
    fecha: 1,
    local: "Argentinos del Norte",
    visitante: "San Antonio",
    golesLocal: 3,
    golesVisitante: 2
  },

  {
    fecha: 1,
    local: "Atlético Concepción",
    visitante: "Lastenia",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 1,
    local: "San Lorenzo (DG)",
    visitante: "Garmendia",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 1,
    local: "Unión del Norte",
    visitante: "Cruz Alta",
    golesLocal: 3,
    golesVisitante: 0
  },

  {
    fecha: 1,
    local: "San Pablo",
    visitante: "Bella Vista",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 1,
    local: "San Fernando",
    visitante: "Almirante Brown",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 1,
    local: "Ateneo Parroquial Alderetes",
    visitante: "Famaillá",
    golesLocal: 0,
    golesVisitante: 2
  },

  {
    fecha: 1,
    local: "Santa Lucía",
    visitante: "Talleres",
    golesLocal: 0,
    golesVisitante: 0
  },

  {
    fecha: 1,
    local: "Concepción FC",
    visitante: "Azucarera Argentina",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 1,
    local: "La Providencia",
    visitante: "Alto Verde",
    golesLocal: 1,
    golesVisitante: 3
  },

  {
    fecha: 1,
    local: "Unión Simoca",
    visitante: "San Ramón",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 1,
    local: "Santa Rosa",
    visitante: "Ñuñorco",
    golesLocal: 0,
    golesVisitante: 2
  },

  {
    fecha: 1,
    local: "Llorens",
    visitante: "Trinidad",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 1,
    local: "Deportivo Aguilares",
    visitante: "Santa Ana",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 1,
    local: "San Lorenzo (SA)",
    visitante: "Graneros",
    golesLocal: 1,
    golesVisitante: 2
  },

  {
    fecha: 1,
    local: "Marapa",
    visitante: "Jorge Newbery",
    golesLocal: 1,
    golesVisitante: 3
  },


  /* =========================
     FECHA 2
     ========================= */

  {
    fecha: 2,
    local: "San José",
    visitante: "All Boys",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 2,
    local: "Talleres",
    visitante: "Estación Experimental",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "Central Norte",
    visitante: "Juventud Unida",
    golesLocal: 0,
    golesVisitante: 0
  },

  {
    fecha: 2,
    local: "Atlético Tucumán",
    visitante: "San Martín",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "Sportivo Guzmán",
    visitante: "Argentinos del Norte",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "San Antonio",
    visitante: "Amalia",
    golesLocal: 2,
    golesVisitante: 0
  },

  {
    fecha: 2,
    local: "Lastenia",
    visitante: "San Lorenzo (DG)",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "San Juan",
    visitante: "Unión del Norte",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "Cruz Alta",
    visitante: "Garmendia",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "Bella Vista",
    visitante: "San Fernando",
    golesLocal: 3,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "Santa Lucía",
    visitante: "Ateneo Parroquial Alderetes",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "Famaillá",
    visitante: "Almirante Brown",
    golesLocal: 0,
    golesVisitante: 3
  },

  {
    fecha: 2,
    local: "Villa Mitre",
    visitante: "San Pablo",
    golesLocal: 2,
    golesVisitante: 3
  },

  {
    fecha: 2,
    local: "Tucumán Central",
    visitante: "Atlético Concepción",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "Ñuñorco",
    visitante: "Concepción FC",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "Santa Rosa",
    visitante: "Unión Simoca",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "San Ramón",
    visitante: "La Providencia",
    golesLocal: 0,
    golesVisitante: 0
  },

  {
    fecha: 2,
    local: "Alto Verde",
    visitante: "Azucarera Argentina",
    golesLocal: 6,
    golesVisitante: 0
  },

  {
    fecha: 2,
    local: "Llorens",
    visitante: "Deportivo Aguilares",
    golesLocal: 2,
    golesVisitante: 3
  },

  {
    fecha: 2,
    local: "Trinidad",
    visitante: "Marapa",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 2,
    local: "Jorge Newbery",
    visitante: "San Lorenzo (SA)",
    golesLocal: 0,
    golesVisitante: 0
  },

  {
    fecha: 2,
    local: "Graneros",
    visitante: "Santa Ana",
    golesLocal: 3,
    golesVisitante: 0
  },


  /* =========================
     FECHA 3
     ========================= */

  {
    fecha: 3,
    local: "All Boys",
    visitante: "Central Norte",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 3,
    local: "Talleres",
    visitante: "Villa Mitre",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 3,
    local: "Juventud Unida",
    visitante: "Estación Experimental",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 3,
    local: "San Martín",
    visitante: "San Antonio",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 3,
    local: "Sportivo Guzmán",
    visitante: "Tucumán Central",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 3,
    local: "Amalia",
    visitante: "Argentinos del Norte",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 3,
    local: "San Lorenzo (DG)",
    visitante: "Cruz Alta",
    golesLocal: 3,
    golesVisitante: 1
  },

  {
    fecha: 3,
    local: "San Juan",
    visitante: "Atlético Concepción",
    golesLocal: 3,
    golesVisitante: 1
  },

  {
    fecha: 3,
    local: "Garmendia",
    visitante: "Unión del Norte",
    golesLocal: 0,
    golesVisitante: 0
  },

  {
    fecha: 3,
    local: "San Fernando",
    visitante: "Famaillá",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 3,
    local: "Santa Lucía",
    visitante: "San Pablo",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 3,
    local: "Almirante Brown",
    visitante: "Ateneo Parroquial Alderetes",
    golesLocal: 3,
    golesVisitante: 3
  },

  {
    fecha: 3,
    local: "Bella Vista",
    visitante: "San José",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 3,
    local: "Lastenia",
    visitante: "Atlético Tucumán",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 3,
    local: "Concepción FC",
    visitante: "Alto Verde",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 3,
    local: "Azucarera Argentina",
    visitante: "San Ramón",
    golesLocal: 0,
    golesVisitante: 2
  },

  {
    fecha: 3,
    local: "La Providencia",
    visitante: "Santa Rosa",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 3,
    local: "Unión Simoca",
    visitante: "Ñuñorco",
    golesLocal: 1,
    golesVisitante: 2
  },

  {
    fecha: 3,
    local: "Deportivo Aguilares",
    visitante: "Graneros",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 3,
    local: "Santa Ana",
    visitante: "Jorge Newbery",
    golesLocal: 0,
    golesVisitante: 0
  },

  {
    fecha: 3,
    local: "San Lorenzo (SA)",
    visitante: "Trinidad",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 3,
    local: "Marapa",
    visitante: "Llorens",
    golesLocal: 3,
    golesVisitante: 2
  },


  /* =========================
     FECHA 4
     ========================= */

  {
    fecha: 4,
    local: "Central Norte",
    visitante: "Villa Mitre",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 4,
    local: "San José",
    visitante: "Talleres",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 4,
    local: "Estación Experimental",
    visitante: "All Boys",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 4,
    local: "San Antonio",
    visitante: "Tucumán Central",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 4,
    local: "Atlético Tucumán",
    visitante: "Sportivo Guzmán",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 4,
    local: "Argentinos del Norte",
    visitante: "San Martín",
    golesLocal: 3,
    golesVisitante: 1
  },

  {
    fecha: 4,
    local: "Cruz Alta",
    visitante: "Atlético Concepción",
    golesLocal: 1,
    golesVisitante: 4
  },

  {
    fecha: 4,
    local: "Lastenia",
    visitante: "San Juan",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 4,
    local: "Unión del Norte",
    visitante: "San Lorenzo (DG)",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 4,
    local: "Bella Vista",
    visitante: "Santa Lucía",
    golesLocal: 5,
    golesVisitante: 0
  },

  {
    fecha: 4,
    local: "Ateneo Parroquial Alderetes",
    visitante: "San Fernando",
    golesLocal: 3,
    golesVisitante: 0
  },

  {
    fecha: 4,
    local: "Almirante Brown",
    visitante: "Juventud Unida",
    golesLocal: 5,
    golesVisitante: 0
  },

  {
    fecha: 4,
    local: "Garmendia",
    visitante: "Amalia",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 4,
    local: "Unión Simoca",
    visitante: "Concepción FC",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 4,
    local: "Ñuñorco",
    visitante: "La Providencia",
    golesLocal: 3,
    golesVisitante: 0
  },

  {
    fecha: 4,
    local: "Santa Rosa",
    visitante: "Azucarera Argentina",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 4,
    local: "San Ramón",
    visitante: "Alto Verde",
    golesLocal: 1,
    golesVisitante: 2
  },

  {
    fecha: 4,
    local: "Marapa",
    visitante: "Deportivo Aguilares",
    golesLocal: 1,
    golesVisitante: 6
  },

  {
    fecha: 4,
    local: "Llorens",
    visitante: "San Lorenzo (SA)",
    golesLocal: 1,
    golesVisitante: 2
  },

  {
    fecha: 4,
    local: "Trinidad",
    visitante: "Santa Ana",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 4,
    local: "Jorge Newbery",
    visitante: "Graneros",
    golesLocal: 2,
    golesVisitante: 1
  },


  /* =========================
     FECHA 5
     ========================= */

  {
    fecha: 5,
    local: "Villa Mitre",
    visitante: "Estación Experimental",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "Juventud Unida",
    visitante: "San José",
    golesLocal: 3,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "Talleres",
    visitante: "Central Norte",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "Tucumán Central",
    visitante: "Argentinos del Norte",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "Amalia",
    visitante: "Atlético Tucumán",
    golesLocal: 0,
    golesVisitante: 2
  },

  {
    fecha: 5,
    local: "Sportivo Guzmán",
    visitante: "San Antonio",
    golesLocal: 0,
    golesVisitante: 0
  },

  {
    fecha: 5,
    local: "Atlético Concepción",
    visitante: "Unión del Norte",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "Garmendia",
    visitante: "Lastenia",
    golesLocal: 0,
    golesVisitante: 0
  },

  {
    fecha: 5,
    local: "San Juan",
    visitante: "Cruz Alta",
    golesLocal: 4,
    golesVisitante: 0
  },

  {
    fecha: 5,
    local: "San Pablo",
    visitante: "Ateneo Parroquial Alderetes",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "Almirante Brown",
    visitante: "Bella Vista",
    golesLocal: 1,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "Santa Lucía",
    visitante: "Famaillá",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "San Fernando",
    visitante: "All Boys",
    golesLocal: 3,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "San Lorenzo (DG)",
    visitante: "San Martín",
    golesLocal: 1,
    golesVisitante: 2
  },

  {
    fecha: 5,
    local: "Concepción FC",
    visitante: "San Ramón",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "Alto Verde",
    visitante: "Santa Rosa",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "Azucarera Argentina",
    visitante: "Ñuñorco",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "La Providencia",
    visitante: "Unión Simoca",
    golesLocal: 0,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "Deportivo Aguilares",
    visitante: "Jorge Newbery",
    golesLocal: 1,
    golesVisitante: 0
  },

  {
    fecha: 5,
    local: "Graneros",
    visitante: "Trinidad",
    golesLocal: 2,
    golesVisitante: 1
  },

  {
    fecha: 5,
    local: "Santa Ana",
    visitante: "Llorens",
    golesLocal: 4,
    golesVisitante: 0
  },

  {
    fecha: 5,
    local: "San Lorenzo (SA)",
    visitante: "Marapa",
    golesLocal: 1,
    golesVisitante: 0
  }

  // Pendientes:
  // Fecha 1: San Juan vs Sportivo Guzmán
  // Fecha 4: Famaillá vs San Pablo
];


/* =========================================================
   CREAR PARTIDO
   ========================================================= */

function crearPartido(
  fecha,
  zona,
  local,
  visitante,
  interzonal = false,
  zonasInterzonal = []
) {

  return {

    id:
      fecha +
      "-" +
      local +
      "-" +
      visitante,

    fecha: fecha,

    zona:
      interzonal
        ? "INTERZONAL"
        : zona,

    zonas:
      interzonal
        ? zonasInterzonal
        : [zona],

    local: local,
    visitante: visitante,

    interzonal: interzonal,

    golesLocal: null,
    golesVisitante: null,

    jugado: false
  };
}


/* =========================================================
   GENERAR FIXTURE COMPLETO
   ========================================================= */

function generarFixtureCompleto() {

  const partidos = [];

  for (const zona of Object.keys(fixtureBase)) {

    const fechasPrimeraRueda =
      fixtureBase[zona];

    for (
      let i = 0;
      i < fechasPrimeraRueda.length;
      i++
    ) {

      const fecha = i + 1;

      for (
        const partido
        of fechasPrimeraRueda[i]
      ) {

        partidos.push(
          crearPartido(
            fecha,
            zona,
            partido[0],
            partido[1]
          )
        );

      }

    }


    /* Segunda rueda */

    for (
      let i = 0;
      i < fechasPrimeraRueda.length;
      i++
    ) {

      const fecha = i + 8;

      for (
        const partido
        of fechasPrimeraRueda[i]
      ) {

        partidos.push(
          crearPartido(
            fecha,
            zona,
            partido[1],
            partido[0]
          )
        );

      }

    }

  }


  /* Interzonales A-D */

  for (
    let i = 0;
    i < interzonalesAD.length;
    i++
  ) {

    const partido =
      interzonalesAD[i];

    partidos.push(
      crearPartido(
        i + 1,
        "INTERZONAL",
        partido[0],
        partido[1],
        true,
        ["A", "D"]
      )
    );

  }


  /* Interzonales B-C */

  for (
    let i = 0;
    i < interzonalesBC.length;
    i++
  ) {

    const partido =
      interzonalesBC[i];

    partidos.push(
      crearPartido(
        i + 1,
        "INTERZONAL",
        partido[0],
        partido[1],
        true,
        ["B", "C"]
      )
    );

  }


  return partidos;
}


/* =========================================================
   APLICAR RESULTADOS
   ========================================================= */

function aplicarResultados(partidos) {

  for (
    const resultado
    of resultadosClausura
  ) {

    const partido =
      partidos.find(p =>

        p.fecha ===
          resultado.fecha &&

        p.local ===
          resultado.local &&

        p.visitante ===
          resultado.visitante

      );


    if (!partido) {

      console.warn(
        "RESULTADO NO ENCONTRADO EN FIXTURE:",
        resultado
      );

      continue;
    }


    partido.golesLocal =
      resultado.golesLocal;

    partido.golesVisitante =
      resultado.golesVisitante;

    partido.jugado = true;

  }


  return partidos;
}


/* =========================================================
   TABLA DEL CLAUSURA
   ========================================================= */

function crearTablaInicialZona(zona) {

  const tabla = {};

  for (
    const equipo
    of datosLiga.zonas[zona]
  ) {

    tabla[equipo] = {

      equipo: equipo,

      pts: 0,
      pj: 0,

      pg: 0,
      pe: 0,
      pp: 0,

      gf: 0,
      gc: 0,

      dg: 0
    };

  }

  return tabla;
}


function actualizarEquipoTabla(
  tabla,
  equipo,
  golesFavor,
  golesContra
) {

  if (!tabla[equipo]) {
    return;
  }


  tabla[equipo].pj++;

  tabla[equipo].gf +=
    golesFavor;

  tabla[equipo].gc +=
    golesContra;


  if (
    golesFavor >
    golesContra
  ) {

    tabla[equipo].pg++;
    tabla[equipo].pts += 3;

  } else if (
    golesFavor ===
    golesContra
  ) {

    tabla[equipo].pe++;
    tabla[equipo].pts++;

  } else {

    tabla[equipo].pp++;

  }


  tabla[equipo].dg =
    tabla[equipo].gf -
    tabla[equipo].gc;
}


/* =========================================================
   ORDEN DE TABLA
   ========================================================= */

function compararEquipos(a, b) {

  if (b.pts !== a.pts) {
    return b.pts - a.pts;
  }

  if (b.dg !== a.dg) {
    return b.dg - a.dg;
  }

  if (b.gf !== a.gf) {
    return b.gf - a.gf;
  }

  if (a.gc !== b.gc) {
    return a.gc - b.gc;
  }

  return a.equipo.localeCompare(
    b.equipo,
    "es"
  );
}


/* =========================================================
   OBTENER TABLAS DEL CLAUSURA
   ========================================================= */

function obtenerTablasClausura() {

  const tablas = {};

  for (
    const zona
    of Object.keys(datosLiga.zonas)
  ) {

    const tabla =
      crearTablaInicialZona(zona);


    for (
      const partido
      of datosLiga.partidos
    ) {

      if (!partido.jugado) {
        continue;
      }


      let pertenece =
        partido.zona === zona;


      if (
        partido.interzonal &&
        partido.zonas.includes(zona)
      ) {

        pertenece = true;

      }


      if (!pertenece) {
        continue;
      }


      actualizarEquipoTabla(
        tabla,
        partido.local,
        partido.golesLocal,
        partido.golesVisitante
      );


      actualizarEquipoTabla(
        tabla,
        partido.visitante,
        partido.golesVisitante,
        partido.golesLocal
      );

    }


    tablas[zona] =
      Object.values(tabla)
        .sort(compararEquipos);

  }


  return tablas;
}


/* =========================================================
   TABLA ANUAL
   ========================================================= */

function copiarTablaAnualBase() {

  const copia = {};

  for (
    const equipo
    in tablaAnualBase
  ) {

    copia[equipo] = {

      equipo: equipo,

      pts:
        tablaAnualBase[equipo].pts,

      pj:
        tablaAnualBase[equipo].pj,

      pg:
        tablaAnualBase[equipo].pg,

      pe:
        tablaAnualBase[equipo].pe,

      pp:
        tablaAnualBase[equipo].pp,

      gf:
        tablaAnualBase[equipo].gf,

      gc:
        tablaAnualBase[equipo].gc,

      dg:
        tablaAnualBase[equipo].gf -
        tablaAnualBase[equipo].gc,

      zonaDescenso: false
    };

  }

  return copia;
}


function actualizarTablaAnualConResultado(
  tabla,
  resultado
) {

  const local =
    tabla[resultado.local];

  const visitante =
    tabla[resultado.visitante];


  if (!local || !visitante) {

    console.warn(
      "EQUIPO NO ENCONTRADO EN TABLA ANUAL:",
      resultado
    );

    return;
  }


  local.pj++;
  visitante.pj++;


  local.gf +=
    resultado.golesLocal;

  local.gc +=
    resultado.golesVisitante;


  visitante.gf +=
    resultado.golesVisitante;

  visitante.gc +=
    resultado.golesLocal;


  if (
    resultado.golesLocal >
    resultado.golesVisitante
  ) {

    local.pg++;
    visitante.pp++;

    local.pts += 3;

  } else if (
    resultado.golesLocal <
    resultado.golesVisitante
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


  local.dg =
    local.gf -
    local.gc;

  visitante.dg =
    visitante.gf -
    visitante.gc;
}


function generarTablaAnual() {

  const tabla =
    copiarTablaAnualBase();


  /*
   * La tabla base ya incluye Apertura
   * + Clausura hasta Fecha 4.
   *
   * Por eso solamente agregamos Fecha 5.
   */

  const resultadosPosteriores =
    resultadosClausura.filter(
      resultado =>
        resultado.fecha >= 5
    );


  for (
    const resultado
    of resultadosPosteriores
  ) {

    actualizarTablaAnualConResultado(
      tabla,
      resultado
    );

  }


  const lista =
    Object.values(tabla)
      .sort(compararEquipos);


  lista.forEach(
    (equipo, indice) => {

      equipo.posicion =
        indice + 1;

      equipo.zonaDescenso =
        indice >=
        lista.length - 4;

    }
  );


  return lista;
}


/* =========================================================
   CONSULTAS TABLA ANUAL
   ========================================================= */

function obtenerEquipoTablaAnual(
  nombre
) {

  return datosLiga.tablaAnual.find(
    equipo =>
      equipo.equipo === nombre
  );
}


function obtenerZonaDescensoAnual() {

  return datosLiga.tablaAnual.filter(
    equipo =>
      equipo.zonaDescenso
  );

}


/* =========================================================
   PLAY-OFF
   ========================================================= */

const resultadosPlayoff = [];


function generarClasificacionPlayoff() {

  const tablas =
    obtenerTablasClausura();

  const clasificados = [];


  for (
    const zona
    of Object.keys(tablas)
  ) {

    const tabla =
      tablas[zona];


    if (!tabla.length) {
      continue;
    }


    const ganador =
      tabla[0];


    clasificados.push({

      equipo:
        ganador.equipo,

      zona:
        zona,

      posicionZona: 1,

      pts:
        ganador.pts,

      dg:
        ganador.dg,

      gf:
        ganador.gf,

      gc:
        ganador.gc,

      ronda:
        "segunda"

    });


    for (
      let i = 1;
      i < Math.min(tabla.length, 5);
      i++
    ) {

      clasificados.push({

        equipo:
          tabla[i].equipo,

        zona:
          zona,

        posicionZona:
          i + 1,

        pts:
          tabla[i].pts,

        dg:
          tabla[i].dg,

        gf:
          tabla[i].gf,

        gc:
          tabla[i].gc,

        ronda:
          "primera"

      });

    }

  }


  return clasificados;
}


/* =========================================================
   GANADOR PLAY-OFF
   ========================================================= */

function obtenerGanadorPlayoff(
  local,
  visitante
) {

  const resultado =
    resultadosPlayoff.find(
      partido =>
        partido.local === local &&
        partido.visitante === visitante
    );


  if (!resultado) {
    return null;
  }


  if (
    resultado.golesLocal >
    resultado.golesVisitante
  ) {

    return local;

  }


  if (
    resultado.golesVisitante >
    resultado.golesLocal
  ) {

    return visitante;

  }


  if (
    resultado.penalesLocal !== undefined &&
    resultado.penalesVisitante !== undefined
  ) {

    if (
      resultado.penalesLocal >
      resultado.penalesVisitante
    ) {

      return local;

    }


    if (
      resultado.penalesVisitante >
      resultado.penalesLocal
    ) {

      return visitante;

    }

  }


  return null;
}


/* =========================================================
   PRIMERA RONDA PLAY-OFF
   ========================================================= */

function crearLlavesPrimeraRonda() {

  const ordenados =
    generarClasificacionPlayoff()
      .filter(
        equipo =>
          equipo.ronda === "primera"
      )
      .sort(compararEquipos);


  const llaves = [];


  for (
    let i = 0;
    i < ordenados.length / 2;
    i++
  ) {

    const local =
      ordenados[i];

    const visitante =
      ordenados[
        ordenados.length - 1 - i
      ];


    llaves.push({

      ronda:
        "Primera ronda",

      seedLocal:
        i + 7,

      seedVisitante:
        ordenados.length - i + 6,

      local:
        local.equipo,

      visitante:
        visitante.equipo,

      ganador:
        obtenerGanadorPlayoff(
          local.equipo,
          visitante.equipo
        )

    });

  }


  return llaves;
}


/* =========================================================
   SEGUNDA RONDA
   ========================================================= */

function crearLlavesSegundaRonda() {

  const primeraRonda =
    crearLlavesPrimeraRonda();


  const ganadoresPrimera =
    primeraRonda
      .map(
        llave =>
          llave.ganador
      )
      .filter(Boolean);


  const clasificacion =
    generarClasificacionPlayoff();


  const primeros =
    clasificacion
      .filter(
        equipo =>
          equipo.posicionZona === 1
      )
      .sort(compararEquipos);


  const equipos =
    [
      ...primeros,

      ...ganadoresPrimera.map(
        nombre =>
          clasificacion.find(
            equipo =>
              equipo.equipo === nombre
          )
      )

    ]
      .filter(Boolean)
      .sort(compararEquipos);


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

      ronda:
        "Segunda ronda",

      local:
        mejor.equipo,

      visitante:
        peor.equipo,

      ganador:
        obtenerGanadorPlayoff(
          mejor.equipo,
          peor.equipo
        )

    });

  }


  return llaves;
}


/* =========================================================
   RONDAS SIGUIENTES
   ========================================================= */

function crearLlavesSiguienteRonda(
  equipos
) {

  const ordenados =
    equipos
      .filter(Boolean)
      .map(
        nombre =>
          datosLiga.tablaAnual.find(
            equipo =>
              equipo.equipo === nombre
          )
      )
      .filter(Boolean)
      .sort(compararEquipos);


  const llaves = [];


  for (
    let i = 0;
    i < ordenados.length / 2;
    i++
  ) {

    const mejor =
      ordenados[i];

    const peor =
      ordenados[
        ordenados.length - 1 - i
      ];


    llaves.push({

      local:
        mejor.equipo,

      visitante:
        peor.equipo,

      ganador:
        obtenerGanadorPlayoff(
          mejor.equipo,
          peor.equipo
        )

    });

  }


  return llaves;
}


/* =========================================================
   INFORMACIÓN COMPLETA PLAY-OFF
   ========================================================= */

function obtenerPlayoffs() {

  return {

    clasificacion:
      generarClasificacionPlayoff(),

    primeraRonda:
      crearLlavesPrimeraRonda(),

    segundaRonda:
      crearLlavesSegundaRonda(),

    resultados:
      resultadosPlayoff

  };
}


/* =========================================================
   FUNCIONES PÚBLICAS
   ========================================================= */

function obtenerTablaZona(zona) {

  return datosLiga.tablasClausura[zona] || [];

}


function obtenerPartidosFecha(fecha) {

  return datosLiga.partidos.filter(
    partido =>
      partido.fecha === fecha
  );

}


function obtenerPartidosEquipo(equipo) {

  return datosLiga.partidos.filter(
    partido =>
      partido.local === equipo ||
      partido.visitante === equipo
  );

}


function obtenerPartidosJugados() {

  return datosLiga.partidos.filter(
    partido =>
      partido.jugado
  );

}


function obtenerPartidosPendientes() {

  return datosLiga.partidos.filter(
    partido =>
      !partido.jugado
  );

}


function calcularPuntos(equipo) {

  return (
    equipo.pg * 3
  ) + equipo.pe;

}


function obtenerPosicionEquipo(
  equipo,
  zona
) {

  const tabla =
    datosLiga.tablasClausura[zona] ||
    [];


  return (
    tabla.findIndex(
      e =>
        e.equipo === equipo
    )
  ) + 1;

}


/* =========================================================
   VALIDACIÓN DE DATOS
   ========================================================= */

function validarDatos() {

  const encontrados = [];
  const noEncontrados = [];

  const vistos =
    new Set();


  for (
    const resultado
    of resultadosClausura
  ) {

    const clave =
      resultado.fecha +
      "|" +
      resultado.local +
      "|" +
      resultado.visitante;


    if (
      vistos.has(clave)
    ) {

      console.warn(
        "RESULTADO DUPLICADO:",
        resultado
      );

    }


    vistos.add(clave);


    const partido =
      datosLiga.partidos.find(
        p =>
          p.fecha === resultado.fecha &&
          p.local === resultado.local &&
          p.visitante === resultado.visitante
      );


    if (partido) {

      encontrados.push(
        resultado
      );

    } else {

      noEncontrados.push(
        resultado
      );

    }

  }


  console.info(
    "Resultados cargados correctamente:",
    encontrados.length
  );


  if (
    noEncontrados.length
  ) {

    console.warn(
      "Resultados sin partido en fixture:",
      noEncontrados
    );

  }


  return {

    encontrados:
      encontrados,

    noEncontrados:
      noEncontrados

  };

}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

datosLiga.partidos =
  generarFixtureCompleto();


datosLiga.partidos =
  aplicarResultados(
    datosLiga.partidos
  );


datosLiga.tablasClausura =
  obtenerTablasClausura();


datosLiga.tablaAnual =
  generarTablaAnual();

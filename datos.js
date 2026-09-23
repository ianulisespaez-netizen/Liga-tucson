// ==========================================
// LIGA TUCSON
// Primera División A - Clausura 2026
// Fixture completo + resultados cargados
// ==========================================

const datosLiga = {

    torneo: "Primera División A - Clausura 2026",
    fechaActual: 5,

    // ==========================================
    // ZONAS Y TABLAS DE POSICIONES
    // ==========================================

    zonas: {
        A: [
            { equipo: "Talleres", pts: 10, pj: 4, pg: 3, pe: 1, pp: 0, gf: 4, gc: 1, dg: 3 },
            { equipo: "Juventud Unida", pts: 7, pj: 5, pg: 2, pe: 1, pp: 2, gf: 6, gc: 8, dg: -2 },
            { equipo: "Estación Experimental", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 4, gc: 3, dg: 1 },
            { equipo: "Central Norte", pts: 4, pj: 4, pg: 1, pe: 1, pp: 2, gf: 3, gc: 4, dg: -1 },
            { equipo: "Villa Mitre", pts: 3, pj: 4, pg: 1, pe: 0, pp: 3, gf: 5, gc: 6, dg: -1 },
            { equipo: "All Boys", pts: 3, pj: 4, pg: 1, pe: 0, pp: 3, gf: 3, gc: 7, dg: -4 },
            { equipo: "San José", pts: 3, pj: 5, pg: 1, pe: 0, pp: 4, gf: 2, gc: 7, dg: -5 }
        ],

        B: [
            { equipo: "Argentinos del Norte", pts: 9, pj: 4, pg: 3, pe: 0, pp: 1, gf: 7, gc: 4, dg: 3 },
            { equipo: "San Martín", pts: 8, pj: 5, pg: 2, pe: 2, pp: 1, gf: 5, gc: 5, dg: 0 },
            { equipo: "San Antonio", pts: 6, pj: 4, pg: 2, pe: 0, pp: 2, gf: 5, gc: 4, dg: 1 },
            { equipo: "Atlético Tucumán", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 4, gc: 4, dg: 0 },
            { equipo: "Sportivo Guzmán", pts: 4, pj: 3, pg: 1, pe: 1, pp: 1, gf: 2, gc: 2, dg: 0 },
            { equipo: "Amalia", pts: 4, pj: 5, pg: 1, pe: 1, pp: 3, gf: 1, gc: 5, dg: -4 },
            { equipo: "Tucumán Central", pts: 3, pj: 4, pg: 0, pe: 3, pp: 1, gf: 3, gc: 4, dg: -1 }
        ],

        C: [
            { equipo: "Garmendia", pts: 11, pj: 5, pg: 3, pe: 2, pp: 0, gf: 9, gc: 6, dg: 3 },
            { equipo: "Atlético Concepción", pts: 10, pj: 5, pg: 3, pe: 1, pp: 1, gf: 9, gc: 6, dg: 3 },
            { equipo: "San Juan", pts: 8, pj: 4, pg: 2, pe: 2, pp: 0, gf: 5, gc: 3, dg: 2 },
            { equipo: "San Lorenzo (DG)", pts: 7, pj: 5, pg: 2, pe: 2, pp: 1, gf: 6, gc: 5, dg: 1 },
            { equipo: "Unión del Norte", pts: 6, pj: 5, pg: 1, pe: 3, pp: 1, gf: 5, gc: 3, dg: 2 },
            { equipo: "Lastenia", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 3, gc: 4, dg: -1 },
            { equipo: "Cruz Alta", pts: 0, pj: 5, pg: 0, pe: 0, pp: 5, gf: 2, gc: 15, dg: -13 }
        ],

        D: [
            { equipo: "Bella Vista", pts: 10, pj: 5, pg: 3, pe: 1, pp: 1, gf: 11, gc: 4, dg: 7 },
            { equipo: "San Fernando", pts: 9, pj: 5, pg: 3, pe: 0, pp: 2, gf: 8, gc: 9, dg: -1 },
            { equipo: "Almirante Brown", pts: 8, pj: 5, pg: 2, pe: 2, pp: 1, gf: 13, gc: 6, dg: 7 },
            { equipo: "San Pablo", pts: 6, pj: 3, pg: 2, pe: 0, pp: 1, gf: 5, gc: 4, dg: 1 },
            { equipo: "Famaillá", pts: 6, pj: 4, pg: 2, pe: 0, pp: 2, gf: 4, gc: 5, dg: -1 },
            { equipo: "Ateneo Parroquial Alderetes", pts: 5, pj: 4, pg: 1, pe: 2, pp: 1, gf: 7, gc: 6, dg: 1 },
            { equipo: "Santa Lucía", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 2, gc: 7, dg: -5 }
        ],

        E: [
            { equipo: "Alto Verde", pts: 12, pj: 5, pg: 4, pe: 0, pp: 1, gf: 14, gc: 5, dg: 9 },
            { equipo: "Concepción FC", pts: 8, pj: 4, pg: 2, pe: 2, pp: 0, gf: 5, gc: 3, dg: 2 },
            { equipo: "Azucarera Argentina", pts: 7, pj: 5, pg: 2, pe: 1, pp: 2, gf: 4, gc: 10, dg: -6 },
            { equipo: "Ñuñorco", pts: 6, pj: 5, pg: 2, pe: 0, pp: 3, gf: 6, gc: 6, dg: 0 },
            { equipo: "Unión Simoca", pts: 6, pj: 5, pg: 1, pe: 3, pp: 1, gf: 5, gc: 5, dg: 0 },
            { equipo: "San Ramón", pts: 5, pj: 4, pg: 1, pe: 2, pp: 1, gf: 4, gc: 3, dg: 1 },
            { equipo: "Santa Rosa", pts: 4, pj: 5, pg: 1, pe: 1, pp: 3, gf: 4, gc: 5, dg: -1 },
            { equipo: "La Providencia", pts: 4, pj: 5, pg: 1, pe: 1, pp: 3, gf: 2, gc: 7, dg: -5 }
        ],

        F: [
            { equipo: "Deportivo Aguilares", pts: 16, pj: 6, pg: 5, pe: 1, pp: 0, gf: 10, gc: 4, dg: 6 },
            { equipo: "San Lorenzo (SA)", pts: 10, pj: 5, pg: 3, pe: 1, pp: 1, gf: 6, gc: 4, dg: 2 },
            { equipo: "Jorge Newbery", pts: 8, pj: 5, pg: 2, pe: 2, pp: 1, gf: 5, gc: 3, dg: 2 },
            { equipo: "Graneros", pts: 6, pj: 4, pg: 2, pe: 0, pp: 2, gf: 6, gc: 4, dg: 2 },
            { equipo: "Santa Ana", pts: 4, pj: 5, pg: 1, pe: 1, pp: 3, gf: 5, gc: 8, dg: -3 },
            { equipo: "Trinidad", pts: 4, pj: 4, pg: 1, pe: 1, pp: 2, gf: 2, gc: 3, dg: -1 },
            { equipo: "Marapa", pts: 4, pj: 5, pg: 1, pe: 1, pp: 3, gf: 5, gc: 12, dg: -7 },
            { equipo: "Llorens", pts: 3, pj: 5, pg: 1, pe: 0, pp: 4, gf: 6, gc: 12, dg: -6 }
        ]
    },

    // ==========================================
    // FIXTURE BASE
    // Primeras 7 fechas.
    // Fechas 8 a 14 se generan invirtiendo localía.
    // ==========================================

    fixtureBase: {

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
    },

    // ==========================================
    // INTERZONALES GRUPO A Y D
    // ==========================================

    interzonalesAD: [

        ["Santa Lucía", "Talleres"],
        ["Villa Mitre", "San Pablo"],
        ["Bella Vista", "San José"],
        ["Almirante Brown", "Juventud Unida"],
        ["San Fernando", "All Boys"],
        ["Ateneo Parroquial Alderetes", "Estación Experimental"],
        ["Central Norte", "Famaillá"],

        ["Talleres", "Santa Lucía"],
        ["San Pablo", "Villa Mitre"],
        ["San José", "Bella Vista"],
        ["Juventud Unida", "Almirante Brown"],
        ["All Boys", "San Fernando"],
        ["Estación Experimental", "Ateneo Parroquial Alderetes"],
        ["Famaillá", "Central Norte"]

    ],

    // ==========================================
    // INTERZONALES GRUPO B Y C
    // ==========================================

    interzonalesBC: [

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

    ],

    // ==========================================
    // RESULTADOS YA CARGADOS
    // ==========================================

    resultados: [

        // FECHA 1

        {
            fecha: 1,
            local: "Concepción FC",
            visitante: "Azucarera Argentina",
            golesLocal: 1,
            golesVisitante: 1
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
            local: "San Lorenzo (SA)",
            visitante: "Graneros",
            golesLocal: 1,
            golesVisitante: 2
        },


        // FECHA 2

        {
            fecha: 2,
            local: "San José",
            visitante: "All Boys",
            golesLocal: 1,
            golesVisitante: 0
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
            local: "Talleres",
            visitante: "Estación Experimental",
            golesLocal: 2,
            golesVisitante: 1
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
            local: "Sportivo Guzmán",
            visitante: "Argentinos del Norte",
            golesLocal: 0,
            golesVisitante: 1
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
            local: "San Antonio",
            visitante: "Amalia",
            golesLocal: 2,
            golesVisitante: 0
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
            local: "Lastenia",
            visitante: "San Lorenzo (DG)",
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
            local: "Famaillá",
            visitante: "Almirante Brown",
            golesLocal: 0,
            golesVisitante: 3
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
            local: "Alto Verde",
            visitante: "Azucarera Argentina",
            golesLocal: 6,
            golesVisitante: 0
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
            local: "Ñuñorco",
            visitante: "Concepción FC",
            golesLocal: 0,
            golesVisitante: 1
        },

        {
            fecha: 2,
            local: "Graneros",
            visitante: "Santa Ana",
            golesLocal: 3,
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
            golesLocal: 0,
            golesVisitante: 0
        },

        {
            fecha: 2,
            local: "Jorge Newbery",
            visitante: "San Lorenzo (SA)",
            golesLocal: 0,
            golesVisitante: 0
        },


        // FECHA 3

        {
            fecha: 3,
            local: "Juventud Unida",
            visitante: "Estación Experimental",
            golesLocal: 0,
            golesVisitante: 1
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
            local: "Amalia",
            visitante: "Argentinos del Norte",
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
            local: "San Martín",
            visitante: "San Antonio",
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
            local: "Garmendia",
            visitante: "Unión del Norte",
            golesLocal: 0,
            golesVisitante: 0
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
            local: "San Lorenzo (DG)",
            visitante: "Cruz Alta",
            golesLocal: 3,
            golesVisitante: 1
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
            local: "Azucarera Argentina",
            visitante: "San Ramón",
            golesLocal: 0,
            golesVisitante: 2
        },

        {
            fecha: 3,
            local: "Unión Simoca",
            visitante: "Ñuñorco",
            golesLocal: 1,
            golesVisitante: 0
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
            local: "Concepción FC",
            visitante: "Alto Verde",
            golesLocal: 2,
            golesVisitante: 1
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
            local: "Marapa",
            visitante: "Llorens",
            golesLocal: 3,
            golesVisitante: 2
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


        // FECHA 4

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
            local: "Almirante Brown",
            visitante: "Juventud Unida",
            golesLocal: 5,
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
            local: "San Antonio",
            visitante: "Tucumán Central",
            golesLocal: 1,
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
            local: "Cruz Alta",
            visitante: "Atlético Concepción",
            golesLocal: 1,
            golesVisitante: 4
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
            local: "Lastenia",
            visitante: "San Juan",
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
            local: "Santa Rosa",
            visitante: "Azucarera Argentina",
            golesLocal: 0,
            golesVisitante: 1
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
            local: "San Ramón",
            visitante: "Alto Verde",
            golesLocal: 1,
            golesVisitante: 2
        },

        {
            fecha: 4,
            local: "Trinidad",
            visitante: "Santa Ana",
            golesLocal: 1,
            golesVisitante: 0
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
            local: "Jorge Newbery",
            visitante: "Graneros",
            golesLocal: 2,
            golesVisitante: 1
        },

        {
            fecha: 4,
            local: "Llorens",
            visitante: "San Lorenzo (SA)",
            golesLocal: 1,
            golesVisitante: 2
        },


        // FECHA 5

        {
            fecha: 5,
            local: "Juventud Unida",
            visitante: "San José",
            golesLocal: 3,
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
            local: "Amalia",
            visitante: "Atlético Tucumán",
            golesLocal: 0,
            golesVisitante: 2
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
        },

        {
            fecha: 5,
            local: "Deportivo Aguilares",
            visitante: "Jorge Newbery",
            golesLocal: 1,
            golesVisitante: 0
        }

    ]
};


// ==========================================
// GENERAR FIXTURE COMPLETO
// ==========================================

function generarFixtureCompleto() {

    const partidos = [];

    const resultadoClave = {};


    datosLiga.resultados.forEach(resultado => {

        const clave =
            resultado.fecha + "|" +
            resultado.local + "|" +
            resultado.visitante;

        resultadoClave[clave] = resultado;

    });


    function agregarPartido(
        fecha,
        local,
        visitante,
        interzonal = false,
        zonas = []
    ) {

        const clave =
            fecha + "|" +
            local + "|" +
            visitante;

        const resultado =
            resultadoClave[clave];


        const partido = {

            fecha: fecha,

            zona: interzonal
                ? "INTERZONAL"
                : zonas[0],

            local: local,

            visitante: visitante,

            estado: resultado
                ? "finalizado"
                : "programado",

            interzonal: interzonal

        };


        if(interzonal){

            partido.zonas = zonas;

        }


        if(resultado){

            partido.golesLocal =
                resultado.golesLocal;

            partido.golesVisitante =
                resultado.golesVisitante;

        }


        partidos.push(partido);

    }


    // ==========================================
    // ZONAS A-F
    // ==========================================

    Object.keys(datosLiga.fixtureBase)
        .forEach(zona => {

            const rondas =
                datosLiga.fixtureBase[zona];


            // FECHAS 1 A 7
            rondas.forEach(
                (partidosFecha, indice) => {

                    const fecha =
                        indice + 1;


                    partidosFecha.forEach(
                        partido => {

                            agregarPartido(
                                fecha,
                                partido[0],
                                partido[1],
                                false,
                                [zona]
                            );

                        }
                    );

                }
            );


            // FECHAS 8 A 14
            rondas.forEach(
                (partidosFecha, indice) => {

                    const fecha =
                        indice + 8;


                    partidosFecha.forEach(
                        partido => {

                            agregarPartido(
                                fecha,
                                partido[1],
                                partido[0],
                                false,
                                [zona]
                            );

                        }
                    );

                }
            );

        });


    // ==========================================
    // INTERZONALES A-D
    // ==========================================

    datosLiga.interzonalesAD.forEach(
        (partido, indice) => {

            agregarPartido(
                indice + 1,
                partido[0],
                partido[1],
                true,
                ["A", "D"]
            );

        }
    );


    // ==========================================
    // INTERZONALES B-C
    // ==========================================

    datosLiga.interzonalesBC.forEach(
        (partido, indice) => {

            agregarPartido(
                indice + 1,
                partido[0],
                partido[1],
                true,
                ["B", "C"]
            );

        }
    );


    // Ordenar por fecha
    partidos.sort(
        (a, b) =>
            a.fecha - b.fecha
    );


    return partidos;

}


datosLiga.partidos =
    generarFixtureCompleto();


// ==========================================
// FUNCIONES AUXILIARES
// ==========================================

function obtenerTodosLosEquipos() {

    const equipos = [];


    Object.keys(datosLiga.zonas)
        .forEach(zona => {

            datosLiga.zonas[zona]
                .forEach(equipo => {

                    equipos.push({

                        nombre: equipo.equipo,

                        zona: zona,

                        pts: equipo.pts,

                        pj: equipo.pj,

                        pg: equipo.pg,

                        pe: equipo.pe,

                        pp: equipo.pp,

                        gf: equipo.gf,

                        gc: equipo.gc,

                        dg: equipo.dg

                    });

                });

        });


    return equipos;

}


// ==========================================
// BUSCAR EQUIPO
// ==========================================

function buscarEquipo(nombre) {

    const equipos =
        obtenerTodosLosEquipos();


    return equipos.find(
        equipo =>
            equipo.nombre.toLowerCase() ===
            nombre.toLowerCase()
    );

}


// ==========================================
// OBTENER TABLA
// ==========================================

function obtenerTabla(zona) {

    return datosLiga.zonas[zona] || [];

}


// ==========================================
// OBTENER PARTIDOS DE UNA ZONA
// ==========================================

function obtenerPartidosZona(zona) {

    return datosLiga.partidos.filter(
        partido =>
            partido.zona === zona ||
            (
                partido.interzonal &&
                partido.zonas &&
                partido.zonas.includes(zona)
            )
    );

}


// ==========================================
// OBTENER INTERZONALES
// ==========================================

function obtenerPartidosInterzonales() {

    return datosLiga.partidos.filter(
        partido =>
            partido.interzonal === true
    );

}


// ==========================================
// OBTENER PARTIDOS DE UNA FECHA
// ==========================================

function obtenerPartidosFecha(fecha) {

    return datosLiga.partidos.filter(
        partido =>
            Number(partido.fecha) ===
            Number(fecha)
    );

}


// ==========================================
// OBTENER PARTIDOS DE FECHA + ZONA
// ==========================================

function obtenerPartidosFechaZona(
    fecha,
    zona
) {

    return datosLiga.partidos.filter(
        partido => {

            const coincideFecha =
                Number(partido.fecha) ===
                Number(fecha);


            const coincideZona =
                partido.zona === zona ||
                (
                    partido.interzonal &&
                    partido.zonas &&
                    partido.zonas.includes(zona)
                );


            return (
                coincideFecha &&
                coincideZona
            );

        }
    );

}


// ==========================================
// OBTENER RESULTADOS
// ==========================================

function obtenerResultados() {

    return datosLiga.partidos.filter(
        partido =>
            partido.estado ===
            "finalizado"
    );

}


// ==========================================
// OBTENER PRÓXIMOS PARTIDOS
// ==========================================

function obtenerProximosPartidos() {

    return datosLiga.partidos.filter(
        partido =>
            partido.estado ===
            "programado"
    );

}


// ==========================================
// OBTENER PARTIDOS DE UN EQUIPO
// ==========================================

function obtenerPartidosEquipo(
    nombreEquipo
) {

    return datosLiga.partidos.filter(
        partido => {

            return (

                partido.local.toLowerCase() ===
                nombreEquipo.toLowerCase()

                ||

                partido.visitante.toLowerCase() ===
                nombreEquipo.toLowerCase()

            );

        }
    );

}

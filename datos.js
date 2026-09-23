// ==========================================
// LIGA TUCSON
// Primera División A - Clausura 2026
// DATOS CENTRALIZADOS Y AUTOMÁTICOS
// ==========================================
//
// Acá se cargan los resultados.
// Las tablas, posiciones y Play-Off
// se calculan automáticamente.
// ==========================================

const datosLiga = {

    torneo: "Primera División A - Clausura 2026",

    fechaActual: 0,

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


    // ==========================================
    // FIXTURE OFICIAL
    // FECHAS 1 A 7
    // FECHAS 8 A 14 SE GENERAN AUTOMÁTICAMENTE
    // ==========================================

    fixtureBase: {

        A: [

            [
                ["Villa Mitre","San José"],
                ["All Boys","Juventud Unida"],
                ["Estación Experimental","Central Norte"]
            ],

            [
                ["San José","All Boys"],
                ["Talleres","Estación Experimental"],
                ["Central Norte","Juventud Unida"]
            ],

            [
                ["All Boys","Central Norte"],
                ["Talleres","Villa Mitre"],
                ["Juventud Unida","Estación Experimental"]
            ],

            [
                ["Central Norte","Villa Mitre"],
                ["San José","Talleres"],
                ["Estación Experimental","All Boys"]
            ],

            [
                ["Villa Mitre","Estación Experimental"],
                ["Juventud Unida","San José"],
                ["Talleres","Central Norte"]
            ],

            [
                ["All Boys","Villa Mitre"],
                ["San José","Central Norte"],
                ["Juventud Unida","Talleres"]
            ],

            [
                ["Estación Experimental","All Boys"],
                ["Villa Mitre","Juventud Unida"],
                ["San José","Talleres"]
            ]

        ],


        B: [

            [
                ["Tucumán Central","Atlético Tucumán"],
                ["San Martín","Amalia"],
                ["Argentinos del Norte","San Antonio"]
            ],

            [
                ["Atlético Tucumán","San Martín"],
                ["Sportivo Guzmán","Argentinos del Norte"],
                ["San Antonio","Amalia"]
            ],

            [
                ["San Martín","San Antonio"],
                ["Sportivo Guzmán","Tucumán Central"],
                ["Amalia","Argentinos del Norte"]
            ],

            [
                ["San Antonio","Tucumán Central"],
                ["Atlético Tucumán","Sportivo Guzmán"],
                ["Argentinos del Norte","San Martín"]
            ],

            [
                ["Tucumán Central","Argentinos del Norte"],
                ["Amalia","Atlético Tucumán"],
                ["Sportivo Guzmán","San Antonio"]
            ],

            [
                ["San Martín","Tucumán Central"],
                ["Atlético Tucumán","San Antonio"],
                ["Amalia","Sportivo Guzmán"]
            ],

            [
                ["Argentinos del Norte","San Martín"],
                ["Tucumán Central","Amalia"],
                ["Atlético Tucumán","Sportivo Guzmán"]
            ]

        ],


        C: [

            [
                ["Atlético Concepción","Lastenia"],
                ["San Lorenzo (DG)","Garmendia"],
                ["Unión del Norte","Cruz Alta"]
            ],

            [
                ["Lastenia","San Lorenzo (DG)"],
                ["San Juan","Unión del Norte"],
                ["Cruz Alta","Garmendia"]
            ],

            [
                ["San Lorenzo (DG)","Cruz Alta"],
                ["San Juan","Atlético Concepción"],
                ["Garmendia","Unión del Norte"]
            ],

            [
                ["Cruz Alta","Atlético Concepción"],
                ["Lastenia","San Juan"],
                ["Unión del Norte","San Lorenzo (DG)"]
            ],

            [
                ["Atlético Concepción","Unión del Norte"],
                ["Garmendia","Lastenia"],
                ["San Juan","Cruz Alta"]
            ],

            [
                ["San Lorenzo (DG)","Atlético Concepción"],
                ["Lastenia","Cruz Alta"],
                ["Garmendia","San Juan"]
            ],

            [
                ["Unión del Norte","San Lorenzo (DG)"],
                ["Atlético Concepción","Garmendia"],
                ["Lastenia","San Juan"]
            ]

        ],


        D: [

            [
                ["San Pablo","Bella Vista"],
                ["San Fernando","Almirante Brown"],
                ["Ateneo Parroquial Alderetes","Famaillá"]
            ],

            [
                ["Bella Vista","San Fernando"],
                ["Santa Lucía","Ateneo Parroquial Alderetes"],
                ["Famaillá","Almirante Brown"]
            ],

            [
                ["San Fernando","Famaillá"],
                ["Santa Lucía","San Pablo"],
                ["Almirante Brown","Ateneo Parroquial Alderetes"]
            ],

            [
                ["Famaillá","San Pablo"],
                ["Bella Vista","Santa Lucía"],
                ["Ateneo Parroquial Alderetes","San Fernando"]
            ],

            [
                ["San Pablo","Ateneo Parroquial Alderetes"],
                ["Almirante Brown","Bella Vista"],
                ["Santa Lucía","Famaillá"]
            ],

            [
                ["San Fernando","San Pablo"],
                ["Bella Vista","Famaillá"],
                ["Almirante Brown","Santa Lucía"]
            ],

            [
                ["Ateneo Parroquial Alderetes","San Fernando"],
                ["San Pablo","Almirante Brown"],
                ["Bella Vista","Santa Lucía"]
            ]

        ],


        E: [

            [
                ["Concepción FC","Azucarera Argentina"],
                ["La Providencia","Alto Verde"],
                ["Unión Simoca","San Ramón"],
                ["Santa Rosa","Ñuñorco"]
            ],

            [
                ["Ñuñorco","Concepción FC"],
                ["Santa Rosa","Unión Simoca"],
                ["San Ramón","La Providencia"],
                ["Alto Verde","Azucarera Argentina"]
            ],

            [
                ["Concepción FC","Alto Verde"],
                ["Azucarera Argentina","San Ramón"],
                ["La Providencia","Santa Rosa"],
                ["Unión Simoca","Ñuñorco"]
            ],

            [
                ["Unión Simoca","Concepción FC"],
                ["Ñuñorco","La Providencia"],
                ["Santa Rosa","Azucarera Argentina"],
                ["San Ramón","Alto Verde"]
            ],

            [
                ["Concepción FC","San Ramón"],
                ["Alto Verde","Santa Rosa"],
                ["Azucarera Argentina","Ñuñorco"],
                ["La Providencia","Unión Simoca"]
            ],

            [
                ["La Providencia","Concepción FC"],
                ["Unión Simoca","Azucarera Argentina"],
                ["Ñuñorco","Alto Verde"],
                ["Santa Rosa","San Ramón"]
            ],

            [
                ["Concepción FC","Santa Rosa"],
                ["San Ramón","Ñuñorco"],
                ["Alto Verde","Unión Simoca"],
                ["Azucarera Argentina","La Providencia"]
            ]

        ],


        F: [

            [
                ["Deportivo Aguilares","Santa Ana"],
                ["San Lorenzo (SA)","Graneros"],
                ["Marapa","Jorge Newbery"],
                ["Llorens","Trinidad"]
            ],

            [
                ["Llorens","Deportivo Aguilares"],
                ["Trinidad","Marapa"],
                ["Jorge Newbery","San Lorenzo (SA)"],
                ["Graneros","Santa Ana"]
            ],

            [
                ["Deportivo Aguilares","Graneros"],
                ["Santa Ana","Jorge Newbery"],
                ["San Lorenzo (SA)","Trinidad"],
                ["Marapa","Llorens"]
            ],

            [
                ["Marapa","Deportivo Aguilares"],
                ["Llorens","San Lorenzo (SA)"],
                ["Trinidad","Santa Ana"],
                ["Jorge Newbery","Graneros"]
            ],

            [
                ["Deportivo Aguilares","Jorge Newbery"],
                ["Graneros","Trinidad"],
                ["Santa Ana","Llorens"],
                ["San Lorenzo (SA)","Marapa"]
            ],

            [
                ["San Lorenzo (SA)","Deportivo Aguilares"],
                ["Marapa","Santa Ana"],
                ["Llorens","Graneros"],
                ["Trinidad","Jorge Newbery"]
            ],

            [
                ["Deportivo Aguilares","Trinidad"],
                ["Jorge Newbery","Llorens"],
                ["Graneros","Marapa"],
                ["Santa Ana","San Lorenzo (SA)"]
            ]

        ]

    },


    // ==========================================
    // INTERZONALES A-D
    // ==========================================

    interzonalesAD: [

        ["Santa Lucía","Talleres"],
        ["Villa Mitre","San Pablo"],
        ["Bella Vista","San José"],
        ["Almirante Brown","Juventud Unida"],
        ["San Fernando","All Boys"],
        ["Ateneo Parroquial Alderetes","Estación Experimental"],
        ["Central Norte","Famaillá"],
        ["Talleres","Santa Lucía"],
        ["San Pablo","Villa Mitre"],
        ["San José","Bella Vista"],
        ["Juventud Unida","Almirante Brown"],
        ["All Boys","San Fernando"],
        ["Estación Experimental","Ateneo Parroquial Alderetes"],
        ["Famaillá","Central Norte"]

    ],


    // ==========================================
    // INTERZONALES B-C
    // ==========================================

    interzonalesBC: [

        ["San Juan","Sportivo Guzmán"],
        ["Tucumán Central","Atlético Concepción"],
        ["Lastenia","Atlético Tucumán"],
        ["Garmendia","Amalia"],
        ["San Lorenzo (DG)","San Martín"],
        ["Unión del Norte","Argentinos del Norte"],
        ["San Antonio","Cruz Alta"],
        ["Sportivo Guzmán","San Juan"],
        ["Atlético Concepción","Tucumán Central"],
        ["Atlético Tucumán","Lastenia"],
        ["Amalia","Garmendia"],
        ["San Martín","San Lorenzo (DG)"],
        ["Argentinos del Norte","Unión del Norte"],
        ["Cruz Alta","San Antonio"]

    ],


    // ==========================================
    // RESULTADOS
    // ==========================================
    //
    // IMPORTANTE:
    // Cuando tengamos nuevos resultados,
    // solamente agregamos otro objeto acá.
    //
    // NO se modifican las tablas manualmente.
    //
    // ==========================================

    resultados: [

        // FECHA 1

        {
            fecha:1,
            local:"Concepción FC",
            visitante:"Azucarera Argentina",
            golesLocal:1,
            golesVisitante:1
        },

        {
            fecha:1,
            local:"Atlético Concepción",
            visitante:"Lastenia",
            golesLocal:2,
            golesVisitante:1
        },

        {
            fecha:1,
            local:"San Lorenzo (SA)",
            visitante:"Graneros",
            golesLocal:1,
            golesVisitante:2
        },


        // FECHA 2

        {
            fecha:2,
            local:"San José",
            visitante:"All Boys",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:2,
            local:"Central Norte",
            visitante:"Juventud Unida",
            golesLocal:0,
            golesVisitante:0
        },

        {
            fecha:2,
            local:"Talleres",
            visitante:"Estación Experimental",
            golesLocal:2,
            golesVisitante:1
        },

        {
            fecha:2,
            local:"Villa Mitre",
            visitante:"San Pablo",
            golesLocal:2,
            golesVisitante:3
        },

        {
            fecha:2,
            local:"Sportivo Guzmán",
            visitante:"Argentinos del Norte",
            golesLocal:0,
            golesVisitante:1
        },

        {
            fecha:2,
            local:"Atlético Tucumán",
            visitante:"San Martín",
            golesLocal:1,
            golesVisitante:1
        },

        {
            fecha:2,
            local:"San Antonio",
            visitante:"Amalia",
            golesLocal:2,
            golesVisitante:0
        },

        {
            fecha:2,
            local:"Tucumán Central",
            visitante:"Atlético Concepción",
            golesLocal:1,
            golesVisitante:1
        },

        {
            fecha:2,
            local:"San Juan",
            visitante:"Unión del Norte",
            golesLocal:1,
            golesVisitante:1
        },

        {
            fecha:2,
            local:"Cruz Alta",
            visitante:"Garmendia",
            golesLocal:0,
            golesVisitante:1
        },

        {
            fecha:2,
            local:"Lastenia",
            visitante:"San Lorenzo (DG)",
            golesLocal:0,
            golesVisitante:1
        },

        {
            fecha:2,
            local:"Bella Vista",
            visitante:"San Fernando",
            golesLocal:3,
            golesVisitante:1
        },

        {
            fecha:2,
            local:"Famaillá",
            visitante:"Almirante Brown",
            golesLocal:0,
            golesVisitante:3
        },

        {
            fecha:2,
            local:"Santa Lucía",
            visitante:"Ateneo Parroquial Alderetes",
            golesLocal:1,
            golesVisitante:1
        },

        {
            fecha:2,
            local:"Alto Verde",
            visitante:"Azucarera Argentina",
            golesLocal:6,
            golesVisitante:0
        },

        {
            fecha:2,
            local:"Santa Rosa",
            visitante:"Unión Simoca",
            golesLocal:1,
            golesVisitante:1
        },

        {
            fecha:2,
            local:"San Ramón",
            visitante:"La Providencia",
            golesLocal:0,
            golesVisitante:0
        },

        {
            fecha:2,
            local:"Ñuñorco",
            visitante:"Concepción FC",
            golesLocal:0,
            golesVisitante:1
        },

        {
            fecha:2,
            local:"Graneros",
            visitante:"Santa Ana",
            golesLocal:3,
            golesVisitante:0
        },

        {
            fecha:2,
            local:"Llorens",
            visitante:"Deportivo Aguilares",
            golesLocal:2,
            golesVisitante:3
        },

        {
            fecha:2,
            local:"Trinidad",
            visitante:"Marapa",
            golesLocal:0,
            golesVisitante:0
        },

        {
            fecha:2,
            local:"Jorge Newbery",
            visitante:"San Lorenzo (SA)",
            golesLocal:0,
            golesVisitante:0
        },


        // FECHA 3

        {
            fecha:3,
            local:"Juventud Unida",
            visitante:"Estación Experimental",
            golesLocal:0,
            golesVisitante:1
        },

        {
            fecha:3,
            local:"Talleres",
            visitante:"Villa Mitre",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:3,
            local:"Amalia",
            visitante:"Argentinos del Norte",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:3,
            local:"Sportivo Guzmán",
            visitante:"Tucumán Central",
            golesLocal:1,
            golesVisitante:1
        },

        {
            fecha:3,
            local:"San Martín",
            visitante:"San Antonio",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:3,
            local:"Lastenia",
            visitante:"Atlético Tucumán",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:3,
            local:"Garmendia",
            visitante:"Unión del Norte",
            golesLocal:0,
            golesVisitante:0
        },

        {
            fecha:3,
            local:"San Juan",
            visitante:"Atlético Concepción",
            golesLocal:3,
            golesVisitante:1
        },

        {
            fecha:3,
            local:"San Lorenzo (DG)",
            visitante:"Cruz Alta",
            golesLocal:3,
            golesVisitante:1
        },

        {
            fecha:3,
            local:"Bella Vista",
            visitante:"San José",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:3,
            local:"San Fernando",
            visitante:"Famaillá",
            golesLocal:2,
            golesVisitante:1
        },

        {
            fecha:3,
            local:"Santa Lucía",
            visitante:"San Pablo",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:3,
            local:"Almirante Brown",
            visitante:"Ateneo Parroquial Alderetes",
            golesLocal:3,
            golesVisitante:3
        },

        {
            fecha:3,
            local:"Azucarera Argentina",
            visitante:"San Ramón",
            golesLocal:0,
            golesVisitante:2
        },

        {
            fecha:3,
            local:"Unión Simoca",
            visitante:"Ñuñorco",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:3,
            local:"La Providencia",
            visitante:"Santa Rosa",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:3,
            local:"Concepción FC",
            visitante:"Alto Verde",
            golesLocal:2,
            golesVisitante:1
        },

        {
            fecha:3,
            local:"Deportivo Aguilares",
            visitante:"Graneros",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:3,
            local:"Marapa",
            visitante:"Llorens",
            golesLocal:3,
            golesVisitante:2
        },

        {
            fecha:3,
            local:"Santa Ana",
            visitante:"Jorge Newbery",
            golesLocal:0,
            golesVisitante:0
        },

        {
            fecha:3,
            local:"San Lorenzo (SA)",
            visitante:"Trinidad",
            golesLocal:2,
            golesVisitante:1
        },


        // FECHA 4

        {
            fecha:4,
            local:"Central Norte",
            visitante:"Villa Mitre",
            golesLocal:2,
            golesVisitante:1
        },

        {
            fecha:4,
            local:"San José",
            visitante:"Talleres",
            golesLocal:0,
            golesVisitante:1
        },

        {
            fecha:4,
            local:"Almirante Brown",
            visitante:"Juventud Unida",
            golesLocal:5,
            golesVisitante:0
        },

        {
            fecha:4,
            local:"Atlético Tucumán",
            visitante:"Sportivo Guzmán",
            golesLocal:0,
            golesVisitante:1
        },

        {
            fecha:4,
            local:"Argentinos del Norte",
            visitante:"San Martín",
            golesLocal:3,
            golesVisitante:1
        },

        {
            fecha:4,
            local:"San Antonio",
            visitante:"Tucumán Central",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:4,
            local:"Garmendia",
            visitante:"Amalia",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:4,
            local:"Cruz Alta",
            visitante:"Atlético Concepción",
            golesLocal:1,
            golesVisitante:4
        },

        {
            fecha:4,
            local:"Unión del Norte",
            visitante:"San Lorenzo (DG)",
            golesLocal:1,
            golesVisitante:1
        },

        {
            fecha:4,
            local:"Lastenia",
            visitante:"San Juan",
            golesLocal:1,
            golesVisitante:1
        },

        {
            fecha:4,
            local:"Bella Vista",
            visitante:"Santa Lucía",
            golesLocal:5,
            golesVisitante:0
        },

        {
            fecha:4,
            local:"Ateneo Parroquial Alderetes",
            visitante:"San Fernando",
            golesLocal:3,
            golesVisitante:0
        },

        {
            fecha:4,
            local:"Santa Rosa",
            visitante:"Azucarera Argentina",
            golesLocal:0,
            golesVisitante:1
        },

        {
            fecha:4,
            local:"Unión Simoca",
            visitante:"Concepción FC",
            golesLocal:1,
            golesVisitante:1
        },

        {
            fecha:4,
            local:"Ñuñorco",
            visitante:"La Providencia",
            golesLocal:3,
            golesVisitante:0
        },

        {
            fecha:4,
            local:"San Ramón",
            visitante:"Alto Verde",
            golesLocal:1,
            golesVisitante:2
        },

        {
            fecha:4,
            local:"Trinidad",
            visitante:"Santa Ana",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:4,
            local:"Marapa",
            visitante:"Deportivo Aguilares",
            golesLocal:1,
            golesVisitante:6
        },

        {
            fecha:4,
            local:"Jorge Newbery",
            visitante:"Graneros",
            golesLocal:2,
            golesVisitante:1
        },

        {
            fecha:4,
            local:"Llorens",
            visitante:"San Lorenzo (SA)",
            golesLocal:1,
            golesVisitante:2
        },


        // FECHA 5

        {
            fecha:5,
            local:"Juventud Unida",
            visitante:"San José",
            golesLocal:3,
            golesVisitante:1
        },

        {
            fecha:5,
            local:"San Fernando",
            visitante:"All Boys",
            golesLocal:3,
            golesVisitante:1
        },

        {
            fecha:5,
            local:"Amalia",
            visitante:"Atlético Tucumán",
            golesLocal:0,
            golesVisitante:2
        },

        {
            fecha:5,
            local:"San Lorenzo (DG)",
            visitante:"San Martín",
            golesLocal:1,
            golesVisitante:2
        },

        {
            fecha:5,
            local:"Almirante Brown",
            visitante:"Bella Vista",
            golesLocal:1,
            golesVisitante:1
        },

        {
            fecha:5,
            local:"Santa Lucía",
            visitante:"Famaillá",
            golesLocal:0,
            golesVisitante:1
        },

        {
            fecha:5,
            local:"Alto Verde",
            visitante:"Santa Rosa",
            golesLocal:2,
            golesVisitante:1
        },

        {
            fecha:5,
            local:"Azucarera Argentina",
            visitante:"Ñuñorco",
            golesLocal:2,
            golesVisitante:1
        },

        {
            fecha:5,
            local:"La Providencia",
            visitante:"Unión Simoca",
            golesLocal:0,
            golesVisitante:1
        },

        {
            fecha:5,
            local:"Santa Ana",
            visitante:"Llorens",
            golesLocal:4,
            golesVisitante:0
        },

        {
            fecha:5,
            local:"San Lorenzo (SA)",
            visitante:"Marapa",
            golesLocal:1,
            golesVisitante:0
        },

        {
            fecha:5,
            local:"Deportivo Aguilares",
            visitante:"Jorge Newbery",
            golesLocal:1,
            golesVisitante:0
        }

    ]

};


// ==========================================
// GENERAR FIXTURE COMPLETO
// ==========================================

function generarFixtureCompleto(){

    const partidos = [];

    const resultadoClave = {};

    datosLiga.resultados.forEach(resultado => {

        const clave =
            resultado.fecha +
            "|" +
            resultado.local +
            "|" +
            resultado.visitante;

        resultadoClave[clave] = resultado;

    });


    function agregarPartido(
        fecha,
        local,
        visitante,
        interzonal = false,
        zonas = []
    ){

        const clave =
            fecha +
            "|" +
            local +
            "|" +
            visitante;

        const resultado =
            resultadoClave[clave];


        const partido = {

            id:
                `F${fecha}-${partidos.length + 1}`,

            fecha,

            zona:
                interzonal
                    ? "INTERZONAL"
                    : zonas[0],

            zonas,

            local,

            visitante,

            estado:
                resultado
                    ? "finalizado"
                    : "programado",

            interzonal

        };


        if(resultado){

            partido.golesLocal =
                resultado.golesLocal;

            partido.golesVisitante =
                resultado.golesVisitante;

        }


        partidos.push(partido);

    }


    // ZONAS

    Object.keys(
        datosLiga.fixtureBase
    ).forEach(zona => {

        const rondas =
            datosLiga.fixtureBase[zona];


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


        // Fechas 8 a 14

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


    // INTERZONALES A-D

    datosLiga.interzonalesAD.forEach(
        (partido, indice) => {

            agregarPartido(
                indice + 1,
                partido[0],
                partido[1],
                true,
                ["A","D"]
            );

        }
    );


    // INTERZONALES B-C

    datosLiga.interzonalesBC.forEach(
        (partido, indice) => {

            agregarPartido(
                indice + 1,
                partido[0],
                partido[1],
                true,
                ["B","C"]
            );

        }
    );


    partidos.sort(
        (a,b) =>
            a.fecha - b.fecha
    );


    return partidos;

}


// ==========================================
// CALCULAR TABLAS AUTOMÁTICAMENTE
// ==========================================

function actualizarTablasAutomaticamente(){

    Object.keys(
        datosLiga.zonas
    ).forEach(zona => {

        datosLiga.zonas[zona]
            .forEach(equipo => {

                equipo.pts = 0;
                equipo.pj = 0;
                equipo.pg = 0;
                equipo.pe = 0;
                equipo.pp = 0;
                equipo.gf = 0;
                equipo.gc = 0;
                equipo.dg = 0;

            });

    });


    const buscar = {};

    Object.keys(
        datosLiga.zonas
    ).forEach(zona => {

        datosLiga.zonas[zona]
            .forEach(equipo => {

                buscar[equipo.equipo] =
                    equipo;

            });

    });


    datosLiga.partidos
        .filter(
            partido =>
                partido.estado ===
                "finalizado"
        )
        .forEach(partido => {

            const local =
                buscar[partido.local];

            const visitante =
                buscar[partido.visitante];


            if(!local || !visitante){

                return;

            }


            const gl =
                Number(partido.golesLocal);

            const gv =
                Number(partido.golesVisitante);


            local.pj++;
            visitante.pj++;


            local.gf += gl;
            local.gc += gv;

            visitante.gf += gv;
            visitante.gc += gl;


            if(gl > gv){

                local.pg++;
                visitante.pp++;

                local.pts += 3;

            }

            else if(gl < gv){

                visitante.pg++;
                local.pp++;

                visitante.pts += 3;

            }

            else{

                local.pe++;
                visitante.pe++;

                local.pts++;
                visitante.pts++;

            }

        });


    Object.keys(
        datosLiga.zonas
    ).forEach(zona => {

        datosLiga.zonas[zona]
            .forEach(equipo => {

                equipo.dg =
                    equipo.gf -
                    equipo.gc;

            });

    });

}


// ==========================================
// FECHA ACTUAL
// ==========================================

function calcularFechaActual(){

    const resultados =
        datosLiga.resultados;


    if(
        !resultados ||
        resultados.length === 0
    ){

        return 0;

    }


    return Math.max(
        ...resultados.map(
            resultado =>
                Number(resultado.fecha)
        )
    );

}


// ==========================================
// FUNCIONES AUXILIARES
// ==========================================

function obtenerTodosLosEquipos(){

    const equipos = [];


    Object.keys(
        datosLiga.zonas
    ).forEach(zona => {

        datosLiga.zonas[zona]
            .forEach(equipo => {

                equipos.push({

                    nombre:
                        equipo.equipo,

                    zona,

                    pts:
                        equipo.pts,

                    pj:
                        equipo.pj,

                    pg:
                        equipo.pg,

                    pe:
                        equipo.pe,

                    pp:
                        equipo.pp,

                    gf:
                        equipo.gf,

                    gc:
                        equipo.gc,

                    dg:
                        equipo.dg

                });

            });

    });


    return equipos;

}


function buscarEquipo(nombre){

    return obtenerTodosLosEquipos()
        .find(
            equipo =>
                equipo.nombre
                    .toLowerCase() ===
                nombre.toLowerCase()
        );

}


function obtenerTabla(zona){

    return datosLiga.zonas[zona] || [];

}


function obtenerPartidosZona(zona){

    return datosLiga.partidos.filter(
        partido =>

            partido.zona === zona ||

            (
                partido.interzonal &&
                partido.zonas.includes(zona)
            )
    );

}


function obtenerPartidosInterzonales(){

    return datosLiga.partidos.filter(
        partido =>
            partido.interzonal === true
    );

}


function obtenerPartidosFecha(fecha){

    return datosLiga.partidos.filter(
        partido =>
            Number(partido.fecha) ===
            Number(fecha)
    );

}


function obtenerPartidosFechaZona(
    fecha,
    zona
){

    return datosLiga.partidos.filter(
        partido => {

            const coincideFecha =
                Number(partido.fecha) ===
                Number(fecha);


            const coincideZona =
                partido.zona === zona ||

                (
                    partido.interzonal &&
                    partido.zonas.includes(zona)
                );


            return (
                coincideFecha &&
                coincideZona
            );

        }
    );

}


function obtenerResultados(){

    return datosLiga.partidos.filter(
        partido =>
            partido.estado ===
            "finalizado"
    );

}


function obtenerProximosPartidos(){

    return datosLiga.partidos.filter(
        partido =>
            partido.estado ===
            "programado"
    );

}


function obtenerPartidosEquipo(
    nombreEquipo
){

    return datosLiga.partidos.filter(
        partido =>

            partido.local.toLowerCase() ===
                nombreEquipo.toLowerCase()

            ||

            partido.visitante.toLowerCase() ===
                nombreEquipo.toLowerCase()

    );

}


// ==========================================
// PLAY-OFF
// ==========================================

const resultadosPlayoff = {

    primeraRonda: {},

    segundaRonda: {},

    cuartos: {},

    semifinales: {},

    final: {}

};


// ==========================================
// CRITERIO DE CLASIFICACIÓN
// ==========================================

function compararClasificacion(a,b){

    // 1. Puntos

    if(b.pts !== a.pts){

        return b.pts - a.pts;

    }


    // 2. Diferencia de goles

    if(b.dg !== a.dg){

        return b.dg - a.dg;

    }


    // 3. Goles a favor

    if(b.gf !== a.gf){

        return b.gf - a.gf;

    }


    // 4. Menos goles en contra

    if(a.gc !== b.gc){

        return a.gc - b.gc;

    }


    // Desempate provisional
    // hasta contar con información
    // específica de enfrentamientos directos.

    return a.nombre.localeCompare(
        b.nombre,
        "es"
    );

}


// ==========================================
// TABLA ORDENADA DE UNA ZONA
// ==========================================

function obtenerTablaZonaOrdenada(zona){

    return datosLiga.zonas[zona]

        .map(
            equipo => ({

                nombre:
                    equipo.equipo,

                zona,

                pts:
                    Number(equipo.pts) || 0,

                pj:
                    Number(equipo.pj) || 0,

                pg:
                    Number(equipo.pg) || 0,

                pe:
                    Number(equipo.pe) || 0,

                pp:
                    Number(equipo.pp) || 0,

                gf:
                    Number(equipo.gf) || 0,

                gc:
                    Number(equipo.gc) || 0,

                dg:
                    Number(equipo.dg) || 0

            })
        )

        .sort(compararClasificacion);

}


// ==========================================
// CLASIFICACIÓN PARA PLAY-OFF
// ==========================================

function generarClasificacionPlayoff(){

    const primeros = [];

    const puestos2a4 = [];

    const quintos = [];


    Object.keys(
        datosLiga.zonas
    ).forEach(zona => {

        const tabla =
            obtenerTablaZonaOrdenada(zona);


        tabla.forEach(
            (equipo,indice) => {

                const item = {

                    ...equipo,

                    puestoZona:
                        indice + 1

                };


                // Primeros

                if(indice === 0){

                    primeros.push(item);

                }


                // 2.º, 3.º y 4.º

                if(
                    indice >= 1 &&
                    indice <= 3
                ){

                    puestos2a4.push(item);

                }


                // Quintos

                if(indice === 4){

                    quintos.push(item);

                }

            }
        );

    });


    // Orden de los primeros

    primeros.sort(
        compararClasificacion
    );


    // Orden de 2.º a 4.º

    puestos2a4.sort(
        compararClasificacion
    );


    // Orden de quintos

    quintos.sort(
        compararClasificacion
    );


    // Los 2 mejores quintos

    const mejoresQuintos =
        quintos.slice(0,2);


    // Los 20 de primera ronda

    const clasificadosPrimeraRonda = [

        ...puestos2a4,

        ...mejoresQuintos

    ].sort(
        compararClasificacion
    );


    // Ranking 1 a 26

    const ranking = [

        ...primeros,

        ...clasificadosPrimeraRonda

    ].map(
        (equipo,indice) => ({

            ...equipo,

            puestoGeneral:
                indice + 1

        })
    );


    return {

        ranking,

        primeros,

        primeraRonda:
            clasificadosPrimeraRonda,

        mejoresQuintos

    };

}


// ==========================================
// PRIMERA RONDA
// ==========================================
//
// 7.º vs 26.º
// 8.º vs 25.º
// 9.º vs 24.º
// 10.º vs 23.º
// 11.º vs 22.º
// 12.º vs 21.º
// 13.º vs 20.º
// 14.º vs 19.º
// 15.º vs 18.º
// 16.º vs 17.º
// ==========================================

function crearLlavesPrimeraRonda(
    ranking
){

    const clasificados =
        ranking.filter(
            equipo =>

                equipo.puestoGeneral >= 7 &&

                equipo.puestoGeneral <= 26

        );


    const llaves = [];


    for(
        let i=0;
        i<10;
        i++
    ){

        const mejor =
            clasificados[i];

        const peor =
            clasificados[19-i];


        if(!mejor || !peor){

            continue;

        }


        const id =
            `PR-${i+1}`;


        const resultado =
            resultadosPlayoff
                .primeraRonda[id] ||
            {};


        llaves.push({

            id,

            ronda:
                "Primera ronda",

            seedMejor:
                mejor.puestoGeneral,

            seedPeor:
                peor.puestoGeneral,

            local:
                mejor.nombre,

            visitante:
                peor.nombre,

            zonaLocal:
                mejor.zona,

            zonaVisitante:
                peor.zona,

            golesLocal:
                resultado.golesLocal ??
                null,

            golesVisitante:
                resultado.golesVisitante ??
                null,

            cancha:
                "Cancha neutral",

            ventajaDeportiva:
                mejor.nombre

        });

    }


    return llaves;

}


// ==========================================
// GANADOR DE UNA LLAVE
// ==========================================

function ganadorDeLlave(
    llave
){

    if(
        llave.golesLocal === null ||
        llave.golesVisitante === null
    ){

        return null;

    }


    // Gana local

    if(
        llave.golesLocal >
        llave.golesVisitante
    ){

        return {

            nombre:
                llave.local,

            seed:
                llave.seedMejor,

            zona:
                llave.zonaLocal

        };

    }


    // Gana visitante

    if(
        llave.golesVisitante >
        llave.golesLocal
    ){

        return {

            nombre:
                llave.visitante,

            seed:
                llave.seedPeor,

            zona:
                llave.zonaVisitante

        };

    }


    // Empate:
    // ventaja deportiva para el mejor ubicado.

    return {

        nombre:
            llave.local,

        seed:
            llave.seedMejor,

        zona:
            llave.zonaLocal,

        ventajaDeportiva:
            true

    };

}


// ==========================================
// SEGUNDA RONDA
// OCTAVOS DE FINAL
// ==========================================
//
// 6 primeros + 10 ganadores
// = 16 equipos.
//
// ==========================================

function crearLlavesSegundaRonda(
    ranking,
    primeraRonda
){

    const primeros =
        ranking

            .filter(
                equipo =>
                    equipo.puestoGeneral <= 6
            )

            .map(
                equipo => ({

                    nombre:
                        equipo.nombre,

                    seed:
                        equipo.puestoGeneral,

                    zona:
                        equipo.zona,

                    directo:
                        true

                })
            );


    const ganadores =
        primeraRonda

            .map(
                ganadorDeLlave
            )

            .filter(
                Boolean
            );


    // Los ganadores mantienen
    // el puesto de la llave:
    //
    // PR-1 = 7
    // PR-2 = 8
    // ...
    // PR-10 = 16

    const ganadoresConSeed =
        ganadores.map(
            (equipo,indice) => ({

                ...equipo,

                seed:
                    7 + indice

            })
        );


    const clasificados = [

        ...primeros,

        ...ganadoresConSeed

    ].sort(
        (a,b) =>
            a.seed - b.seed
    );


    const llaves = [];


    for(
        let i=0;
        i<8;
        i++
    ){

        const mejor =
            clasificados[i];

        const peor =
            clasificados[15-i];


        if(!mejor || !peor){

            continue;

        }


        const id =
            `SR-${i+1}`;


        const resultado =
            resultadosPlayoff
                .segundaRonda[id] ||
            {};


        llaves.push({

            id,

            ronda:
                "Segunda ronda - Octavos de final",

            seedMejor:
                mejor.seed,

            seedPeor:
                peor.seed,

            local:
                mejor.nombre,

            visitante:
                peor.nombre,

            zonaLocal:
                mejor.zona,

            zonaVisitante:
                peor.zona,

            golesLocal:
                resultado.golesLocal ??
                null,

            golesVisitante:
                resultado.golesVisitante ??
                null,

            cancha:
                "A definir",

            ventajaDeportiva:
                mejor.nombre

        });

    }


    return llaves;

}


// ==========================================
// SIGUIENTES RONDAS
// ==========================================

function crearLlavesSiguienteRonda(

    llavesAnteriores,

    nombreRonda,

    prefijo,

    resultadosRonda

){

    const ganadores =

        llavesAnteriores

            .map(
                ganadorDeLlave
            )

            .filter(
                Boolean
            )

            .sort(
                (a,b) =>
                    a.seed - b.seed
            );


    const llaves = [];


    const cantidad =
        Math.floor(
            ganadores.length / 2
        );


    for(
        let i=0;
        i<cantidad;
        i++
    ){

        const mejor =
            ganadores[i];

        const peor =
            ganadores[
                ganadores.length -
                1 -
                i
            ];


        if(!mejor || !peor){

            continue;

        }


        const id =
            `${prefijo}-${i+1}`;


        const resultado =
            resultadosRonda[id] ||
            {};


        llaves.push({

            id,

            ronda:
                nombreRonda,

            seedMejor:
                mejor.seed,

            seedPeor:
                peor.seed,

            local:
                mejor.nombre,

            visitante:
                peor.nombre,

            zonaLocal:
                mejor.zona,

            zonaVisitante:
                peor.zona,

            golesLocal:
                resultado.golesLocal ??
                null,

            golesVisitante:
                resultado.golesVisitante ??
                null,

            cancha:
                "A definir",

            ventajaDeportiva:
                mejor.nombre

        });

    }


    return llaves;

}


// ==========================================
// OBTENER TODO EL PLAY-OFF
// ==========================================

function obtenerPlayoffs(){

    const clasificacion =
        generarClasificacionPlayoff();


    const primeraRonda =
        crearLlavesPrimeraRonda(
            clasificacion.ranking
        );


    const segundaRonda =
        crearLlavesSegundaRonda(

            clasificacion.ranking,

            primeraRonda

        );


    const cuartos =
        crearLlavesSiguienteRonda(

            segundaRonda,

            "Cuartos de final",

            "CF",

            resultadosPlayoff.cuartos

        );


    const semifinales =
        crearLlavesSiguienteRonda(

            cuartos,

            "Semifinales",

            "SF",

            resultadosPlayoff.semifinales

        );


    const final =
        crearLlavesSiguienteRonda(

            semifinales,

            "Final",

            "F",

            resultadosPlayoff.final

        );


    return {

        ...clasificacion,

        primeraRonda,

        segundaRonda,

        cuartos,

        semifinales,

        final

    };

}


// ==========================================
// INICIALIZACIÓN
// ==========================================

datosLiga.partidos =
    generarFixtureCompleto();


actualizarTablasAutomaticamente();


datosLiga.fechaActual =
    calcularFechaActual();


// ==========================================
// FIN
// ==========================================

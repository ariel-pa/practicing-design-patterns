class WeekDays {

    daysEn = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    daysEs = [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo"
    ]

    constructor(lang) {
        this.lang = lang;
        if (WeekDays.instance) {
            return WeekDays.instance;
        }
        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === "es" ? this.daysEs : this.daysEn;
    }

}

/* 
    days1 no cambia aun que se envie otro parametro como "en" primero
    verifica si ya existe la instancia y retorna esa instancia existente.
*/
const days = new WeekDays("es");
const days1 = new WeekDays("en")
console.log(days.getDays());
console.log(days1.getDays());
//true
console.log(days1 === days);

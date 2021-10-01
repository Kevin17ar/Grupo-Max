const app = Vue.createApp({
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            city: [],
            hours: [],
            query: "",
        }
    },
    created() {

    },
    methods: {
        send() {
            const token = 'yJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyI-joiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ'
            var endpoint = 'https://sistemacaliva.com/api/front-test'
            var init = {
                    method: 'post',
                    data: {
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        city: this.city,
                        hours: this.hours,
                        query: this.query,
                    },
                    headers: {
                        // 'Access-Control-Allow-Origin': 'https://sistemacaliva.com',
                        // "Access-Control-Allow-Headers": "Content-Type",
                        // "Access-Control-Allow-Methods": "POST",
                        'Access-Control-Allow-Origin': '*',
                        'test-key': 'yJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyI-joiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ',
                    }
                }
                //fetch recibe la url de la API y encabezados (metodo, nombre de token:token)
            fetch(endpoint, init) //se solicita informacion al endpoint del server
                .then(response => console.log("se logro")) // resolucion de la promesa
                .catch(err => console.log(err.message)) //trabaja con el error, entra en la ejecucion cuando la resolucion tiene un errorno
                // axios({
                //         method: 'post',
                //         url: 'https://sistemacaliva.com/api/front-test',
                //         data: {
                //             name: this.name,
                //             email: this.email,
                //             phone: this.phone,
                //             city: this.city,
                //             hours: this.hours,
                //             query: this.query,
                //         },
                //         headers: {
                //             'test-key': 'yJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyI-joiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ',
                //         }
                //     })
                //     .then(res => swal("Good job!", "You clicked the button!", "success"))
                //     .catch(err => console.log(err))
        },


    },
    computed: {

    }
}).mount("#app")

/* navbar */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu-nav");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});
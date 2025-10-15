const oggi = new Date()
const opzioni = [
    {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
    },
    {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    },
    {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }
]
//toLocaleString serve per formattare le date in base alle opzioni specificate
console.log(oggi.toLocaleString(undefined, opzioni[0])) // serve per vedere come viene formattata la data con la prima opzione

opzioni.forEach(opzione => {
    const elemento = document.createElement("h2")
    const dataFormattata = oggi.toLocaleString(undefined, opzione)
    const testo = document.createTextNode(dataFormattata)
    elemento.appendChild(testo)
    document.querySelector("body").appendChild(elemento)
})
console.log(oggi)
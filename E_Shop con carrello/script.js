// Array globale per memorizzare i prodotti aggiunti al carrello
// Ogni elemento avrà le proprietà: id, nome, prezzo, quantita
let carrello = [];

// Aggiunge un event listener al pulsante per caricare i prodotti
// Si attiva al click e chiama la funzione caricaProdotti
document.getElementById('caricaProdotti').addEventListener('click', function() {
    caricaProdotti();
});

// Funzione principale per caricare i prodotti dal file JSON
function caricaProdotti() {
    // Effettua una richiesta HTTP GET al file prodotti.json
    fetch('prodotti.json')
        .then(response => {
            // Controlla se la risposta è valida (status 200-299)
            if (!response.ok) {
                throw new Error('Errore nel caricamento dei prodotti');
            }
            // Converte la risposta in formato JSON
            return response.json();
        })
        .then(data => {
            // Se il caricamento è riuscito, mostra i prodotti nella pagina
            mostraProdotti(data.prodotti);
        })
        .catch(error => {
            // Gestisce eventuali errori durante il caricamento
            console.error('Errore:', error);
            alert('Impossibile caricare i prodotti. Assicurati che il file prodotti.json esista.');
        });
}

// Funzione per visualizzare i prodotti nell'interfaccia utente
function mostraProdotti(prodotti) {
    // Ottiene il riferimento al contenitore dei prodotti nel DOM
    const listaProdotti = document.getElementById('listaProdotti');
    // Pulisce il contenuto precedente per evitare duplicati
    listaProdotti.innerHTML = '';

    // Itera attraverso ogni prodotto nell'array
    prodotti.forEach(prodotto => {
        // Crea un nuovo elemento div per ogni prodotto
        const prodottoDiv = document.createElement('div');
        // Assegna la classe CSS per lo styling
        prodottoDiv.className = 'prodotto';
        
        // Popola il contenuto HTML del prodotto usando template literals
        // Include immagine, nome, descrizione, prezzo formattato e pulsante
        prodottoDiv.innerHTML = `
            <img src="${prodotto.immagine}" alt="${prodotto.nome}">
            <h3>${prodotto.nome}</h3>
            <p>${prodotto.descrizione}</p>
            <div class="prezzo">€${prodotto.prezzo.toFixed(2)}</div>
            <button onclick="aggiungiAlCarrello(${prodotto.id}, '${prodotto.nome}', ${prodotto.prezzo})">
                Aggiungi al Carrello
            </button>
        `;
        
        // Aggiunge il prodotto creato al contenitore principale
        listaProdotti.appendChild(prodottoDiv);
    });
}

// Funzione per aggiungere un prodotto al carrello
function aggiungiAlCarrello(id, nome, prezzo) {
    // Cerca se il prodotto è già presente nel carrello
    const prodottoEsistente = carrello.find(item => item.id === id);
    
    // Se il prodotto è già nel carrello, incrementa la quantità
    if (prodottoEsistente) {
        prodottoEsistente.quantita++;
    } else {
        // Se è un nuovo prodotto, lo aggiunge con quantità 1
        carrello.push({ id, nome, prezzo, quantita: 1 });
    }
    
    // Aggiorna la visualizzazione del carrello
    aggiornaCarrello();
}

// Funzione per rimuovere completamente un prodotto dal carrello
function rimuoviDalCarrello(id) {
    // Filtra l'array rimuovendo l'elemento con l'id specificato
    carrello = carrello.filter(item => item.id !== id);
    // Aggiorna la visualizzazione del carrello dopo la rimozione
    aggiornaCarrello();
}

// Funzione principale per aggiornare la visualizzazione del carrello
function aggiornaCarrello() {
    // Ottiene i riferimenti agli elementi del DOM del carrello
    const carrelloContenuto = document.getElementById('carrelloContenuto');
    const carrelloTotale = document.getElementById('carrelloTotale');
    
    // Se il carrello è vuoto, mostra un messaggio appropriato
    if (carrello.length === 0) {
        carrelloContenuto.innerHTML = '<p class="carrello-vuoto">Il carrello è vuoto</p>';
        carrelloTotale.innerHTML = '';
        return; // Esce dalla funzione
    }
    
    // Pulisce il contenuto precedente del carrello
    carrelloContenuto.innerHTML = '';
    // Inizializza la variabile per calcolare il totale
    let totale = 0;
    
    // Itera attraverso ogni articolo nel carrello
    carrello.forEach(item => {
        // Crea un nuovo div per ogni articolo del carrello
        const itemDiv = document.createElement('div');
        itemDiv.className = 'carrello-item';
        
        // Calcola il subtotale per questo articolo (prezzo × quantità)
        const subtotale = item.prezzo * item.quantita;
        // Aggiunge il subtotale al totale generale
        totale += subtotale;
        
        // Popola il contenuto HTML dell'articolo nel carrello
        itemDiv.innerHTML = `
            <div class="carrello-item-info">
                <h4>${item.nome} x${item.quantita}</h4>
                <p>€${subtotale.toFixed(2)}</p>
            </div>
            <button onclick="rimuoviDalCarrello(${item.id})">Rimuovi</button>
        `;
        
        // Aggiunge l'articolo al contenitore del carrello
        carrelloContenuto.appendChild(itemDiv);
    });
    
    // Aggiorna il totale del carrello con formato a 2 decimali
    carrelloTotale.innerHTML = `Totale: €${totale.toFixed(2)}`;
}
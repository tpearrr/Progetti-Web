# E-Shop con Carrello

Un'applicazione web semplice per un negozio online con funzionalità di carrello della spesa. Progettato con HTML, CSS e JavaScript vanilla.

## Funzionalità

- **Caricamento dinamico dei prodotti** da file JSON
- **Visualizzazione prodotti** con immagini, descrizioni e prezzi
- **Carrello della spesa** interattivo
- **Aggiunta/rimozione prodotti** dal carrello
- **Calcolo automatico del totale**
- **Gestione quantità** (incremento automatico per prodotti duplicati)
- **Interface responsive** per desktop e mobile
- **Gestione degli errori** per il caricamento dei dati

## Struttura del Progetto

```
E_Shop con carrello/
├── index.html          # Struttura HTML principale
├── style.css           # Stili CSS per l'interfaccia
├── script.js           # Logica JavaScript dell'applicazione  
├── prodotti.json       # Database dei prodotti in formato JSON
└── README.md           # Documentazione del progetto
```

## Tecnologie Utilizzate

- **HTML5** - Struttura semantica della pagina
- **CSS3** - Styling e layout responsive
- **JavaScript ES6+** - Logica dell'applicazione e interattività
- **JSON** - Storage dei dati dei prodotti
- **Fetch API** - Caricamento asincrono dei dati

## Struttura dei Dati

### Formato del file prodotti.json
```json
{
  "prodotti": [
    {
      "id": 1,
      "nome": "Nome Prodotto",
      "descrizione": "Descrizione del prodotto",
      "prezzo": 99.99,
      "immagine": "URL_immagine"
    }
  ]
}
```

### Struttura dell'oggetto Carrello
```javascript
{
  id: number,        // ID univoco del prodotto
  nome: string,      // Nome del prodotto
  prezzo: number,    // Prezzo unitario
  quantita: number   // Quantità nel carrello
}
```

## Personalizzazione

### Aggiungere Nuovi Prodotti
Modifica il file `prodotti.json` aggiungendo nuovi oggetti all'array "prodotti":

```json
{
  "id": 4,
  "nome": "Nuovo Prodotto",
  "descrizione": "Descrizione dettagliata",
  "prezzo": 199.99,
  "immagine": "https://example.com/image.jpg"
}
```

## Funzioni JavaScript Principali

- `caricaProdotti()` - Carica i prodotti dal JSON
- `mostraProdotti()` - Renderizza i prodotti nell'HTML
- `aggiungiAlCarrello()` - Aggiunge un prodotto al carrello
- `rimuoviDalCarrello()` - Rimuove un prodotto dal carrello
- `aggiornaCarrello()` - Aggiorna la visualizzazione del carrello


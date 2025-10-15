# Formattatore di Date

Un semplice progetto web che dimostra diverse modalità di formattazione delle date utilizzando JavaScript.

## Descrizione

Questo progetto mostra come utilizzare il metodo `toLocaleString()` di JavaScript per formattare la data corrente in diversi modi:

1. **Data completa**: Anno, mese, giorno e giorno della settimana
2. **Ora**: Ore, minuti, secondi in formato 12 ore
3. **Data e ora combinate**: Data completa con orario

## File del Progetto

- `index.html` - Pagina HTML principale
- `script.js` - Logica JavaScript per la formattazione delle date
- `README.md` - Questo file di documentazione


## Funzionalità

### Formati di Data Supportati

- **Formato 1**: Data completa con giorno della settimana
  - Esempio: "martedì 15/10/2025"
  
- **Formato 2**: Orario in formato 12 ore
  - Esempio: "02:30:45 PM"
  
- **Formato 3**: Data e ora complete
  - Esempio: "martedì 15/10/2025, 02:30:45"


## Codice Principale

Il codice utilizza un array di oggetti opzioni per definire i diversi formati:

```javascript
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
```

## Personalizzazione

Puoi modificare le opzioni di formattazione nell'array `opzioni` per cambiare come vengono visualizzate le date. Alcune opzioni disponibili:

- `year`: "numeric", "2-digit"
- `month`: "numeric", "2-digit", "long", "short", "narrow"
- `day`: "numeric", "2-digit"
- `weekday`: "long", "short", "narrow"
- `hour`: "numeric", "2-digit"
- `minute`: "numeric", "2-digit"
- `second`: "numeric", "2-digit"
- `hour12`: true/false

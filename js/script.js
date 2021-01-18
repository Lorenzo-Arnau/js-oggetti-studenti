function inserisciStudente(nome,cognome,anni) {
  var stud = {};
  stud.nome = nome;
  stud.cognome = cognome;
  stud.eta = anni;
  return stud;
}
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.

var studente = {
  'nome' : 'Mario',
  'cognome' : 'Rossi',
  'anni' : 18,
}

for (var key in studente) {
  console.log(studente[key]);
}
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studentiList = [
  {
    'nome' : 'Pippo',
    'cognome' : 'Baudo',
  },{
    'nome' : 'Alessandro',
    'cognome' : 'Zorro',
  },{
    'nome' : 'Diego',
    'cognome' : 'Guevara',
  }
]

for (var i = 0; i < studentiList.length; i++) {
  console.log(studentiList[i].nome);
  console.log(studentiList[i].cognome);
}

var inputNome = prompt('inserisci il nome del nuovo studente');
var inputCognome = prompt('inserisci il cognome del nuovo studente');
var inputAnni = prompt('infine gli anni del nuovo studente');


studentiList.push(inserisciStudente(inputNome,inputCognome,inputAnni));
for (var i = 0; i < studentiList.length; i++) {
  console.log(studentiList[i]);
  console.log(studentiList[i].nome);
  console.log(studentiList[i].cognome);
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

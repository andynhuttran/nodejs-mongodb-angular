const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')


const { Observable, of, from, fromEvent } = rxjs;
const { map, filter, switchMap } = rxjs.operators;
const { fromFetch } = rxjs.fetch;

let obs = fromEvent(quoteInputElement, 'input');
obs.subscribe(
    (e) => compareInput(),
    null,
    null
);

function compareInput(){
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    let correct = true;
    
    from(arrayQuote).pipe(
        map((characterSpan, index) => {
            return { characterSpan, index };
        })
    )
    .subscribe(
        (obj) => {
            correct = compareHelper(obj.characterSpan, obj.index);            
        }
    );

    if (correct) renderNewQuote();
}

function compareHelper(characterSpan, index){
    const arrayValue = quoteInputElement.value.split('');
    const character = arrayValue[index];

    if (character == null) {
        characterSpan.classList.remove('correct');
        characterSpan.classList.remove('incorrect');
        return false;
    }
    else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct');
        characterSpan.classList.remove('incorrect');
    }
    else {
        characterSpan.classList.remove('correct');
        characterSpan.classList.add('incorrect');
        return false;
    }

    return true;
}


function renderNewQuote() {
    let promise = getRandomQuote();
    from(promise).pipe(
        map(data => data.then(d => d.content))
    )
    .subscribe(
        //quote => quote.then(q => renderQuote(q))        
        data => from(data).subscribe(quote => renderQuote(quote))
    );
}

function getRandomQuote() {
    let result = fetch(RANDOM_QUOTE_API_URL);
    return from(result).pipe(
        map(response => response.json()) 
    );
}

function renderQuote(quote){
    quoteDisplayElement.innerHTML = '';
    from(quote.split(''))
        .subscribe(
            (character) => {                
                const spanElement = document.createElement('span');
                spanElement.innerText = character;
                quoteDisplayElement.appendChild(spanElement);
            }
        );

    quoteInputElement.value = null;
    startTimer();
}

var timerObserver = Observable.create((observer) => {
    timerElement.innerText = 0;
    setInterval(() => {
        let value = getTimerTime();
        observer.next(value);

        if (value === 20){
            observer.complete();
        }

    }, 1000)
})


let startTime;
function startTimer() {
    timerElement.innerText = 0;
    startTime = new Date();
    timerObserver.subscribe(
        (value) => timerElement.innerText = value,
        null, //error
        () => renderNewQuote()        
    )
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);  
}

renderNewQuote()
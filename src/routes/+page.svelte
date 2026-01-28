<script>
  let questions = [
    // Wprowadzenie
    "Czym jest algorytm?",
    "Czym jest struktura danych?",
    "Jakie są (4) cechy algorytmu?",
    "W jaki sposob (4) mozna zapisac algorytm?",
    "Jak mozna podzielic struktury danych?",
    "Czym jest analiza algorytmow?",
    "Jakie są podstawowe elementy schematow blokowych?",
    // Iteracja vs rekurencja
    "Do czego stosujemy algorytm Euklidesa?",
    "Iteracja vs rekurencja.",
    "Zagrozenia wynikające z rekurencji.",
    "Co otrzymujemy w wyniku działania Sita Erastotenesa?",
    "Jak tworzy się kolejne elementy ciągu Fibonacciego?",
    "Al. Obliczania ciągu Fibonacciego jest rekurencyjny czy iteracyjny?",
    // Systemy liczbowe
    "Czym jest system bitowy?",
    "Jak wykonac konwersję dec2bin?",
    "Jak wykonac sprawdzenie działania algorytmu dec2bin?",
    "Czym jest zapis heksadecymalny? Gdzie go spotykamy?",
    "Jakie znaki występują w zapisie heksadecymalnym?",
    "Jak dokonac konwersji dec2hex?",
    "Czym jest tablica ASCII?",
    // Sortowanie
    "Na czym polega notacja duzego O?",
    "Jaka jest podstawowa idea sortowania bąbelkowego?",
    "Jakie dwie modyfikacje mozna wprowadzic, aby przyspieszyc sortowanie bąbelkowe?",
    "Jaka jest podstawowa idea sortowania przez wstawianie?",
    "Jaka jest podstawowa idea sortowania przez wybor?",
    "Jakie złozonosci obliczeniowe mają poznane algorytmy?",
    "Jaka jest podstawowa idea sortowania szybkiego?",
    "Jaka jest podstawowa idea sortowania przez scalanie?",
    "Jak przyspieszyc QuickSort i MergeSort?",
    // Selekcja i wyszukiwanie
    "Na czym polega roznica między problemem selekcji i wyszukiwania?",
    "Jak realizuje się algorytm wyszukiwania liniowego?",
    "Jak realizuje się algorytm wyszukiwania binarnego?",
    "Zasada znana z jakiego innego algorytmu jest stosowana w algorytmie Hoare’a?",
    "Jak realizuje się selekcję za pomocą algorytmu Hoare’a?",
    "Jakie zmiany wprowadza algorytm magicznych piątek?",
    "Dlaczego zbiory dzielimy na piątki, a nie na trojki, siodemki etc.?",
    "Jakie złozonosci mają poznane na wykładzie algorytmy?",
    "Gdzie mozna zastosowac przedstawione algorytmy wyszukiwania i selekcji?",
    // Struktury danych 1
    "Czym jest struktura danych?",
    "Czym jest struktura? Jakim słowem kluczowym w Cpp ją definiujemy?",
    "Tablica jako struktura danych – opis, wady, zalety.",
    "Jak dodaje się i usuwa elementy z listy?",
    "Cechy wspolne i wyrozniające – kolejka vs stos vs lista.",
    "Jakie są realistyczne zastosowania stosu i kolejki?",
    "Czym jest ONP?",
    "Jakie zmiany wprowadza kolejka priorytetowa?",
    "Co to znaczy, ze lista jest dwukierunkowa lub jednokierunkowa?",
    // Struktury danych 2
    "Do realizacji ktorych elementow algorytmow ONP wykorzystamy stos?",
    `Wyjasnij podstawowe pojęcia związane z drzewami (węzeł, krawędz, korzen, węzły,
podrzędne i nadrzędne, liscie, węzły wewnętrzne, sciezka i jej długosc, poziom węzła,
wysokosc drzewa, drzewo binarne, drzewo binarne kompletne).`,
    "Czym jest sterta? Jak wygląda dodawanie/usuwanie elementow z niej? Czym jest MAX/MIN sterta?",
    `Czym jest drzewo BST? Jak dodajemy/usuwamy elementy? Jak zrealizowano
wyszukiwanie elementow? Jaki jest głowny problem drzew BST? Jak wskazac min/max
w drzewie BST?`,
    "Jakie modyfikacje BST zostały omowione? (złozonosc obliczeniowa, co wykorzystują)",
    "Co wyroznia strukturę danych zbior?",
    "Co wyroznia strukturę danych słownik?",
    "Co wyroznia strukturę danych wektor?",
    // Grafy 1
    "Z jakim problemem mierzył się Euler?",
    "Podaj matematyczną definicję grafu oraz zastosowania teorii grafow.",
    "Wymien i opisz cyfrowe sposoby reprezentacji grafow.",
    "Czym jest algorytm zachłanny?",
    "Jaki jest głowny zamysł w algorytmie Dijkstry?",
    "Jaki jest głowny zamysł w algorytmie Kruskala?",
    "Czym jest (minimalne) drzewo rozpinające?",
    "Jak na dwa sposoby realizujemy przechodzenie po grafie?",
    // Grafy 2
    "Na czym polega problem wędrującego komiwojazera?",
    "Jaka jest głowna idea działania algorytmu najblizszego sąsiada?",
    "Jakie zmiany wprowadza Repetitive Nearest Neighbour?",
    "Czy w kazdym grafie spojnym NN doprowadzi do optymalnego rozwiązania?",
    "Podaj twierdzenie o 4 kolorach.",
    "Wymien realistyczne przykłady zastosowania kolorowania grafow.",
    "Jak mozna zrealizowac kolorowanie wierzchołkow? Czym się te podejscia roznią?",
    "Jakie są wady i zalety algorytmow heurystycznych?",
    // Szyfrowanie
    "Wymien zastosowania szyfrow.",
    "Podaj i opisz 3 głowne typy szyfrow wraz z przykładami.",
    "Wyjasnij zasadę działania szyfru Cezara.",
    "Wyjasnij zasadę działania kodu Morse’a.",
    "Wyjasnij zasadę działania szyfru XOR.",
    "Wyjasnij zasadę działania prostego szyfru przestawieniowego.",
    "Wyjasnij zasadę działania szyfru płotkowego.",
    "Wyjasnij zasadę działania szyfru ze słowem-kluczem. Jakie słowa klucze mozna uzyc do kodowania?",
    "Wyjasnij zasadę działania szyfru z samogłoskami.",
    "Wyjasnij zasadę działania szyfru Atbasz.",
    "Wyjasnij zasadę działania szyfru ułamkowego.",
    "Wyjasnij zasadę działania szyfru Vigenere’a.",
    "Wyjasnij zasadę działania szyfru Sanatorium.",
    "Wyjasnij szyfr VIC.",
    "Czym jest tablica Polibiusza?",
    // Przeszukiwanie tekstow
    "Jaka jest zasada działania algorytmow z rodziny Brute-Force?",
    "Jak działa naiwny algorytm poszukiwania wzorca?",
    "Jakie złozonosci mają poznane algorytmy poszukiwania wzorcow?",
    "Jakie zmiany wprowadzają w algorytmie naiwnym algorytmy Boyera i Moore’a oraz Knutha-Morrisa-Pratta?",
    "Jak działa algorytm Boyera i Moore’a?",
  ];
  const sectionRanges = [
    { from: 0, to: 6, name: "Wprowadzenie" },
    { from: 7, to: 12, name: "Iteracja vs rekurencja" },
    { from: 13, to: 19, name: "Systemy liczbowe" },
    { from: 20, to: 28, name: "Sortowanie" },
    { from: 29, to: 37, name: "Selekcja i wyszukiwanie" },
    { from: 38, to: 46, name: "Struktury danych cz. 1" },
    { from: 47, to: 55, name: "Struktury danych cz. 2" },
    { from: 56, to: 63, name: "Grafy cz. 1" },
    { from: 64, to: 71, name: "Grafy cz. 2" },
    { from: 72, to: 87, name: "Szyfrowanie" },
    { from: 88, to: 92, name: "Przeszukiwanie tekstów" },
  ];

  let current = 0;
  let answer = "";

  let verdict = null;
  let tip = null;
  let score = null;
  let character = null;

  let typedVerdict = "";
  let typedTip = "";
  let talking = false;
  let typingSound;

  let mouthOpen = false;
  let mouthInterval = null;
  let isSubmitting = false;
  let userAnswer = "";
  let isLoading = false;
  let skipRequested = false;
  let skipTyping = false;

  let isAdvancing = false;

  $: {
    if (talking) {
      if (!mouthInterval) {
        mouthInterval = setInterval(() => {
          mouthOpen = !mouthOpen;
        }, 85);
      }
    } else {
      clearInterval(mouthInterval);
      mouthInterval = null;
      mouthOpen = false;
    }
  }

  function getSection(index) {
    return (
      sectionRanges.find((s) => index >= s.from && index <= s.to)?.name || ""
    );
  }

  async function retry() {
    if (isLoading) return;

    typedVerdict = "";
    typedTip = "";
    score = null;
    isSubmitting = false;
    // hasError = false;

    // await checkAnswer();
  }

  function nextQuestion() {
    if (isAdvancing) return;
    isAdvancing = true;

    // 🔥 jeśli trwa animacja – przerywamy ją
    skipTyping = true;
    talking = false;

    // reset stanu pytania
    answer = "";
    verdict = null;
    tip = null;
    score = null;
    character = null;
    typedVerdict = "";
    typedTip = "";
    isSubmitting = false;
    isLoading = false;

    current++;

    // odblokowanie w następnym ticku
    queueMicrotask(() => {
      isAdvancing = false;
    });
  }

  import { onMount } from "svelte";

  onMount(() => {
    typingSound = new Audio("/type.mp3");
    typingSound.volume = 0.2;
  });

  async function typeVerdict(text) {
    skipTyping = false;
    typedVerdict = "";

    for (let i = 0; i < text.length; i++) {
      if (skipTyping) {
        typedVerdict = text;
        return;
      }

      typedVerdict += text[i];

      if (typingSound.paused) {
        typingSound.currentTime = 0;
        typingSound.play();
      }

      await new Promise((r) => setTimeout(r, 25));
    }
  }

  async function typeTip(text) {
    skipTyping = false;
    typedTip = "";

    for (let i = 0; i < text.length; i++) {
      if (skipTyping) {
        typedTip = text;
        return;
      }

      typedTip += text[i];

      if (typingSound.paused) {
        typingSound.currentTime = 0;
        typingSound.play();
      }

      await new Promise((r) => setTimeout(r, 25));
    }
  }

  function scoreColor(score) {
    if (score < 40) return "bad";
    if (score < 70) return "ok";
    return "good";
  }

  async function checkAnswer() {
    if (isSubmitting) return; // ⛔ safety

    isSubmitting = true;
    isLoading = true;

    userAnswer = answer;

    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: questions[current],
          answer,
        }),
      });

      const data = await res.json();

      score = data.score;
      character = "🧙 Jeffrey";

      typedVerdict = "";
      typedTip = "";

      talking = true;

      await typeVerdict(data.verdict);
      await typeTip("💡 " + data.tip);

      talking = false;
      typingSound.pause();
    } finally {
      isLoading = false; // ⛔ spinner off
    }
  }
</script>

{#if current < questions.length}
  <div class="quiz">
    <h2>Pytanie {current + 1}</h2>
    <p>{questions[current]}</p>

    <div class="question-section">
      {getSection(current)}
    </div>

    {#if score === null}
      <input type="text" bind:value={answer} placeholder="Twoja odpowiedź..." />
      <button
        on:click={checkAnswer}
        class="next-btn"
        disabled={!answer || isSubmitting}
      >
        {#if isLoading}
          <span class="spinner"></span> Myślę...
        {:else}
          Sprawdź
        {/if}
      </button>
    {/if}

    {#if score !== null}
      <div class="user-answer {scoreColor(score)}">
        <strong>Twoja odpowiedź:</strong>
        <p>{userAnswer}</p>
      </div>

      <div class="textbox {scoreColor(score)}">
        <div class="mentor-box">
          <!-- LEWA STRONA -->
          <div class="mentor-text">
            <div class="header">
              <strong>{character}</strong>
              <span class="score">{score}/100</span>
            </div>

            <p class="verdict">{typedVerdict}</p>
            <p class="tip">{typedTip}</p>
          </div>

          <!-- PRAWA STRONA -->
          <div class="mentor-avatar">
            <img
              src={mouthOpen ? "/mentor_talk.png" : "/mentor_idle.png"}
              alt="mentor"
              class="mentor"
            />
          </div>
        </div>
      </div>

      <div class="notice info">
        ℹ️ Ocena ≥ 75 oznacza, że odpowiedź jest
        <strong>wystarczająco poprawna egzaminacyjnie</strong>. Mentor może być
        zbyt drobiazgowy przy wyższych ocenach — nie należy przywiązywać
        nadmiernej wagi do dalszych uwag.
      </div>

      <!-- <button on:click={nextQuestion}>Dalej</button> -->
      <div class="action-row">
        <button class="retry-btn" on:click={retry}> Powtórz </button>

        <button class="dalej-btn" on:click={nextQuestion}> Dalej </button>
      </div>
    {/if}
  </div>
{:else}
  <h2>Koniec quizu 🎉</h2>
{/if}

<style>
  .quiz {
    max-width: 520px;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .next-btn {
    display: flex;
    align-items: center; /* pion */
    justify-content: center; /* poziom */
    gap: 0.5rem;

    height: 44px; /* 🔥 KLUCZ */
    padding: 0 1rem;
  }

  input,
  button {
    padding: 0.6rem;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  .textbox {
    border-radius: 10px;
    padding: 1rem;
    border: 2px solid;
    background: #0f0f0f;
    color: #f2f2f2;
    transition: all 0.3s ease;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    align-items: center;
  }

  .score {
    font-weight: bold;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    font-size: 0.9rem;
  }

  .verdict {
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }

  .tip {
    font-style: italic;
    opacity: 0.85;
  }

  /* SCORE STATES */

  .bad {
    border-color: #e74c3c;
    box-shadow: 0 0 0 1px rgba(231, 76, 60, 0.4);
  }

  .bad .score {
    background: #e74c3c;
    color: #fff;
  }

  .ok {
    border-color: #f1c40f;
    box-shadow: 0 0 0 1px rgba(241, 196, 15, 0.4);
  }

  .ok .score {
    background: #f1c40f;
    color: #000;
  }

  .good {
    border-color: #2ecc71;
    box-shadow: 0 0 0 1px rgba(46, 204, 113, 0.4);
  }

  .good .score {
    background: #2ecc71;
    color: #000;
  }

  .mentor {
    width: 160px;
    image-rendering: pixelated; /* jak pixel art */
    transition: opacity 0.05s linear;
  }

  .mentor-box {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .mentor-text {
    flex: 1;
  }

  .mentor-avatar img {
    width: 120px;
    image-rendering: pixelated; /* jeśli pixel art */
  }

  .user-answer {
    background: #121212;
    border-left: 5px solid;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    color: #f2f2f2;
  }

  .user-answer.bad {
    border-left-color: #e74c3c;
  }

  .user-answer.ok {
    border-left-color: #f1c40f;
  }

  .user-answer.good {
    border-left-color: #2ecc71;
  }

  .user-answer strong {
    color: #aaa;
  }

  .user-answer p {
    margin: 0;
    color: #f2f2f2;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid #555;
    border-top-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.5rem;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .question-section {
    margin-top: -0.4rem; /* 🔥 bliżej pytania */
    margin-bottom: 0.5rem; /* 🔥 bliżej inputa */
    font-size: 0.8rem;
    color: #888;
    letter-spacing: 0.02em; /* subtelne, nie krzyczy */
    text-transform: none; /* ❌ NO UPPERCASE */
  }

  .action-row {
    display: flex;
    gap: 0.5rem;
  }

  .action-row button {
    flex: 1; /* 🔥 half size */
    padding: 0.6rem;
    font-size: 1rem;
  }

  .retry-btn {
    background: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 6px;
  }

  .retry-btn:hover {
    background: #c0392b;
  }

  .dalej-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .notice.info {
    /* margin-top: 0.75rem; */
    padding: 0.75rem 1rem;

    background: #0b1d33; /* CIEMNY GRANAT */
    color: #e6f0ff; /* JASNY TEKST */

    border-left: 4px solid #3b82f6; /* WYRAŹNY NIEBIESKI */
    border-radius: 6px;

    font-size: 0.9rem;
    line-height: 1.45;
  }

  .notice.info strong {
    color: #ffffff;
  }
</style>

<script>
  import KnowledgeBrowser from "$lib/components/KnowledgeBrowser.svelte";
  import LeaderboardBox from "$lib/components/LeaderboardBox.svelte";
  import Row from "$lib/components/Row.svelte";

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
    { from: 38, to: 46, name: "Struktury danych, cz. 1" },
    { from: 47, to: 55, name: "Struktury danych, cz. 2" },
    { from: 56, to: 63, name: "Grafy, cz. 1" },
    { from: 64, to: 71, name: "Grafy, cz. 2" },
    { from: 72, to: 87, name: "Szyfrowanie" },
    { from: 88, to: 92, name: "Przeszukiwanie tekstów" },
  ];
  const mentors = [
    {
      id: "jeffrey",
      label: "🧙 Jeffrey",
      avatarIdle: "/mentors/jeffrey_idle.png",
      avatarTalk: "/mentors/jeffrey_talk.png",
      talkSound: "/mentors/jeffrey_talk.mp3",
      personality: `
Jesteś surowym, egzaminacyjnym mentorem.
Nie dajesz wysokich ocen za ogólniki.
Nie da się Cię oszukać meta-tekstami typu "odpowiedź jest merytoryczna".
Jeśli odpowiedź nie zawiera KONKRETÓW – obniż score.
`,
      gradingBias: "strict",
    },

    {
      id: "anime",
      label: "🌸 Anime Dziewczynka",
      avatarIdle: "/mentors/anime_idle.png",
      avatarTalk: "/mentors/anime_talk.png",
      talkSound: "/mentors/anime_talk.mp3",
      personality: `
Jesteś miła i wspierająca, ale nadal oceniasz merytorycznie.
Tłumaczysz spokojnie, bez ironii.
Nie zawyżaj ocen tylko dlatego, że odpowiedź brzmi ładnie.
`,
      gradingBias: "soft",
    },

    {
      id: "walter",
      label: "🧪 Walter White",
      avatarIdle: "/mentors/walter_idle.png",
      avatarTalk: "/mentors/walter_talk.png",
      talkSound: "/mentors/walter_talk.mp3",
      personality: `
Jesteś bezlitosny, techniczny i precyzyjny.
Nienawidzisz lania wody.
Jeśli odpowiedź nie jest jednoznaczna – tnij punkty.
`,
      gradingBias: "very_strict",
    },

    {
      id: "kiepski",
      label: "🍺 Fazbear",
      avatarIdle: "/mentors/ferdek_idle.png",
      avatarTalk: "/mentors/ferdek_talk.png",
      talkSound: "/mentors/ferdek_talk.mp3",
      personality: `
Jesteś prymitywny, ironiczny, ale NIE ZANIŻAJ MERYTORYKI.
Komentarz może być śmieszny, ale score musi być uczciwy.
`,
      gradingBias: "neutral",
    },
    {
      id: "ishowspeed",
      label: "⚡ Prędki",
      avatarIdle: "/mentors/predki_idle.png",
      avatarTalk: "/mentors/predki_talk.png",
      talkSound: "/mentors/predki_talk.mp3",
      personality: `
Jesteś głośny, impulsywny i emocjonalny jak IShowSpeed,
ale NIE ZANIŻAJ ANI NIE ZAWYŻAJ OCENY EMOCJAMI.

Krzycz w komentarzu, reaguj przesadnie,
ale score ma wynikać wyłącznie z poprawności merytorycznej.

Jeśli odpowiedź jest słaba – wyśmiej ją.
Jeśli dobra – reaguj hype'em.
`,
      gradingBias: "neutral",
    },
    {
      id: "zlomek",
      label: "🚗 Ziomek",
      avatarIdle: "/mentors/ziomek_idle.png",
      avatarTalk: "/mentors/ziomek_talk.png",
      talkSound: "/mentors/ziomek_talk.mp3",
      personality: `
Jesteś prostolinijny, trochę głupiutki, ale szczery jak Złomek.
Tłumaczysz rzeczy łopatologicznie.
Nie używasz skomplikowanego języka.

NIE WYBACZAJ BRAKU PRZYKŁADÓW.
Jeśli pytanie prosi o przykłady, a ich brak – tnij punkty.
`,
      gradingBias: "soft",
    },
    {
      id: "freddy",
      label: "🐻 Ferdek",
      avatarIdle: "/mentors/frytka_idle.png",
      avatarTalk: "/mentors/frytka_talk.png",
      talkSound: "/mentors/frytka_talk.mp3",
      personality: `
Jesteś spokojny, niepokojący i lakoniczny.
Mówisz mało, ale konkretnie.
Komentarze są chłodne i lekko creepy.

Nie nagradzaj lania wody.
Odpowiedź musi być konkretna i zgodna z pytaniem.
Jeśli jest niejednoznaczna – obniż score.
`,
      gradingBias: "strict",
    },
    {
      id: "lumberchuj",
      label: "🪓 Drwal",
      avatarIdle: "/mentors/lumber_idle.png",
      avatarTalk: "/mentors/lumber_talk.png",
      talkSound: "/mentors/lumber_talk.mp3",
      personality: `
      stary pijak,  mówi prosto z mostu co sądzi o danym temacie i co zjebałeś, jeżeli bedziesz dobrze coś kmninić to uzna że jesteś dobry gośc i przyzna ci racje ale jeżeli jest git to jest git albo proste coś omijasz jakby autostradą obwodnicą bydgoszcyz type shit moment ale on pwoie ej gościu dobrze prawisz
      z dobrego żartu o napierdalaniu to się zaśmieje i zmieni nagle na chlwile temat na jego ulubuony typ whiskey przez chwile a potem opdowie xD
`,
      gradingBias: "neutral",
    },
    {
      id: "skeleton",
      label: "🛡️ RAR",
      avatarIdle: "/mentors/skeleton_idle.png",
      avatarTalk: "/mentors/skeleton_talk.png",
      talkSound: "/mentors/skeleton_talk.mp3",
      personality: `he defendsively approaches all answers like with a shield`,
      gradingBias: "aggressive",
    },
    {
      id: "miku",
      label: "👧 Michalina",
      avatarIdle: "/mentors/miku_idle.webp",
      avatarTalk: "/mentors/miku_talk.webp",
      talkSound: "/mentors/miku_talk.mp3",
      personality: `she sings`,
      gradingBias: "nice and kind",
    },
    {
      id: "cat",
      label: "🌭 Pies",
      avatarIdle: "/mentors/pies_idle.webp",
      avatarTalk: "/mentors/pies_talk.webp",
      talkSound: "/mentors/pies_talk.mp3",
      personality: `he is a nice looking cat`,
      gradingBias: "neutral",
    },
    // {
    //   id: "kacper",
    //   label: "🏀 Kacper Wnuk-Lipiński",
    //   avatarIdle: "/mentors/kacper_idle.jpeg",
    //   avatarTalk: "/mentors/kacper_talk.jpeg",
    //   talkSound: "/mentors/kacper_talk.ogg",
    //   personality: `he is talkative and goofy ahh`,
    //   gradingBias: "neutral",
    // },
  ];

  let current = 0;
  let questionOrder = [];
  $: realIndex = questionOrder[current];
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
  let finished = false;
  let isFinished = false;
  let mentorRunId = 0;
  let testStartedAt = Date.now();
  let audioUnlocked = false;

  let startTime = null;
  let endTime = null;
  let durationMs = 0;
  let mentorTalkAudio = null;
  let mentorTalkingActive = false;
  let sources = [];

  let results = [];
  // let results = questions.map(() => ({
  //   answers: [], // wszystkie odpowiedzi usera (string)
  //   scores: [], // score z każdej próby
  //   verdicts: [], // verdicty mentora
  //   tips: [], // tipy mentora

  //   fs: null, // First Score
  //   rs: null, // Retry Score (best)
  // }));

  let nickname = "";
  let submitted = false;

  let selectedMentorId = "jeffrey";

  $: mentor = mentors.find((m) => m.id === selectedMentorId);
  $: mentorIndex = mentors.findIndex((m) => m.id === selectedMentorId);

  onMount(() => {
    const saved = localStorage.getItem("mentor");
    if (saved && mentors.some((m) => m.id === saved)) {
      selectedMentorId = saved;
    }
  });

  function normalizeScore(score) {
    if (typeof score === "number") return score;

    if (typeof score === "string") {
      const m = score.match(/\d+/);
      return m ? Number(m[0]) : 0;
    }

    return 0;
  }

  function nextMentor() {
    stopMentorTalk(); // 🔥 ucina gadanie + dźwięk
    const next = (mentorIndex + 1) % mentors.length;
    selectedMentorId = mentors[next].id;
    localStorage.setItem("mentor", selectedMentorId);
  }

  function prevMentor() {
    stopMentorTalk();
    const prev = (mentorIndex - 1 + mentors.length) % mentors.length;
    selectedMentorId = mentors[prev].id;
    localStorage.setItem("mentor", selectedMentorId);
  }

  $: if (mentor && mentorTalkingActive) {
    stopMentorTalk();
    startMentorTalk();
  }

  function selectMentor(id) {
    if (talking || isSubmitting || isLoading) return;
    selectedMentorId = id;
    localStorage.setItem("mentor", id);
  }
  function startMentorTalk() {
    if (!audioUnlocked) return;
    if (!mentor?.talkSound) return;
    if (mentorTalkingActive) return; // 🔥 KLUCZ

    mentorTalkingActive = true;

    mentorTalkAudio = new Audio(mentor.talkSound);
    mentorTalkAudio.loop = true;
    mentorTalkAudio.volume = 0.6;
    mentorTalkAudio.play().catch(() => {});
  }

  function stopMentorTalk() {
    mentorTalkingActive = false;

    if (mentorTalkAudio) {
      mentorTalkAudio.pause();
      mentorTalkAudio.currentTime = 0;
      mentorTalkAudio = null;
    }
  }

  function unlockAudio() {
    if (audioUnlocked) return;

    const a = new Audio();
    a.play().catch(() => {});
    audioUnlocked = true;
  }

  async function submitScore() {
    await fetch("/api/leaderboard/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nickname,

        total_fs: totalFS,
        total_rs: totalRS,

        percent_fs: percentFS,
        percent_rs: percentRS,

        avg_grade: Number(avgGrade),
        duration_ms: durationMs,
        questions_answered: answeredFS.length,
      }),
    });

    submitted = true;
  }

  let sounds = {};
  let currentSound = null;

  function playSound(name, { loop = false, volume = 0.4 } = {}) {
    if (!audioUnlocked) return;

    stopSound();

    const audio = sounds[name];
    if (!audio) return;

    audio.loop = loop;
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play().catch(() => {}); // 🔥 NIE WYJEBUJ APPKI

    currentSound = audio;
  }

  function stopSound() {
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0;
      currentSound = null;
    }
  }

  onMount(() => {
    sounds = {
      intro: new Audio("/sfx/intro.mp3"),
      fnaf: new Audio("/sfx/fnaf.mp3"),
      check: new Audio("/sfx/check.mp3"),
      cheer: new Audio("/sfx/cheer.mp3"),
      outro: new Audio("/sfx/outro.mp3"),
      letsPlay: new Audio("/sfx/lets_play.mp3"),
      suspense: new Audio("/sfx/suspense.mp3"),
      win: new Audio("/sfx/win.mp3"),
      lose: new Audio("/sfx/lose.mp3"),
    };

    Object.values(sounds).forEach((a) => {
      a.preload = "auto";
    });
  });

  let adminPass = "";

  async function resetLeaderboard() {
    await fetch("/api/leaderboard/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: adminPass }),
    });

    location.reload();
  }

  function saveResult({ answer, score, verdict, tip }) {
    const r = results[current];
    const safeScore = normalizeScore(score);

    r.answers.push(answer);
    r.scores.push(safeScore);
    r.verdicts.push(verdict);
    r.tips.push(tip);

    if (r.fs === null) {
      r.fs = safeScore;
    }

    r.rs = Math.max(r.rs ?? 0, safeScore);

    results = [...results];
  }

  $: totalFS = results.reduce((sum, r) => sum + (r.fs ?? 0), 0);

  $: totalRS = results.reduce((sum, r) => sum + (r.rs ?? 0), 0);
  $: isEnd = finished || current >= questions.length;

  // const answered = results.filter((r) => r.fs !== null).length;

  $: {
    if (talking) {
      startMentorTalk();

      if (!mouthInterval) {
        mouthInterval = setInterval(() => {
          mouthOpen = !mouthOpen;
        }, 85);
      }
    } else {
      stopMentorTalk();

      clearInterval(mouthInterval);
      mouthInterval = null;
      mouthOpen = false;
    }
  }

  function stopTypingSound() {
    if (typingSound) {
      typingSound.pause();
      typingSound.currentTime = 0;
    }
  }

  function finishTest() {
    interruptMentor();
    stopSound();
    stopTypingSound();
    finished = true;
    isFinished = true;
    endTime = Date.now();
    durationMs = endTime - startTime;
    // todo drugie zabija pierwsze
    playSound("fnaf", { volume: 0.6 });
    playSound("outro", { volume: 0.6 });
  }

  function skipQuestion() {
    if (isSubmitting || isLoading) return; // ⛔ safety
    // 🔥 zatrzymaj wszystko
    skipTyping = true;
    talking = false;
    stopTypingSound();
    stopSound();

    // ❌ NIE zapisujemy wyniku
    // ❌ NIE dajemy FS / RS
    // ❌ NIE odpalamy mentora

    // oznacz jako „pominięte” (opcjonalne)
    const r = results[realIndex];
    if (r.answers.length === 0) {
      r.answers.push(null);
      r.scores.push(0);
      r.verdicts.push("Pominięte");
      r.tips.push("Pytanie zostało pominięte");
      // fs / rs zostają null
    }

    nextQuestion();
  }

  function formatDuration(ms) {
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function getSection(index) {
    return (
      sectionRanges.find((s) => index >= s.from && index <= s.to)?.name || ""
    );
  }

  function goToQuestion(orderIdx) {
    // 🔥 ZAWSZE pozwalamy skoczyć
    stopTypingSound();
    talking = false;
    skipTyping = true;

    // reset stanu pytania
    answer = "";
    sources = [];

    verdict = null;
    tip = null;
    score = null;
    character = null;
    typedVerdict = "";
    typedTip = "";
    isSubmitting = false;
    isLoading = false;

    current = orderIdx;
  }

  function scoreToGrade(score) {
    if (score < 40) return "2.0";
    if (score < 50) return "3.0";
    if (score < 60) return "3.5";
    if (score < 70) return "4.0";
    if (score < 80) return "4.5";
    return "5.0";
  }

  $: grades = results
    .filter((r) => r.fs !== null)
    .map((r) => Number(scoreToGrade(r.fs)));

  $: avgGrade =
    grades.length > 0
      ? (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(1)
      : "-";

  $: avgGradeNum = avgGrade !== "-" ? Number(avgGrade) : null;

  const maxScore = results.length * 100;

  $: answeredFS = results.filter((r) => r.fs !== null);
  $: answeredRS = results.filter((r) => r.rs !== null);

  $: maxFS = answeredFS.length * 100;
  $: maxRS = answeredRS.length * 100;

  $: percentFS = maxFS ? Math.round((totalFS / maxFS) * 100) : 0;
  $: percentRS = maxRS ? Math.round((totalRS / maxRS) * 100) : 0;

  $: {
    if (
      score === null &&
      answer.length > 0 &&
      !isSubmitting &&
      !isLoading &&
      currentSound !== sounds.suspense
    ) {
      playSound("suspense", { loop: true, volume: 0.25 });
    }

    if (
      (score !== null || isSubmitting || isLoading || !answer) &&
      currentSound === sounds.suspense
    ) {
      stopSound();
    }
  }

  function interruptMentor() {
    mentorRunId++; // 🔥 UNIEWAŻNIA WSZYSTKO
    skipTyping = true; // ⛔ przerywa typeVerdict / typeTip
    talking = false; // ⛔ zamyka buzię
    stopMentorTalk();
  }

  async function retry() {
    interruptMentor(); // 🔥 KLUCZ
    stopSound();

    typedVerdict = "";
    sources = [];

    typedTip = "";
    score = null;
    isSubmitting = false;
    isLoading = false;
  }

  function nextQuestion() {
    if (isFinished) return;
    if (isAdvancing) return;
    isAdvancing = true;

    interruptMentor(); // 🔥 zamiast ręcznego gaszenia

    stopSound(); // 🔥 ważne
    playSound("letsPlay"); // 🔥

    // reset stanu pytania
    answer = "";
    verdict = null;
    tip = null;
    sources = [];

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
    // typingSound = new Audio("/sfx/type-2.mp3");
    // typingSound.volume = 0.2;

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopTypingSound();
      }
    });

    questionOrder = questions.map((_, i) => i);
    shuffle(questionOrder);

    results = questionOrder.map(() => ({
      answers: [],
      scores: [],
      verdicts: [],
      tips: [],
      fs: null,
      rs: null,
    }));
  });

  // async function submitToLeaderboard() {
  //   await fetch("/api/leaderboard/submit", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       nickname,
  //       totalFS,
  //       totalRS,
  //       percentFS,
  //       percentRS,
  //       avgGrade,
  //       durationMs,
  //       answered,
  //     }),
  //   });
  // }

  let leaderboard = [];
  onMount(async () => {
    const res = await fetch("/api/leaderboard/get");
    leaderboard = await res.json();
  });
  const topRS = () => [...leaderboard].sort((a, b) => b.total_rs - a.total_rs);

  const topFS = () => [...leaderboard].sort((a, b) => b.total_fs - a.total_fs);

  const fastest = () =>
    [...leaderboard]
      .filter((e) => e.questions_answered > 0)
      .sort(
        (a, b) =>
          a.duration_ms / a.questions_answered -
          b.duration_ms / b.questions_answered,
      );

  function startGame() {
    startTime = Date.now();
    unlockAudio();
    playSound("intro", { volume: 0.5 });
  }

  async function typeVerdict(text, runId) {
    skipTyping = false;
    typedVerdict = "";

    for (let i = 0; i < text.length; i++) {
      if (skipTyping || runId !== mentorRunId) return;

      typedVerdict += text[i];

      // if (typingSound.paused) {
      //   typingSound.currentTime = 0;
      //   typingSound.play();
      // }

      await new Promise((r) => setTimeout(r, 25));
    }
  }

  async function typeTip(text, runId) {
    skipTyping = false;
    typedTip = "";

    for (let i = 0; i < text.length; i++) {
      if (skipTyping || runId !== mentorRunId) return;

      typedTip += text[i];

      // if (typingSound.paused) {
      //   typingSound.currentTime = 0;
      //   typingSound.play();
      // }

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

    stopSound(); // 🔥 ucina suspense
    playSound("check", { volume: 0.5 });

    const runId = ++mentorRunId;

    isSubmitting = true;
    isLoading = true;

    userAnswer = answer;

    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: questions[realIndex],
          answer,
          mentor: {
            id: mentor.id,
            personality: mentor.personality,
            gradingBias: mentor.gradingBias,
          },
        }),
      });

      const data = await res.json();

      score = normalizeScore(data.score);
      character = mentor.label;
      sources = data.sources ?? [];

      typedVerdict = "";
      typedTip = "";

      talking = true;
      stopSound();

      data.tip += " Czujesz?";

      saveResult({
        answer,
        score,
        verdict: data.verdict,
        tip: data.tip,
      });

      if (scoreToGrade(score) >= 3.0) {
        playSound("win", { volume: 0.5 });
        if (scoreToGrade(score) == "5.0") {
          playSound("cheer", { volume: 0.5 });
        }
      } else {
        playSound("lose", { volume: 0.5 });
      }

      await typeVerdict(data.verdict, runId);
      await typeTip("💡 " + data.tip, runId);

      talking = false;
      typingSound.pause();
    } finally {
      isLoading = false; // ⛔ spinner off
    }
  }
</script>

{#if !audioUnlocked}
  <div class="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl text-lg"
      on:click={startGame}
    >
      Płynę na wyspe
    </button>
  </div>
{/if}

{#if !isFinished}
  <div
    class="fixed top-0 left-0 right-0 bg-zinc-900 text-white px-4 py-2 flex justify-between text-sm z-50"
  >
    <div>FS: {totalFS} pkt</div>
    <div>epstein AiSDland</div>
    <div>RS: {totalRS} pkt</div>
  </div>

  <div class="max-w-[520px] mx-auto mt-16 flex flex-col gap-4 px-2">
    <h2 class="text-lg font-semibold">
      Pytanie {current + 1}
    </h2>

    <p class="text-base leading-relaxed">
      {questions[realIndex]}
    </p>

    <div class="text-xs text-zinc-400 -mt-2 mb-2 tracking-wide normal-case">
      {getSection(realIndex)}
    </div>

    {#if score === null}
      <input
        type="text"
        on:focus={unlockAudio}
        bind:value={answer}
        on:keydown={(e) => {
          if (e.key === "Enter" && !isSubmitting && !isLoading) {
            checkAnswer();
          }
        }}
        placeholder="Twoja odpowiedź..."
        class="bg-zinc-950 border border-zinc-700 rounded-md px-3 py-2 text-base text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div class="flex gap-3 mt-4">
        <button
          on:click={() => {
            unlockAudio();
            checkAnswer();
          }}
          disabled={!answer || isSubmitting}
          class="h-[44px] flex-1 flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {#if isLoading}
            <span
              class="w-4 h-4 border-2 border-zinc-500 border-t-white rounded-full animate-spin"
            ></span>
            Myślę...
          {:else}
            Sprawdź
          {/if}
        </button>
        <button
          on:click={skipQuestion}
          disabled={isSubmitting || isLoading}
          class="px-4 py-2 rounded bg-gray-700 text-white
         disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Nie wiem
        </button>
      </div>
    {/if}

    <!-- NAWIGACJA PYTAŃ -->
    <div class="flex flex-wrap gap-2 mt-3">
      {#each questionOrder as realIdx, orderIdx}
        <button
          on:click={() => goToQuestion(orderIdx)}
          class="
        w-8 h-8 text-xs rounded-md font-semibold
        border transition
        flex items-center justify-center
        hover:scale-105
        {orderIdx === current
            ? 'border-blue-500 bg-blue-600 text-white'
            : results[orderIdx]?.fs === null
              ? 'border-zinc-700 bg-zinc-900 text-zinc-400'
              : results[orderIdx].fs < 40
                ? 'border-red-500 bg-red-600 text-white'
                : results[orderIdx].fs < 70
                  ? 'border-yellow-400 bg-yellow-400 text-black'
                  : 'border-green-500 bg-green-500 text-black'}
      "
          title={`Pytanie ${realIdx + 1}`}
        >
          {realIdx + 1}
        </button>
      {/each}
    </div>

    {#if score !== null}
      <div
        class="bg-zinc-900 text-zinc-100 px-4 py-3 rounded-md border-l-4"
        class:border-red-500={score < 40}
        class:border-yellow-400={score >= 40 && score < 70}
        class:border-green-500={score >= 70}
      >
        <strong class="text-zinc-400 block mb-1">Twoja odpowiedź:</strong>
        <p class="m-0">{userAnswer}</p>
      </div>

      <div
        class="bg-[#0f0f0f] text-zinc-100 rounded-xl border-2 p-4 transition-all"
        class:border-red-500={score < 40}
        class:border-yellow-400={score >= 40 && score < 70}
        class:border-green-500={score >= 70}
      >
        <div class="flex gap-4 items-start">
          <!-- TEKST -->
          <div class="flex-1">
            <div class="flex justify-between items-center mb-2">
              <strong>{character}</strong>

              <span
                class="text-sm font-bold px-3 py-1 rounded-full"
                class:bg-red-500={score < 40}
                class:bg-yellow-400={score >= 40 && score < 70}
                class:bg-green-500={score >= 70}
                class:text-white={score < 40}
                class:text-black={score >= 40}
              >
                {score}/100 ({scoreToGrade(score)})
              </span>
            </div>

            <p class="text-[1.05rem] mb-2">{typedVerdict}</p>
            <p class="italic opacity-85">{typedTip}</p>
          </div>

          <!-- AVATAR -->
          <div>
            <div
              class="w-[160px] h-[160px] flex items-center justify-center
         bg-black/20 rounded-md overflow-hidden"
            >
              <img
                src={mouthOpen ? mentor.avatarTalk : mentor.avatarIdle}
                class="w-full h-full object-cover image-rendering-pixelated"
              />
            </div>

            <div class="flex items-center justify-center gap-4 mt-2">
              <button
                on:click={prevMentor}
                class="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700"
              >
                ◀
              </button>

              <span class="text-xs text-zinc-400">
                {mentor.label}
              </span>

              <button
                on:click={nextMentor}
                class="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>

      {#if sources && sources.length > 0}
        <div
          class="bg-[#0c1624] border border-blue-900/50 rounded-xl p-4 mt-3 text-sm"
        >
          <div class="flex items-center gap-2 mb-3">
            <span class="text-blue-400 text-lg">📚</span>
            <strong class="text-blue-300 tracking-wide">
              Źródła wiedzy użyte do oceny
            </strong>
          </div>

          <div class="space-y-3">
            {#each sources as src, i}
              <div
                class="bg-black/30 rounded-md px-3 py-2 border-l-2 border-blue-500"
              >
                <div class="text-xs text-blue-400 mb-1">
                  [{i + 1}] {src.origin}
                </div>

                <p class="text-zinc-200 leading-relaxed italic">
                  „{src.excerpt}”
                </p>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <div
        class="bg-[#0b1d33] text-blue-100 border-l-4 border-blue-500 rounded-md px-4 py-3 text-sm leading-relaxed"
      >
        ℹ️ Ocena ≥ 75 oznacza, że odpowiedź jest
        <strong class="text-white">wystarczająco poprawna egzaminacyjnie</strong
        >. Mentor bywa zbyt drobiazgowy przy wyższych ocenach.
      </div>

      <!-- <button on:click={nextQuestion}>Dalej</button> -->
      <div class="flex gap-2">
        <button
          on:click={retry}
          class="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-md py-2"
        >
          Powtórz
        </button>

        <button
          on:click={() => {
            unlockAudio();
            nextQuestion();
          }}
          class="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white rounded-md py-2"
        >
          Dalej
        </button>
      </div>
    {/if}

    <div class="mt-8 flex justify-center">
      <button
        on:click={() => {
          unlockAudio();
          finishTest();
        }}
        class="text-red-400 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white"
      >
        Zakończ test
      </button>
    </div>
  </div>
{:else}
  <div
    class="max-w-[1400px] mx-auto px-4 sm:px-6 py-6
         grid gap-6
         grid-cols-1
         lg:grid-cols-[260px_1fr_260px]"
  >
    <!-- LEWY -->
    <aside
      class="space-y-6
         lg:sticky lg:top-24 lg:self-start
         max-h-none lg:max-h-[calc(100vh-6rem)]
         flex flex-col order-2 lg:order-1"
    >
      <LeaderboardBox title="⚡ Najszybsi">
        {#each fastest() as e}
          <Row {e} value={`${Math.round(e.duration_ms / 1000)}s`} />
        {/each}
      </LeaderboardBox>

      <LeaderboardBox title="🧠 FS">
        {#each topFS() as e}
          <Row {e} value={`${e.total_fs}`} />
        {/each}
      </LeaderboardBox>
    </aside>

    <main class="order-1 lg:order-2">
      <div class="max-w-3xl mx-auto mt-8">
        <h2 class="text-xl font-bold mb-4">Podsumowanie</h2>

        {#if avgGradeNum !== null && avgGradeNum <= 3.0}
          <div class="mt-6 flex flex-col items-center gap-3">
            <img src="/gowno.jpeg" alt="Słaby wynik" class="w-48 opacity-90" />
          </div>
        {:else if avgGradeNum > 3.0}
          <div class="mt-6 flex flex-col items-center gap-3">
            <img src="/kino.jpg" alt="Super wynik" class="w-48 opacity-90" />
          </div>
        {/if}

        <div>Czas: {formatDuration(durationMs)}</div>
        <br />

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <!-- FS -->
          <div class="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
            <div class="text-sm text-zinc-400 mb-1">FS (First Score)</div>
            <div
              class="text-2xl font-bold"
              class:text-red-400={percentFS < 40}
              class:text-yellow-400={percentFS >= 40 && percentFS < 70}
              class:text-green-400={percentFS >= 70}
            >
              {totalFS}
              <span class="text-sm text-zinc-400">({percentFS}%)</span>
            </div>
          </div>

          <!-- RS -->
          <div class="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
            <div class="text-sm text-zinc-400 mb-1">RS (Retry Score)</div>
            <div
              class="text-2xl font-bold"
              class:text-red-400={percentRS < 40}
              class:text-yellow-400={percentRS >= 40 && percentRS < 70}
              class:text-green-400={percentRS >= 70}
            >
              {totalRS}
              <span class="text-sm text-zinc-400">({percentRS}%)</span>
            </div>
          </div>

          <!-- Procent RS -->
          <div class="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
            <div class="text-sm text-zinc-400 mb-1">Wynik procentowy (FS)</div>
            <div
              class="text-2xl font-bold"
              class:text-red-400={percentFS < 40}
              class:text-yellow-400={percentFS >= 40 && percentFS < 70}
              class:text-green-400={percentFS >= 70}
            >
              {percentFS}%
            </div>
          </div>

          <!-- Średnia ocena -->
          <div class="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
            <div class="text-sm text-zinc-400 mb-1">Średnia ocena</div>
            <div class="text-2xl font-bold text-blue-400">
              {avgGrade}
            </div>
          </div>
        </div>

        {#if !submitted}
          <div class="mt-6 flex flex-col sm:flex-row gap-2">
            <input
              bind:value={nickname}
              placeholder="Twój nick"
              class="flex-1 bg-zinc-800 text-zinc-100 placeholder-zinc-400
         border border-zinc-700 rounded px-3 py-2"
            />

            <button
              on:click={submitScore}
              disabled={!nickname}
              class="bg-green-600 hover:bg-green-700 px-4 rounded"
            >
              Zapisz wyniki
            </button>
          </div>
        {:else}
          <div class="text-green-400 mt-4">✔ Wynik zapisany</div>
        {/if}

        <div
          class="mt-4 mb-4 bg-[#0b1d33] text-blue-100 border-l-4 border-blue-500 rounded-md px-4 py-3 text-sm leading-relaxed"
        >
          ℹ️ <b>Punkty FS i RS</b><br /><br />

          <b>FS (First Score)</b> – to wynik przyznany
          <u>za pierwszą odpowiedź</u>
          na każde pytanie. Odzwierciedla Twoją wiedzę „na wejściu”, bez poprawek
          i retry.<br /><br />

          <b>RS (Retry Score)</b> – to <u>najlepszy wynik</u>, jaki uzyskałeś
          dla danego pytania, niezależnie od liczby prób. Pokazuje, do jakiego
          poziomu byłeś w stanie dojść.<br /><br />

          <i>
            Podobnie jak przy ocenach mentora, wysokie wyniki (zwłaszcza 90+)
            mogą być zaniżone przez nadmierną drobiazgowość oceny. Traktuj je
            jako wskaźnik, a nie absolutną prawdę.
          </i>
        </div>

        <details class="mt-6">
          <summary
            class="cursor-pointer text-sm text-zinc-400 hover:text-zinc-200"
          >
            📚 Zobacz źródła wiedzy
          </summary>

          <div class="mt-3">
            <KnowledgeBrowser />
          </div>
        </details>

        <div class="space-y-6">
          {#each results as r, i}
            <div class="bg-zinc-900 border border-zinc-700 rounded-xl p-4">
              <!-- HEADER -->
              <div class="flex justify-between items-center mb-3">
                <div
                  class="font-semibold text-white text-sm sm:text-base wrap-break-word max-w-full"
                >
                  {i + 1}. {questions[i]}
                </div>

                <div class="flex gap-2 text-sm">
                  {#if r.fs === null && r.rs === null}
                    <span class="text-gray-400 italic">Pominięte</span>
                  {/if}

                  <!-- FS -->
                  <span
                    class="px-2 py-1 rounded font-semibold text-sm
         bg-zinc-700 text-zinc-300"
                    class:bg-red-500={r.fs !== null && r.fs < 40}
                    class:bg-yellow-400={r.fs !== null &&
                      r.fs >= 40 &&
                      r.fs < 70}
                    class:bg-green-500={r.fs !== null && r.fs >= 70}
                    class:text-white={r.fs !== null && r.fs < 40}
                    class:text-black={r.fs !== null && r.fs >= 40}
                  >
                    FS: {r.fs ?? "—"}
                  </span>

                  <!-- RS -->
                  <span
                    class="px-2 py-1 rounded font-semibold text-sm
         bg-zinc-700 text-zinc-300"
                    class:bg-red-500={r.rs !== null && r.rs < 40}
                    class:bg-yellow-400={r.rs !== null &&
                      r.rs >= 40 &&
                      r.rs < 70}
                    class:bg-green-500={r.rs !== null && r.rs >= 70}
                    class:text-white={r.rs !== null && r.rs < 40}
                    class:text-black={r.rs !== null && r.rs >= 40}
                  >
                    RS: {r.rs ?? "—"}
                  </span>
                </div>
              </div>

              <!-- ODPOWIEDZI -->
              {#if r.answers.length > 0}
                <div class="mb-3">
                  <div class="text-xs text-zinc-400 mb-1">
                    Twoje odpowiedzi:
                  </div>

                  <ul class="space-y-1 text-sm">
                    {#each r.answers as a, idx}
                      <li
                        class="flex justify-between items-center bg-zinc-800 rounded px-3 py-1"
                      >
                        <span class="text-zinc-100">{a}</span>

                        <span
                          class="text-xs font-semibold px-2 py-0.5 rounded"
                          class:bg-red-500={r.scores[idx] < 40}
                          class:bg-yellow-400={r.scores[idx] >= 40 &&
                            r.scores[idx] < 70}
                          class:bg-green-500={r.scores[idx] >= 70}
                          class:text-white={r.scores[idx] < 40}
                          class:text-black={r.scores[idx] >= 40}
                        >
                          {r.scores[idx]}/100
                        </span>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}

              <!-- OSTATNI VERDICT -->
              {#if r.verdicts.length > 0}
                <div
                  class="bg-[#0f0f0f] border-l-4 border-blue-500 rounded-md px-3 py-2 text-sm text-zinc-200"
                >
                  <b class="text-zinc-400">Ostatni verdict mentora:</b><br />
                  {r.verdicts.at(-1)}
                </div>
              {/if}
            </div>
          {/each}
        </div>

        <!-- <div class="mt-10 border-t border-zinc-700 pt-4">
          <h3 class="text-sm text-zinc-400 mb-2">Admin</h3>

          <div class="flex flex-col sm:flex-row gap-2">
            <input
              type="password"
              bind:value={adminPass}
              placeholder="Hasło"
              class="bg-zinc-800 text-zinc-100 placeholder-zinc-400
         border border-zinc-700 rounded px-3 py-2"
            />

            <button
              on:click={resetLeaderboard}
              class="bg-red-600 hover:bg-red-700 px-4 rounded"
            >
              Reset
            </button>
          </div>
        </div> -->
      </div>
    </main>

    <!-- PRAWY -->
    <aside
      class="space-y-6
         lg:sticky lg:top-24 lg:self-start
         max-h-none lg:max-h-[calc(100vh-6rem)]
         flex flex-col order-3 lg:order-3"
    >
      <LeaderboardBox title="🔥 RS">
        {#each topRS() as e}
          <Row {e} value={`${e.total_rs}`} />
        {/each}
      </LeaderboardBox>

      <!-- PLACEHOLDER -->
      <div
        class="h-[220px] rounded-xl border border-dashed border-zinc-700 opacity-40
              flex items-center justify-center text-zinc-500 text-sm"
      >
        —
      </div>
    </aside>
  </div>
{/if}

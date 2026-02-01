<script>
  import KnowledgeBrowser from "$lib/components/KnowledgeBrowser.svelte";
  import LeaderboardBox from "$lib/components/LeaderboardBox.svelte";
  import Row from "$lib/components/Row.svelte";
  import SolutionBlock from "$lib/components/SolutionBlock.svelte";

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
    "Jakie złozonosci obliczeniowe mają poznane algorytmy? (sortowania)",
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
    "Jakie złozonosci mają poznane na wykładzie algorytmy? (selekcja i wyszukiwanie)",
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
    "Jakie złozonosci mają poznane algorytmy poszukiwania wzorcow? (przeszukiwanie tekstów)",
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
      realLabel: "Jeffrey Epstein",
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
      realLabel: "Dziewczynka z anime",
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
      realLabel: "Walter White z Breaking Bad",
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
      realLabel: "Ferdek Kiepski",
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
      realLabel: "Streamer IShowSpeed",
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
      realLabel: "Złomek z filmu Auta",
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
      realLabel: "Freddy Fazbear z FNAF",
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
      realLabel: "Lumberjack z Clash of Clans (pijak)",
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
      id: "firtana",
      label: "🤖 Flirtana",
      realLabel: "Firtana z youtube oi oi a eye eye - belgijczyk",
      avatarIdle: "/mentors/firtana_idle.png",
      avatarTalk: "/mentors/firtana_talk.png",
      talkSound: "/mentors/firtana_talk.mp3",
      personality: `
      memiczny belgijczyk ze smieszna twarza
`,
      gradingBias: "chill",
    },
    {
      id: "skeleton",
      label: "🛡️ RAR",
      realLabel: "Szkielet walący w tarcze mem RARRR",
      avatarIdle: "/mentors/skeleton_idle.png",
      avatarTalk: "/mentors/skeleton_talk.png",
      talkSound: "/mentors/skeleton_talk.mp3",
      personality: `he defendsively approaches all answers like with a shield`,
      gradingBias: "aggressive",
    },
    {
      id: "miku",
      label: "👧 Michalina",
      realLabel: "Hatsune Miku",
      avatarIdle: "/mentors/miku_idle.webp",
      avatarTalk: "/mentors/miku_talk.webp",
      talkSound: "/mentors/miku_talk.mp3",
      personality: `she sings`,
      gradingBias: "nice and kind",
    },
    {
      id: "cat",
      label: "🌭 Pies",
      realLabel: "Kot",
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
  // klucz = realIndex pytania
  const solutions = [
    //
    // 1
    //
    {
      modelAnswer:
        "Algorytm to zestaw instrukcji opisujących, jak wykonać pewne zadanie, krok o kroku, w określonej kolejności",
      images: [
        {
          src: "/sols/algo.png",
          note: "Przepis na jajecznice",
        },
        {
          src: "/sols/schemat.png",
          note: "Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer:
        "Struktura danych to sposób na uporządkowanie i przechowanie typów podstawowych i złożonych (w pamięci komputera)",
      images: [
        {
          src: "/sols/struktura.png",
          note: "Lista struktur danych",
        },
      ],
    },
    {
      modelAnswer: `1. Poprawność (Działa wraz z założeniami); 2. Skończoność (Ma określony
początek i koniec); 3. Jednoznaczność Za każdym razem wykonywany jest tak
samo); 4. Efektywność (Jest zbudowany w najlepszy możliwie sposób w ramach
założeń)`,
      images: [
        {
          src: "/sols/cechy.png",
          note: "Cechy algorytmu",
        },
      ],
    },
    {
      modelAnswer:
        "Lista kroków, Pseudokod, Schemat blokowy, Program komputerowy",
      images: [
        {
          src: "/sols/zapis.png",
        },
        {
          src: "/sols/schemat.png",
          note: "Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer:
        "Struktury danych dzielimy na liniowe, które same w sobie dzielimy na statyczne (np. tablica) i dynamiczne (np. stos), oraz nieliniowe (np. drzewo)",
      images: [],
    },
    {
      modelAnswer:
        "Jest to sprawdzenie wydajności algorytmu poprzez zwrócenie uwagi na elementy takie jak: pobór zasobów, prędkość wykonania, złożoność czasowa",
      images: [],
    },
    {
      modelAnswer:
        "Strzałki, blok graniczny, blok wejścia-wyjścia, blok operacyjny, blok warunkowy, blok podprogramu, blok zdefiniowanego fragmentu, łącznik",
      images: [
        {
          src: "/sols/el_sch_blok.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Elementy schematu blokowego",
        },
      ],
    },
    //
    // 2
    //
    {
      modelAnswer: `By znaleźć największy wspólny dzielnik dwóch liczb całkowitych, w jego
zmodyfikowanej wersji, możemy znaleźć najmniejszą wspólną wielokrotność
dwóch liczb`,
      images: [
        {
          src: "/sols/euklides_pseudo.png",
          link: "/assets/wyklady/Algorytmy 2.pdf",
          note: "Algorytm Euklidesa - Iteracyjny - Pseudokod",
        },
        {
          src: "/sols/euklides_schemat.png",
          link: "/assets/wyklady/Algorytmy 2.pdf",
          note: "Algorytm Euklidesa - Iteracyjny - Schemat blokowy",
        },
        {
          src: "/sols/euk_r_pseudo.png",
          link: "/assets/wyklady/Algorytmy 2.pdf",
          note: "Algorytm Euklidesa - Rekurencyjny - Pseudokod",
        },
        {
          src: "/sols/euk_r_blok.png",
          link: "/assets/wyklady/Algorytmy 2.pdf",
          note: "Algorytm Euklidesa - Rekurencyjny - Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `Iteracja to powtarzanie danego segmentu kodu aż do spełnienia danego
wymogu, rekurencja to wywoływanie funkcji przez samą siebie z innymi
danymi, aż do spełnienia danego wymogu`,
      images: [
        {
          src: "/sols/iter_rekur.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Iterancja vs rekurencja",
        },
      ],
    },
    {
      modelAnswer: `Większe zużycie pamięci operacyjne, możliwość przepełnienia stosu`,
      images: [],
    },
    {
      modelAnswer: `Otrzymujemy listę liczb pierwszych`,
      images: [
        {
          src: "/sols/sito_pseudo.png",
          link: "/assets/wyklady/Algorytmy 2.pdf",
          note: "Sito Erastotenesa - Pseudokod",
        },
        {
          src: "/sols/sito_schemat.png",
          link: "/assets/wyklady/Algorytmy 2.pdf",
          note: "Sito Erastotenesa - Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `Kolejne elementy ciągu Fibbonaciego powstają poprzez zsumowanie poprzednich dwóch elementów`,
      images: [
        {
          src: "/sols/fib_pseudo.png",
          link: "/assets/wyklady/Algorytmy 2.pdf",
          note: "Fibonacci - Pseudokod",
        },
        {
          src: "/sols/fib_pseudo.png",
          link: "/assets/wyklady/Algorytmy 2.pdf",
          note: "Fibonacci - Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `Może być wykonany rekurencyjnie i iteracyjnie, lecz wersja iteracyjna jest wydajniesza`,
      images: [],
    },
    //
    // 3
    //
    {
      modelAnswer: `Jest to system zero jedynkowy, inaczej dwójkowy, bardzo prosty do
zrozumienia przez komputer, podobnie do systemu dziesiętnego jesteśmy w
stanie zapisywać liczby przy jego pomocy`,
      images: [],
    },
    {
      modelAnswer: `Wyznaczamy modulo przez 2 danej liczby, oraz wynik dzielenia przez 2
zaokrąglonej w dół, robimy to aż nie uzyskamy 0 dla liczby dzielonej, wynik
zapisany w systemie binarnym, to reszta z dzielenia, pierwszym znakiem w
wartości binarnej jest ostatnia reszta, drugim, przed ostatnia, itd.`,
      images: [
        {
          src: "/sols/dec2bin_pseudo.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "dec2bin - Pseudokod",
        },
        {
          src: "/sols/dec2bin_wynik.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "dec2bin - Przykład",
        },
        {
          src: "/sols/dec2bin_schemat.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "dec2bin - Schemat blokowy",
        },
        {
          src: "/sols/dec2bin_tablica_pseudo.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "dec2bin (tablica) - Pseudokod",
        },
        {
          src: "/sols/dec2bin_tablica_wynik.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "dec2bin (tablica) - Przykład",
        },
        {
          src: "/sols/dec2bin_tablica_schemat.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "dec2bin (tablica) - Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `Możemy to zrobić poprzez wykorzystanie algorytmu bin2dec, lub ręcznego
obliczenia wyniku`,
      images: [
        {
          src: "/sols/bin2dec_pseudo.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "bin2dec - Pseudokod",
        },
        {
          src: "/sols/bin2dec_przyklad.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "bin2dec - Przykład",
        },
        {
          src: "/sols/bin2dec_schemat.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "bin2dec - Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `Jest to system który ma na celu skrócić długie liczby binarne lub decymalne,
spotykamy go w adresach IPv6, stylach CSS czy adresach rejestrów w
mikroprocesorach`,
      images: [],
    },
    {
      modelAnswer: `0-9, no i A dla 10, B dla 11, C dla 12, D dla 13, E dla 14, F dla 15`,
      images: [],
    },
    {
      modelAnswer: `Podobnie jak w dec2bin, obliczamy resztę z dzielenia naszej wartości przez
16, oraz dzielimy ów wartość przez 16 i zaokrąglamy w dół, dopuki nie
otrzymamy 0 dla liczby dzielonej, wynik zapisany w systemie
hexadecymalnym to reszty z dzielenia, pierwszym znakiem wartości
heksadecymalnej jest ostatnia reszta, drugim, przed ostatnia, itd.`,
      images: [
        {
          src: "/sols/dec2hex_gethex_pseudo.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "dec2hex - gethex - pseudokod",
        },
        {
          src: "/sols/dec2hex_gethex_schemat.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "dec2hex - gethex - schemat blokowy",
        },
        {
          src: "/sols/dec2hex_pseudo.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "dec2hex - pseudokod",
        },
        {
          src: "/sols/dec2hex_przyklad.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "dec2hex - przykład",
        },
        {
          src: "/sols/dec2hex_schemat.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "dec2hex - schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `Jest to tablica która opisuje wartości różnych znaków w systemie decymalnym`,
      images: [
        {
          src: "/sols/ascii.png",
          link: "/assets/wyklady/Algorytmy 3.pdf",
          note: "Tablica ASCII",
        },
      ],
    },
    //
    // 4+5
    //
    {
      modelAnswer: `Notacja dużego O to sposób na wyrażenie złożoności czasowej danego
algorytmu, nie jest ona wyrażana poprzez średni czas, tylko poprzez tępo
wzrostu złożoności w zależności od ilości danych wejściowych`,
      images: [],
    },
    {
      modelAnswer: `
Polega na porównaniu dwóch sąsiednich wartości w zbiorze, jeżeli ich
kolejność nie jest odpowiednia, dochodzi do zamiany ich indeksów`,
      images: [
        {
          src: "/sols/babel.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Sortowanie bąbelkowe",
        },
      ],
    },
    {
      modelAnswer: `
Pierwszym sposobem, jest dodanie wartości bool, która będzie sprawdzała
czy w ostatniej pętli doszło do jakichkolwiek zmian, jeżeli nie; zakończy
Algorytmy 4  5 *16działanie algorytmu. Drugim sposobem jest skracanie ilości przejść przez
zbiór o 1, po każdym przejściu, ponieważ nie musimy sprawdzać czy liczby już
posortowane, znajdują się w odpowiednim miejscu`,
      images: [
        {
          src: "/sols/babel.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Sortowanie bąbelkowe",
        },
      ],
    },
    {
      modelAnswer: `
Wybieramy co kolejne liczby w zbiorze, i szuka jego miejsca pomiędzy
posortowanymi wartościami, po czym wstawia je w odpowiednie miejsce,
zgodne z założeniami sortowania`,
      images: [
        {
          src: "/sols/wstawianie.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Insertion sort",
        },
      ],
    },
    {
      modelAnswer: `
Przechodzimy przez całą tablice i szuakmy elementu
największego/najmniejszego, po czym wstawiamy je w odpowiednie miejsce,
zgodnie z założeniami algorytmu`,
      images: [
        {
          src: "/sols/selection.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Selection sort",
        },
      ],
    },
    {
      modelAnswer: `- Sortowanie bąbelkowe – złożoność obliczeniowa O(n²)
- Sortowanie przez wstawianie – złożoność obliczeniowa O(n²)
- Sortowanie przez wybór – złożoność obliczeniowa O(n²)
- Sortowanie szybkie (QuickSort) – średnia i najlepsza złożoność O(n·log n), w pesymistycznym przypadku O(n²)
- Sortowanie przez scalanie (MergeSort) – złożoność obliczeniowa O(n·log n)
Wszystkie algorytmy o złożoności O(n²) są przeznaczone głównie do małych zbiorów danych, natomiast algorytmy o złożoności O(n·log n) są efektywne dla dużych zbiorów danych.
`,
      images: [],
    },
    {
      modelAnswer: `
Algorytm korzysta z zasady ‘dziel i zwyciężajʼ, wybieramy pivot, po czym
dzielimy tablicę na elementy mniejsze i większe od pivotu, ten proces jest
rekurencyjny, wykonywany aż wszystkie liczby znajdą się w odpowiednim
miejscu, do sortowania dochodzi podczas rozdzielania na elementy mniejsze i
większe od pivotu`,
      images: [
        {
          src: "/sols/qs_kroki.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "QuickSort - Kroki",
        },
        {
          src: "/sols/qs_schemat.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "QuickSort - Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `
Podobnie do QuickSort, używana jest metoda ‘dziel i zwyciężajʼ, lecz tutaj cała
tablica jest dzielona na pół rekurencyjnie, aż do otrzymania samych zbiorów
jednoelementowych, do sortowania dochodzi w chwili scalania
jednoelementowych zbiorów do utworzenia zbioru posortowanego`,
      images: [
        {
          src: "/sols/merge_kroki.png",
          link: "/assets/wyklady/Algorytmy 4+5.pdf",
          note: "Merge Sort - Kroki",
        },
      ],
    },
    {
      modelAnswer: `
Możemy to zrobić, poprzez upewnienie się że pivot nigdy nie jest,
największą/najmniejszą wartością w zbiorze, w zależności od założeń
algorytmu, jednym z sposobów na to może być obliczenie mediany kilku
wartości`,
      images: [
        {
          src: "/sols/merge_kroki.png",
          link: "/assets/wyklady/Algorytmy 4+5.pdf",
          note: "Merge Sort - Kroki",
        },
        {
          src: "/sols/qs_kroki.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "QuickSort - Kroki",
        },
        {
          src: "/sols/qs_schemat.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "QuickSort - Schemat blokowy",
        },
      ],
    },
    //
    // 6
    //
    {
      modelAnswer: `
Wyszukiwanie to znalezienie pozycji elementu o danej wartości, selekcja to
znalezienie elementu kʼtego, np. k najmniejszy element w zbiorze`,
      images: [],
    },
    {
      modelAnswer: `
Algorytm ten polega na przeszukaniu całego zbioru, element po elemencie,
porównując podczas każdego kroku wartość elementu do wyszukiwanej
wartości`,
      images: [
        {
          src: "/sols/lina_pseudo.png",
          link: "/assets/wyklady/Algorytmy 6.pdf",
          note: "Wyszukiwanie liniowe - pseudokod",
        },
        {
          src: "/sols/lina_schemat.png",
          link: "/assets/wyklady/Algorytmy 6.pdf",
          note: "Wyszukiwanie liniowe - schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `Algorytm ten zakłada zbiór z góry posortowany, wykorzystuje zasadę ‘dziel i
zwyciężajʼ, zbiór zawsze dzielimy na pół, i szukamy rekurencyjnie w
odpowiednim podzbiorze
`,
      images: [
        {
          src: "/sols/bin_pseudo.png",
          link: "/assets/wyklady/Algorytmy 6.pdf",
          note: "Wyszukiwanie binarne - pseudokod",
        },
      ],
    },
    {
      modelAnswer: `QuickSort, dokładniej to zasada wybrania pivotu, do podzielenia zbioru na
elementy od niego mniejsze i większe
`,
      images: [
        {
          src: "/sols/hoare_kroki.png",
          link: "/assets/wyklady/Algorytmy 6.pdf",
          note: "Hoare - Kroki",
        },
        {
          src: "/sols/hoare_kod_1.png",
          link: "/assets/wyklady/Algorytmy 6.pdf",
          note: "Hoare - Kod (1)",
        },
        {
          src: "/sols/hoare_kod_2.png",
          link: "/assets/wyklady/Algorytmy 6.pdf",
          note: "Hoare - Kod (2)",
        },
        {
          src: "/sols/hoare_przyklad.png",
          link: "/assets/wyklady/Algorytmy 6.pdf",
          note: "Hoare - Przykład: Szukanie 2-go elementu w zbiorze [9,3,2,4,5,0]",
        },
      ],
    },
    {
      modelAnswer: `Rekurencyjnie wybieramy pivot i dzielimy zbiór na elementy większe i
mniejszę od pivotu, rekurencja jest skończona gdy pozycja pivotu będzie
równa k`,
      images: [],
    },
    {
      modelAnswer: `Zamiast losowego pivotu, dzielimy nasz zbiór na możliwie 5 elementowe
podzbiory, i wyliczamy mediane median ów podzbiorów, ta wartość staje się
naszym pivotem`,
      images: [
        {
          src: "/sols/magic_kroki.png",
          link: "/assets/wyklady/Algorytmy 6.pdf",
          note: "Magiczne Piątki - Kroki",
        },
      ],
    },
    {
      modelAnswer: `Ponieważ podzbiory 3 elementowe mają zbyt mała reprezentatywność, co
może prowadzić do zwiększenia złożoności. Podzbiory 7 elementowe zwykle
wymagają zbyt dużo obliczeń do obliczenia median`,
      images: [],
    },
    {
      modelAnswer: `- Wyszukiwanie liniowe – O(n)
- Wyszukiwanie binarne – O(log n)
- Selekcja naiwna (sortowanie + wybór) – O(n log n)
- Algorytm Hoare’a (Quickselect)
    * średnio: O(n)
    * pesymistycznie: O(n²)
- Algorytm magicznych piątek (BFPRT) – O(n)
`,
      images: [],
    },
    {
      modelAnswer: `Przykładowo, algorytmy selekcji możemy wykorzystać do filtrowania danych,
a algorytmy wyszukiwania do przeszukiwania baz danych
`,
      images: [],
    },
    //
    // 7+8
    //
    {
      modelAnswer: `Jest to organizacja, sposób zarządzania i format przechowywania danych
`,
      images: [],
    },
    {
      modelAnswer: `Definiowana przez ‘structʼ, jest to niehomogeniczna struktura danych,
pozwalająca na definiowanie własnych typów danych składających się z
różnych zmiennych`,
      images: [],
    },
    {
      modelAnswer: `Homogeniczna struktura danych, pozwalająca na zapiyswanie w niej tylko
jednego typu wartości. Jej zaletami są uproszczenie struktury programu i
indeksy, jej wadami są min: konieczność rezerwacji pamięci w momencie jej
utworzenia, trudności w zmianie jej rozmiaru oraz możliwość przekroczenia jej
granicy`,
      images: [],
    },
    {
      modelAnswer: `By dodać element, musimy zmienić indeksy elementów w liście, tak by
elementy znajdujące się po nowo wprowadzonym elemencie, miały indeks
większe o 1, po czym wstawiamy nasz nowy węzeł w odpowiedni indeks,
wypełniamy go danymi, i łączymy wskaźniki sąsiadujących elementów do
nowego węzła, tak by kierowały na następny i poprzedni w odpowiedni
sposób. By usunąć element, musimy pierw zmienić wskaźniki elementów
sąsiadujących w taki sposób by wskazywały na siebie, po czym usunąć nasz
węzeł, i zmienić indeksy elementów po nim o -1`,
      images: [
        {
          src: "/sols/lista.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Lista",
        },
      ],
    },
    {
      modelAnswer: `Wszystkie trzy są typami listy, przechowują jeden typ danych, ich elementy
nie muszą być przechowywane blokowo w pamięci. Kolejka różni się tym, że
jest strukturą danych First In, First out, ogranicza dostęp do danych, jak i
pozwala tylko na dodawanie elementów do końca listy, i pobierania ich z
początku, jak i posiada możliwość wykorzystania priorytetu. Stos różni się
tym, że jest strukturą danych Last In, First Out, zezwala on na dodawanie i
odejmowanie elementów tylko z jego końca`,
      images: [
        {
          src: "/sols/stos.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Stos",
        },
        {
          src: "/sols/stos_2.png",
          link: "/assets/opracowanie_AISD_wyklad.pdf",
          note: "Stos (2)",
        },
        {
          src: "/sols/kolejka.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Kolejka",
        },
        {
          src: "/sols/lista.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Lista",
        },
      ],
    },
    {
      modelAnswer: `Przykładowymi zastosowaniami stosu jest między innymi: stos wywołań,
odwrotna notacja polska jak i akcja ctrl+z. Przykładowymi zastosowaniami
kolejki są między innymi: zarządzanie zadaniami i wątkami w systemach
operacyjnych, kolejki zadań w aplikacji, routing pakietów jak i kolejka
drukowania`,
      images: [
        {
          src: "/sols/stos.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Stos",
        },
        {
          src: "/sols/stos_2.png",
          link: "/assets/opracowanie_AISD_wyklad.pdf",
          note: "Stos (2)",
        },
        {
          src: "/sols/kolejka.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Kolejka",
        },
      ],
    },
    {
      modelAnswer: `Odwrócona Notacja Polska, to notacja postfiksowa, czyli zapis operatorów PO
liczbach`,
      images: [
        {
          src: "/sols/onp_kroki_1.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "ONP - Kroki (1)",
        },
        {
          src: "/sols/onp_kroki_2.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "ONP - Kroki (2)",
        },
        {
          src: "/sols/onp_schemat_1.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "ONP - Schemat blokowy (1)",
        },
        {
          src: "/sols/onp_schemat_2.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "ONP - Schemat blokowy (2)",
        },
        {
          src: "/sols/onp_wartosci_kroki.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "ONP - Obliczanie wartości - Kroki",
        },
      ],
    },
    {
      modelAnswer: `Dodaje informację o ważności elementu, czyli wartość priorytetu, tak samo jak
w liście, elementy są dodawane do końca, lecz jeżeli mają wyższy priorytet od
elementów przed nim, zmieniają miejsce aż napotkają element z wyższym
priorytetem, lub zajmą pierwsze miejsce`,
      images: [
        {
          src: "/sols/kolejka.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Kolejka",
        },
      ],
    },
    {
      modelAnswer: `Lista jednokierunkowa to struktura danych, w której każdy element (węzeł) zawiera dane oraz wskaźnik tylko na **następny** element listy, co umożliwia poruszanie się wyłącznie w jednym kierunku.
Lista dwukierunkowa to struktura danych, w której każdy element zawiera dane oraz **dwa wskaźniki**: na element następny i poprzedni, co umożliwia poruszanie się po liście w obu kierunkach.
`,
      images: [
        {
          src: "/sols/lista.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Lista",
        },
      ],
    },
    {
      modelAnswer: `Stos jest wykorzystywany do przetrzymywania operatorów, przy zamianie na
notacje postfiksową, lub do obliczania wartości liczby, przy obliczaniu
wartości zapisanej w notacji postfiksowej`,
      images: [
        {
          src: "/sols/stos.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Stos",
        },
        {
          src: "/sols/stos_2.png",
          link: "/assets/opracowanie_AISD_wyklad.pdf",
          note: "Stos (2)",
        },
        {
          src: "/sols/onp_kroki_1.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "ONP - Kroki (1)",
        },
        {
          src: "/sols/onp_kroki_2.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "ONP - Kroki (2)",
        },
        {
          src: "/sols/onp_schemat_1.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "ONP - Schemat blokowy (1)",
        },
        {
          src: "/sols/onp_schemat_2.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "ONP - Schemat blokowy (2)",
        },
        {
          src: "/sols/onp_wartosci_kroki.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "ONP - Obliczanie wartości - Kroki",
        },
      ],
    },
    {
      modelAnswer: `Węzeł - dane (wpisane w kołach przy zapisie graficznym).
Krawędź - połączenie dwóch węzłów, oraz ich hierarchia.
Korzeń - pierwszy węzeł.
Dzieci - węzły wychodzące z węzła o wyższej hierarchi.
Rodzic - węzeł z którego wychodzą inne węzły.
Liść - węzeł bez dzieci.
Węzeł wewnętrzny - węzeł posiadający dzieci.
Ścieżka - ciąg węzłów połączonych krawędziami, jej długość to ilość krawędzi
pomiędzy dwoma elementami.
Poziom węzła - długość ścieżki od węzła do korzenia.
Wysokość drzewa - maksymalny poziom węzła.
Drzewo binarne - drzewo w którym każdy węzeł może mieć maksymalnie 2
dzieci.
Drzewo binarne kompletne - drzewo binarne których wszystkie węzły poza
ostatnimi mają po 2 dzieci, na ostatnim poziomie węzły są zapełnione od lewej
strony do prawej`,
      images: [
        {
          src: "/sols/drzewbin.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Drzewo binarne (1)",
        },
        {
          src: "/sols/drzewo.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "Drzewo binarne (2)",
        },
        {
          src: "/sols/drzewbin2.png",
          link: "/assets/opracowanie_AISD_wyklad.pdf",
          note: "Drzewo binarne (3)",
        },
      ],
    },
    {
      modelAnswer: `Sterta, inaczej stóg lub kopiec, to specjalny typ struktury drzewiastej. Jest to
kompletne drzewo binarne, uporządkowane lokalnie.
Dodajemy elementy do najwyższego węzła po lewej stronie, aż będzie
posiadał 2 dzieci, jeżeli nowo dodany element jest większy od rodzica,
dochodzi do zamiany miejsc aż odpowiednia kolejność zostanie odzyskana.
Usuwamy elementy z sterty poprzez usunięcie korzenia, i zastąpienie go
najnowszym elementem w stercie, i w razie potrzeby zamieniami go z
większymi synami.
Sterta MAX, to sterta w którym dzieci nie mogą być większe od rodzica.
Sterta MIN, to sterta w którym rodzic musi być niemniejszy od dzieci`,
      images: [
        {
          src: "/sols/KSS.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Kopiec/Stóg/Sterta",
        },
        {
          src: "/sols/styrta.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "Sterta",
        },
      ],
    },
    {
      modelAnswer: `Drzewo BST to specjalny typ drzewa binarnego, w którym elementy większe
od rodzica znajdują się na prawo od niego, a mniejsze na lewo.
MIN znajdujemy poprzez przechodzenie zawsze poprzez lewą krawędź, aż do
napotkania liścia. MAX znajdujemy poprzez przechodzenie zawsze poprzez
prawą krawędź, aż do napotkania liścia.
Omówione modyfikacje do drzewa BST to: AVL oraz Drzewo Czerwono-
Czarne, które wykorzystują mechanizm rotacji do zachowania balansu.
Drzewo BST nie posiada mechanizmu zachowującego balans, więc jego
średnie wyszukiwanie i wstawianie/usuwanie O(log n), może być
zdegradowane do listy O(n).
AVL posiada mechanizm zachowujący balans, który pozwala na maksymalną
różnice podrzew wynoszącą 1. Drzewo AVL, gwarantuję prawie perfekcyjną
równagę, dlatego jego średni czas wyszukiwania wynosi O(log n).
Drzewo Czerwono-Czarne, podobnie do AVL, posiada mechanizm
zachowujący balans, który pozwala na maksymalną różnice podrzew
wynoszącą 2. Drzewo Czerwono-Czarne, nie gwarantuję aż takiej wysokiej
równowagi co AVL, lecz jest efektywniejsze w wstawianiu i usuwaniu
elementów`,
      images: [
        {
          src: "/sols/drzewbin.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Drzewo binarne (1)",
        },
        {
          src: "/sols/drzewo.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "Drzewo binarne (2)",
        },
        {
          src: "/sols/drzewbin2.png",
          link: "/assets/opracowanie_AISD_wyklad.pdf",
          note: "Drzewo binarne (3)",
        },
        {
          src: "/sols/bst_vs_avl.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "BST vs Drzewo Czerwono-Czarne vs Drzewo AVL",
        },
        {
          src: "/sols/drzewobst.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "Drzewo BST",
        },
      ],
    },
    {
      modelAnswer: `Omówione modyfikacje drzewa BST to drzewa samobalansujące, w szczególności drzewo AVL oraz drzewo czerwono-czarne.
Drzewo AVL utrzymuje równowagę poprzez kontrolę wysokości poddrzew – dla każdego węzła różnica wysokości lewego i prawego poddrzewa nie może przekraczać 1. Wykorzystuje rotacje węzłów po operacjach wstawiania i usuwania. Zapewnia złożoność obliczeniową O(log n) dla wyszukiwania, dodawania i usuwania elementów.
Drzewo czerwono-czarne wykorzystuje dodatkową informację o kolorze węzła (czerwony lub czarny) oraz zestaw reguł dotyczących ich rozmieszczenia, aby ograniczyć wysokość drzewa. Również stosuje rotacje i zmianę kolorów. Zapewnia złożoność O(log n) dla podstawowych operacji, przy mniejszej liczbie rotacji niż w drzewie AVL.
`,
      images: [
        {
          src: "/sols/drzewbin.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Drzewo binarne (1)",
        },
        {
          src: "/sols/drzewo.png",
          link: "/assets/wyklady/Algorytmy 7+8.pdf",
          note: "Drzewo binarne (2)",
        },
        {
          src: "/sols/drzewbin2.png",
          link: "/assets/opracowanie_AISD_wyklad.pdf",
          note: "Drzewo binarne (3)",
        },
      ],
    },
    {
      modelAnswer: `Zbiór to kontener, który przechowuje unikalne elementy w nieokreślonej
kolejności, nie dopuszcza on duplikatów, w przypadku std::set, jego elementy
są automatycznie sortowane`,
      images: [],
    },
    {
      modelAnswer: `Słownik to kontener par klucz-wartość, gdzie każdy klucz jest unikalny i
przypisany do jednej wartości, w przypadku std::map, jego elementy są
automatycznie sortowane według klucza`,
      images: [],
    },
    {
      modelAnswer: `
Wektor to dynamiczna tablica, która może zmieniać rozmiar w trakcie działania
programu`,
      images: [],
    },
    //
    // 9+10
    //
    {
      modelAnswer: `Mierzył się on z problemem Mostów Królewskich, polegał on na znalezieniu
odpowiedzi na pytanie, czy można przejść przez wszystkie 7 mostów
królewskich, bez dwukrotnego przejścia przez ten sam most`,
      images: [
        {
          src: "/sols/euler.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Graf Eulera i mapa Mostów Królewskich",
        },
      ],
    },
    {
      modelAnswer: `Grafem nazwamy dwa niepuste i skończone zbiory, pierwszym z nich będący
wierzchołkami, a drugi krawędziami. Przykładowymi zastosowanami teorii
grafów jest znajdowanie ścieżek dla postaci w grach oraz systemu GPS
`,
      images: [],
    },
    {
      modelAnswer: `Macierz sąsiedztwa - Nazywamy tak macierz o wymiarach |V| * |V| złożoną z
zer i jedynek, w której wartość i-tego wiersza i j-tej kolumny jest równa 1 (lub
jest równa wadze) wtedy gdy krawędź (i,j) występuje w grafie
Macierz incydencji - Jest to macierz o wymiarze NxK, gdzie N jest ilością
wierzchołków grafu, a K liczbą jego krawędzi. 0 oznacze że wierzchołek nie
jest końcem ani początkiem danej krawędzi, 1 oznacza że jest jego
początkiem, a -1 oznacze ze jest jego końcem
Lista krawędzi - Używamy tablicy dwuelementowej, zawierającej dwie liczby
oznaczające wierzchołki lub tablicy obiektów, zawierającą informację o tym,
które z wierzchołków są incydentne z daną krawędzią.
Lista incydencji - Z każdym wierzchołkiem związana jest lista jego sąsiadów
Lista następników - Z każdy wierzchołkiem związana jest lista jego
następników
Lista poprzedników - Z każdym wierzchołkiem związana jest lista jego
poprzedników
`,
      images: [
        {
          src: "/sols/g_lista.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Lista sąsiedztwa",
        },
        {
          src: "/sols/g_macierz.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Macierz sąsiedztwa",
        },
        {
          src: "/sols/g_lista.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Lista krawędzi",
        },
        {
          src: "/sols/g_incy.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Macierz incydencji",
        },
      ],
    },
    {
      modelAnswer: `Algorytm zachłanny, to taki który wykonuje lokalnie najlepsze decyzje po każdym kroku
`,
      images: [],
    },
    {
      modelAnswer: `Algorytm Dijkstry pozwala na wyznaczenie najkrótszej ścieżki pomiędzy
dwoma wierzchołkami w grafie, jest to algorytm zachłanny dokładny. Polega
on na wybraniu wierzchołka, do którego można dotrzeć najmniejszym
kosztem w każdej iteracji, dla każdego wierzchołka przechowuje się jego
koszt dotarcia oraz wierzchołek go poprzedzający.
`,
      images: [
        {
          src: "/sols/dick_graf.png",
          link: "/assets/wyklady/Algorytmy 9+10.pdf",
          note: "Graf (1)",
        },
        {
          src: "/sols/dickstra.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Graf (2)",
        },
        {
          src: "/sols/dick_graf_2.png",
          link: "/assets/wyklady/Algorytmy 9+10.pdf",
          note: "Opracowanie",
        },
      ],
    },
    {
      modelAnswer: `Jest to algorytm polegający na utworzeniu minimalnego drzewa
rozpinającego, sortujemy w nim krawędzie rosnąco według ich wag, po czym
ściągamy element o najmniejszej wagi i dodajemy go do rozwiązania (jeżeli nie
tworzy on cyklu), kończy się on gdy pozostaje n-1 krawędzi
`,
      images: [
        {
          src: "/sols/kruskal.png",
          link: "/assets/wyklady/Algorytmy 9+10.pdf",
          note: "Graf",
        },
      ],
    },
    {
      modelAnswer: `Minimalne drzewo rozpinające to drzewo rozpinające o najmniejszej wadze,
samo drzewo rozpinające to drzewo posiadające n wierzchołków i n-1
krawędzi
`,
      images: [],
    },
    {
      modelAnswer: `Depth First Search (DFS) - Przeszukiwanie w głąb, polega na wybraniu
wierzchołka, i wybieraniu kolejno to nieodwiedzonych następników, po czym
dodając ich do stosu, jeżeli wszystie następniki są odwiedzone, ściągamy
kolejno to elementy z stosu, aż będziemy w stanie przejść do następnego
następnika (w przypadku gdy nie skończyliśmy odwiedzać całego grafu)
Breadth First Search (BFS) - Przeszukiwanie wszerz, polega na wybraniu
wierzchołka, i wybieraniu kolejno to nieodwiedzonych jego następników, aż
odwiedzimy wzsystkie elementy grafu
`,
      images: [
        {
          src: "/sols/dfs.png",
          link: "/assets/wyklady/Algorytmy 9+10.pdf",
          note: "DFS (1)",
        },
        {
          src: "/sols/dfs_2.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "DFS (2)",
        },
        {
          src: "/sols/bfs.png",
          link: "/assets/wyklady/Algorytmy 9+10.pdf",
          note: "BFS (1)",
        },
        {
          src: "/sols/bfs_2.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "BFS (2)",
        },
      ],
    },
    //
    {
      modelAnswer: `Polega na znalezieniu ścieżki która przechodzi dokładnie jeden raz przez
każdy wierzchołek i wraca do wierzchołka startowego, taką ścieżke
nazywamy cyklem Hamiltona
`,
      images: [
        {
          src: "/sols/hamilton.png",
          link: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
          note: "Cykl Hamiltona",
        },
      ],
    },
    {
      modelAnswer: `Polega na rozwiązaniu problemu wędrującego komiwojażera, poprzez
odwiedzanie następnych to wierzchołków (o krawędziach z najniższą wagą) i
dodawaniu ich do listy odwiedzonych, robimy to aż skończą nam się
wierzchołki do odwiedzenia
`,
      images: [
        {
          src: "/sols/somsiad.png",
          link: "/assets/wyklady/Algorytmy 9+10.pdf",
          note: "Graf",
        },
      ],
    },
    {
      modelAnswer: `Dodaje on zmiane, w której wykonujemy algorytm najbliższego sąsiada,
wykonując go dla każdego wierzchołka startowego
`,
      images: [],
    },
    {
      modelAnswer: `Jest to algorytm zachłanny niedokładny, wykonuje on tylko najlepszą decyzję
lokalną, lecz nie globalną, otrzymane rozwiązanie nie zawsze będzie
najlepszym
`,
      images: [],
    },
    {
      modelAnswer: `Twierdzi on, że każdy graf planarny, czyli taki który możemy zapisać na
płaszczyźnie bez potrzeby zaznaczania przecinających się krawędzi, możemy
pokolorować tak by żaden kolor nie był sąsiadem takiego samego koloru
maksymalnie 4 kolorami
`,
      images: [],
    },
    {
      modelAnswer: `Przykładowo mogą to być, przydzielanie zasobów lub projektowanie map
`,
      images: [],
    },
    {
      modelAnswer: `Algorytm Largest First - Uporządkuj wierzchołki grafu nierosnąco według
stopni, kolorujemy wierzchołki zachłannie zawsze wybierając pierwszy
możliwy kolor z listy kolorów
Algorytm Smallest Last - Znajdujemy wierzchołek o minimalnym stopniu, i
usuwamy go z grafu po czym dodajemy go na stos, powtarzamy dopóki graf
nie jest pusty
Algorytm Saturacyjny LF - Znajdujemy wierzchołek o maksymalnym stopniu
spośród wierzchołków o maksymalnym stopniu nasycenia, czyli takiego
posiadającego najwięcej sąsiadów o różnych kolorach, i kolorujemy go
zachłannie
`,
      images: [
        {
          src: "/sols/k_lf.png",
          link: "/assets/wyklady/Algorytmy 9+10.pdf",
          note: "LF (Largest First)",
        },
        {
          src: "/sols/k_sl.png",
          link: "/assets/wyklady/Algorytmy 9+10.pdf",
          note: "SL (Smallest Last)",
        },
        {
          src: "/sols/k_sl_2.png",
          link: "/assets/wyklady/Algorytmy 9+10.pdf",
          note: "SL (Saturacyjny LF)",
        },
      ],
    },
    {
      modelAnswer: `Zalety: Szybkie działanie, prosta implementacja, dobra skalowalność dla
dużych zbiorów danych
Wady: Brak gwarancji rozwiązania optymalnego, możliwe “utknięcieˮ w
lokalnych ekstremach, wynik zależy od wybranej heurestyki
`,
      images: [],
    },
    //
    // 11+12
    //
    {
      modelAnswer: `Szyfry są wykorzystywane do bezpiecznego przekazywania i przechowywania informacji. Stosuje się je m.in. w szyfrowaniu połączeń internetowych, podpisach cyfrowych, przechowywaniu haseł, bankowości i kryptowalutach, telewizji kodowanej, kodach binarnych i szesnastkowych, kodach QR oraz ogólnie w bezpieczeństwie informacji.
`,
      images: [],
    },
    {
      modelAnswer: `Szyfry symetryczne - do szyfrowania i deszyfrowania używany jest ten sam klucz. Są proste i szybkie. Przykłady: szyfr Cezara, szyfry przestawieniowe, XOR.
Szyfry asymetryczne - wykorzystują dwa klucze: publiczny (do szyfrowania) i prywatny (do odszyfrowania). Stosowane m.in. do podpisów cyfrowych.
Funkcje skrótu - szyfrowanie jednokierunkowe, nie da się odzyskać tekstu jawnego. Stosowane do przechowywania haseł.
`,
      images: [],
    },
    {
      modelAnswer: `Jest to prosty szyfr podstawieniowy. Polega na przesunięciu każdej litery alfabetu o stałą liczbę pozycji (najczęściej o 3). Alfabet jest cykliczny (po Z wracamy do A). Kodowanie polega na przesunięciu liter w przód, a dekodowanie na przesunięciu w tył o tę samą wartość.
`,
      images: [
        {
          src: "/sols/cezar_schemat.png",
          link: "/assets/wyklady/Algorytmy 11+12.pdf",
          note: "Szyfr Cezara - Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `Jest to sposób kodowania znaków za pomocą krótkich i długich sygnałów (kropki i kreski). Kreska trwa tyle co trzy kropki. Kodowanie polega na zamianie liter na sekwencje kropek i kresek, a dekodowanie na ich interpretacji. Wykorzystywany był w telegrafii, radiokomunikacji i sygnałach alarmowych (np. SOS).
`,
      images: [],
    },
    {
      modelAnswer: `Szyfr wykorzystuje operację logiczną XOR na wartościach binarnych znaków. Tekst jawny jest łączony z kluczem (słowem kodowym), który w razie potrzeby jest powtarzany. Ten sam algorytm służy do szyfrowania i deszyfrowania. XOR daje 1, gdy bity są różne.
`,
      images: [],
    },
    {
      modelAnswer: `Polega na zmianie kolejności znaków w tekście bez zmiany samych znaków. Przykładowo zamienia się miejscami każdą parę sąsiednich znaków. Jest to szyfr symetryczny.
`,
      images: [
        {
          src: "/sols/przestaw_schemat.png",
          link: "/assets/wyklady/Algorytmy 11+12.pdf",
          note: "Szyfr Przestawieniowy - Schemat blokowy",
        },
      ],
    },
    // szyfr plotkowy
    {
      modelAnswer: `Szyfr płotkowy jest szyfrem przestawieniowym, w którym znaki tekstu jawnego zapisywane są w kilku wierszach ruchem zygzakowatym (w dół i w górę), a następnie odczytywane wierszami. Kluczem szyfru jest liczba wierszy, czyli wysokość „płotka”.`,
      images: [
        {
          src: "/sols/plotek.png",
          link: "/assets/wyklady/Algorytmy 11+12.pdf",
          note: "Szyfr Płotkowy",
        },
      ],
    },
    {
      modelAnswer: `Jest to szyfr przestawieniowy wykorzystujący słowo kluczowe (np. GADERYPOLUKI). Litery klucza są dzielone na pary, a każda litera tekstu jawnego występująca w kluczu jest zamieniana na odpowiadającą jej literę z pary (i odwrotnie). Znaki spoza klucza pozostają bez zmian.
`,
      images: [],
    },
    {
      modelAnswer: `Polega na wyodrębnieniu samogłosek (A, E, I, O, U, Y) z tekstu i cyklicznym przesunięciu ich o jedno miejsce w prawo. Spółgłoski pozostają na swoich miejscach. Do realizacji można użyć bufora.
`,
      images: [],
    },
    {
      modelAnswer: `Jest to szyfr podstawieniowy, w którym alfabet jest odwrócony. Każdej literze przyporządkowana jest litera symetryczna względem końców alfabetu (A <-> Z, B <-> Y itd.). Kodowanie i dekodowanie odbywa się w ten sam sposób.
`,
      images: [],
    },
    {
      modelAnswer: `Alfabet dzielony jest na określoną liczbę grup (zgodnie z kluczem). Każdej literze przypisywana jest para liczb (ułamek: numer grupy i pozycja w grupie). Tekst szyfrowany jest za pomocą zapisów ułamkowych, często z dodatkowymi znakami matematycznymi. Odszyfrowanie polega na odtworzeniu pozycji litery w alfabecie.
`,
      images: [],
    },
    {
      modelAnswer: `Jest to szyfr polialfabetyczny oparty na wielu alfabetach Cezara. Do szyfrowania używa się tabeli Vigenere’a. Każda litera tekstu jawnego jest szyfrowana innym przesunięciem zależnym od litery klucza. Dekodowanie polega na cofnięciu przesunięcia.
`,
      images: [],
    },
    {
      modelAnswer: `Wykorzystuje macierz, w której na przekątnej znajduje się hasło „SANATORIUM”. Od każdej litery na przekątnej kontynuowany jest alfabet (przed A występuje spacja). Litery kodowane są jako współrzędne wiersz–kolumna, co daje wiele możliwych zapisów tej samej litery.
`,
      images: [],
    },
    {
      modelAnswer: `Jest to złożony szyfr łączący cechy szyfru podstawieniowego i przestawieniowego. Każdej literze przypisane są współrzędne liczbowe. Kolejność i wartości współrzędnych są generowane przez skomplikowany algorytm nagłówka, co zaburza częstość występowania liter i utrudnia kryptoanalizę.
`,
      images: [
        {
          src: "/sols/vic.png",
          link: "/assets/wyklady/Algorytmy 11+12.pdf",
          note: "Szyfr VIC",
        },
      ],
    },
    // Czym jest tablica Polibiusza?
    {
      modelAnswer: `Tablica Polibiusza to kwadratowa tabela (najczęściej 5×5), w której każdej literze alfabetu przypisana jest para liczb oznaczająca numer wiersza i kolumny. Szyfrowanie polega na zastąpieniu liter ich współrzędnymi.`,
      images: [
        {
          src: "/sols/poli.png",
          link: "/assets/wyklady/Algorytmy 11+12.pdf",
          note: "Tablica Polibiusza",
        },
      ],
    },
    //
    // 13
    //
    {
      modelAnswer: `Algorytmy typu Brute-Force polegają na sprawdzaniu wszystkich możliwych rozwiązań w sposób bezpośredni i sekwencyjny. W kontekście wyszukiwania wzorca oznacza to porównywanie wzorca z każdym możliwym fragmentem tekstu, bez stosowania żadnych optymalizacji. Algorytm kończy działanie po znalezieniu rozwiązania lub po sprawdzeniu wszystkich możliwości.
`,
      images: [
        {
          src: "/sols/br_kroki.png",
          link: "/assets/wyklady/Algorytmy 13.pdf",
          note: "Brute Force - Kroki",
        },
        {
          src: "/sols/br_schemat.png",
          link: "/assets/wyklady/Algorytmy 13.pdf",
          note: "Brute Force - Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `Naiwny algorytm (Brute-Force) przesuwa wzorzec po tekście znak po znaku. Dla każdej pozycji w tekście porównuje kolejne znaki wzorca z odpowiadającymi im znakami tekstu. Jeśli wszystkie znaki wzorca pasują, zgłaszane jest znalezienie wzorca. W przypadku niezgodności algorytm przesuwa wzorzec o jedną pozycję w prawo i rozpoczyna porównanie od nowa.
`,
      images: [
        {
          src: "/sols/br_kroki.png",
          link: "/assets/wyklady/Algorytmy 13.pdf",
          note: "Brute Force - Kroki",
        },
        {
          src: "/sols/br_schemat.png",
          link: "/assets/wyklady/Algorytmy 13.pdf",
          note: "Brute Force - Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `- Algorytm naiwny (Brute-Force): złożoność czasowa O(n · m), gdzie n to długość tekstu, a m to długość wzorca.
- Algorytm Boyera–Moore’a: w najgorszym przypadku O(n · m), w praktyce bardzo często O(n), a w najlepszym przypadku O(n / m).
- Algorytm Knutha–Morrisa–Pratta (KMP): złożoność czasowa O(n + m), gdzie O(m) dotyczy budowy tablicy LPS, a O(n) przeszukiwania tekstu.
`,
      images: [
        {
          src: "/sols/br_kroki.png",
          link: "/assets/wyklady/Algorytmy 13.pdf",
          note: "Brute Force - Kroki",
        },
        {
          src: "/sols/br_schemat.png",
          link: "/assets/wyklady/Algorytmy 13.pdf",
          note: "Brute Force - Schemat blokowy",
        },
      ],
    },
    {
      modelAnswer: `Algorytm Boyera–Moore’a wprowadza porównywanie wzorca od końca oraz wykorzystuje tablicę przesunięć, dzięki czemu może przeskakiwać większe fragmenty tekstu po wykryciu niezgodności.
Algorytm Knutha-Morrisa-Pratta wprowadza tablicę prefikso-sufiksów (LPS), która pozwala uniknąć ponownego porównywania znaków, które zostały już wcześniej dopasowane. Oba algorytmy eliminują zbędne porównania występujące w algorytmie naiwnym.
`,
      images: [],
    },
    {
      modelAnswer: `Algorytm Boyera–Moore’a rozpoczyna porównywanie wzorca z tekstem od ostatniego znaku wzorca. W przypadku niezgodności wykorzystuje wcześniej przygotowaną tablicę przesunięć, aby przesunąć wzorzec o kilka pozycji w prawo zamiast o jedną. Jeśli znaki są zgodne, algorytm porównuje kolejne znaki wstecz. Proces powtarza się aż do znalezienia wzorca lub wyjścia poza długość tekstu.
`,
      images: [],
    },
  ];

  let current = 0;
  let questionOrder = [];
  $: realIndex = questionOrder[current];
  let answer = "";
  let showStudyNotice = false;

  let verdict = null;
  let tip = null;
  let score = null;
  let character = null;

  let typedVerdict = "";
  let typedTip = "";
  let talking = false;
  let typingSound;
  let resultsSection;

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
  let anonId = "";
  let autoNick = "";

  let startTime = null;
  let endTime = null;
  let durationMs = 0;
  let mentorTalkAudio = null;
  let mentorTalkingActive = false;
  let mentorAudio = new Audio();
  let solutionOpen = false;

  let sources = [];

  let results = [];
  let resultRefs = [];
  let openSolutions = {};

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

  let selectedMentorId = "ishowspeed";

  let showAskMentor = false;
  let mentorQuestion = "";
  let mentorAnswer = "";
  let loadingMentor = false;

  async function askMentor() {
    if (!mentorQuestion.trim()) return;

    loadingMentor = true;

    const res = await fetch("/api/ask-mentor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: mentorQuestion,
        mentor,
      }),
    });

    const data = await res.json();
    mentorAnswer = data.answer;

    localStorage.setItem("asked_mentor", "true");
    loadingMentor = false;
  }

  $: mentor = mentors.find((m) => m.id === selectedMentorId);
  $: mentorIndex = mentors.findIndex((m) => m.id === selectedMentorId);

  onMount(() => {
    showStudyNotice = !localStorage.getItem("studyNoticeSeen");
  });

  function scrollToResult(i) {
    resultRefs[i]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function scrollToResults() {
    if (!resultsSection) return;

    resultsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // resultsSection.classList.add("ring", "ring-blue-500");
    // setTimeout(() => {
    //   resultsSection.classList.remove("ring", "ring-blue-500");
    // }, 1200);
  }

  onMount(() => {
    console.log("Solutions: ", solutions.length);
    const saved = localStorage.getItem("mentor");
    if (saved && mentors.some((m) => m.id === saved)) {
      selectedMentorId = saved;
    }
  });

  let showNotice = false;

  onMount(() => {
    showNotice = localStorage.getItem("quiz_notice_seen") !== "true";
  });

  function generateFunnyNick(seed) {
    const adj = [
      "Zgubiony",
      "Losowy",
      "Cichy",
      "Wkurzony",
      "Turbo",
      "Pijany",
      "Anonimowy",
      "Zapomniany",
      "Senny",
      "Lagujący",
    ];

    const noun = [
      "Student",
      "Algorytm",
      "Bit",
      "Pointer",
      "Rekurencja",
      "Stack",
      "Heap",
      "Segfault",
      "Node",
      "Graf",
    ];

    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }

    const a = adj[Math.abs(hash) % adj.length];
    const n = noun[Math.abs(hash >> 3) % noun.length];

    return `${a}${n}#${Math.abs(hash % 1000)}`;
  }

  function acceptNotice() {
    localStorage.setItem("quiz_notice_seen", "true");
    showNotice = false;
  }

  onMount(() => {
    anonId = localStorage.getItem("anon_id");

    if (!anonId) {
      anonId = crypto.randomUUID();
      localStorage.setItem("anon_id", anonId);
    }

    autoNick = generateFunnyNick(anonId);
  });

  function normalizeScore(score) {
    if (typeof score === "number") return score;

    if (typeof score === "string") {
      const m = score.match(/\d+/);
      return m ? Number(m[0]) : 0;
    }

    return 0;
  }

  function toggleSolution(i) {
    openSolutions = {
      ...openSolutions,
      [i]: !openSolutions[i],
    };
  }

  function setMentor(newMentor) {
    mentorAudio.pause();
    mentorAudio.currentTime = 0;

    mentorAudio.src = newMentor.talkSound; // 🔥 użyj tego co już masz
    mentorAudio.load();
  }

  $: if (mentor && audioUnlocked) {
    setMentor(mentor);
  }

  function nextMentor() {
    stopMentorTalk(); // 🔥 ucina gadanie + dźwięk
    const next = (mentorIndex + 1) % mentors.length;
    selectedMentorId = mentors[next].id;
    localStorage.setItem("mentor", selectedMentorId);
    queueMicrotask(() => playMentorPreview()); // 🔥 po zmianie mentora
  }

  function prevMentor() {
    stopMentorTalk();
    const prev = (mentorIndex - 1 + mentors.length) % mentors.length;
    selectedMentorId = mentors[prev].id;
    localStorage.setItem("mentor", selectedMentorId);
    queueMicrotask(() => playMentorPreview()); // 🔥 po zmianie mentora
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

  let leaderboardSent = false;

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

  onMount(() => {
    if (isFinished && !localStorage.getItem("leaderboard_submitted")) {
      submitLeaderboardOnce();
    }
  });

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

  async function playMentorPreview() {
    mentorAudio.pause();
    mentorAudio.currentTime = 0;

    try {
      await mentorAudio.play();
    } catch (e) {
      console.warn("Autoplay blocked", e);
    }
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
        }, 300);
      }
    } else {
      stopMentorTalk();

      clearInterval(mouthInterval);
      mouthInterval = null;
      mouthOpen = false;
    }
  }

  function isSkipped(r) {
    return (
      r &&
      r.answers.length === 1 &&
      r.answers[0] === null &&
      r.verdicts[0] === "Pominięte"
    );
  }

  function stopTypingSound() {
    if (typingSound) {
      typingSound.pause();
      typingSound.currentTime = 0;
    }
  }

  function submitLeaderboardOnce() {
    if (leaderboardSent) return;
    if (totalFS === 0 && totalRS === 0) {
      console.info("Zero score – skip submit");
      return;
    }
    leaderboardSent = true;

    const payload = {
      anon_id: anonId,
      nickname: nickname || autoNick,

      total_fs: totalFS,
      total_rs: totalRS,

      percent_fs: percentFS,
      percent_rs: percentRS,

      avg_grade: Number(avgGradeNum),
      duration_ms: durationMs,
      questions_answered: answeredFS.length,

      // auto: true,
    };

    // 1️⃣ normalny fetch (jeśli user NIE zamknął karty)
    fetch("/api/leaderboard/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.error(err);
      // cisza
    });

    // 2️⃣ BEACON – gwarancja zapisu
    const blob = new Blob([JSON.stringify(payload)], {
      type: "application/json",
    });

    navigator.sendBeacon("/api/leaderboard/submit", blob);

    // localStorage.setItem("leaderboard_submitted", "1");

    if (totalFS === 0 && totalRS === 0) {
      return; // nie submituj, ALE NIE BLOKUJ NICZEGO
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
    // fixme drugie zabija pierwsze
    playSound("fnaf", { volume: 0.6 });
    playSound("outro", { volume: 0.6 });
    submitLeaderboardOnce();
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
    const r = results[current];
    if (r.answers.length === 0) {
      r.answers.push(null);
      r.scores.push(0);
      r.verdicts.push("Pominięte");
      r.tips.push("Pytanie zostało pominięte");
      // fs / rs zostają null
    }

    nextQuestion();
  }

  function formatDate(ts) {
    return new Date(ts).toLocaleString("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
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

    showAskMentor = false;
    mentorQuestion = "";
    mentorAnswer = "";
    loadingMentor = false;

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
    stopMentorTalk();
    stopTypingSound();

    showAskMentor = false;
    mentorQuestion = "";
    mentorAnswer = "";
    loadingMentor = false;

    typedVerdict = "";
    sources = [];
    solutionOpen = false;

    typedTip = "";
    score = null;
    isSubmitting = false;
    isLoading = false;
  }

  let showQuizNotice =
    typeof localStorage !== "undefined" &&
    !localStorage.getItem("quiz_global_notice_seen");

  function hideQuizNotice() {
    localStorage.setItem("quiz_global_notice_seen", "1");
    showQuizNotice = false;
  }

  function nextQuestion() {
    if (isFinished) return;
    if (isAdvancing) return;
    isAdvancing = true;

    interruptMentor(); // 🔥 zamiast ręcznego gaszenia

    stopSound(); // 🔥 ważne
    playSound("letsPlay"); // 🔥

    showAskMentor = false;
    mentorQuestion = "";
    mentorAnswer = "";
    loadingMentor = false;

    // reset stanu pytania
    answer = "";
    verdict = null;
    tip = null;
    sources = [];
    solutionOpen = false;

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

    let showMentorNotice =
      typeof localStorage !== "undefined" &&
      !localStorage.getItem("mentor_notice_seen");

    function hideMentorNotice() {
      localStorage.setItem("mentor_notice_seen", "1");
      showMentorNotice = false;
    }

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
    console.log("Leaderboard: ", leaderboard);
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

  function finalVerdict(percentFS) {
    if (percentFS >= 70) {
      return {
        status: "pass",
        title: "✅ Jesteś gotowy na kolokwium",
        text: `
Twoja wiedza jest wystarczająco ugruntowana.
Odpowiedzi były spójne i w większości poprawne egzaminacyjnie.
Na realnym kolokwium powinieneś sobie poradzić.
      `.trim(),
        color: "green",
      };
    }

    if (percentFS >= 50) {
      return {
        status: "borderline",
        title: "⚠️ Jesteś na granicy zaliczenia",
        text: `
Rozumiesz większość zagadnień, ale brakuje konsekwencji.
Jedno słabsze pytanie na kolokwium może Cię pogrążyć.
Powtórka wybranych działów jest wskazana.
      `.trim(),
        color: "yellow",
      };
    }

    return {
      status: "fail",
      title: "❌ Nie jesteś jeszcze gotowy",
      text: `
Wiedza jest fragmentaryczna i niespójna.
Na kolokwium taki poziom odpowiedzi prawdopodobnie nie wystarczy.
Zrób quiz jeszcze raz po solidnej powtórce materiału.
      `.trim(),
      color: "red",
    };
  }

  $: final = finalVerdict(percentFS);

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
          answer: answer.at(-1) === "." ? answer : answer + ".",
          mentor: {
            id: mentor.id,
            personality: mentor.personality,
            gradingBias: mentor.gradingBias,
          },
        }),
      });

      /* ===== 🚨 RATE LIMIT HANDLING ===== */
      if (res.status === 429) {
        const data = await res.json();

        // reset stanu – NIE zapisujemy wyniku
        interruptMentor();
        stopSound();
        stopTypingSound();

        verdict = "⏳ System chwilowo przeciążony";
        tip =
          "Ocena zostanie wykonana automatycznie za chwilę. Spróbuj ponownie.";

        typedVerdict = verdict;
        typedTip = "💡 " + tip;

        isSubmitting = false;
        isLoading = false;

        // opcjonalnie: auto-retry
        if (data.retryAfter) {
          setTimeout(() => {
            retry(); // albo checkAnswer()
          }, data.retryAfter * 1000);
        }

        return; // ⛔ KLUCZ – NIE IDZIEMY DALEJ
      }

      /* ===== NORMAL FLOW ===== */
      const data = await res.json();

      score = normalizeScore(data.score);
      character = mentor.label;
      sources = data.sources ?? [];

      typedVerdict = typeof data.verdict === "string" ? data.verdict : "";
      typedTip =
        typeof data.tip === "string" && data.tip.length ? "💡 " + data.tip : "";

      talking = true;
      stopSound();

      if (data.tip && data.tip.at(-1) !== ".") {
        data.tip += ".";
      }
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
      if (typingSound) {
        typingSound.pause();
      }
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
      Lecimy z koksem
    </button>
  </div>
{/if}

{#if !isFinished}
  <div
    class="fixed top-0 left-0 right-0 bg-zinc-900 text-white px-4 py-2 flex justify-between text-sm z-50"
  >
    <div>FS: {totalFS} pkt</div>
    <div>epstein AiSDland — 21,000 słów notatek — v1.5</div>
    <div>RS: {totalRS} pkt</div>
  </div>

  <div class="max-w-[520px] mx-auto mt-16 flex flex-col gap-4 px-2">
    {#if showQuizNotice}
      <div
        class="bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-sm text-zinc-300"
      >
        <div class="flex justify-between items-start gap-4">
          <div class="space-y-2">
            <div class="font-semibold text-white flex items-center gap-2">
              ℹ️ Ważne informacje przed rozpoczęciem
            </div>

            <p>
              <span class="font-medium text-white"
                >Mentorzy mogą różnić się stylem oceniania</span
              >
              — niektórzy są bardziej
              <span class="text-green-400 font-medium">łagodni (kind)</span>,
              inni bardziej
              <span class="text-red-400 font-medium">surowi (strict)</span>.
              Wpływa to na ton feedbacku i punktację, ale nie na treść pytań.
            </p>

            <p class="text-zinc-400">
              <span class="text-white">Czasami (rzadko)</span> może zdarzyć się sytuacja,
              że mentor zwróci pustą lub błędną odpowiedź techniczną. Jeśli tak się
              stanie:
            </p>

            <ul class="list-disc list-inside text-zinc-400">
              <li>
                kliknij <span class="text-white font-medium">„Powtórz”</span>
              </li>
              <li>lekko zmień treść swojej odpowiedzi (nawet jedno zdanie)</li>
              <li>ponów ocenę — wtedy wszystko powinno zadziałać poprawnie</li>
            </ul>
          </div>

          <button
            on:click={hideQuizNotice}
            class="text-zinc-400 hover:text-white text-sm"
            aria-label="Zamknij"
          >
            ✕
          </button>
        </div>
      </div>
    {/if}

    {#if showStudyNotice}
      <div
        class="bg-[#0b1d33] text-blue-100
           border-l-4 border-blue-500
           rounded-lg px-4 py-3 text-sm leading-relaxed"
      >
        <b>ℹ️ Ważna informacja przed rozpoczęciem</b><br /><br />

        Ten quiz <b>nie służy do wykucia odpowiedzi na pytania kontrolne</b>.<br
        /><br />

        Pytania są tylko punktem wyjścia – na kolokwium często sprawdzane są:
        <ul class="list-disc ml-5 mt-2 space-y-1">
          <li>terminy i definicje <u>powiązane</u> z pytaniem</li>
          <li>kontekst i niuanse pojęciowe</li>
          <li>schematy i rysunki</li>
        </ul>

        <p class="mt-3">
          👉 Dlatego <b>wzorcowe odpowiedzi i obrazy po odpowiedzi</b>
          są integralną częścią nauki.
        </p>

        <button
          class="mt-4 w-full bg-blue-600 hover:bg-blue-700
             text-white rounded-md py-2 font-semibold"
          on:click={() => {
            showStudyNotice = false;
            localStorage.setItem("studyNoticeSeen", "1");
          }}
        >
          Rozumiem, zaczynamy
        </button>
      </div>
    {/if}

    <h2 class="text-lg font-semibold">
      Pytanie {current + 1} / {questions.length}
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
            : isSkipped(results[orderIdx])
              ? 'border-zinc-500 bg-zinc-400 text-zinc-700'
              : results[orderIdx]?.fs === null
                ? 'border-zinc-700 bg-zinc-900 text-zinc-400'
                : results[orderIdx].fs < 40
                  ? 'border-red-500 bg-red-600 text-white'
                  : results[orderIdx].fs < 70
                    ? 'border-yellow-400 bg-yellow-400 text-black'
                    : 'border-green-500 bg-green-500 text-black'}

      "
          title={isSkipped(results[orderIdx])
            ? "Pominięte (Nie wiem)"
            : `Pytanie ${realIdx + 1}`}
        >
          {realIdx + 1}
        </button>
      {/each}
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

    <div class="mt-2 flex justify-center">
      <button
        on:click={() => {
          unlockAudio();
          finishTest();
        }}
        class="w-full text-red-400 border mb-4 border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white"
      >
        Zakończ test
      </button>
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
        <!-- GÓRA: tekst + avatar -->
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
          <div class="shrink-0">
            <div
              class="w-[160px] h-[160px] flex items-center justify-center
               bg-black/20 rounded-md overflow-hidden"
            >
              <img
                src={mouthOpen ? mentor.avatarTalk : mentor.avatarIdle}
                class="w-full h-full object-cover image-rendering-pixelated"
                loading="eager"
                decoding="async"
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

      {#if !mentorAnswer}
        <button
          class="text-sm text-red-400 underline hover:text-red-600"
          on:click={() => (showAskMentor = true)}
        >
          Zadaj jedno pytanie mentorowi
        </button>
      {/if}

      {#if showAskMentor && !mentorAnswer}
        <div
          class="bg-zinc-900 border border-zinc-700 rounded-lg p-4 space-y-3 mt-4"
        >
          <div class="font-semibold text-white">
            🧠 Zadaj jedno pytanie mentorowi
          </div>

          <textarea
            bind:value={mentorQuestion}
            rows="3"
            class="w-full bg-zinc-800 text-white rounded-md p-2"
            placeholder="Np. czym różni się BFS od DFS w kontekście zastosowań?"
          />

          <button
            on:click={askMentor}
            disabled={loadingMentor}
            class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {loadingMentor ? "Mentor myśli..." : "Zadaj pytanie"}
          </button>
        </div>
      {/if}

      {#if mentorAnswer}
        <div class="bg-[#0f0f0f] border border-blue-500 rounded-lg p-4 mt-4">
          <div class="font-semibold text-blue-400 mb-2">Odpowiedź mentora</div>
          <p class="text-zinc-200 whitespace-pre-wrap">
            {mentorAnswer}
          </p>
        </div>
      {/if}

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
    {/if}

    <!-- 🔥 DÓŁ: SOLUTION FULL WIDTH -->
    <!-- 🔽 ROZWIJANA WZORCOWA ODPOWIEDŹ -->
    <div class="mt-1">
      {#if !solutionOpen}
        <button
          on:click={() => (solutionOpen = true)}
          class="
      w-full py-3 rounded-xl
      bg-gradient-to-r from-emerald-500 to-cyan-500
      text-zinc-900 font-semibold
      flex items-center justify-center gap-2
      shadow-lg shadow-emerald-500/20
      transition-all duration-200
      hover:scale-[1.02] hover:shadow-emerald-500/40
      active:scale-[0.98]
      focus:outline-none focus:ring-2 focus:ring-emerald-400
    "
        >
          📘 Pokaż wzorcową odpowiedź
        </button>
      {/if}

      {#if solutionOpen}
        <div
          class="mt-4 bg-zinc-900 border border-zinc-700 rounded-xl p-4 space-y-4"
        >
          <SolutionBlock solution={solutions[realIndex]} />

          <button
            on:click={() => (solutionOpen = false)}
            class="
        w-full py-2 rounded-lg text-sm font-medium
        bg-gradient-to-r from-rose-500/20 to-orange-500/20
        text-rose-300
        border border-rose-500/30
        transition-all duration-200
        hover:bg-rose-500/30 hover:text-rose-200
        hover:scale-[1.01]
        active:scale-[0.97]
      "
          >
            ⬆️ Zwiń wzorcową odpowiedź
          </button>
        </div>
      {/if}
    </div>

    <details class="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
      <summary class="font-semibold text-white cursor-pointer">
        ℹ️ Jak liczone są punkty?
      </summary>

      <div class="mt-3 text-sm text-zinc-300 space-y-2">
        <p>
          <b>FS (First Score)</b> – punkty za <u>pierwszą odpowiedź</u>.
        </p>
        <p>
          <b>RS (Retry Score)</b> – najlepszy wynik po poprawkach.
        </p>
        <p class="text-zinc-400 italic">
          Wysokie wyniki mogą być lekko zaniżone przez surowość mentora.
        </p>
      </div>
    </details>

    <details class="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
      <summary class="font-semibold text-white cursor-pointer">
        📚 Z jakiej wiedzy korzysta model AI?
      </summary>

      <p class="mt-3 mb-3 text-sm text-zinc-400">
        Ocenianie odbywa się wyłącznie na podstawie oficjalnych materiałów z
        przedmiotu (wykłady, notatki, opracowania).
      </p>

      <KnowledgeBrowser />
    </details>

    {#if showNotice}
      <div
        class="bg-gray-900 border-l-4 border-yellow-400 rounded-md px-4 py-4 mb-6 text-yellow-100"
      >
        <strong class="block mb-2 text-yellow-300">
          ⚠️ Ważne informacje egzaminacyjne
        </strong>

        <ul class="list-disc list-inside space-y-1 text-sm">
          <li>
            Na zaliczeniu <b>nie będzie pytań typu „zapisz kod”</b>, tylko
            <u>analiza fragmentu kodu</u>.
          </li>
          <li>
            Trzeba umieć <b>operacje na strukturach danych</b>
            (np. dodawanie elementów do listy).
          </li>
          <li>
            Dla algorytmu Dijkstry należy umieć
            <b>narysować tabelę</b>: węzeł / koszt / poprzednik.
          </li>
          <li>
            <b>DFS i BFS</b> – bardzo możliwe na kolokwium.
          </li>
          <li>
            <b>Problem komiwojażera</b> – może się pojawić.
          </li>
          <li>
            <b>Szyfr płotkowy</b> – będzie na zaliczeniu.
          </li>
        </ul>

        <button class="mt-3 text-xs underline opacity-80 hover:opacity-100">
          Nie pokazuj ponownie
        </button>
      </div>
    {/if}
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
        {#if leaderboard.length === 0}
          <div class="py-6 text-center text-zinc-500">⏳ Ładowanie…</div>
        {:else}
          {#each fastest() as e}
            <Row
              {e}
              fastest={true}
              value={`${Math.round(e.duration_ms / 1000)}s`}
            />
          {/each}
        {/if}
      </LeaderboardBox>

      <LeaderboardBox title="🧠 FS">
        {#if leaderboard.length === 0}
          <div class="py-6 text-center text-zinc-500">⏳ Ładowanie…</div>
        {:else}
          {#each topFS() as e}
            <Row {e} fastest={false} value={`${e.total_fs}`} />
          {/each}
        {/if}
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

        <div
          class="mt-8 rounded-xl p-6 border-l-4 bg-zinc-900"
          class:border-green-500={final.color === "green"}
          class:border-yellow-400={final.color === "yellow"}
          class:border-red-500={final.color === "red"}
        >
          <h3 class="text-lg font-bold mb-2 text-white">
            {final.title}
          </h3>

          <p class="text-zinc-300 leading-relaxed mb-4">
            {final.text}
          </p>

          <!-- <div
            class="bg-black/30 rounded-md px-4 py-3 text-sm text-zinc-200 mb-4"
          >
            🎉 <b>Gratulacje!</b><br />
            Ukończyłeś cały quiz obejmujący
            <b>{questions.length} pytań</b> z Algorytmów i Struktur Danych. Niezależnie
            od wyniku — to pełne przejście materiału egzaminacyjnego.
          </div> -->

          <div class="flex flex-col sm:flex-row gap-3">
            <button
              on:click={() => location.reload()}
              class="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 font-semibold"
            >
              🔁 Rozwiąż quiz ponownie i popraw wynik
            </button>

            <button
              on:click={scrollToResults}
              class="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white rounded-md py-2"
            >
              📋 Przejrzyj swoje odpowiedzi
            </button>
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
          <div class="text-green-400 mt-4">
            ✔ Wynik zapisany. Zmiana w tabelach wyników zajdzie po odświeżeniu
            strony.
          </div>
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

        <details
          class="bg-zinc-900 border border-zinc-700 rounded-lg p-4
         transition-all open:border-blue-500"
        >
          <summary
            class="list-none cursor-pointer select-none
           flex items-center justify-between gap-4"
          >
            <div class="flex items-center gap-3">
              <span class="text-lg">📚</span>

              <div class="text-sm font-semibold text-white">
                Materiały użyte do oceniania
              </div>
            </div>

            <span
              class="text-zinc-400 transition-transform
                 group-open:rotate-180"
            >
              ▼
            </span>
          </summary>

          <div class="mb-4"></div>

          <KnowledgeBrowser />
        </details>

        <hr class="mb-4" />

        <div class="space-y-6" bind:this={resultsSection}>
          {#each results as r, i}
            <div
              bind:this={resultRefs[i]}
              class="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
            >
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
                  <b class="text-zinc-400">Ostatni werdykt mentora:</b><br />
                  {r.verdicts.at(-1)}
                </div>
              {/if}

              <!-- <SolutionBlock solution={solutions[i]} /> -->
              <!-- 🔽 ROZWIJANA WZORCOWA ODPOWIEDŹ -->
              <div class="mt-4">
                {#if !openSolutions[i]}
                  <button
                    on:click={() => toggleSolution(i)}
                    class="w-full bg-zinc-800 hover:bg-zinc-700
             text-zinc-200 py-2 rounded-lg
             border border-zinc-700
             flex items-center justify-center gap-2 text-sm"
                  >
                    📘 Pokaż wzorcową odpowiedź
                  </button>
                {/if}

                {#if openSolutions[i]}
                  <div
                    class="mt-3 bg-zinc-900 border border-zinc-700 rounded-xl p-4 space-y-4"
                  >
                    <SolutionBlock solution={solutions[i]} />

                    <button
                      on:click={() => toggleSolution(i)}
                      class="w-full mt-2 bg-zinc-800 hover:bg-zinc-700
               text-zinc-300 py-2 rounded-md text-sm"
                    >
                      ⬆️ Zwiń wzorcową odpowiedź
                    </button>
                  </div>
                {/if}
              </div>
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
        {#if leaderboard.length === 0}
          <div class="py-6 text-center text-zinc-500">⏳ Ładowanie…</div>
        {:else}
          {#each topRS() as e}
            <Row {e} fastest={false} value={`${e.total_rs}`} />
          {/each}
        {/if}
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

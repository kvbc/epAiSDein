# 🧙 epAiSDein

Interaktywny quiz egzaminacyjny z przedmiotu **Algorytmy i Struktury Danych** (kierunek: Informatyka Stosowana), wykorzystujący LLM + RAG do oceniania odpowiedzi studenta w stylu akademickiego mentora.

---

## 1. Czym jest ten projekt?

**epAiSDein** to aplikacja webowa, która:

* zadaje pytania egzaminacyjne,
* pozwala studentowi wpisać własną odpowiedź,
* **ocenia ją automatycznie** na podstawie realnych materiałów,
* **tłumaczy błędy i podpowiada tok myślenia**,
* symuluje realny egzamin (ustny/pisemny).

To nie jest zwykły chatbot – to **system oceniania + nauki**.

---

## 2. Flow użytkownika (obsługa krok po kroku)

1. Użytkownik widzi pytanie
2. Wpisuje odpowiedź w pole tekstowe
3. Klikniecie **Sprawdź**:

   * przycisk się blokuje
   * pojawia się spinner (trwa zapytanie do backendu)
4. Po odpowiedzi serwera:

   * pojawia się box mentora
   * mentor „pisze” verdict i tip (animacja tekstu)
   * mentor ma animację ust + dźwięk
5. Użytkownik widzi:

   * **score (0–100)**
   * **werdykt** (ocena jakości)
   * **wskazówkę dydaktyczną**
6. Dostępne akcje:

   * **Dalej** – przejście do kolejnego pytania (możliwe nawet w trakcie animacji)
   * **Retry** – ponowna ocena (gdy wystąpi błąd)
7. Po ostatnim pytaniu: ekran zakończenia quizu

---

## 3. Skala ocen i interpretacja

| Score  | Znaczenie                |
| ------ | ------------------------ |
| 0–20   | Błędna / nie na temat    |
| 21–40  | Słaba, braki podstaw     |
| 41–60  | Częściowo poprawna       |
| 61–80  | W większości poprawna    |
| 81–100 | Bardzo dobra / kompletna |

### Informacja dla użytkownika

Jeśli **score ≥ 75**, aplikacja wyświetla **niebieski notice**:

> Odpowiedź jest wystarczająco poprawna egzaminacyjnie.
> Mentor może być drobiazgowy przy wysokich ocenach – nie należy się tym nadmiernie przejmować.

---

## 4. Technologie

### Frontend

* **Svelte / SvelteKit**
* animacja pisania tekstu
* animacja postaci mentora (PNG idle / talk)
* dźwięk „mówienia”
* spinner podczas fetch

### Backend

* **SvelteKit API routes** (`/api/evaluate`)
* **Groq API** (LLM)
* **Supabase** (PostgreSQL)

### Model językowy

* `llama-3.1-8b-instant`
* szybki, tani, stabilny

---

## 5. RAG – Retrieval Augmented Generation

### Po co RAG?

* żeby model **nie halucynował**
* żeby oceniał zgodnie z **konkretnymi materiałami z zajęć**
* żeby zachować spójność egzaminacyjną

### Jak to działa?

1. Materiały (opracowania, notatki) są dzielone na fragmenty
2. Każdy fragment trafia do bazy Supabase (`documents.content`)
3. Podczas oceny:

   * backend pobiera kilka fragmentów
   * skleja je w `context`
   * przekazuje do LLM z poleceniem:

     ```
     Use ONLY this knowledge:
     ${context}
     ```

Model **musi** opierać się wyłącznie na tej wiedzy.

---

## 6. Supabase – baza wiedzy

Supabase pełni rolę **bazy wiedzy RAG**.

### Tabela `documents`

| Kolumna | Typ  | Opis                |
| ------- | ---- | ------------------- |
| id      | int  | ID rekordu          |
| content | text | Fragment materiałów |

Każdy rekord to **kawałek opracowania z algorytmów**.

---

## 7. Ingest – ładowanie wiedzy

**Ingest** to jednorazowy proces przygotowania wiedzy.

Co robi:

1. Bierze tekst (np. opracowanie PDF / notatki)
2. Dzieli go na sensowne fragmenty
3. Zapisuje je do Supabase (`documents`)

Po wykonaniu ingestu:

* frontend nie musi znać materiałów
* backend zawsze ma kontekst

---

## 8. Prompt systemowy (klucz projektu)

Prompt:

* wymusza **konkretną skalę ocen**
* pilnuje spójności score ↔ verdict
* zabrania czepiania się stylistyki
* narzuca **JSON ONLY** jako format wyjścia

Bez tego promptu:

* oceny byłyby losowe
* nie dałoby się parsować odpowiedzi
* feedback byłby chaotyczny

---

## 9. Endpoint `/api/evaluate`

### Wejście

```json
{
  "question": "...",
  "answer": "..."
}
```

### Wyjście (zawsze JSON)

```json
{
  "score": 75,
  "verdict": "...",
  "tip": "..."
}
```

W razie błędu parsowania:

```json
{
  "score": 0,
  "verdict": "Błąd oceny odpowiedzi",
  "tip": "Spróbuj ponownie"
}
```

---

## 10. Ograniczenia (świadome)

* LLM bywa drobiazgowy przy wysokich ocenach
* Jakość ocen zależy od jakości materiałów w RAG
* To **symulacja egzaminu**, nie absolutny wyrocznia

---

## 11. Możliwe rozszerzenia

* leaderboard (punkty / czas)
* tryb egzaminu (limit czasu)
* zapisywanie wyników użytkownika
* tryb nauka vs egzamin
* analiza najczęstszych błędów

---

## TL;DR

**epAiSDein** =

* LLM + RAG
* akademicki mentor
* quiz egzaminacyjny
* UI jak gra
* ocena + nauka

Projekt zrobiony **inżyniersko**, nie „chatbotowo”.

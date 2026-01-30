export const knowledgeSources = [
  {
    section: "📘 Opracowania",
    files: [
      {
        label: "Algorytmy i Struktury Danych – opracowane zagadnienia (Temus)",
        path: "/assets/Algorytmy i struktury danych opracowane zagadnienia by Temus (Iza edit).pdf",
        type: "pdf",
      },
      {
        label: "Opracowanie AiSD – wykład (2022/2023)",
        path: "/assets/opracowanie_AISD_wyklad.pdf",
        type: "pdf",
      },
      // {
      //   label: "Prompt algorytmy (meta)",
      //   path: "/assets/prompt_algorytmy.md",
      //   type: "md",
      // },
      {
        label: "Pytania egzaminacyjne (2025)",
        path: "/assets/pytania.pdf",
        type: "pdf",
      },
    ],
  },

  {
    section: "🖼️ Kolokwia (2022)",
    files: [
      { label: "Kolokwium 01", path: "/assets/kol-alg-01.png", type: "img" },
      { label: "Kolokwium 02", path: "/assets/kol-alg-02.png", type: "img" },
    ],
  },

  {
    section: "🧪 Wejściówki",
    files: [
      "LAB05","LAB06","LAB07","LAB09","LAB10","LAB11","LAB12","LAB13","LAB14"
    ].map(n => ({
      label: n,
      path: `/assets/wejsciowki/${n}.pdf`,
      type: "pdf",
    })),
  },

  {
    section: "⚗️ Laboratoria (2025)",
    files: [
      "LAB02","LAB03","LAB08","LAB12"
    ].map(n => ({
      label: n,
      path: `/assets/laby/${n}.pdf`,
      type: "pdf",
    })),
  },

  {
    section: "🎓 Wykłady (2024)",
    files: [
      "Algorytmy 1",
      "Algorytmy 2",
      "Algorytmy 3",
      "Algorytmy 4+5",
      "Algorytmy 6",
      "Algorytmy 7+8",
      "Algorytmy 9+10",
      "Algorytmy 11+12",
      "Algorytmy 13",
    ].map(n => ({
      label: n,
      path: `/assets/wyklady/${n}.pdf`,
      type: "pdf",
    })),
  },
];

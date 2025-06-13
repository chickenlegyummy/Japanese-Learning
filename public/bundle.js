"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/app.ts
  var require_app = __commonJS({
    "src/app.ts"() {
      var mode = 0;
      var dataset = [
        { hiragana: "\u3042", katakana: "\u30A2", romaji: "a", used: false },
        { hiragana: "\u3044", katakana: "\u30A4", romaji: "i", used: false },
        { hiragana: "\u3046", katakana: "\u30A6", romaji: "u", used: false },
        { hiragana: "\u3048", katakana: "\u30A8", romaji: "e", used: false },
        { hiragana: "\u304A", katakana: "\u30AA", romaji: "o", used: false },
        { hiragana: "\u304B", katakana: "\u30AB", romaji: "ka", used: false },
        { hiragana: "\u304D", katakana: "\u30AD", romaji: "ki", used: false },
        { hiragana: "\u304F", katakana: "\u30AF", romaji: "ku", used: false },
        { hiragana: "\u3051", katakana: "\u30B1", romaji: "ke", used: false },
        { hiragana: "\u3053", katakana: "\u30B3", romaji: "ko", used: false },
        { hiragana: "\u3055", katakana: "\u30B5", romaji: "sa", used: false },
        { hiragana: "\u3057", katakana: "\u30B7", romaji: "shi", used: false },
        { hiragana: "\u3059", katakana: "\u30B9", romaji: "su", used: false },
        { hiragana: "\u305B", katakana: "\u30BB", romaji: "se", used: false },
        { hiragana: "\u305D", katakana: "\u30BD", romaji: "so", used: false },
        { hiragana: "\u305F", katakana: "\u30BF", romaji: "ta", used: false },
        { hiragana: "\u3061", katakana: "\u30C1", romaji: "chi", used: false },
        { hiragana: "\u3064", katakana: "\u30C4", romaji: "tsu", used: false },
        { hiragana: "\u3066", katakana: "\u30C6", romaji: "te", used: false },
        { hiragana: "\u3068", katakana: "\u30C8", romaji: "to", used: false },
        { hiragana: "\u306A", katakana: "\u30CA", romaji: "na", used: false },
        { hiragana: "\u306B", katakana: "\u30CB", romaji: "ni", used: false },
        { hiragana: "\u306C", katakana: "\u30CC", romaji: "nu", used: false },
        { hiragana: "\u306D", katakana: "\u30CD", romaji: "ne", used: false },
        { hiragana: "\u306E", katakana: "\u30CE", romaji: "no", used: false },
        { hiragana: "\u306F", katakana: "\u30CF", romaji: "ha", used: false },
        { hiragana: "\u3072", katakana: "\u30D2", romaji: "hi", used: false },
        { hiragana: "\u3075", katakana: "\u30D5", romaji: "fu", used: false },
        { hiragana: "\u3078", katakana: "\u30D8", romaji: "he", used: false },
        { hiragana: "\u307B", katakana: "\u30DB", romaji: "ho", used: false },
        { hiragana: "\u307E", katakana: "\u30DE", romaji: "ma", used: false },
        { hiragana: "\u307F", katakana: "\u30DF", romaji: "mi", used: false },
        { hiragana: "\u3080", katakana: "\u30E0", romaji: "mu", used: false },
        { hiragana: "\u3081", katakana: "\u30E1", romaji: "me", used: false },
        { hiragana: "\u3082", katakana: "\u30E2", romaji: "mo", used: false },
        { hiragana: "\u3084", katakana: "\u30E4", romaji: "ya", used: false },
        { hiragana: "\u3086", katakana: "\u30E6", romaji: "yu", used: false },
        { hiragana: "\u3088", katakana: "\u30E8", romaji: "yo", used: false },
        { hiragana: "\u3089", katakana: "\u30E9", romaji: "ra", used: false },
        { hiragana: "\u308A", katakana: "\u30EA", romaji: "ri", used: false },
        { hiragana: "\u308B", katakana: "\u30EB", romaji: "ru", used: false },
        { hiragana: "\u308C", katakana: "\u30EC", romaji: "re", used: false },
        { hiragana: "\u308D", katakana: "\u30ED", romaji: "ro", used: false },
        { hiragana: "\u308F", katakana: "\u30EF", romaji: "wa", used: false },
        { hiragana: "\u3092", katakana: "\u30F2", romaji: "wo", used: false },
        { hiragana: "\u3093", katakana: "\u30F3", romaji: "n", used: false }
      ];
      var indicatorText = document.getElementById("indicator-text");
      var indicatorAns1 = document.getElementById("indicator-answer-1");
      var indicatorAns2 = document.getElementById("indicator-answer-2");
      var indicatorAns3 = document.getElementById("indicator-answer-3");
      var ansList = ["", "", ""];
      var wheresAns;
      var correctedCounter = 0;
      var wrongCounter = 0;
      var initQ = { indicator: "", ans: "" };
      function initialField(mode2) {
        const i = Math.floor(Math.random() * 46);
        switch (mode2) {
          case 0:
            document.title = "\u5047\u540D\u9053\u5834 | \u5E73\u5047\u540D";
            initQ = {
              indicator: dataset[i].hiragana,
              ans: dataset[i].romaji
            };
            break;
          case 1:
            document.title = "\u5047\u540D\u9053\u5834 | \u7247\u5047\u540D";
            initQ = {
              indicator: dataset[i].katakana,
              ans: dataset[i].romaji
            };
            break;
          case 2:
            document.title = "\u5047\u540D\u9053\u5834 | \u6DF7\u5408";
            let rn = Math.floor(Math.random() * 2);
            if (rn == 0) {
              initQ = {
                indicator: dataset[i].hiragana,
                ans: dataset[i].romaji
              };
            } else {
              initQ = {
                indicator: dataset[i].katakana,
                ans: dataset[i].romaji
              };
            }
            ;
            break;
        }
        dataset[i].used = true;
        if (indicatorText && indicatorAns1 && indicatorAns2 && indicatorAns3) {
          indicatorText.textContent = initQ.indicator;
          wheresAns = Math.floor(Math.random() * 3);
          ansList[wheresAns] = initQ.ans;
          for (let i2 = 0; i2 < 3; i2++) {
            let fakeAns = dataset[Math.floor(Math.random() * 46)];
            while (fakeAns.used) {
              fakeAns = dataset[Math.floor(Math.random() * 46)];
            }
            if (i2 != wheresAns) {
              ansList[i2] = fakeAns.romaji;
            }
          }
          ;
          indicatorAns1.textContent = ansList[0];
          indicatorAns2.textContent = ansList[1];
          indicatorAns3.textContent = ansList[2];
        }
        ;
        dataset[i].used = false;
      }
      var correctIndicator = document.getElementById("correct-indicator");
      var wrongIndicator = document.getElementById("wrong-indicator");
      var correctAnsIndicator = document.getElementById("answer-indicator");
      function checkAnsValid(id) {
        if (id == wheresAns) {
          correctedCounter++;
          if (correctIndicator) {
            correctIndicator.textContent = correctedCounter.toString();
          }
        } else {
          wrongCounter++;
          if (wrongIndicator && correctAnsIndicator) {
            wrongIndicator.textContent = wrongCounter.toString();
            correctAnsIndicator.textContent = `${initQ.indicator} ${initQ.ans}`;
          }
        }
        initialField(mode);
      }
      indicatorAns1?.addEventListener("click", () => checkAnsValid(0));
      indicatorAns2?.addEventListener("click", () => checkAnsValid(1));
      indicatorAns3?.addEventListener("click", () => checkAnsValid(2));
      initialField(mode);
      function removeSelected(obj) {
        if (document.getElementsByClassName("selected")[0])
          document.getElementsByClassName("selected")[0].classList.remove("selected");
        obj.classList.add("selected");
      }
      var hiragana = document.getElementById("hiragana");
      var katakana = document.getElementById("katakana");
      var mixed = document.getElementById("mixed");
      if (hiragana && katakana && mixed) {
        hiragana.onclick = (_event) => {
          history.pushState({}, "", "/hiragana");
          mode = 0;
          initialField(mode);
          removeSelected(hiragana);
        };
        katakana.onclick = (_event) => {
          history.pushState({}, "", "/katakana");
          mode = 1;
          initialField(mode);
          removeSelected(katakana);
        };
        mixed.onclick = (_event) => {
          history.pushState({}, "", "/mixed");
          mode = 2;
          initialField(mode);
          removeSelected(mixed);
        };
      }
      document.addEventListener("DOMContentLoaded", () => {
        const currentUrl = window.location.href;
        if (currentUrl.includes("/hiragana")) {
          console.log("Client: hiragana detected");
          mode = 0;
          initialField(mode);
        } else if (currentUrl.includes("/katakana")) {
          console.log("Client: katakana detected");
          mode = 1;
          initialField(mode);
        } else if (currentUrl.includes("/mixed")) {
          console.log("Client: mixed detected");
          mode = 2;
          initialField(mode);
        }
      });
    }
  });
  require_app();
})();
//# sourceMappingURL=bundle.js.map

type Question = {
  indicator: string;
  ans: string;
};

type character = {
  hiragana: string;
  katakana: string;
  romaji: string;
  used: boolean;
};

let mode: number = 0;
const dataset: character[] = [
  { hiragana: 'あ', katakana: 'ア', romaji: 'a', used: false },
  { hiragana: 'い', katakana: 'イ', romaji: 'i', used: false },
  { hiragana: 'う', katakana: 'ウ', romaji: 'u', used: false },
  { hiragana: 'え', katakana: 'エ', romaji: 'e', used: false },
  { hiragana: 'お', katakana: 'オ', romaji: 'o', used: false },
  { hiragana: 'か', katakana: 'カ', romaji: 'ka', used: false },
  { hiragana: 'き', katakana: 'キ', romaji: 'ki', used: false },
  { hiragana: 'く', katakana: 'ク', romaji: 'ku', used: false },
  { hiragana: 'け', katakana: 'ケ', romaji: 'ke', used: false },
  { hiragana: 'こ', katakana: 'コ', romaji: 'ko', used: false },
  { hiragana: 'さ', katakana: 'サ', romaji: 'sa', used: false },
  { hiragana: 'し', katakana: 'シ', romaji: 'shi', used: false },
  { hiragana: 'す', katakana: 'ス', romaji: 'su', used: false },
  { hiragana: 'せ', katakana: 'セ', romaji: 'se', used: false },
  { hiragana: 'そ', katakana: 'ソ', romaji: 'so', used: false },
  { hiragana: 'た', katakana: 'タ', romaji: 'ta', used: false },
  { hiragana: 'ち', katakana: 'チ', romaji: 'chi', used: false },
  { hiragana: 'つ', katakana: 'ツ', romaji: 'tsu', used: false },
  { hiragana: 'て', katakana: 'テ', romaji: 'te', used: false },
  { hiragana: 'と', katakana: 'ト', romaji: 'to', used: false },
  { hiragana: 'な', katakana: 'ナ', romaji: 'na', used: false },
  { hiragana: 'に', katakana: 'ニ', romaji: 'ni', used: false },
  { hiragana: 'ぬ', katakana: 'ヌ', romaji: 'nu', used: false },
  { hiragana: 'ね', katakana: 'ネ', romaji: 'ne', used: false },
  { hiragana: 'の', katakana: 'ノ', romaji: 'no', used: false },
  { hiragana: 'は', katakana: 'ハ', romaji: 'ha', used: false },
  { hiragana: 'ひ', katakana: 'ヒ', romaji: 'hi', used: false },
  { hiragana: 'ふ', katakana: 'フ', romaji: 'fu', used: false },
  { hiragana: 'へ', katakana: 'ヘ', romaji: 'he', used: false },
  { hiragana: 'ほ', katakana: 'ホ', romaji: 'ho', used: false },
  { hiragana: 'ま', katakana: 'マ', romaji: 'ma', used: false },
  { hiragana: 'み', katakana: 'ミ', romaji: 'mi', used: false },
  { hiragana: 'む', katakana: 'ム', romaji: 'mu', used: false },
  { hiragana: 'め', katakana: 'メ', romaji: 'me', used: false },
  { hiragana: 'も', katakana: 'モ', romaji: 'mo', used: false },
  { hiragana: 'や', katakana: 'ヤ', romaji: 'ya', used: false },
  { hiragana: 'ゆ', katakana: 'ユ', romaji: 'yu', used: false },
  { hiragana: 'よ', katakana: 'ヨ', romaji: 'yo', used: false },
  { hiragana: 'ら', katakana: 'ラ', romaji: 'ra', used: false },
  { hiragana: 'り', katakana: 'リ', romaji: 'ri', used: false },
  { hiragana: 'る', katakana: 'ル', romaji: 'ru', used: false },
  { hiragana: 'れ', katakana: 'レ', romaji: 're', used: false },
  { hiragana: 'ろ', katakana: 'ロ', romaji: 'ro', used: false },
  { hiragana: 'わ', katakana: 'ワ', romaji: 'wa', used: false },
  { hiragana: 'を', katakana: 'ヲ', romaji: 'wo', used: false },
  { hiragana: 'ん', katakana: 'ン', romaji: 'n', used: false }
];

let indicatorText = document.getElementById('indicator-text');
let indicatorAns1 = document.getElementById('indicator-answer-1');
let indicatorAns2 = document.getElementById('indicator-answer-2');
let indicatorAns3 = document.getElementById('indicator-answer-3');


let ansList: string[] = ['', '', ''];
let wheresAns: number;
let correctedCounter: number = 0;
let wrongCounter: number = 0;
let initQ : Question = {indicator: "", ans: ""};
function initialField(mode: number){
  const i : number = Math.floor(Math.random() * 46);
  switch(mode){
    case 0:
      document.title = "假名道場 | 平假名";
      initQ = {
        indicator: dataset[i].hiragana,
        ans: dataset[i].romaji
      };
      
      break;
    case 1:
      document.title = "假名道場 | 片假名";
      initQ = {
        indicator: dataset[i].katakana,
        ans: dataset[i].romaji
      };
      
      break;
    case 2:
      document.title = "假名道場 | 混合";
      let rn = Math.floor(Math.random() * 2)
      if (rn == 0){
        initQ = {
          indicator: dataset[i].hiragana,
          ans: dataset[i].romaji
        };
      } else {
        initQ = {
          indicator: dataset[i].katakana,
          ans: dataset[i].romaji
        };
      };
      break;
  }
  dataset[i].used = true;
  if(indicatorText && indicatorAns1 && indicatorAns2 && indicatorAns3){
    indicatorText.textContent = initQ.indicator;
    wheresAns = Math.floor(Math.random() * 3)
    ansList[wheresAns] = initQ.ans;
    for (let i = 0; i < 3; i++){
      let fakeAns: character = dataset[Math.floor(Math.random() * 46)]
      while(fakeAns.used){
        fakeAns = dataset[Math.floor(Math.random() * 46)]
      }
      if (i != wheresAns){
        ansList[i] = fakeAns.romaji
      }
    };
    indicatorAns1.textContent = ansList[0];
    indicatorAns2.textContent = ansList[1];
    indicatorAns3.textContent = ansList[2];
  };
  dataset[i].used = false;
}


let correctIndicator = document.getElementById('correct-indicator');
let wrongIndicator = document.getElementById('wrong-indicator');
let correctAnsIndicator = document.getElementById('answer-indicator');

function checkAnsValid(id: number){
  if (id == wheresAns){
    correctedCounter++;
    if (correctIndicator){
      correctIndicator.textContent = correctedCounter.toString();
    }
  } else {
    wrongCounter++;
    if (wrongIndicator && correctAnsIndicator){
      wrongIndicator.textContent = wrongCounter.toString();
      correctAnsIndicator.textContent = `${initQ.indicator} ${initQ.ans}`
    }
  }
  initialField(mode);
}

indicatorAns1?.addEventListener('click', () => checkAnsValid(0));
indicatorAns2?.addEventListener('click', () => checkAnsValid(1));
indicatorAns3?.addEventListener('click', () => checkAnsValid(2));

initialField(mode);

function removeSelected(obj: any){
  if(document.getElementsByClassName('selected')[0])
    document.getElementsByClassName('selected')[0].classList.remove('selected')
  obj.classList.add('selected')
}

let hiragana = document.getElementById("hiragana");
let katakana = document.getElementById("katakana");
let mixed = document.getElementById("mixed");

if(hiragana && katakana && mixed){
  hiragana.onclick = (_event) => {
    history.pushState({}, "", "/Japanese-Learning/hiragana.html");
    mode = 0;
    initialField(mode);
    removeSelected(hiragana)
  }
  katakana.onclick = (_event) => {
    history.pushState({}, "", "/Japanese-Learning/katakana.html");
    mode = 1;
    initialField(mode);
    removeSelected(katakana)
  }
  mixed.onclick = (_event) => {
    history.pushState({}, "", "/Japanese-Learning/mixed.html");
    mode = 2;
    initialField(mode);
    removeSelected(mixed)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const currentUrl = window.location.href;
  if (currentUrl.includes('/hiragana')) {
    console.log('Client: hiragana detected');
    mode = 0;
    initialField(mode);
  } else if (currentUrl.includes('/katakana')) {
    console.log('Client: katakana detected');
    mode = 1;
    initialField(mode);
  } else if (currentUrl.includes('/mixed')) {
    console.log('Client: mixed detected');
    mode = 2;
    initialField(mode);
  }
})
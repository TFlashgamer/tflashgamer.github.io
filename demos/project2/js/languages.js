/* * Для русского языка
 *================================================== */
let rus = {
  menuabout: "Обо мне",
  menuprojects: "Портфолио",
  menucontacts: "Контакты",
  aboutheading: "Добро пожаловать! Я /TSlash",
  aboutdescription:
    "Я занимаюсь FrontEnd разработкой и так же серверной частью на node.js",
  projectheading: "Вот несколько моих работ",
  code1: "<",
  code2: "/>",
  projecttitle1: "Сайт предназначен кому то",
  projecttitle2: "Сайт с опросом",
  projecttitle3: "Сайт лендинг для продаж продуктов",
  projecttitle4: "Сайт справка",
  projecttitle5: "Oni Discord бот",
  projecttitle6: "Скоро...",
  buttontext: "Показать ещё 🢖",
  contactsheading: "Нужно связаться со мной?",
  contactsdescription:
    "Если возникли какие-то вопросы Вы можете воспользоваться ссылками ниже",
  footertext1: "Спасибо что уделили время этому портфолио!",
  footertext2: "🖤/TSlash",
  allprojectmenumain: "Главная",
  allprojecttitle: "Все работы",
  allprojectheading: "Все мои работы",
};

/* * Для украинского языка
 *================================================== */
let ukr = {
  menuabout: "Про мене",
  menuprojects: "Портфоліо",
  menucontacts: "Контакти",
  aboutheading: "Ласкаво просимо! Я / TSlash",
  aboutdescription:
    "Я займаюся FrontEnd розробкою і також серверною частиною на node.js",
  projectheading: "Ось декілька моїх робіт",
  code1: "<",
  code2: "/>",
  projecttitle1: "Сайт призначений комусь",
  projecttitle2: "Сайт з опитуванням",
  projecttitle3: "Сайт лендинг для продажу продуктів",
  projecttitle4: "Сайт довідка",
  projecttitle5: "Oni Discord бот",
  projecttitle6: "Скоро...",
  buttontext: "Показати ще 🢖",
  contactsheading: "Потрібно зв`язатись зі мною?",
  contactsdescription:
    "Якщо виникли якісь запитання Ви можете скористатись посиланнями нижче",
  footertext1: "Дякую за виділений час цьому портфоліо!",
  footertext2: "🖤/TSlash",
  allprojectmenumain: "Головна",
  allprojecttitle: "Всі роботи",
  allprojectheading: "Всі мої роботи",
};

changeLagnuage();

/* * Функция для выполнения
 *================================================== */
function changeLagnuage() {
  setTimeout(function () {
    let language = lang.checked ? ukr : rus;
    document.querySelectorAll("[text]").forEach((el) => {
      el.innerHTML = language[el.getAttribute("text")];
    });
  }, 1000);
}

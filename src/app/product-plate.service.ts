// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductPlateService {

// constructor() { }
// }

export type Product = {
  title: string
  image: string
  description: string
  btnBuy: string
  btnDelete: string
  price: string
  id: string
  comments: string[]
}

export class ProductPlate {
  private arrProduct = [
    {
      title: "Кресло Шезлонг ",
      image: "https://topzone.com.ua/wp-content/uploads/2020/03/01-21.jpg",
      description: "Ваш позвоночник будет отдыхать в любом положении.Спинка может быть отрегулирована от 90 до 160 градусов. Это гарантирует улучшение кровообращения и дополнительно блаженное расслабление для всего тела.Шезлонг имеет подголовник с липучкой (регулируется и демонтируется). Особенности: Конструкция из прочных стальных труб Прочный дышащий материал Регулировка спинки — плавная (одновременно с опусканием спинки — приподнимаются ноги)  Легко . Легко перенести с места на место. Подголовник с застежкой на липучке (регулируется и демонтируется) Удобные ручки для легкого изменения положения. Занимает мало места в сложенном состоянии (легко хранить) Подстаканник можно прикрепить к ногам. Обладает устойчивостью, при этом дарит отдыхающему ощущение невесомости. Разложить его сможет даже ребенок, никаких дополнительных приспособлений не требуется. Мобильность и транспортабельность. Характеристики :  Материал: Нейлоновая сетка (Tesline) + Сталь (Каркас — стальная труба) Спинка может быть отрегулирована от 90 градусов до 160 градусов Максимальная нагрузка 120 кг. Вес конструкции  7 .Соответствует ISO9001",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "40$",
      id: "1",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]
    },
    {
      title: "Стол Bo-Camp Finsbury (Brown)",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1357/1000/detailed/127/Stol-Bo-Camp-Finsbury-Brown-01.jpg",
      description: "Цвет:Brown, Размеры:100x65x65 см, Размер в сложенном виде:103х20х13 см,Вес:7,3 кг",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "145$",
      id: "2",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]
    },
    {
      title: "Кровать Pinguin Bed (Green)",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1024/755/detailed/4/green-1-krovat-Pinguin-Bed.jpg",
      description: "Кемпинговая кровать Pinguin Bed сделает максимально комфортной и удобной вашу ночевку во время отдыха на природе, на рыбалке или охоте. Также складная кровать найдет применение на даче и даже дома в случае неожиданного приезда гостей.Данная модель кровати имеет достаточно удобную высоту - вы не будете спать в паре сантиментров от земли, и вам будет гораздо проще вставать и ложиться. Благодаря жесткой конструкции кровать не будет  под нагрузкой и на ней можно смело переворачиваться на бочок и обратно, не рискуя при этом потерять равновесие.Каракас выполнен из прочных стальных (ножки) и облегченных аллюминиевых труб (ложе). Ложе изготовлено из цельного полотна плотного синтетического материала с полиуретановым покрытием (улучшает эластичность ткани и придает ей водоотталкивающие свойства), надежно фиксируется на каркасе внатяжку с помощью направляющих аллюминиевых трубок. Поперечных распорок непосредственно под полотном ложа нет, поэтому ничего не будет давить во время отдыха.Кровать зарекомендовала себя надежным и главное - удобным помощником для длительного загородного отдыха. Конечно в пеший поход ее не возьмешь, но вот с машиной - доставить ее на место кемпинга не составит труда. Кровать быстро устанавливается, не требовательна в уходе, поставляется с сумкой-чехлом для транспортировки.",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "100$",
      id: "3",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]

    },
    {
      title: "Набор мебели Tramp TRF-067",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1493/1100/detailed/130/Nabor-Mebeli-Tramp-TRF-067-01.jpg",
      description: "Бренд:TrampВид:Набор мебелиМаксимальная нагрузка на стол:30 кгМаксимальная нагрузка на стул:120 кгМатериал каркаса:AluminiumЦвет:Dark GreyМатериал сидушки:PolyesterВес:7,8 кгМатериал столешницы:FibreboardРазмер стола:120х60х70 смРазмер стула:30х29х40 смКомплектация:органайзер для мелочейподвесная полочкаскладной складной табурет - 4 шт.чехол Особенности:легко складываетсяполочка из сетки под столешницейтканевый органайзер с 3 карманамиудобно перевозить",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "150$",
      id: "4",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]

    },
    {
      title: "Спальник Pinguin 2020 Expert CCS 195 (Orange)",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1072/790/detailed/99/spalnyk-Pinguin-Expert-CCS-2020-195-orange-01.jpg",
      description: "Размеры:85 см (ширина в плечах) / 55 см (ширина в ногах)",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "120$",
      id: "5",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]

    },
    {
      title: "Палатка Salewa Micra 2 (Cactus/Grey), 2-местная",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1059/780/detailed/132/namet-Salewa-Micra-2-00.jpg",
      description: "Цвет:Brown, Размеры:100x65x65 см, Размер в сложенном виде:103х20х13 см,Вес:7,3 кг",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "115$",
      id: "6",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]

    },
    {
      title: "Нож Morakniv Eldris Kit (Green)",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/660/487/detailed/71/eldris-green.png",
      description: "Легкий и удобный нож Morakniv Eldris Kit - отличный представитель качества и надежности. Его малый вес и ножны могут легко поместится как в рюкзаке или сумке, так и прицепленным в удобном месте с помощью петли на рукоятке. Достоинством этого ножа является материал лезвия из нержавеющей стали Sandvik 12C27, который не подвержен коррозии, имеет высокие показатели прочности и надежности. Удобная рифленая рукоять из пластика позволит вам в любых погодных условиях легко раскрыть и удерживать нож одной рукой, а резиновая вставка увеличит надежность схвата. Форма клинка Drop Point - пожалуй, самая универсальная форма, так как геометрия клинка дает золотую середину между повышеным колющим свойством и длиной режущего лезвия, что делает ее просто незаменимой как на охоте, так и в хозяйственных делах.",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "50$",
      id: "7",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]

    },
    {
      title: "Пила походная Tramp TRA-022",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/470/346/detailed/21/1-pila-pohodnaya-tramp-TRA-022.jpg",
      description: "Проволочная пила TRA-022 от бренда Tramp предназначена для распила небольших веток и занимает минимум места в вашем инвентаре.",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "5$",
      id: "8",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]

    },
    {
      title: "Тент Tramp TLT-011 Lite Tent",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1000/738/detailed/84/tent-Tramp-TLT-011-1.jpg",
      description: "Тент Tramp TLT-011 Lite Tent - это большой, легкий тент для защиты от солнца и дождя в кемпинге. Комплект со всем необходимым для установки.Ткань тента отражает УФ-лучи и имеет специальную пропитку против быстрого распространения огня Швы проклеены термоусадочной лентой для герметизации Усиленные точки крепления под стойки (с люверсами)Складные стальные стойки в комплекте (∅ 16 мм, длина каждой - 230 см) Оттяжки и колышки в комплекте Удобная сумка-чехол для хранения и транспортировки.",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "50$",
      id: "9",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]
    },
    {
      title: "Гамак Turbat Oasis 300",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1357/1000/detailed/128/Gamak-Turbat-Oasis-01.jpg",
      description: "Бренд:Turbat Вид:Гамак Размер:Single Цвет:Lime Green Количество мест:1 Размеры:220 x 140 см Максимальная нагрузка:180кг Вес:470 кг Материалы: Nylon Комплектация: гамак чехол",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "40$",
      id: "10",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]
    },
    {
      title: "Бинокль Hawke Nature Trek 10x50",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/814/600/detailed/48/mt_cat.1402574602.2.b.jpg",
      description: "Hawke NATURE TREK - это, прежде всего, добротные надёжные бинокли, выполненные в ударопрочном водонепроницаемом поликарбонатном корпусе, оснащенные оптикой, значительно превосходящей минимальные требованиям к современным качественным оптическим приборам. Широкий модельный ряд линейки Nature Trek включает и компактные бинокли для туристических походов и широкопольные полноразмерные бинокли для наблюдения за природой и птицами, и бинокли с достаточным увеличением и диаметром линз для наблюдений объектов на значительном удалении в понеженных условиях видимости. Станьте ближе к окружающему миру где бы и когда бы Вы не путешествовали.Hawke Nature Trek Top Hinge - бинокли с самой современной на сегодняшний день конструкцией шарнира `Верхний мост`, которая обеспечивает более удобный захват бинокля и дает преимущество в весе в сравнении с классической шарнирной конструкцией.Полное многослойное широкополосное просветление оптики Hawke обеспечивает одинаково высокую светопропускную способность во всём видимом спектре и способствует высокой контрастности и цветопередачи в естественных тонах.",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "200$",
      id: "11",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]
    },
    {
      title: "Турбопечка BRS-116",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1357/1000/detailed/84/turbopechka-BRS-116-01.jpg",
      description: "Турбопечка BRS-116 работает с твердым топливом природного происхождения. Есть возможность принудительного наддува. Наддув функционирует от двух батареек типа АА или от повербанка. Вы получаете комфортный доступ для загрузки топлива, настраиваемую площадку, компактность. Кроме того, готовить можно быстро и легко. Высокая мощность – 6 тысяч ватт. На закипание одного литра воды понадобится всего лишь от одной до трёх минут времени. В качестве топлива здесь можно применять дрова, опилки, уголь, древесную стружку. Что весьма практично и хорошо с точки зрения экологичности.Лёгкая и маленькая турбопечка: в длину достигает 24 сантиметра, а высота составляет 12 сантиметров. В сложенном состоянии помещается в ладонь. Прекрасный помощник для кулинарного процесса в полевых условиях. Выполнена модель из надёжной стали, устойчивой к коррозии и к высоким температурам. Опорные стержни поворачиваются в соответствии с размером котелка. Конструкция выдерживает нагрузку до 24 килограмм.Сильное пламя, поверхность посуды при нагревании защищена вентиляционной системой, сильный и мощный огонь. Можно приготовить самые разные блюда, в том числе, годится для барбекю. Можно использовать в зимний период. Легко добыть топливо для работы горелки, что ещё более упрощает процесс готовки.",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "50$",
      id: "12",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]
    },
    {
      title: "Распалка",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1274/939/detailed/35/1-ognivo-Light-My-Fire-TinderDust-Pin-Pack.jpg",
      description: "Для костра",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "10$",
      id: "13",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]
    },
    {
      title: "Tatonka-Thermo-250",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1628/1200/detailed/5/2-termokughka-Tatonka-Thermo-250.jpg",
      description: "Tatonka Thermo 250 - термочашка, которая поможет сохранить ваши напитки горячими и вкусными. Благодаря утолщенным стенкам, отлично сохраняет температуру внутри, при этом ее удобно держать в руках, не боясь, что стенки обожгут вам руки. Это позволяет пить напиток прямо из кружки. термочашка подойдет любителям чая или кофе в походах, в офисе или просто на прогулке. В комплекте с термочашкой поставляется крышечка с отверстием для питья. Емкость изготовлена из качественных материалов, без применения вредного бисфенола, не впитывает запахи, цвета или вкусы.",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "25$",
      id: "14",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]
    },
    {
      title: "Рюкзак Kelty",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1221/900/detailed/116/ryukzak-Kelty-ZYP-28-Fallen-Rock-03.jpg",
      description: "Особенности рюкзака Kelty ZYP 28:Изготовлен из комбинации прочного  нейлона .Каркас из подпружиненной стальной рамы по периметру.Совместимость с питьевой системой.Вентилируемая подвеска NadaTech для максимальной воздухопроницаемости и отведения влаги.Технология Perfect Fit с бесступенчатой регулировкой, которую можно осуществить на ходу.Мягкие вентилируемые подушечки из EVA-пены и сетчатой ткани на спине в области лопаток, на  лямках и набедренном поясе.Регулируемые плечевые лямки S-образной формы снабжены грудным .Съёмный набедренный пояс с V-образным фастексом, позволяет легко регулировать затяжку даже  нагрузкой.Пояс снабжён двумя вместительными карманами на молнии, в которые поместятся смартфон, компактная камера либо снеки.Большое отделение с вертикальной загрузкой.Внутреннее отделение вдоль спинки.Внешний фронтальный эластичный карман.Фронтальный карман  молнии в верхней части рюкзака для ценных вещей.Боковые эластичные карманы.Верхние и нижние боковые стяжки с каждой стороны.2 петли для крепления трекинговых палок.Прочная текстильная ручка для переноски.",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "120$",
      id: "15",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]
    },
    {
      title: "Лопата AceCamp Folding Shovel",
      image: "https://palatka.com.ua/images/watermarked/1/thumbnails/1221/900/detailed/26/1-lopata-mnogofunkcuonalnaya-AceCamp-Folding-Shovel.jpg",
      description: "Небольшая складная многофункциональная лопата AceCamp Folding Shovel сочетает в себе 3 инструмента: лопату, пилу и ледоруб.Компактные размеры в сложенном виде и относительно небольшой вес инструмента позволяет носить его прямо на поясе (чехол имеет специальное крепление для пояса).Размеры инструмента в рабочем состоянии: 27,5 x 9,5 см Длина ручки: 26,5 см Размер рабочей поверхности лопаты: 9,5 x 12,5 см",
      btnBuy: "купить",
      btnDelete: "удалить",
      price: "30$",
      id: "16",
      // comment: [""]
      comments: ["Товар удобные и крепкие. Рекомендую!", "Купили для семьи 3 года назад, используем каждые выходные на протяжении всеголетнего сезона, очень довольны товаром"]
    },
  ];
  getProduct() {
    return this.arrProduct;
  }
}

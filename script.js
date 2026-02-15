/* ================================================================
   רכישת פירות מרוכזת — Interactive Scripts + i18n
   ================================================================ */

/* ======================== TRANSLATIONS ======================== */
const translations = {
    en: {
        brand: 'רכישת פירות מרוכזת',
        nav_story: 'Our Story',
        nav_gallery: 'Gallery',
        nav_why: 'Why Us',
        nav_location: 'Location',
        nav_order: 'Order Now',
        hero_badge: 'Fresh from the farm • All Kosher ✓',
        hero_brand: 'רכישת פירות מרוכזת',
        hero_title: 'Premium Fruits',
        hero_subtitle: '& Fresh Berries',
        hero_desc: 'Hand-picked, sun-ripened berries and premium fruits — all Kosher certified. Available every Friday in Beit Shemesh. Join our WhatsApp group for weekly sale times.',
        hero_cta_wa: 'Order on WhatsApp',
        hero_cta_explore: 'Explore',
        stat_customers: 'Happy Customers',
        stat_kosher: '100% Kosher',
        stat_friday: 'Every Friday',
        scroll: 'Scroll',
        card_kosher: '100% Kosher',
        card_friday: 'Every Friday',
        about_tag: 'Our Story',
        about_title_1: 'Freshness You Can ',
        about_title_2: 'Taste',
        about_p1: 'רכישת פירות מרוכזת brings the finest, hand-selected strawberries and seasonal fruits straight from trusted farms to your table. Every berry is picked at peak ripeness, washed in crystal-clear water, and delivered with care to families across Beit Shemesh, Rama A.',
        about_p2: 'All our produce is 100% Kosher certified. We operate every Friday — join our WhatsApp group to get notified of exact sale times and weekly availability. Our community of happy customers keeps growing because we never compromise on quality.',
        hl_kosher_title: 'All Kosher Certified',
        hl_kosher_desc: 'Every product meets strict kosher standards',
        hl_friday_title: 'Fresh Every Friday',
        hl_friday_desc: 'Sale times posted on our WhatsApp group',
        gallery_tag: 'Gallery',
        gallery_title_1: "Nature's ",
        gallery_title_2: 'Finest',
        gallery_sub: 'See the quality that sets us apart — fresh, vibrant, and bursting with flavor.',
        gal_strawberries: 'Premium Strawberries',
        gal_mixed: 'Mixed Berries',
        gal_blueberries: 'Fresh Blueberries',
        gal_raspberries: 'Red Raspberries',
        gal_fresh: 'Water-Fresh',
        feat_tag: 'Why Choose Us',
        feat_title_1: 'The ',
        feat_title_2: 'Fresh Berry',
        feat_title_3: ' Difference',
        f1_title: '100% Kosher',
        f1_desc: 'All our products are certified kosher. We maintain the highest standards of kashrut for our community.',
        f2_title: 'Farm Fresh',
        f2_desc: 'Sourced directly from premium farms. No middlemen, no storage — just field-to-door freshness.',
        f3_title: 'Every Friday',
        f3_desc: 'We operate every Friday. Exact sale times are posted weekly on our WhatsApp group — join to stay updated!',
        f4_title: 'Premium Quality',
        f4_desc: 'Only the top 10% of each harvest makes it to your box. We never compromise on quality.',
        divider_title: 'Taste the Difference',
        divider_desc: 'Premium kosher berries, every Friday. Join thousands of happy customers.',
        divider_cta: 'Join Our WhatsApp Group',
        loc_tag: 'Find Us',
        loc_title_1: 'Visit Us in ',
        loc_title_2: 'Beit Shemesh',
        loc_address_label: 'Address',
        loc_address: 'Beit Shemesh, Rama A<br>Near Yeshiva Lev HaTorah',
        loc_phone_label: 'Phone',
        loc_wa_label: 'WhatsApp Group',
        loc_wa_link: 'Join our community',
        loc_hours_label: 'Hours',
        loc_hours: 'Every Friday<br>Exact sale time posted on WhatsApp group',
        loc_kosher_label: 'Kashrut',
        loc_kosher: 'All products are 100% Kosher certified',
        cta_tag: 'Ready to Order?',
        cta_title_1: 'Get Your ',
        cta_title_2: 'Fresh Fruits',
        cta_title_3: ' This Friday',
        cta_desc: "Join our WhatsApp group to see Friday's availability, prices, and exact sale time. All products are Kosher certified.",
        cta_btn_wa: 'Join WhatsApp Group',
        cta_btn_call: 'Call Us: +972 55-264-9363',
        footer_tagline: 'Premium kosher fruits in Beit Shemesh, Rama A • Every Friday',
        footer_loc: '📍 Beit Shemesh, Rama A — Near Yeshiva Lev HaTorah',
        footer_kosher: '✡️ All products Kosher certified',
        footer_rights: 'All rights reserved.',
        fab_tooltip: 'Chat with us!'
    },
    he: {
        brand: 'רכישת פירות מרוכזת',
        nav_story: 'הסיפור שלנו',
        nav_gallery: 'גלריה',
        nav_why: 'למה אנחנו',
        nav_location: 'מיקום',
        nav_order: 'הזמן עכשיו',
        hero_badge: 'טרי מהחווה • הכל כשר ✓',
        hero_brand: 'רכישת פירות מרוכזת',
        hero_title: 'פירות פרימיום',
        hero_subtitle: 'ופירות יער טריים',
        hero_desc: 'פירות יער ופירות פרימיום נבחרים ביד, בשלים בשמש — כולם בכשרות מהודרת. זמין כל יום שישי בבית שמש. הצטרפו לקבוצת הוואטסאפ שלנו לשעות המכירה השבועיות.',
        hero_cta_wa: 'הזמינו בוואטסאפ',
        hero_cta_explore: 'גלו עוד',
        stat_customers: 'לקוחות מרוצים',
        stat_kosher: '100% כשר',
        stat_friday: 'כל יום שישי',
        scroll: 'גלול',
        card_kosher: '100% כשר',
        card_friday: 'כל יום שישי',
        about_tag: 'הסיפור שלנו',
        about_title_1: 'טריות שאפשר ',
        about_title_2: 'לטעום',
        about_p1: 'רכישת פירות מרוכזת מביאה את הפירות המשובחים ביותר, תותים ופירות עונתיים נבחרים ביד, ישירות מחוות אמינות לשולחן שלכם. כל פרי נקטף בשיא הבשלות, נשטף במים צלולים ומועבר בזהירות למשפחות ברחבי בית שמש, רמה א׳.',
        about_p2: 'כל התוצרת שלנו בכשרות מהודרת 100%. אנחנו פועלים כל יום שישי — הצטרפו לקבוצת הוואטסאפ שלנו כדי לקבל עדכונים על שעות מכירה מדויקות וזמינות שבועית. הקהילה שלנו של לקוחות מרוצים ממשיכה לגדול כי אנחנו אף פעם לא מתפשרים על איכות.',
        hl_kosher_title: 'כשרות מהודרת',
        hl_kosher_desc: 'כל מוצר עומד בסטנדרטים מחמירים של כשרות',
        hl_friday_title: 'טרי כל יום שישי',
        hl_friday_desc: 'שעות המכירה מפורסמות בקבוצת הוואטסאפ',
        gallery_tag: 'גלריה',
        gallery_title_1: 'המובחר של ',
        gallery_title_2: 'הטבע',
        gallery_sub: 'ראו את האיכות שמבדילה אותנו — טרי, תוסס ומלא טעם.',
        gal_strawberries: 'תותים משובחים',
        gal_mixed: 'מיקס פירות יער',
        gal_blueberries: 'אוכמניות טריות',
        gal_raspberries: 'פטל אדום',
        gal_fresh: 'רחוצים בטריות',
        feat_tag: 'למה לבחור בנו',
        feat_title_1: 'ה',
        feat_title_2: 'הבדל הטרי',
        feat_title_3: ' שלנו',
        f1_title: '100% כשר',
        f1_desc: 'כל המוצרים שלנו בכשרות מהודרת. אנחנו שומרים על הסטנדרטים הגבוהים ביותר של כשרות עבור הקהילה שלנו.',
        f2_title: 'טרי מהשדה',
        f2_desc: 'ישירות מחוות פרימיום. בלי מתווכים, בלי אחסון — רק טריות מהשדה לדלת.',
        f3_title: 'כל יום שישי',
        f3_desc: 'אנחנו פועלים כל יום שישי. שעות מכירה מדויקות מפורסמות בקבוצת הוואטסאפ — הצטרפו כדי להתעדכן!',
        f4_title: 'איכות פרימיום',
        f4_desc: 'רק 10% העליונים של כל קטיף מגיעים לקופסה שלכם. אנחנו אף פעם לא מתפשרים.',
        divider_title: 'תטעמו את ההבדל',
        divider_desc: 'פירות יער כשרים ופרימיום, כל יום שישי. הצטרפו לאלפי לקוחות מרוצים.',
        divider_cta: 'הצטרפו לקבוצת הוואטסאפ',
        loc_tag: 'מצאו אותנו',
        loc_title_1: 'בקרו אותנו ב',
        loc_title_2: 'בית שמש',
        loc_address_label: 'כתובת',
        loc_address: 'בית שמש, רמה א׳<br>ליד ישיבת לב התורה',
        loc_phone_label: 'טלפון',
        loc_wa_label: 'קבוצת וואטסאפ',
        loc_wa_link: 'הצטרפו לקהילה',
        loc_hours_label: 'שעות פעילות',
        loc_hours: 'כל יום שישי<br>שעת המכירה מפורסמת בקבוצת הוואטסאפ',
        loc_kosher_label: 'כשרות',
        loc_kosher: 'כל המוצרים בכשרות מהודרת 100%',
        cta_tag: 'מוכנים להזמין?',
        cta_title_1: 'קבלו ',
        cta_title_2: 'פירות טריים',
        cta_title_3: ' ביום שישי',
        cta_desc: 'הצטרפו לקבוצת הוואטסאפ שלנו לראות זמינות ליום שישי, מחירים ושעת מכירה מדויקת. כל המוצרים בכשרות מהודרת.',
        cta_btn_wa: 'הצטרפו לוואטסאפ',
        cta_btn_call: 'התקשרו: 972 55-264-9363+',
        footer_tagline: 'פירות כשרים פרימיום בבית שמש, רמה א׳ • כל יום שישי',
        footer_loc: '📍 בית שמש, רמה א׳ — ליד ישיבת לב התורה',
        footer_kosher: '✡️ כל המוצרים בכשרות מהודרת',
        footer_rights: 'כל הזכויות שמורות.',
        fab_tooltip: 'דברו איתנו!'
    },
    ru: {
        brand: 'רכישת פירות מרוכזת',
        nav_story: 'О нас',
        nav_gallery: 'Галерея',
        nav_why: 'Почему мы',
        nav_location: 'Местоположение',
        nav_order: 'Заказать',
        hero_badge: 'Прямо с фермы • Всё кошерное ✓',
        hero_brand: 'רכישת פירות מרוכזת',
        hero_title: 'Премиум Фрукты',
        hero_subtitle: 'и Свежие Ягоды',
        hero_desc: 'Отборные, созревшие на солнце ягоды и фрукты премиум-класса — всё кошерное. Доступно каждую пятницу в Бейт Шемеше. Присоединяйтесь к нашей группе WhatsApp для информации о времени продаж.',
        hero_cta_wa: 'Заказать в WhatsApp',
        hero_cta_explore: 'Смотреть',
        stat_customers: 'Довольных клиентов',
        stat_kosher: '100% Кошерно',
        stat_friday: 'Каждую пятницу',
        scroll: 'Листайте',
        card_kosher: '100% Кошерно',
        card_friday: 'Каждую пятницу',
        about_tag: 'О нас',
        about_title_1: 'Свежесть, которую можно ',
        about_title_2: 'Попробовать',
        about_p1: 'רכישת פירות מרוכזת доставляет лучшие, отобранные вручную клубнику и сезонные фрукты прямо с проверенных ферм на ваш стол. Каждая ягода собрана на пике зрелости, промыта чистейшей водой и доставлена с заботой семьям Бейт Шемеша, Рама А.',
        about_p2: 'Вся наша продукция 100% кошерная. Мы работаем каждую пятницу — присоединяйтесь к нашей группе WhatsApp, чтобы узнать точное время продажи и наличие на неделе. Наше сообщество довольных клиентов продолжает расти, потому что мы никогда не идём на компромисс в качестве.',
        hl_kosher_title: 'Кошерный сертификат',
        hl_kosher_desc: 'Каждый продукт соответствует строгим стандартам кашрута',
        hl_friday_title: 'Свежее каждую пятницу',
        hl_friday_desc: 'Время продаж публикуется в нашей группе WhatsApp',
        gallery_tag: 'Галерея',
        gallery_title_1: 'Лучшее в ',
        gallery_title_2: 'Природе',
        gallery_sub: 'Убедитесь в качестве, которое нас отличает — свежее, яркое и полное вкуса.',
        gal_strawberries: 'Премиум клубника',
        gal_mixed: 'Микс ягод',
        gal_blueberries: 'Свежая черника',
        gal_raspberries: 'Красная малина',
        gal_fresh: 'Свежесть воды',
        feat_tag: 'Почему мы',
        feat_title_1: '',
        feat_title_2: 'Свежие Ягоды',
        feat_title_3: ' — отличие',
        f1_title: '100% Кошерно',
        f1_desc: 'Все наши продукты сертифицированы как кошерные. Мы поддерживаем самые высокие стандарты кашрута для нашей общины.',
        f2_title: 'Прямо с фермы',
        f2_desc: 'Напрямую с премиальных ферм. Без посредников, без хранения — только свежесть с поля до двери.',
        f3_title: 'Каждую пятницу',
        f3_desc: 'Мы работаем каждую пятницу. Точное время продажи еженедельно публикуется в нашей группе WhatsApp!',
        f4_title: 'Премиум качество',
        f4_desc: 'Только лучшие 10% каждого урожая попадают в вашу коробку. Мы никогда не идём на компромисс.',
        divider_title: 'Почувствуйте разницу',
        divider_desc: 'Премиум кошерные ягоды, каждую пятницу. Присоединяйтесь к тысячам довольных клиентов.',
        divider_cta: 'Присоединиться к WhatsApp',
        loc_tag: 'Найдите нас',
        loc_title_1: 'Посетите нас в ',
        loc_title_2: 'Бейт Шемеше',
        loc_address_label: 'Адрес',
        loc_address: 'Бейт Шемеш, Рама А<br>Рядом с ешивой Лев ха-Тора',
        loc_phone_label: 'Телефон',
        loc_wa_label: 'Группа WhatsApp',
        loc_wa_link: 'Присоединиться к сообществу',
        loc_hours_label: 'Часы работы',
        loc_hours: 'Каждую пятницу<br>Точное время продажи в группе WhatsApp',
        loc_kosher_label: 'Кашрут',
        loc_kosher: 'Все продукты 100% кошерные',
        cta_tag: 'Готовы заказать?',
        cta_title_1: 'Получите ',
        cta_title_2: 'Свежие Фрукты',
        cta_title_3: ' в эту пятницу',
        cta_desc: 'Присоединяйтесь к нашей группе WhatsApp, чтобы увидеть наличие на пятницу, цены и точное время продажи. Все продукты кошерные.',
        cta_btn_wa: 'Вступить в WhatsApp',
        cta_btn_call: 'Звоните: +972 55-264-9363',
        footer_tagline: 'Премиум кошерные фрукты в Бейт Шемеше, Рама А • Каждую пятницу',
        footer_loc: '📍 Бейт Шемеш, Рама А — рядом с ешивой Лев ха-Тора',
        footer_kosher: '✡️ Все продукты кошерные',
        footer_rights: 'Все права защищены.',
        fab_tooltip: 'Напишите нам!'
    }
};

const langMeta = {
    en: { flag: '🇬🇧', code: 'EN', dir: 'ltr', lang: 'en' },
    he: { flag: '🇮🇱', code: 'HE', dir: 'rtl', lang: 'he' },
    ru: { flag: '🇷🇺', code: 'RU', dir: 'ltr', lang: 'ru' }
};

let currentLang = localStorage.getItem('lang') || 'en';

/* ======================== INIT ======================== */
document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initLangSwitcher();
    initScrollReveal();
    initNavbar();
    initMobileNav();
    initParallax();
    initCounterAnimation();
    initHeroParticles();
    initSmoothScroll();
    initPageLoad();
});

/* ======================== i18n SYSTEM ======================== */
function initI18n() {
    setLanguage(currentLang, false);
}

function setLanguage(lang, animate = true) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang];
    const meta = langMeta[lang];

    // Set document direction and lang
    document.documentElement.setAttribute('dir', meta.dir);
    document.documentElement.setAttribute('lang', meta.lang);

    // Update lang switcher UI
    const langFlag = document.getElementById('langFlag');
    const langCode = document.getElementById('langCode');
    if (langFlag) langFlag.textContent = meta.flag;
    if (langCode) langCode.textContent = meta.code;

    // Update active state on options
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate all elements
    const elements = document.querySelectorAll('[data-i18n]');

    if (animate) {
        // Fade out
        elements.forEach(el => el.classList.add('i18n-fade'));

        setTimeout(() => {
            applyTranslations(elements, t);
            // Fade in
            requestAnimationFrame(() => {
                elements.forEach(el => el.classList.remove('i18n-fade'));
            });
        }, 300);
    } else {
        applyTranslations(elements, t);
    }
}

function applyTranslations(elements, t) {
    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });
}

/* ======================== LANGUAGE SWITCHER ======================== */
function initLangSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    const toggle = document.getElementById('langToggle');
    const dropdown = document.getElementById('langDropdown');

    if (!switcher || !toggle) return;

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        switcher.classList.toggle('open');
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = btn.dataset.lang;
            if (lang && lang !== currentLang) {
                setLanguage(lang, true);
            }
            switcher.classList.remove('open');
        });
    });

    // Close on outside click
    document.addEventListener('click', () => {
        switcher.classList.remove('open');
    });
}

/* ======================== PAGE LOAD ======================== */
function initPageLoad() {
    document.body.classList.add('loading');
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
        const heroElements = document.querySelectorAll('.hero-content .animate-on-scroll');
        heroElements.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, 300 + i * 150);
        });
    });
}

/* ======================== SCROLL REVEAL ======================== */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        if (!el.closest('.hero-content')) {
            observer.observe(el);
        }
    });
}

/* ======================== NAVBAR ======================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
}

/* ======================== MOBILE NAV ======================== */
function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
        document.body.style.overflow = links.classList.contains('active') ? 'hidden' : '';
    });

    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* ======================== PARALLAX ======================== */
function initParallax() {
    const heroImg = document.querySelector('.hero-img');
    const parallaxImg = document.querySelector('.parallax-img');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.pageYOffset;

                if (heroImg) {
                    const heroSection = document.querySelector('.hero');
                    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                    if (scrollY < heroBottom) {
                        heroImg.style.transform = `scale(1.1) translateY(${scrollY * 0.15}px)`;
                    }
                }

                if (parallaxImg) {
                    const divider = document.querySelector('.parallax-divider');
                    const rect = divider.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                        parallaxImg.style.transform = `translateY(${(progress - 0.5) * -80}px)`;
                    }
                }

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ======================== COUNTER ANIMATION ======================== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const start = performance.now();

    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(easeOutQuart(progress) * target);
        element.textContent = current.toLocaleString();
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    requestAnimationFrame(update);
}

/* ======================== HERO PARTICLES ======================== */
function initHeroParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;
        const duration = Math.random() * 8 + 6;
        const delay = Math.random() * 10;
        const opacity = Math.random() * 0.4 + 0.1;

        particle.style.cssText = `
            width: ${size}px; height: ${size}px;
            left: ${left}%; top: ${top}%;
            --tx: ${tx}px; --ty: ${ty}px;
            --duration: ${duration}s; --delay: -${delay}s;
            opacity: ${opacity};
            background: ${Math.random() > 0.5 ? 'rgba(251,113,133,0.6)' : 'rgba(253,164,175,0.4)'};
        `;
        container.appendChild(particle);
    }
}

/* ======================== SMOOTH SCROLL ======================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            const navbar = document.getElementById('navbar');
            const navHeight = navbar ? navbar.offsetHeight : 0;
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.pageYOffset - navHeight,
                behavior: 'smooth'
            });
        });
    });
}

/* ======================== CURSOR GLOW (DESKTOP) ======================== */
(function initCursorGlow() {
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.feature-card, .contact-card, .location-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            });
        });
    }
})();

/* ======================== IMAGE LOADING ======================== */
(function initImageLoading() {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.6s ease';
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', () => { img.style.opacity = '1'; });
        }
    });
})();

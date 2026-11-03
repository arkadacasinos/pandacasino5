import Image from 'next/image'

const REF_URL = 'https://nymph-pahd4.com/adsrtcqlch'

export default function Page() {
  return (
    <div className="p7d2-wrapper">
      {/* Mobile drawer target container */}
      <div id="p7d2-mobile-menu" className="fixed inset-0 z-50 pointer-events-none opacity-0 target:opacity-100 target:pointer-events-auto transition-opacity duration-200">
        <a href="#!" aria-label="Закрыть меню" className="absolute inset-0 bg-black/70 backdrop-blur-xs" />
        <div className="absolute top-0 left-0 bottom-0 w-64 bg-[#121319] border-r border-white/10 p-5 flex flex-col justify-between z-10 shadow-2xl">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <a href={REF_URL} className="flex items-center gap-2 text-white font-bold text-lg">
                <Image src="/panda-logo.png" alt="Panda Casino" width={32} height={32} className="rounded-full" />
                <span>Panda Casino</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-white p-1 text-xl leading-none">✕</a>
            </div>
            <nav className="flex flex-col gap-3 text-sm font-medium text-gray-300">
              <a href={REF_URL} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 text-amber-400">
                <span>🎰</span> Слоты и автоматы
              </a>
              <a href={REF_URL} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5">
                <span>⚡</span> Миссии
              </a>
              <a href={REF_URL} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5">
                <span>🎁</span> Магазин Бонусов
              </a>
              <a href={REF_URL} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5">
                <span>🏆</span> Рейтинг и турниры
              </a>
              <a href={REF_URL} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5">
                <span>💬</span> Поддержка 24/7
              </a>
              <a href="#p7d2-about" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 text-gray-400">
                <span>ℹ️</span> О казино Panda
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
            <a href={REF_URL} className="p7d2-btn-reg text-center">Регистрация</a>
            <a href={REF_URL} className="p7d2-btn-login text-center">Вход</a>
          </div>
        </div>
      </div>

      <div className="p7d2-layout-row">
        {/* Left vertical sidebar (Desktop rail like in screenshot 2) */}
        <aside className="p7d2-sidebar" aria-label="Панель навигации">
          <a href={REF_URL} aria-label="Panda Casino Главная" className="p-2 text-white hover:text-amber-400 transition-colors">
            <Image src="/panda-logo.png" alt="Panda Casino" width={28} height={28} className="rounded-full" />
          </a>
          <div className="w-8 h-[1px] bg-white/10 my-1" />
          <a href={REF_URL} title="Игры" className="p-2.5 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </a>
          <a href={REF_URL} title="Турниры" className="p-2.5 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
          </a>
          <a href={REF_URL} title="Бонусы" className="p-2.5 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </a>
          <a href={REF_URL} title="Рейтинг" className="p-2.5 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </a>
          <a href={REF_URL} title="Поддержка" className="p-2.5 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-colors mt-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          </a>
        </aside>

        {/* Main Content Area */}
        <div className="p7d2-main-content">
          {/* Topbar */}
          <header className="p7d2-topbar">
            <div className="flex items-center gap-3">
              {/* Mobile Burger Menu Button */}
              <a href="#p7d2-mobile-menu" aria-label="Открыть меню" className="md:hidden p-2 text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              </a>
              <a href={REF_URL} className="p7d2-search-input-box">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <span>Искать игры</span>
              </a>
            </div>

            <div className="p7d2-auth-group">
              <a href={REF_URL} className="p7d2-btn-login">Вход</a>
              <a href={REF_URL} className="p7d2-btn-reg">Регистрация</a>
            </div>
          </header>

          {/* Hero Screen (Screenshots 2 replication) */}
          <section className="p7d2-hero-grid" aria-label="Промо баннеры казино">
            {/* Main Green Banner with Panda, Cash and Bonus */}
            <a href={REF_URL} className="p7d2-banner-main group">
              <div className="relative z-10 max-w-[280px]">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-1">БОНУС</span>
                <div className="text-3xl md:text-4xl font-extrabold text-[#2ed573] leading-none mb-1">
                  ДО 225% <span className="text-xl md:text-2xl text-white">+1500ФС</span>
                </div>
                <p className="text-xs text-gray-300 mb-5">на первый депозит</p>
                <span className="p7d2-btn-reg inline-block shadow-lg">Забрать бонус</span>
              </div>

              {/* Payment badges at bottom */}
              <div className="relative z-10 flex items-center gap-3 pt-6 flex-wrap">
                <span className="text-xs font-bold text-gray-200 tracking-wider">СБП</span>
                <span className="text-xs font-bold text-gray-200 tracking-wider">Pay</span>
                <span className="text-xs font-bold text-emerald-300 tracking-wider">МИР</span>
                <span className="text-xs font-semibold text-gray-300">TRON</span>
                <span className="text-xs font-semibold text-emerald-400">Tether</span>
              </div>

              {/* Panda character illustration */}
              <div className="absolute right-0 bottom-0 top-0 w-[220px] md:w-[280px] pointer-events-none flex items-end justify-end">
                <Image
                  src="/panda-hero.jpg"
                  alt="Panda Casino панда с деньгами"
                  width={280}
                  height={280}
                  priority
                  className="object-cover object-center w-full h-full rounded-r-2xl opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>

            {/* Sub banner 1: МИССИИ */}
            <a href={REF_URL} className="p7d2-banner-sub group">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Ежедневные квесты</div>
              <div className="text-xl md:text-2xl font-black tracking-wide text-white uppercase group-hover:text-amber-400 transition-colors">
                МИССИИ
              </div>
              <p className="text-xs text-gray-400 mt-2 max-w-[180px]">Выполняйте задания и получайте фриспины</p>
            </a>

            {/* Sub banner 2: МАГАЗИН БОНУСОВ */}
            <a href={REF_URL} className="p7d2-banner-sub group">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Обмен очков</div>
              <div className="text-xl md:text-2xl font-black tracking-wide text-white uppercase group-hover:text-amber-400 transition-colors">
                МАГАЗИН БОНУСОВ
              </div>
              <p className="text-xs text-gray-400 mt-2 max-w-[180px]">Покупайте бонусы и бесплатные вращения</p>
            </a>
          </section>

          {/* Live Recent Wins Ticker (replicated from screen 2) */}
          <section className="p7d2-ticker-wrap" aria-label="Последние выигрыши онлайн">
            {[
              { slot: 'Perseus', user: 'user***69', sum: '960 ₽', color: 'from-amber-700 to-amber-900' },
              { slot: 'Perseus', user: 'user***18', sum: '900 ₽', color: 'from-amber-700 to-amber-900' },
              { slot: 'Champagne', user: 'user***99', sum: '600 ₽', color: 'from-fuchsia-700 to-pink-900' },
              { slot: 'Red Hot', user: 'user***56', sum: '600 ₽', color: 'from-red-700 to-orange-900' },
              { slot: 'Perseus', user: 'user***18', sum: '450 ₽', color: 'from-amber-700 to-amber-900' },
              { slot: 'Dead or Alive', user: 'user***94', sum: '1440 ₽', color: 'from-yellow-700 to-amber-900' },
              { slot: 'Bandits', user: 'tg:k***03', sum: '583 ₽', color: 'from-emerald-700 to-teal-900' },
              { slot: 'Wild West', user: 'user***06', sum: '756 ₽', color: 'from-amber-600 to-yellow-800' },
              { slot: 'Champagne', user: 'user***99', sum: '3540 ₽', color: 'from-fuchsia-700 to-pink-900' },
              { slot: 'Perseus', user: 'user***12', sum: '1120 ₽', color: 'from-amber-700 to-amber-900' },
            ].map((win, idx) => (
              <a key={idx} href={REF_URL} className="p7d2-ticker-card">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${win.color} flex items-center justify-center text-xs font-bold text-white shadow-xs`}>
                  🎰
                </div>
                <div className="flex flex-col text-xs leading-tight">
                  <span className="text-gray-400">{win.user}</span>
                  <span className="text-emerald-400 font-bold">{win.sum}</span>
                </div>
              </a>
            ))}
          </section>

          {/* Secondary Search & Provider Bar from screen 2 */}
          <div className="px-4 py-2 flex items-center justify-between gap-3">
            <a href={REF_URL} className="p7d2-search-input-box max-w-full md:max-w-xs">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span>Искать игры</span>
            </a>
            <a href={REF_URL} className="p7d2-btn-login text-xs flex items-center gap-2">
              <span>Провайдеры</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </a>
          </div>

          {/* Call to action mid-page banner */}
          <div className="px-4 py-4">
            <div className="p7d2-cta-banner">
              <div>
                <div className="text-lg md:text-xl font-bold text-white mb-1">
                  Начните играть в Panda Casino с щедрым бонусом!
                </div>
                <div className="text-xs text-gray-300">
                  Мгновенная регистрация за 15 секунд, поддержка карт МИР, СБП и криптовалюты.
                </div>
              </div>
              <a href={REF_URL} className="p7d2-btn-reg whitespace-nowrap text-sm px-6 py-2.5">
                Зарегистрироваться
              </a>
            </div>
          </div>

          {/* SEO Text Content Section (300-400 words with required keywords) */}
          <article id="p7d2-about" className="p7d2-seo-article">
            <header>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                Panda Casino — официальный сайт и рабочее зеркало панда казино
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed">
                Добро пожаловать в игровой клуб Panda Casino — современную платформу для азартных развлечений, где каждый игрок может безопасно играть в лицензионные игровые автоматы, настольные игры и live-рулетки от проверенных мировых провайдеров.
              </p>
            </header>

            <section id="official-site" className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl font-bold text-amber-400">
                Panda Casino официальный сайт и лицензионные игры
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Надежный Panda Casino официальный сайт предоставляет круглосуточный доступ к сертифицированному софту с высоким процентом отдачи (RTP до 98%). Посещая официальный ресурс Panda Casino, гости клуба получают гарантированную защиту персональных данных, честный генератор случайных чисел и быстрые выплаты выигрышей без задержек на любые банковские карты и криптокошельки.
              </p>
            </section>

            <section id="casino-online" className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl font-bold text-amber-400">
                Панда казино онлайн: выбор слотов и удобство для игроков
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Современное панда казино онлайн адаптировано для запуска на всех смартфонах, планшетах и компьютерах. В каталоге представлены классические слоты, видеоавтоматы с джекпотами и карточные дисциплины. Пользователи выбирают панда казино за удобный интерфейс на русском языке, регулярные турниры с крупными призовыми фондами и программу лояльности с кешбэком до 15%.
              </p>
            </section>

            <section id="working-mirror" className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl font-bold text-amber-400">
                Panda Casino зеркало: актуальный доступ при блокировках
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Если основной домен временно недоступен провайдерами связи, используйте официальное Panda Casino зеркало. Альтернативный адрес полностью сохраняет ваш баланс, историю ставок, статус аккаунта и активные бонусы. Свежее Panda Casino зеркало рабочее функционирует без VPN и сторонних программ, обеспечивая надежное и стабильное соединение в любое время суток.
              </p>
            </section>

            <section id="mirror-rabochee" className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl font-bold text-amber-400">
                Панда казино зеркало рабочее на сегодня
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Надежное панда казино зеркало рабочее позволяет обойти сетевые ограничения за один клик. Переходя через проверенное панда казино зеркало, вы мгновенно попадаете в личный кабинет, можете пополнять депозит через СБП, карты МИР или криптовалюту, а также оформлять заявки на вывод денежных средств с минимальной комиссией.
              </p>
            </section>

            <section id="play-online" className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl font-bold text-amber-400">
                Panda Casino играть онлайн на деньги и бесплатно
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Чтобы в Panda Casino играть на реальные средства с выводом, достаточно пройти быструю регистрацию по номеру телефона или электронной почте. Новичкам также доступен бесплатный демо-режим, позволяющий изучить механику новых автоматов без риска. Запуская панда казино играть в демо, вы отрабатываете победные стратегии перед ставками на реальный банкролл.
              </p>
            </section>

            <section id="panda-official" className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl font-bold text-amber-400">
                Панда казино официальный сайт: регистрация и бонусы
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Выбирая панда казино официальный сайт, вы получаете щедрый приветственный пакет бонусов до 225% и до 1500 фриспинов на первый депозит. Прозрачные условия отыгрыша, круглосуточная техническая поддержка и моментальная верификация делают панда казино официальный ресурс лидером среди онлайн казино для игроков из СНГ. Присоединяйтесь к Panda Casino прямо сейчас!
              </p>
            </section>

            {/* Quick table with casino characteristics */}
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#121319] p-4 mt-2">
              <table className="w-full text-left text-xs md:text-sm">
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-gray-400 font-medium">Официальный сайт</td>
                    <td className="py-2.5 text-white font-semibold">Panda Casino (Панда Казино)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-gray-400 font-medium">Бонус за регистрацию</td>
                    <td className="py-2.5 text-emerald-400 font-semibold">До 225% + 1500 FS</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-gray-400 font-medium">Рабочее зеркало</td>
                    <td className="py-2.5 text-white">Доступно 24/7 без блокировок</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-gray-400 font-medium">Методы оплаты</td>
                    <td className="py-2.5 text-white">СБП, Карты МИР, Visa, MC, USDT, Crypto</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-gray-400 font-medium">Скорость выплат</td>
                    <td className="py-2.5 text-emerald-400 font-semibold">От 5 до 15 минут</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Final action trigger */}
            <div className="flex justify-center pt-2">
              <a href={REF_URL} className="p7d2-btn-reg text-sm px-8 py-3 shadow-xl">
                Перейти в Panda Casino и получить бонус
              </a>
            </div>
          </article>

          {/* Footer with hashtag navigation */}
          <footer className="p7d2-footer">
            <div className="max-w-[1080px] margin-auto flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Image src="/panda-logo.png" alt="Panda Casino" width={24} height={24} className="rounded-full" />
                  <span className="text-white font-bold text-sm">Panda Casino</span>
                </div>
                <div className="text-xs text-gray-400">
                  © 2026 Panda Casino. Лицензионные игровые автоматы и слоты онлайн. 18+
                </div>
              </div>

              {/* Hashtag cloud with anchors */}
              <div className="p7d2-hashtag-cloud" aria-label="Теги и ключевые фразы">
                <a href="#official-site" className="p7d2-hashtag-tag">#PandaCasino</a>
                <a href="#working-mirror" className="p7d2-hashtag-tag">#PandaCasinoЗеркало</a>
                <a href="#play-online" className="p7d2-hashtag-tag">#PandaCasinoИграть</a>
                <a href="#official-site" className="p7d2-hashtag-tag">#PandaCasinoОфициальный</a>
                <a href="#official-site" className="p7d2-hashtag-tag">#PandaCasinoОфициальныйСайт</a>
                <a href="#casino-online" className="p7d2-hashtag-tag">#PandaКазино</a>
                <a href="#casino-online" className="p7d2-hashtag-tag">#ПандаКазино</a>
                <a href="#working-mirror" className="p7d2-hashtag-tag">#ПандаКазиноЗеркало</a>
                <a href="#mirror-rabochee" className="p7d2-hashtag-tag">#ПандаКазиноЗеркалоРабочее</a>
                <a href="#play-online" className="p7d2-hashtag-tag">#ПандаКазиноИграть</a>
                <a href="#casino-online" className="p7d2-hashtag-tag">#ПандаКазиноОнлайн</a>
                <a href="#panda-official" className="p7d2-hashtag-tag">#ПандаКазиноОфициальный</a>
                <a href="#panda-official" className="p7d2-hashtag-tag">#ПандаКазиноОфициальныйСайт</a>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Floating Chat Support Widget like on Screen 2 */}
      <a
        href={REF_URL}
        aria-label="Поддержка Panda Casino"
        className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-[#1dd1a1] hover:bg-[#10ac84] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 z-40"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
      </a>
    </div>
  )
}

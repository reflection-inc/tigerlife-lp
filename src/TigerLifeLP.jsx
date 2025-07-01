import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Disclosure } from "@headlessui/react";

export default function TigerLifeLP() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* 左：ロゴ */}
        <a href="#top" className="flex items-center gap-2">
          <img src="/tiger-logo.png" alt="タイガーライフロゴ" className="h-8 w-auto" />
          <span className="text-sm font-bold text-gray-800">タイガーライフ</span>
        </a>

        {/* 右：ナビ + ボタン + ハンバーガー */}
        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex gap-4 text-sm text-gray-700">
            <a href="#news" className="hover:text-orange-500">お知らせ</a>
            <a href="#cases" className="hover:text-orange-500">相談事例</a>
            <a href="#staff" className="hover:text-orange-500">スタッフ紹介</a>
            <a href="#voices" className="hover:text-orange-500">利用者の声</a>
            <a href="#flow" className="hover:text-orange-500">ご利用の流れ</a>
            <a href="#faq" className="hover:text-orange-500">FAQ</a>
            <a href="#contact" className="hover:text-orange-500">お問い合わせ</a>
          </nav>
          <div className="hidden sm:flex gap-2">
            <button className="bg-orange-500 text-white px-3 py-1 rounded text-xs">無料で問い合わせ</button>
            <button className="border border-gray-400 text-gray-600 px-3 py-1 rounded text-xs">LINEで相談</button>
          </div>
          {/* ハンバーガーを右に */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="sm:hidden px-4 py-3 bg-white border-b border-gray-200 shadow text-sm text-gray-700 space-y-2">
          <a href="#news" className="block py-1 hover:text-orange-500">お知らせ</a>
          <a href="#cases" className="block py-1 hover:text-orange-500">相談事例</a>
          <a href="#staff" className="block py-1 hover:text-orange-500">スタッフ紹介</a>
          <a href="#voices" className="block py-1 hover:text-orange-500">利用者の声</a>
          <a href="#flow" className="block py-1 hover:text-orange-500">ご利用の流れ</a>
          <a href="#blog" className="block py-1 hover:text-orange-500">暮らしのコラム</a>
          <a href="#faq" className="block py-1 hover:text-orange-500">FAQ</a>
          <a href="#contact" className="block py-1 hover:text-orange-500">お問い合わせ</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gray-100 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">
        <p className="text-gray-500 italic text-sm mb-2">（ここにイメージビジュアル）</p>
        <h1 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-4 leading-relaxed">
          暮らしのすき間に、<br className="hidden md:block" />
          しっかり寄り添うタイガーライフ。
        </h1>
        <p className="text-base text-gray-600 max-w-xl mx-auto">
          介護も、住まいも、からだのことも。<br />あなたの「ちょっと気になる」を、そっと受けとめる窓口です。
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md">
          <button className="w-full sm:w-auto border border-gray-400 text-gray-600 px-6 py-2 rounded-xl text-sm">
            LINEで相談する
          </button>
          <button className="w-full sm:w-auto border border-gray-400 text-gray-600 px-6 py-2 rounded-xl text-sm">
            フォームで送る
          </button>
        </div>
      </section>

      {/* お知らせ */}
      <section id="news" className="py-12 px-4 sm:px-6 max-w-4xl mx-auto border-t border-gray-200">
        <h2 className="text-xl font-medium mb-6 text-center text-gray-800">お知らせ</h2>
        <ul className="space-y-4 text-sm text-gray-700">
          {[
            { date: "2025/07/01", title: "夏季休業のお知らせ" },
            { date: "2025/06/20", title: "地域サポート相談会を開催しました" },
            { date: "2025/06/10", title: "Webサイトを公開しました" },
          ].map((news, idx) => (
            <li
              key={idx}
              className="flex flex-col sm:flex-row sm:justify-between border-b pb-2"
            >
              <span>{news.title}</span>
              <span className="text-xs text-gray-500 sm:text-right">{news.date}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 相談事例 */}
      <section id="cases" className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-medium mb-6 text-center text-gray-800">
          こんなご相談があります
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "母の介護が気になってきて…",
            "家の段差、気になるんだけど…",
            "この辺でいい歯医者さん、ある？",
          ].map((title, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 rounded-lg shadow text-sm text-gray-700"
            >
              <p className="font-medium mb-2">「{title}」</p>
              <p className="text-xs">→ 解決の方向性を一緒に考えます</p>
            </div>
          ))}
        </div>
      </section>

      {/* スタッフ紹介 */}
      <section id="staff" className="py-12 px-4 sm:px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          私たちがご相談をうかがいます
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { name: "山田さん", initial: "Y", comment: "話すことが、ほっとする時間になりますように" },
            { name: "佐藤さん", initial: "S", comment: "聞くのが、私の得意なことです" },
            { name: "高橋さん", initial: "T", comment: "どんな小さなことでもご相談ください" },
          ].map((staff, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-24 h-24 mb-3 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-2xl font-bold">
                {staff.initial}
              </div>
              <p className="font-medium mb-1">{staff.name}</p>
              <p className="text-sm text-gray-600">「{staff.comment}」</p>
            </div>
          ))}
        </div>
      </section>

      {/* 利用者の声 */}
      <section id="voices" className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-semibold mb-8 text-center">ご利用者の声</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "70代 女性", initial: "A", comment: "一人で悩まずに済みました。優しく聞いてくれて安心できました。" },
            { name: "60代 男性", initial: "B", comment: "対応が早く、スムーズに手すりを設置できました。" },
            { name: "80代 女性", initial: "C", comment: "初めての相談で不安でしたが、親身に話を聞いてもらえました。" },
          ].map((user, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold">
                {user.initial}
              </div>
              <div className="bg-orange-50 p-4 rounded-2xl shadow text-sm relative flex-1">
                <p className="mb-2">「{user.comment}」</p>
                <p className="text-xs text-right text-gray-500">― {user.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ご利用の流れ（改善版） */}
      <section id="flow" className="py-12 px-4 sm:px-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-center">ご利用の流れ</h2>
        <div className="relative border-l-2 border-gray-200 pl-6 space-y-10">
          {[
            { step: 1, text: "LINEまたはフォームで相談する", emoji: "📱" },
            { step: 2, text: "スタッフが内容を確認・ご連絡", emoji: "👂" },
            { step: 3, text: "必要に応じて地域の専門家をご紹介", emoji: "🤝" },
            { step: 4, text: "ご希望に応じて来店・訪問など対応", emoji: "🚗" },
            { step: 5, text: "ちょっと安心、暮らしが前に進む", emoji: "🌿" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 relative">
              {/* 丸ステップ番号 */}
              <div className="absolute -left-[30px] top-0 w-6 h-6 rounded-full bg-gray-200 text-[10px] font-semibold flex items-center justify-center text-gray-700">
                {`S${item.step}`}
              </div>
              {/* テキスト内容 */}
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-xl">{item.emoji}</span>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 暮らしのコラム（写真付きカード風） */}
      <section id="blog" className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">暮らしのコラム</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "転ばない工夫：家の中のちょっとした見直し",
              date: "2025/06/28",
              image: "□"
            },
            {
              title: "介護がはじまる前に知っておきたい3つのこと",
              date: "2025/06/18",
              image: "□"
            },
            {
              title: "タイガーライフの相談窓口ってどんな人がいるの？",
              date: "2025/06/05",
              image: "□"
            },
          ].map((post, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden shadow text-sm flex flex-col h-full">
              <div className="h-32 bg-gray-300 flex items-center justify-center text-gray-500 text-2xl">
                {post.image}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <p className="font-medium mb-2 text-gray-800">{post.title}</p>
                <p className="text-xs text-gray-500 mt-auto">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* よくある質問 */}
      <section id="faq" className="py-12 px-4 sm:px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-800">よくあるご質問</h2>
        <div className="space-y-4">
          {[
            {
              question: "相談は無料ですか？",
              answer: "はい、すべて無料でご利用いただけます。",
            },
            {
              question: "どんな相談ができますか？",
              answer: "介護・住まい・健康・生活のことなど、幅広く対応しています。",
            },
            {
              question: "地域外からの相談でも大丈夫ですか？",
              answer: "原則地域内を対象としていますが、可能な限り対応します。まずはご相談ください。",
            },
            {
              question: "匿名で相談することはできますか？",
              answer: "はい、可能です。ご安心ください。",
            },
            {
              question: "すぐに返信がもらえますか？",
              answer: "営業時間内であれば、できる限り早く返信いたします。",
            },
          ].map((item, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="border border-gray-200 rounded-xl p-4 sm:p-5 bg-white shadow-sm">
                  <Disclosure.Button className="flex justify-between items-center w-full font-medium text-gray-800 text-base sm:text-lg">
                    <span>{item.question}</span>
                    {open ? (
                      <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-3 text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-12 px-6 text-center">
        <p className="text-base mb-4 text-gray-700">暮らしのお困りごと、気軽にご相談ください</p>
        <div className="flex justify-center gap-4">
          <button className="border border-gray-400 text-gray-600 px-6 py-2 rounded-xl text-sm">LINEで相談する</button>
          <button className="border border-gray-400 text-gray-600 px-6 py-2 rounded-xl text-sm">フォームで送る</button>
        </div>
      </section>

      {/* お問い合わせフォーム（プロトタイプ） */}
      <section className="py-12 px-4 sm:px-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">お問い合わせフォーム</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
            <input
              type="text"
              placeholder="例：山田 太郎"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
            <input
              type="email"
              placeholder="例：example@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ご相談内容</label>
            <textarea
              rows={4}
              placeholder="お気軽にご相談内容をご記入ください"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
            ></textarea>
          </div>

          {/* プライバシーポリシーの確認 */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-yellow-800 bg-yellow-50 border-l-4 border-yellow-400 px-4 py-2">
              下記のプライバシーポリシーを必ずご確認ください。
              <span className="text-red-600 ml-2 font-bold text-xs bg-white border border-red-500 px-1 rounded">必須</span>
            </p>
            <div className="max-h-40 overflow-y-auto border border-gray-300 rounded p-3 text-xs text-gray-600 bg-white">
              <p>
                本フォームでは、お問い合わせ内容に関する情報を取得します。取得した情報は、当社のプライバシーポリシーに従って適切に管理されます。
              </p>
              <p className="mt-2">
                1. 取得する情報について：氏名、連絡先、相談内容などの情報を取得することがあります。
              </p>
              <p className="mt-2">
                2. 利用目的について：取得した情報は、お問い合わせ対応およびサービス向上のために使用します。
              </p>
              <p className="mt-2">
                3. 第三者提供について：ご本人の同意なく第三者に提供することはありません。
              </p>
              <p className="mt-2">
                4. 保管期間について：お問い合わせへの対応が完了した後、一定期間保管のうえ適切に破棄します。
              </p>
              <p className="mt-2">
                5. その他：当社の個人情報の取り扱いに関する詳細は、公式サイトのプライバシーポリシーをご確認ください。
              </p>
            </div>
            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <span>個人情報の取り扱いについて確認・同意しました</span>
            </label>
          </div>
          <button
            type="button"
            className="w-full bg-gray-300 text-gray-700 rounded-lg py-2 text-sm cursor-not-allowed"
            disabled
          >
            送信（デモ）
          </button>
        </form>
      </section>

      {/* フッター */}
      <footer className="bg-gray-100 py-8 px-4 sm:px-6 text-center text-xs text-gray-500 space-y-3">
        <p className="text-sm">タイガーライフ株式会社 ｜ 暮らしの相談窓口</p>
        <div className="text-[10px] text-gray-400 leading-snug">
          <p>〒○○ ○○○○○○</p>
          <p>TEL: ○○○○ ／ FAX: ○○</p>
          <p>営業時間：平日 ○○○○（土日祝除く）</p>
        </div>
      </footer>
    </div>
  );
}

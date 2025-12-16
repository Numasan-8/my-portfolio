// ▼▼▼ ここがデータベース代わりのデータ置き場です ▼▼▼

// 資格データ
const certifications = [
    { name: "ITパスポート", date: "2024年10月" },
    { name: "基本情報技術者試験", date: "勉強中" },
    // ★新しい資格を取ったらここに1行足すだけでOK！
    // { name: "AWS SAA", date: "2025年予定" },
];

// 参考書データ
const books = [
    { title: "キタミ式イラストIT塾 基本情報技術者", comment: "図解が多くて分かりやすかったです。" },
    { title: "Webを支える技術", comment: "HTTPの仕組みが詳しく学べました。" },
    { title: "改訂新版 JavaScript本格入門", comment: "JavaScriptの基礎から応用まで幅広くカバーしています。" },
    // ★新しい本を読んだらここに足すだけ！
];

// ▲▲▲ データ置き場 ここまで ▲▲▲


// 以下は、データを画面に表示するためのプログラム（触らなくてOK）

// 1. 資格リストをHTMLに埋め込む
const certTable = document.getElementById('cert-list');
certifications.forEach(cert => {
    const row = `<tr>
                    <td>${cert.name}</td>
                    <td>${cert.date}</td>
                 </tr>`;
    certTable.insertAdjacentHTML('beforeend', row);
});

// 2. 本リストをHTMLに埋め込む
const bookList = document.getElementById('book-list');
books.forEach(book => {
    const html = `<div class="book-item">
                    <h3>📖 ${book.title}</h3>
                    <p>💬 ${book.comment}</p>
                  </div>`;
    bookList.insertAdjacentHTML('beforeend', html);
});
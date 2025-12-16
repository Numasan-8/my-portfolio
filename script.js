// 資格データ
const certifications = [
    { name: "ITパスポート", date: "2024年10月" },
    { name: "基本情報技術者試験", date: "勉強中" },
];

// 参考書データ
const books = [
    { title: "プログラミングコンテスト攻略のためのアルゴリズムとデータ構造", comment: "アルゴリズムの基礎を学ぶのに最適な一冊です。" },
    { title: "ゼロから作る DeepLearning", comment: "Deep Learningの入門として活用しました。" },
];

// 1. 資格リストをHTMLに埋め込むロジック
const certTable = document.getElementById('cert-list');
certifications.forEach(cert => {
    const row = `<tr>
                    <td>${cert.name}</td>
                    <td>${cert.date}</td>
                 </tr>`;
    certTable.insertAdjacentHTML('beforeend', row);
});

// 2. 本リストをHTMLに埋め込むロジック
const bookList = document.getElementById('book-list');
books.forEach(book => {
    const html = `<div class="book-item">
                    <h3>📖 ${book.title}</h3>
                    <p>💬 ${book.comment}</p>
                  </div>`;
    bookList.insertAdjacentHTML('beforeend', html);
});
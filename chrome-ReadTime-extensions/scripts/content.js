const article = document.querySelector("article")
if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    const wordsCount = [...words].length;
    const readingTime = Math.round(wordsCount/200);
    const badge = document.createElement("p");
    badge.classList.add("cololr-secondary-text","type--captions");
    badge.textContent = `⏱️ ${readingTime} min read`;
    const heading = article.querySelector("h1");
    const date  = article.querySelector("time")?.parentNode;
    (date ?? heading).insertAdjacentElement("afterend",badge);
}
document.addEventListener("DOMContentLoaded", function() {
    let date = new Date();
    let dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
    document.getElementById("daily-comic").src = `comics/comic-${dayOfYear}.png`;
});

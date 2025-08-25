const manifest = chrome.runtime.getManifest();
document.getElementById('version').textContent = `Версия: ${manifest.version}`;

const lastUpdated = new Date(chrome.runtime.getManifest().update_date || Date.now());
document.getElementById('updateInfo').textContent = `Обновлено: ${lastUpdated.toLocaleDateString()}`;

document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.requestUpdateCheck(function(status, details) {
        if (status === "throttled") {
            console.log("Проверка обновлений временно недоступна");
        } else if (status === "no_update") {
            console.log("Установлена последняя версия");
        } else if (status === "update_available") {
            console.log("Доступно обновление: ", details.version);
            const updateInfo = document.getElementById('updateInfo');
            updateInfo.textContent = `Доступно обновление ${details.version}!`;
            updateInfo.style.color = 'green';
            updateInfo.style.fontWeight = 'bold';
        }
    });
});
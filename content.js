let checkInterval;

function addCustomButton() {
    try {
        const titleBlock = document.querySelector('.styles_kinopoiskRatingSnippet__AATf_');
        
        if (titleBlock && document.getElementById('nbsp_btn_see') == undefined) {
            console.log('Добавляем кнопку..');
            const button = document.createElement('a');
            button.href = window.location.href.replace('.ru','.cx');
            button.target = '_blank';
            button.textContent = 'Смотреть бесплатно';
            button.id = 'nbsp_btn_see';
            button.style.marginLeft = '20px';
            button.style.padding = '8px 16px';
            button.style.backgroundColor = '#a900ff';
            button.style.color = 'white';
            button.style.borderRadius = '4px';
            button.style.textDecoration = 'none';
            button.style.fontWeight = 'bold';
            button.style.display = 'block';
            button.style.textAlign = 'center';
            button.style.verticalAlign = 'middle';
        
            // Добавляем кнопку
            titleBlock.appendChild(button);
            console.log('Кнопка успешно добавлена!');
        }
    } catch (error) {
        console.error('Ошибка при добавлении кнопки:', error);
    }
}

checkInterval = setInterval(addCustomButton, 1000);
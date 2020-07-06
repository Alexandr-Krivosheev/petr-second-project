/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
//1)Обращение к элементам promo__adv отвечающим за блок рекламы
const promoAdv = document.querySelectorAll('.promo__adv img');
//3)Обращение к элементу постера promo__bg
const poster = document.querySelector('.promo__bg');
//2)Обращение к элементу с тегом promo__genre отвечающего за вывод "Комедия"
const genre = poster.querySelector('.promo__genre');
//4) Получение элементов списка promo__interactive-item
const movieList = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1)Удаление всех рекламных блоков со страницы
promoAdv.forEach(item =>{
    item.remove();
});

//2)Замена содержимого блока с "Комедии" на "Драмму"
genre.textContent = 'драма';

//3)Замена заднего фона постера на bg.jpg
poster.style.backgroundImage = "url('img/bg.jpg')";

//4) Удаление элементов списка movie List
movieList.innerHTML = "";
//4)Сортировка массива из обьекта movieDB
movieDB.movies.sort();
//4)Перебираем все эл массива и с помощью collback функции пристаеваем элементу
//movieList html структуру и с каждой итерацией му получаем новую структуры с элементами из массива movies
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>`;
});

import Player from "@vimeo/player"
import throttle from 'lodash.throttle'
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
// Ініціалізуй плеєр у файлі скрипта 
const player = new Player(iframe)

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    // Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
};
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
player.on('timeupdate', throttle(getCurrentTime, 1000));
// 6.Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);

// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".

// Ініціалізуй плеєр у файлі скрипта
// const iframe = document.querySelector('iframe');
//     const player = new Player(iframe);
//  localStorage.setItem('videoplayer-current-time',seconds)
    // player.on('timeupdate', throttle(1000) {
    //     console.log('played the video!');
    // });
//  player.on('timeupdate', function (event) {
//       Усередині потрібно написати код, взяти секунди та записати їх у сховище
//  });
    

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });
    // 6.Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// player.setCurrentTime(30.456).then(function(seconds) {
    
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
            
//             break;

//         default:
            
//             break;
//     }
// });
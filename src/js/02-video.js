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
player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)))
.then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

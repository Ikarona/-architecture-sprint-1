1 задание 1 уровень.

Сравнение подходов Single Spa и Webpack Module Federation:
1. Single SPA
- lazy loading 
- использование нескольких фреймворков на одной странице
- независимость развертывания
2. WMF
- lazy loading
- разделяемые зависимости
- одна используемая технология

В текущем проекте используется только react - не нужно объединять разные технологии. Есть фокус на производительность, легкость интеграции.
Выбор сделан в пользу WMF.

Структура проекта микрофронтендов.
1. Core (ядро)
     - Отвечает за маршрутизацию и общие компоненты.
     - App.js — базовая маршрутизация.
     - Header.js и Footer.js — общие для всех микрофронтендов.
     - Контекст (CurrentUserContext.js) для передачи данных пользователя.
1. Authentication
     - Отвечает за регистрацию и вход.
     - Login.js и Register.js — компоненты для страниц /signin и /signup.
     - auth.js — утилита для запросов авторизации.
     - Компоненты используют маршруты /signin и /signup.
1. UserProfile
     - Отвечает за управление профилем пользователя.
     EditProfilePopup.js — редактирование профиля.
     - EditAvatarPopup.js — изменение аватара.
     - PopupWithForm.js — базовый компонент попапа, который используется и в других микрофронтендах.
1. Cards
     - Отвечает за управление карточками.
     - Main.js переиспользуется из ядра, но логика карточек делегируется в микрофронтенд Cards.
     - Card.js — рендеринг одной карточки.
     - AddPlacePopup.js — добавление карточки.
     - ImagePopup.js — просмотр увеличенного изображения.

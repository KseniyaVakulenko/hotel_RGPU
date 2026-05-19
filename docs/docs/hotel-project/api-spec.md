# Спецификация API (REST)

**Автор:** Ксения Вакуленко  
**Базовый URL:** `/api/v1`  
**Формат данных:** JSON  
**Аутентификация:** Bearer Token (кроме регистрации и входа)

## Публичные эндпоинты (без токена)

### GET /rooms – получить список всех номеров
**Ответ (200 OK):**
```json
[
  { "id": "101", "name": "Стандарт", "price": 2500, "beds": 1 },
  { "id": "102", "name": "Люкс", "price": 5000, "beds": 2 }
]

GET /rooms/{id} – получить один номер
Ответ (200 OK):

```json
{ "id": "101", "name": "Стандарт", "price": 2500, "beds": 1, "description": "Окно во двор" }
Ошибка (404 Not Found): { "error": "Номер не найден" }

POST /auth/register – регистрация гостя
Тело запроса: { "email": "guest@mail.ru", "password": "123456" }
Ответ (201 Created): { "id": 1, "email": "guest@mail.ru" }

POST /auth/login – вход
Тело запроса: { "email": "guest@mail.ru", "password": "123456" }
Ответ (200 OK): { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }

Защищённые эндпоинты (требуют токен в заголовке Authorization: Bearer <token>)
POST /bookings – создать бронирование
Тело запроса:

{ "roomId": "101", "checkIn": "2025-12-25", "checkOut": "2025-12-28", "guestName": "Иван" }
Ответ (201 Created):

{ "bookingId": "b7a3f1", "roomId": "101", "status": "confirmed", "totalPrice": 7500 }
GET /bookings – мои бронирования
Ответ (200 OK): (сразу с данными номера, чтобы избежать N+1)

[
  {
    "bookingId": "b7a3f1",
    "room": { "id": "101", "name": "Стандарт", "price": 2500 },
    "checkIn": "2025-12-25",
    "checkOut": "2025-12-28",
    "totalPrice": 7500
  }
]
DELETE /bookings/{id} – отменить бронь
Ответ (204 No Content)

Административные эндпоинты (требуют прав admin)
POST /admin/rooms – добавить номер
Тело запроса: { "name": "Эконом", "price": 1500, "beds": 1 }
Ответ (201 Created): { "id": "103", "name": "Эконом", ... }

Решение проблемы N+1
Для эндпоинта GET /bookings сервер не делает отдельный запрос для каждого номера, а сразу возвращает вложенный объект room (данные номера). Таким образом вместо 100 запросов (1 на список броней + 99 на номера) выполняется 1 запрос к хранилищу.
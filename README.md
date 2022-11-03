# ⚙️ Server for Online shop "Wine Store"

powered by 💚 \***\*Node.JS\*\***

## 🛠 Tech Stack

- Node.js
- Express / express-validator
- JWT / bcrypt
- MongoDB / mongoose
- dotenv / cors / nodemon / morgan

## ⚡️ Features

- Sign In/Up by JWT and password hash
- Get / Upload user's shopping cart

## 🎺 Demo

- **[wine-store-server](https://wine-store-client.vercel.app/)** (heroku)

## 🏗 API Reference

### Sign Up

```http
  POST /auth/sign-up
```

| Body                                | Type   |
| :---------------------------------- | :----- |
| { "name": " _ ","password": " _ " } | `JSON` |

### Sign In

```http
  POST /auth/sign-in
```

| Body                                | Type   |
| :---------------------------------- | :----- |
| { "name": " _ ","password": " _ " } | `JSON` |

### Auth me

```http
  GET /auth/me
```

| Authorization | Type           |
| :------------ | :------------- |
| JWT           | `Bearer Token` |

### Get user's cart

```http
  GET /cart/get
```

| Body                 | Type   |
| :------------------- | :----- |
| { "cart": "cartId" } | `JSON` |

### Upload user's cart

```http
  POST /cart/upload
```

| Body                                  | Type   |
| :------------------------------------ | :----- |
| { "cart": "cartId","items": "Array" } | `JSON` |

## 🚚 Run Locally

Clone the project

```bash
  git clone https://github.com/zhuraveln/wine-store-server.git
```

Install dependencies

```bash
  npm install
```

Start the local server

```bash
  npm run dev
```

## 🔐 Environment Variables

Add the following environment variables to your .env file

`MONGO_URL` - _your MongoDB URL_

`PORT` - _your local port_

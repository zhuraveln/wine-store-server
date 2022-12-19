# ⚙️ Server for "[Wine store](https://github.com/zhuraveln/wine-store-client)"

by 💚 **Node.JS**

## 🛠 Tech Stack

- Node.js
- Express / express-validator
- JWT / bcrypt
- MongoDB / mongoose
- dotenv / cors / nodemon / morgan

## ⚡️ Features

- Sign In/Up by JWT and password hash
- Get / Upload user's shopping cart

## 🏗 API Reference

### Sign Up

```bash
  POST /auth/sign-up
```

| Body                            | Type   |
| :------------------------------ | :----- |
| `{ "name": "","password": "" }` | `JSON` |

### Sign In

```bash
  POST /auth/sign-in
```

| Body                            | Type   |
| :------------------------------ | :----- |
| `{ "name": "","password": "" }` | `JSON` |

### Auth me

```bash
  GET /auth/me
```

| Authorization | Type           |
| :------------ | :------------- |
| `JWT`         | `Bearer Token` |

### Get user's cart

```bash
  GET /cart/get
```

| Body                   | Type   |
| :--------------------- | :----- |
| `{ "cart": "cartId" }` | `JSON` |

### Upload user's cart

```bash
  POST /cart/upload
```

| Body                                    | Type   |
| :-------------------------------------- | :----- |
| `{ "cart": "cartId","items": "Array" }` | `JSON` |

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

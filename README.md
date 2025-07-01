# 🚀 YC Directory – Startup CMS Platform

YC Directory is a modern CMS-powered platform where users can **create, showcase, and manage startups** in a streamlined, elegant directory. Built with **Next.js** and **Sanity CMS**, it allows authenticated users to contribute high-quality startup listings, powered by GitHub OAuth and flexible content management.

![YC Directory Screenshot](public/preview.png)

## ✨ Features

- 🔐 GitHub Authentication via NextAuth
- 🏗️ Sanity CMS integration for real-time content management
- 🌐 Public and private access to startup posts
- 🖼️ Optimized image handling
- ⚡ Fast, responsive UI powered by Next.js and TailwindCSS
- 🛡️ Sentry integrated for error tracking

## 📦 Tech Stack

| Tech        | Purpose                        |
|-------------|--------------------------------|
| **Next.js** | Framework                      |
| **Sanity**  | Headless CMS                   |
| **NextAuth**| Authentication (GitHub OAuth)  |
| **TailwindCSS** | Styling                   |
| **Sentry**  | Error tracking                 |

---

## 🧪 Environment Variables

Before running the project, create a `.env.local` file in the root and add the following variables:

```
AUTH_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_WRITE_API=

SENTRY_AUTH_TOKEN=
```

> 🔒 Make sure you **never commit** your `.env.local` file to GitHub.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/HammamYousef/YCDirectory_NextJs.git
cd YCDirectory_NextJs
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Dev Server

```bash
npm run dev
```

The app will be running on [http://localhost:3000](http://localhost:3000)

---

## 📂 Folder Structure

```
├── app/                  # Next.js app directory
├── components/           # Reusable UI components
├── lib/                  # Utility functions and Sanity client
├── sanity/               # CMS schemas and config
├── public/               # Static assets
├── styles/               # Global styles
```

---

## 🛠️ Future Improvements

- Add user dashboards to manage startups
- Tag filtering and search capabilities
- Startup upvote system
- Comment and discussion threads

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Hammam Yousef**  
Frontend Developer  
[LinkedIn](https://www.linkedin.com/in/hammamyousef) · [GitHub](https://github.com/HammamYousef)

---

> 💡 _Built with passion to empower founders._

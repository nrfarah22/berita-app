# 📰 Berita App

**Berita App** adalah aplikasi web berita berbasis **Next.js App Router** yang menampilkan berita terkini dari berbagai kategori seperti Nasional, Internasional, Teknologi, Olahraga, dan lainnya. Aplikasi ini mendukung **dark mode**, **routing dinamis**, serta **UI responsif**.

---

## 🚀 Tech Stack

* **Next.js** (App Router)
* **React**
* **TypeScript**
* **Tailwind CSS**
* **API Berita Indo**
* **Lucide React (Icons)**

---

## ✨ Fitur Utama

* ✅ Homepage berita
* ✅ Kategori berita dinamis (`/category/[slug]`)
* ✅ Dropdown kategori di Navbar
* ✅ Dark / Light Mode
* ✅ Responsive (Desktop & Mobile)

---

## 📂 Struktur Folder

```
app/
 ├─ layout.tsx
 ├─ page.tsx
 ├─ globals.css
 ├─ category/
 │   └─ [slug]/
 │      └─ page.tsx
components/
 └─ ui/
    ├─ Navbar.tsx
    ├─ HeroSection.tsx
    ├─ CategorySection.tsx
```

---

## 🔗 API yang Digunakan

Berita diambil dari:

```
https://berita-indo-api-next.vercel.app/api/cnn-news/{category}
```

Contoh kategori:

* nasional
* internasional
* teknologi
* olahraga
* ekonomi
* hiburan

---

## 🛠️ Cara Menjalankan Project

### 1️⃣ Clone repository

```bash
git clone https://github.com/username/berita-app.git
cd berita-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Jalankan development server

```bash
npm run dev
```

## 📄 Routing Dinamis (Category)

Halaman kategori menggunakan **dynamic route**:

```
/category/[slug]
```

Contoh:

```
/category/nasional
/category/teknologi
```

Slug digunakan untuk mengambil data berita sesuai kategori dari API.

---

## 🌙 Dark Mode

Dark mode diatur menggunakan:

* `next-themes`
* `ModeToggle` component
* Tailwind `dark:` utilities

---

## 👩‍💻 Author

**Farah Nur Izzati**

## Demo : https://beritaapp.vercel.app/

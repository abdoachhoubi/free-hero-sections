# 🚀 Free Hero Sections

A curated collection of **polished, production-ready hero sections** you can drop straight into your projects.  
Every hero is built with **Next.js** + **Tailwind CSS**, featuring clean, composable components and **sensible defaults**.

Available hero types:

- 🏗 **Website Builder**
- 📚 **E-Learning**
- 💻 **SaaS**

**🔗 Preview them on the [homepage](https://free-hero-sections.vercel.app/)**  
Click the **GitHub** button on any card to jump directly to its source code.

---

## ⚡ Quick Start (Run Locally)

**Requirements:** Node.js 18+

1. **Install dependencies**
   ```bash
   npm i
   ```


2. **Start the dev server**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

**Available Routes:**

* `/website-builder`
* `/e-learning`
* `/saas`

---

## 📥 How to Use a Hero Section

### Copy from the Repo

1. Browse the folder for the hero you want:

   * [Website Builder](https://github.com/abdoachhoubi/free-hero-sections/tree/main/src/sections/website-builder)
   * [E-Learning](https://github.com/abdoachhoubi/free-hero-sections/tree/main/src/sections/e-learning)
   * [SaaS](https://github.com/abdoachhoubi/free-hero-sections/tree/main/src/sections/saas)
2. Copy the hero folder into your project.
3. Update **import paths** and **assets** as needed.


## 📂 Project Structure

```
src/
  app/                     # App Router pages & layout
  sections/
    saas/                  # SaaS hero
    e-learning/            # E-Learning hero
    website-builder/       # Website Builder hero
  data/
    hero-data.ts           # Example prop data
    sections.ts            # Metadata for homepage cards
```

---

## 🛠 Tech Stack

* **Next.js 15** + **React 19**
* **Tailwind CSS v4**
* **lucide-react** icons

---

## 🤝 Contributing

We welcome issues and PRs!
If you’re adding a new hero:

1. Create a new folder under `src/sections/<your-hero>`
2. Export a **main component** (and subcomponents if needed)
3. Add a preview page under `src/app`
4. Update `src/data/sections.ts` with:

   * Cover image
   * Route path
   * GitHub source URL

---

## 📄 License

[MIT](LICENSE) — free to use in personal & commercial projects.

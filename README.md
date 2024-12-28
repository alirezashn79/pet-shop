# 🐾 Pet Shop

A modern and responsive pet shop website built with **Vite**, **React**, and styled with **TailwindCSS**. This project provides an interactive shopping experience, offering pet products, services, and a user-friendly interface.

---

## 🌟 Features

- **Responsive Design**: Mobile-first design, ensuring compatibility across all devices.
- **Dynamic Data Handling**: Powered by `react-data-table-component` for efficient table management.
- **User-Friendly Forms**: Built with `react-hook-form` and validated using `yup`.
- **Notifications**: Toast alerts with `react-hot-toast` for a smooth user experience.
- **Date Management**: Integrated with `react-multi-date-picker`.
- **Pagination**: Intuitive navigation using `react-paginate`.
- **Swiper**: Modern sliders and carousels for showcasing products or services.
- **State Management**: Lightweight and efficient global state management using `zustand`.

---

## 🛠️ Scripts

The following scripts are available in `package.json`:

| Script      | Description                                             |
|-------------|---------------------------------------------------------|
| `dev`       | Start the development server.                          |
| `build`     | Build the project for production (TypeScript + Vite).  |
| `start`     | Preview the production build locally.                  |
| `lint`      | Run ESLint for code quality checks.                    |

Run any script using:

```bash
npm run <script-name>
```

---

## 🚀 Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alirezashn79/pet-shop.git
   cd pet-shop
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

Your app will be available at [http://localhost:5173](http://localhost:5173).

---

## 📂 Project Structure

```plaintext
src/
├── assets/           # Static assets (images, fonts, etc.)
├── components/       # Reusable React components
├── pages/            # Page-specific components
├── hooks/            # Custom hooks for managing state or logic
├── styles/           # Global and component-specific styles
├── utils/            # Utility functions
index.html            # Main HTML entry point
```

---

## 🔧 Technologies Used

- **Frontend**: React, Vite, TailwindCSS
- **State Management**: Zustand
- **Form Validation**: React Hook Form, Yup
- **UI Enhancements**: Swiper, React Hot Toast, React Icons
- **Tables and Pagination**: React Data Table Component, React Paginate
- **Styling**: Styled Components, TailwindCSS

---

## 🌐 Deployment

You can deploy this project using **Vercel**, **Netlify**, or any Node.js-compatible hosting platform.

Steps to deploy:

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist/` folder to your hosting provider, or link your repository directly to **Vercel** for automatic deployment.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

---

✨ Built with ❤️ for pet lovers everywhere. 🐶🐱 Happy shopping!

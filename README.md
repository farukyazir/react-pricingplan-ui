# 💳 PriceCraft UI

A modern and responsive **Pricing Plan UI** built with **React.js**. This project demonstrates reusable components, dynamic rendering using `.map()`, conditional feature icons, responsive design, and modern CSS styling.

## 🚀 Live Demo

🌐 **Netlify:**
https://pricing-plan-ui.netlify.app/

## 📂 GitHub Repository

💻 **GitHub:**
https://github.com/farukyazir/react-pricingplan-ui

## 🎯 Project Objective

The objective of this project is to build a responsive pricing cards interface using React while demonstrating proper component structure, dynamic data rendering, reusable components, and responsive CSS design.

## ✨ Features

* 💳 Modern pricing card UI
* ⚛️ Built with React.js
* 🔄 Dynamic rendering using `.map()`
* 🧩 Reusable `PricingCard` component
* 📦 Separate pricing data file
* ✅ Available feature icons
* ❌ Unavailable feature icons
* 🎨 Modern gradient background
* 🖱️ Card hover effects
* 📱 Responsive design
* 💻 Desktop, tablet, and mobile support
* 🔤 Open Sans Google Font
* ⭐ Clean and readable code structure

## 🛠️ Technologies Used

* React.js
* JavaScript
* JSX
* CSS3
* Vite
* Font Awesome
* Google Fonts
* Netlify

## 📁 Project Structure

```text
src/
├── components/
│   └── PricingCard.jsx
├── data/
│   └── pricingData.js
├── App.jsx
├── App.css
└── main.jsx
```

## 🧩 Component Structure

### `App.jsx`

The main component imports the pricing plan data and renders all pricing plans dynamically using the `.map()` method.

### `PricingCard.jsx`

A reusable component responsible for displaying each individual pricing plan, including the plan name, price, features, feature icons, and button.

### `pricingData.js`

Stores the pricing plan information separately from the UI components, making the application easier to maintain and update.

## 🎨 Styling

The project uses the **Open Sans** font:

```css
font-family: "Open Sans", sans-serif;
```

The required gradient is used for the page background and buttons:

```css
background: linear-gradient(to right, #1e63d5, #4f8df5);
```

Pricing cards also include a smooth hover effect:

```css
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
```

## 📱 Responsive Design

The UI is designed to work across:

* 🖥️ Desktop
* 💻 Tablet
* 📱 Mobile

Responsive styling is implemented using:

```css
@media (max-width: 768px) {
  /* Responsive styles */
}
```

## ▶️ Run Locally

Clone the repository:

```bash
git clone https://github.com/farukyazir/react-pricingplan-ui.git
```

Navigate to the project:

```bash
cd react-pricingplan-ui
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run on the local development server provided by Vite.

## 🌐 Deployment

The project is deployed using **Netlify**.

🔗 **Live Website:**
https://pricing-plan-ui.netlify.app/

## 👨‍💻 Developer

### Faruk Yazir

🔗 **LinkedIn:**
https://www.linkedin.com/in/farukyazir/

💻 **GitHub:**
https://github.com/farukyazir

🌐 **Live Project:**
https://pricing-plan-ui.netlify.app/

## 📌 Learning Outcomes

This project demonstrates practical knowledge of:

* React components
* Props
* JSX
* Array `.map()` method
* Conditional rendering
* Reusable components
* Data separation
* CSS styling
* Responsive web design
* UI/UX fundamentals
* Netlify deployment

## 📄 License

This project is created for educational and learning purposes.

---

⭐ **If you find this project useful, consider giving the repository a star!**

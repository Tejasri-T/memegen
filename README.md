# 🎭 Meme Generator

**Meme Generator** is a fun and interactive web application that allows users to instantly generate memes by adding custom text to popular meme images. Users can generate random meme templates, add text, and drag the text anywhere on the image for better positioning.

Built using **React + Vite**, this project demonstrates API usage, component-based UI design, and interactive features like drag-and-drop.

---

## 🚀 Features

- 🎲 Generate random meme images  
- ✍️ Add top and bottom text to memes  
- 🖱️ Draggable text for custom placement  
- ⚡ Fast development setup using Vite  
- 🌐 Uses the ImageFlip API to fetch meme templates  
- 📱 Responsive and lightweight UI  

---

## 🛠️ Tech Stack

- **Frontend:** React  
- **Build Tool:** Vite  
- **Language:** JavaScript  
- **API:** ImageFlip Meme API  
- **Styling:** CSS  

---

## 🔗 API Used

### ImageFlip Meme API

**Endpoint:**
https://api.imgflip.com/get_memes

The API provides a list of popular meme templates. A random meme image is selected and displayed whenever the user clicks **Generate Meme**.

---

## ⚙️ How It Works

1. The app fetches meme templates from the ImageFlip API.
2. Clicking **Generate Meme** selects a random meme image.
3. Users enter text in two input fields (top and bottom).
4. The entered text appears on the meme image.
5. Text elements are draggable, allowing users to reposition them freely.

---

## 📁 Project Setup

### Clone the Repository
git clone https://github.com/Tejasri-T/memegen.git

### Navigate to the Project Directory
cd readmeme-generator

### Install Dependencies
npm install

### Run the Development Server
npm run dev

The application will run locally at:
http://localhost:5173

---

## 📂 Project Structure (Example)

src/
├── components/
│   ├── Header.jsx
│   ├── Meme.jsx
├── images/
│   └── logo.svg
├── App.jsx
├── main.jsx
├── index.css

_Actual structure may vary._

---

## 📸 Preview

_Add screenshots or GIFs here to showcase your app._

---

## 📌 Future Enhancements

- Download generated memes  
- Add multiple text layers  
- Font size, color, and style controls  
- Mobile-friendly drag support  
- Share memes directly to social media  

---

## 🧑‍💻 Author

**Tejasri Teyam**

---

## 📜 License

This project is for learning and personal use.

# Freelance Marketplace - Frontend

This is the frontend of a freelance marketplace application built using React.js and Tailwind CSS. It connects to the backend API to manage users, contracts, payments, and other essential functionalities.

---
## Features
- User authentication (Register, Login, Password Reset)
- Profile management for Freelancers and Clients
- Contract creation and management
- Secure payment integration using Razorpay
- Responsive UI with Tailwind CSS

---
## Technologies Used
- **Frontend:** React.js, Vite
- **State Management:** Context API / Redux (if used)
- **Styling:** Tailwind CSS
- **API Calls:** Axios
- **Routing:** React Router
---

### Prerequisites
- Node.js installed
- Backend API should be running
  
---
  ### Steps to Run the Frontend
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/freelance-marketplace-frontend.git
   cd freelance-marketplace-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   VITE_API_URL=your_backend_api_url
   VITE_RAZORPAY_KEY=your_razorpay_key_id
   ```
4. Start the development server:
   ```sh
   npm run dev

---
  ## Project Structure

├── src
│   ├── components  # Reusable UI components
│   ├── pages       # Application pages
│   ├── context     # Global state management
│   ├── services    # API calls
│   ├── assets      # Images and static files
│   ├── App.jsx     # Main app component
│   ├── main.jsx    # Entry point
│   ├── styles      # Tailwind configurations
│   ├── routes      # App routing
│   ├── hooks       # Custom hooks (if any)
│   ├── utils       # Helper functions
│   ├── config      # Configuration files

---
 Demo Link : https://freelancer-marketplace-web.netlify.app/

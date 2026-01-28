# Scenario Task – Full Stack Application

This is a full-stack application built using **Node.js, Express, MongoDB** for backend and **React** for frontend.

---

##  Project Structure

```
scenario-task/
├── backend/
├── frontend/
└── README.md
```

---

##  Setup Instructions

### 1 Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/scenario-task.git
cd scenario-task
```

---

### 2 Backend Setup
```bash
cd backend
npm install
```

Run backend server:
```bash
node index.js
```

(Optional) Seed database:
```bash
node seed.js
```

Backend runs at:
```
http://localhost:8080
```

---

### 3 Frontend Setup
Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

##  API Endpoints

### ➤ Create Scenario
**POST**
```
/api/scenarios
```

Request:
```json
{
  "name": "Check Availability",
  "description": "Check room availability",
  "agentId": "65a123456789abcd12345678"
}
```

Response:
```json
{
  "_id": "65a987654321abcd98765432",
  "name": "Check Availability",
  "description": "Check room availability",
  "agentId": "65a123456789abcd12345678"
}
```

---

###  Get All Scenarios
**GET**
```
/api/scenarios
```

---

###  Get Scenario by ID
**GET**
```
/api/scenarios/:id
```

---

###  Delete Scenario
**DELETE**
```
/api/scenarios/:id
```

---

##  Tech Stack
- React
- Node.js
- Express
- MongoDB

---

##  Author
Manish Kute

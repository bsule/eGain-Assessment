# eGain Assessment - Laptop Recommendation Chatbot

A React-based chatbot application that helps users find the perfect laptop based on their needs, budget, and preferences through an interactive conversation.

## Setup/Installation Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd eGain-Assessment
   ```

2. Navigate to the chatbot app directory
   ```bash
   cd chatbot-app
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser
   - The application will be available at `http://localhost:5173`


## Brief Explanation of Approach

### Architecture Overview

The chatbot is built using React with Tailwind CSS. The application uses a state machine approach to manage conversation states and provide responses to the user.

### Approach

The chatbot uses a simple state machine to guide users through 4 steps:
1. Greeting - Ask what they'll use the laptop for
2. Budget - Get their price range (low/medium/high)  
3. Screen Size - Ask for preferred size (13"/15"/17")
4. Recommendation - Show matching laptops

It uses keyword matching to understand user responses and filters a pre-defined laptop database based on their answers. Built with React and Tailwind CSS.


## Examples of Chatbot

### Welcome Screen
<img width="400" alt="Screenshot 2025-10-01 at 7 31 32 PM" src="https://github.com/user-attachments/assets/e63045db-cb1a-4e94-a1c5-afb2650ef935" />

### Selecting Use Case
<img width="400" alt="Screenshot 2025-10-01 at 7 32 33 PM" src="https://github.com/user-attachments/assets/d65284db-9c76-4590-ad67-38280db41ee4" />

### Choosing Budget Range
<img width="400" alt="Screenshot 2025-10-01 at 7 33 31 PM" src="https://github.com/user-attachments/assets/74afa6a3-0db0-4a3b-89e8-3b04cc7016ea" />

### Picking Screen Size
<img width="400" alt="Screenshot 2025-10-01 at 7 34 21 PM" src="https://github.com/user-attachments/assets/105285f0-6031-4e22-b514-06e45c67c547" />

### Laptop Recommendation
<img width="400" alt="Screenshot 2025-10-01 at 7 34 38 PM" src="https://github.com/user-attachments/assets/fecf4308-003a-4592-a991-7896dc2785b2" />

### Alternative Options
<img width="400" alt="Screenshot 2025-10-01 at 7 35 06 PM" src="https://github.com/user-attachments/assets/d382124d-acc9-4e5d-a086-8b1ce8cc5822" />
<img width="400" alt="Screenshot 2025-10-01 at 7 35 30 PM" src="https://github.com/user-attachments/assets/a4b33d6f-9b7e-4015-8263-09ea8a6aadeb" />

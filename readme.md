# Udemy Clone - Learning Management System

A modern learning management system built with React, Vite, and TailwindCSS that replicates core features of Udemy's platform.

## 🌟 Features

### Authentication
- Secure user authentication using Clerk
- Protected routes for authenticated users
- Custom user profiles and dashboard

### Course Management
- Dynamic course listing and filtering
- Detailed course views with curriculum structure
- Integrated YouTube videos for course content
- Interactive course navigation
- Progress tracking system

### User Interface
- Responsive design for all screen sizes
- Modern and clean UI using TailwindCSS
- Smooth animations with Framer Motion
- Loading states and error handling
- Mobile-first approach

### Search & Discovery
- Advanced course search functionality
- Course categorization
- Dynamic filtering options
- Real-time search results

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.0.0
- **Build Tool:** Vite 6.2.0
- **Styling:** TailwindCSS 4.1.4
- **Authentication:** Clerk
- **Routing:** React Router DOM 7.5.0
- **State Management:** React Context API
- **Video Integration:** YouTube API
- **Animations:** Framer Motion 12.7.3
- **Code Quality:** ESLint

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS version)
- npm/yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/udemy-clone.git
```

2. Install dependencies
```bash
cd udemy-clone
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory:
```properties
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_YOUTUBE_API_KEY=your_youtube_api_key
```

4. Start the development server
```bash
npm run dev
```

## 📂 Project Structure

```
udemy-clone/
├── src/
│   ├── assets/         # Static assets and images
│   ├── components/     # Reusable UI components
│   │   └── student/    # Student-specific components
│   ├── context/        # React Context providers
│   ├── pages/          # Page components
│   │   └── student/    # Student routes
│   └── utils/          # Utility functions
├── public/            # Public assets
└── ...config files
```

## 🔑 Key Components

### Student Components
- `Navbar.jsx`: Navigation bar with authentication integration
- `CourseCard.jsx`: Reusable course display component
- `CourseDetails.jsx`: Detailed course view with curriculum
- `Hero.jsx`: Landing page hero section
- `SearchBar.jsx`: Course search functionality

### Context
- `AppContext.jsx`: Global state management for courses and user data

## 🎨 Styling

The project uses TailwindCSS with custom configurations:
- Custom text sizes for responsive design
- Custom grid layouts
- Responsive breakpoints
- Custom animations
- Shadow utilities

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🔄 API Integration

### YouTube API
- Fetches relevant tutorial videos based on course content
- Implements caching for better performance
- Error handling for failed requests

### Clerk Authentication
- User registration and login
- Protected routes
- User profile management

## 🛡️ Security

- Environment variables for sensitive keys
- Protected API endpoints
- Secure authentication flow
- Input validation and sanitization

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Style
- ESLint configuration for code consistency
- React best practices
- Component-based architecture
- Custom hooks for reusable logic

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Udemy for inspiration
- React community
- TailwindCSS team
- Clerk team
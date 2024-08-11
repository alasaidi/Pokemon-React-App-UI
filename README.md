# Pokemon Full-Stack Application

This project is a full-stack Pokemon-themed application with a React frontend and an Express.js backend.

## UI Screenshots

Here are some screenshots from the application to give you a visual overview of its features:

### Home Page
![Home Page](public\ReadMe-UI\homepage.PNG)
*Description: The home page displays a list of Pokemon or the user's collection.*

### Login Page
![Login Page](public\ReadMe-UI\LoginPgae.PNG)
*Description: The login interface for user authentication.*

### Pokemon Cards
![Pokemon Details](public\ReadMe-UI\pokemon-container.PNG)
*Description: Detailed view of Pokemon Cards.*

### Pokemon Details Modal
![Pokemon Details](public\ReadMe-UI\modal.PNG)
*Description: A modal window showing detailed information about a specific Pokemon, including its stats, abilities, and other characteristics. This appears when a user clicks on a Pokemon card.*

### User Collection
![User Collection](public\ReadMe-UI\welcome.PNG)
*Description: A user's personal collection of caught Pokemon.*

## Client-Side Features

- View a list of Pokemon
- User authentication (login/logout)
- View personal Pokemon collection
- Detailed Pokemon information modal

## Server-Side Features

- RESTful API for Pokemon and Player data
- User authentication with JWT
- MongoDB integration for data persistence
- CORS support for cross-origin requests

## Technologies Used

### Frontend
- React
- React Router
- Axios for API calls
- CSS for styling

### Backend
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- dotenv for environment variable management

## Project Structure

### Client-Side Structure
```
root/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── data/
│   │       └── pokemon_data/
│   │           └── pokemon-data.js
│   ├── common/
│   │   ├── baseUrl.js
│   │   └── httpCommon.js
│   ├── components/
│   │   ├── Buttons/
│   │   │   ├── Button.jsx
│   │   │   └── button.css
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── header.css
│   │   ├── modal/
│   │   │   ├── Modal.jsx
│   │   │   └── modal.css
│   │   └── Pokemon-card/
│   │       ├── Pokemon.jsx
│   │       ├── PlayerPokemon.jsx
│   │       └── pokemon-card.css
│   ├── Pages/
│   │   ├── ErrorPage/
│   │   │   └── ErrorPage.jsx
│   │   ├── home-page/
│   │   │   ├── HomePage.jsx
│   │   │   └── home-page.css
│   │   ├── login-page/
│   │   │   ├── LoginPage.jsx
│   │   │   └── Login.css
│   │   └── pokemon-details-page/
│   │       └── PokemonDetails.jsx
│   ├── services/
│   │   └── pokemonServices.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```
### Server-Side Structure
```
server/
├── controllers/
│   ├── player.controller.js
│   └── pokemon.controller.js
├── middleware/
│   ├── auth.js
│   └── verifyToken.js
├── models/
│   ├── player.model.js
│   ├── pokemon.model.js
│   └── playerPokemon.model.js
├── routes/
│   ├── player.route.js
│   ├── pokemon.route.js
│   └── playerPokemon.js
├── utils/
│   └── hashPassword.js
├── .env
└── server.js
```

## API Endpoints

- POST `/players/api` - Register a new player
- POST `/players/api/login` - Player login
- GET `/players/api/logout` - Player logout
- GET `/players` - Get all users (likely for admin purposes)
- GET `/pokemons` - Get all Pokemon (or player's Pokemon if logged in)
- POST `/pokemons` - Create a new Pokemon
- DELETE `/pokemons` - Delete a Pokemon
- PUT `/pokemons/:id` - Update a Pokemon
- GET `/pokemons/:id` - Get a specific Pokemon

## Setup and Installation

### Frontend
1. Navigate to the client directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Backend
1. Navigate to the server directory
2. Install dependencies: `npm install`
3. Set up environment variables in a `.env` file (see below)
4. Start the server: `npm start`

## Environment Variables

Create a `.env` file in the server root with the following:

```
PORT=3000
PLAYER_NAME=your_mongodb_username
DATABASE_URL=your_mongodb_url
API_KEY=your_mongodb_password
TOKEN_ACCESS_SECRET=your_jwt_secret
```

## Database

The application uses MongoDB. Ensure you have a MongoDB instance running and update the `DATABASE_URL` in the `.env` file.

## Authentication

The server uses JWT for authentication. Tokens are stored in HTTP-only cookies for security.

## State Management

- Frontend: React's built-in state management with `useState` and `useEffect` hooks
- Backend: MongoDB for data persistence

## Contributing

Contributions are welcome. Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).





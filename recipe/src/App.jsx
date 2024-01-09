import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/Home/Home'; // Ensure the correct path
import SearchRecipesPage from './pages/SearchRecipesPage/SearchRecipesPage';
import LoginPage from './pages/Login/LoginPage'; // Adjust the path as needed
import SignupPage from './pages/SignUp/SignupPage'; // Adjust the path as needed

// Initialize Apollo Client
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});



function App() {
  return (
  
    <div className="flex-column justify-center align-center min-100-vh bg-primary">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<SearchRecipesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* Other routes */}
      </Routes>
    </div>
    
  );
}

export default App;
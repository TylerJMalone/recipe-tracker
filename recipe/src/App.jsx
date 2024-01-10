import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/Home/Home';
import SearchRecipesPage from './pages/SearchRecipesPage/SearchRecipesPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage/RecipeDetailsPage'; // Import RecipeDetailsPage
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/SignUp/SignupPage';


// Initialize Apollo Client
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<SearchRecipesPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
         
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;

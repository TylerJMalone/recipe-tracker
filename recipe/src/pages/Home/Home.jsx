import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { RANDOM_RECIPES_QUERY } from '../../graphql/queries'; // Make sure to create this query
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

function Home() {
    const [featuredRecipes, setFeaturedRecipes] = useState([]);
    const navigate = useNavigate();
    const { data, loading, error } = useQuery(RANDOM_RECIPES_QUERY);

    useEffect(() => {
        if (data && data.randomRecipes) {
            setFeaturedRecipes(data.randomRecipes);
        }
    }, [data]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    const handleRecipeClick = (id) => {
        navigate(`/recipe/${id}`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="home-page">
            <div className="section-container">
                <section className="featured-recipes-section">
                    <h2>Featured Recipes</h2>
                    <div className="featured-recipes-carousel">
                        {featuredRecipes.length > 0 ? (
                            <Slider {...settings}>
                                {featuredRecipes.map((recipe) => (
                                    <div key={recipe.id} className="featured-recipe" onClick={() => handleRecipeClick(recipe.id)}>
                                        <img src={recipe.image} alt={recipe.title} style={{ cursor: 'pointer' }} />
                                        <h3>{recipe.title}</h3>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <p>No featured recipes to display</p>
                        )}
                    </div>
                </section>
                {/* ... other sections ... */}
            </div>
        </div>
    );
}

export default Home;

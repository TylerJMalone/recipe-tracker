import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import '../../../css/winter.css';

function Home() {
    const [featuredRecipes, setFeaturedRecipes] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    useEffect(() => {
        const fetchFeaturedRecipes = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/randomRecipes');
                if (response.ok) {
                    const data = await response.json();
                    setFeaturedRecipes(data);
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error fetching random recipes:', error);
            }
        };

        fetchFeaturedRecipes();
    }, []);

    return (
        <div className="home-page">
            <div className="section-container">
                <section className="featured-recipes-section">
                    <h2>Featured Recipes</h2>
                    <div className="featured-recipes-carousel">
                        {featuredRecipes && featuredRecipes.length > 0 ? (
                            <Slider {...settings}>
                                {featuredRecipes.map((recipe) => (
                                    <div key={recipe.id} className="featured-recipe">
                                        <img src={recipe.image} alt={recipe.title} />
                                        <h3>{recipe.title}</h3>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <p>No featured recipes to display</p>
                        )}
                    </div>
                </section>
                <section className="recipe-of-the-season-section">
                    <h2>Recipe of the Season</h2>
                    {/* Content for recipe of the season */}
                </section>
                <section className="tailored-recipe-section">
                    <h2>Tailored Recipe</h2>
                    {/* Content for tailored recipe */}
                </section>
            </div>
        </div>
    );
}

export default Home;

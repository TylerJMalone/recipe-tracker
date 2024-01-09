const name = '';
const recipeName = '';
const thoughts = '';

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          <h1>{name}</h1>
          <h2>Recipe: {recipeName.length}</h2>
          <h2>My thoughts about the recipe and what I added {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
import "./Game1.css";
import "./Game1Border.css";

function Game1({ borderState }) {
  console.log("Hello world! (Game1.jsx)");

  // Variables that toggle the class names of specific divs based on the borderState variable.
  const game1Root = borderState ? "game1RootBorder" : "game1Root";
  const game1VideoBox = borderState ? "game1VideoBoxBorder" : "game1VideoBox";
  
  return (
    <>
      <div className={game1Root}>
        <h1>
          Roller Ball Battle!
        </h1>

        <div className={game1VideoBox}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bD_CCh6ZsFo?si=nHh3Rg45ZdziFiM8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Game1;
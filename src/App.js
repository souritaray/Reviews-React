import Reviews from "./Reviews";
import reviews from "./data";
function App() {
return(
    <main>
        <section className="container">
            <article className="title">
                <h2>Our Reviews</h2>
                <div className="underline"></div>
            </article>
            <Reviews reviews={reviews}/>
        </section>
    </main>
)
}

export default App;

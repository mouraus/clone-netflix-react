import react from "react";
import "./FeaturedMovie.css";




export default ({ item }) => {

    let genres = [];
    for (let genre of item.genres) {
        genres.push(genre.name);
    }

    let releaseDate = new Date(item.first_air_date);

    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>

            <div className="featured__vertical">
                <div className="featured__horizontal">


                    <div className="featured__name">{item.name}</div>

                    <div className="featured__info">

                        <div className="featured__points">{item.vote_average * 10}% relevante</div>
                        <div className="featured__year"> {releaseDate.getFullYear()}</div>
                        <div className="featured__seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ""}</div>

                    </div>

                    <div className="featured__description">{item.overview}</div>

                    <div className="featured__buttons">
                        <a className="featured__watch__button" target = '_blank' href={item.homepage}>▶ Assistir</a>
                        <a className="featured__my__list__button" href={`/list/add/${item.id}`}>+ Minha lista</a>
                    </div>

                    <div className="featured__genres">
                        <strong>Gêneros: </strong>{genres.join(", ")}
                    </div>

                </div>

            </div>

        </section>

    );

}
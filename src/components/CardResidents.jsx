import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import './style/CardResidents.css'

const CardResidents = ({url}) => {

const [residents, getResidents,] = useFetch(url)

    useEffect(() => {
        getResidents()
    }, [getResidents])

    return (
    <article className="residents">
        <header className="residents__header">
            <img className="residents__img" src={residents?.image} alt={`${residents?.name} - ${residents?.species}`} />
            <div className="residents__status">
                <div className={`residents__status-circle ${residents?.status}`}></div>
                <span className="residents__status-value">{residents?.status}</span>
            </div>
        </header>
        <section className="residents__body">
            <h3 className="residents__name">{residents?.name}</h3>
            <hr className="residents__separator"/>
            <ul className="residents__stats">
                <li className="residents__stat__item">
                <span className="residents__stat__label">Specie</span>
                <span className="residents__stat__value">{residents?.species}</span></li>
                <li className="residents__stat__item">
                <span className="residents__stat__label">Origin</span>
                <span className="residents__stat__value">{residents?.origin.name}</span></li>
                <li className="residents__stat__item">
                <span className="residents__stat__label">Episodes Where Appear</span>
                <span className="residents__stat__value">{residents?.episode.length}</span></li>
            </ul>
        </section>
    </article>
    )
}

export default CardResidents
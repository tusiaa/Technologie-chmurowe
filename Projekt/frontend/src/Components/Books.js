import React from 'react'
import {Link} from "react-router-dom";

function Books({ksiazki, Page, BooksOnPage,  SetSort, DodajDoUsuniecia, UsunDoUsuniecia, DoUsuniecia, DodajUlubione, UsunUlubione, Ulubione}) {
    const Sort = (a,b) =>{
        if(SetSort==="Wg tytułu") {if(a.title > b.title) return 1; else return -1}
        if(SetSort==="Wg autora") {if(a.author > b.author) return 1; else return -1}
        if(SetSort==="Wg daty wydania") {if(a.release_date > b.release_date) return 1; else return -1}
        if(SetSort==="Wg ocen") {return b.rating - a.rating}
    }
    const onDelete = (event, ksiazka) => {
        if (event.currentTarget.checked) DodajDoUsuniecia(ksiazka._id)
        else UsunDoUsuniecia(ksiazka._id)
    }

    return (
        <div>
            { ksiazki.length !== 0 && ksiazki.sort(Sort).slice((Page-1)*BooksOnPage, Page*BooksOnPage).map((ksiazka) => 
                <div key={ksiazka._id} className='container book'>
                    { DoUsuniecia.includes(ksiazka._id) && <input type='checkbox' checked onChange={(event) => onDelete(event, ksiazka)} />}
                    { !DoUsuniecia.includes(ksiazka._id) && <input type='checkbox' onChange={(event) => onDelete(event, ksiazka)} />}
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/book/${ksiazka._id}`}>
                        { ksiazka.image_url && <img className='okladka' alt="" src={ksiazka.image_url}></img>}
                        { !ksiazka.image_url && <img className = 'okladka' alt="" src={'https://zdrowepodejscie.pl/Photos/nophoto.jpg'}></img>}
                        <div className='basics'>
                            <h1> {ksiazka.title} </h1>
                            <h2> {ksiazka.author} </h2>
                        </div>
                    </Link>
                    { !Ulubione.includes(ksiazka._id) && <button className='fav first basics' onClick={() => DodajUlubione(ksiazka._id)} > Ulubione </button>}
                    { Ulubione.includes(ksiazka._id) && <button className='fav2 first basics' onClick={() => UsunUlubione(ksiazka._id)} > Ulubione </button>}
                    
                </div>
            )}
            { ksiazki.length === 0 && <div className='container'><h1> Brak Książek </h1></div> }
        </div>
    )
}

export default Books

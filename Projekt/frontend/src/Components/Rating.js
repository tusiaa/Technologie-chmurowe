import React from 'react'
import axios from 'axios'

const Rating = ({Rating, Id}) => {
    const rate = (rating) => {
        axios.post(`/api/book/${Id}/rate`, {score: rating})
        .then((response) => {
            alert("Dodano ocene!")
          }, (error) => {
            console.log("Błąd!");
          });
    }
    return (
        <div className='rating' >
            {Rating>=0.5 && <img className='star' alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>}
            {Rating<0.5 && <img className='star' style={{opacity: '0.3'}} alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>}
            {Rating>=1.5 && <img className='star' alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>}
            {Rating<1.5 && <img className='star' style={{opacity: '0.3'}} alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>}
            {Rating>=2.5 && <img className='star' alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>}
            {Rating<2.5 && <img className='star' style={{opacity: '0.3'}} alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>}
            {Rating>=3.5 && <img className='star' alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>}
            {Rating<3.5 && <img className='star' style={{opacity: '0.3'}} alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>}
            {Rating>=4.5 && <img className='star' alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>}
            {Rating<4.5 && <img className='star' style={{opacity: '0.3'}} alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>}
            
            <img className='star-rating' onClick={() => rate(1)} alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>
            <img className='star-rating' onClick={() => rate(2)} alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>
            <img className='star-rating' onClick={() => rate(3)} alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>
            <img className='star-rating' onClick={() => rate(4)} alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>
            <img className='star-rating' onClick={() => rate(5)} alt="" src='https://cdn.pixabay.com/photo/2016/12/18/11/01/star-1915448_960_720.png'></img>

        </div>
    )
}

export default Rating

import './main-container.css'
import Rating from '@mui/material/Rating'
import { Book } from '../types'

function MainContainer({ book }: {book: Book} ) {

    return (
        <div className="containerView">

            <div className="left">
                <img src={book.image_url} alt="Capa do Livro" />
                <Rating className='rating' defaultValue={book.evaluation} precision={0.5} size='large'sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0)', 
                    '& .MuiRating-iconFilled': {
                        color: 'yellow', 
                    },
                    '& .MuiRating-iconEmpty': {
                        color: 'white', 
                    },
                }} readOnly/>
            </div>

            <div className="bar"></div>
            <div className="text">
                <h1>{book.title}</h1>
                <h3>{book.resume}</h3>
            </div>
        </div>
    )
}
    
export default MainContainer

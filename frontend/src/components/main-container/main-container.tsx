import './main-container.css'
import Rating from '@mui/material/Rating'

function MainContainer() {

    return (
        <div className="containerView">

            <div className="left">
                <img src="https://m.media-amazon.com/images/I/81SQWCqtWlL._SY466_.jpg" alt="Capa do Livro" />
                <Rating className='rating' defaultValue={3.5} precision={0.5} size='large'sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Cor cinza para o fundo
                    '& .MuiRating-iconFilled': {
                        color: 'yellow', // Cor dos ícones preenchidos
                    },
                    '& .MuiRating-iconEmpty': {
                        color: 'white', // Cor dos ícones vazios
                    },
                }} readOnly/>
            </div>

            <div className="bar"></div>
            <div className="text">
                <h1>O fazedor de velhos</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia et, temporibus veniam sapiente necessitatibus maxime odio cupiditate velit doloribus placeat obcaecati veritatis, blanditiis voluptatibus laboriosam, repellendus quae asperiores consequuntur!</h3>
            </div>
        </div>
    )
}
    
export default MainContainer

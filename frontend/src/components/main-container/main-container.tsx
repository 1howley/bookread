import './main-container.css'

function MainContainer() {

    return (
        <div className="containerView">
            <img src="https://m.media-amazon.com/images/I/81SQWCqtWlL._SY466_.jpg" alt="Capa do Livro" />
            {/*  stars */}
            <div className="bar"></div>
            <div className="text">
                <h2>O fazedor de velhos</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia et, temporibus veniam sapiente necessitatibus maxime odio cupiditate velit doloribus placeat obcaecati veritatis, blanditiis voluptatibus laboriosam, repellendus quae asperiores consequuntur!</h4>
            </div>
        </div>
    )
}
    
export default MainContainer
    
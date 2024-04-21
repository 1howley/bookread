import { ChevronLeft, ChevronRight } from 'lucide-react';
import MainContainer from '../../components/main-container/main-container';
import './home.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Book } from '../../components/types';


function Home() {

    const [books, setBooks] = useState<Book[]>([]);
    const [num, setNum] = useState(0);

    const getBooks = async () => {
        try {

            const res = await axios.get("http://localhost:3000");
            setBooks(res.data);

        } catch (error) {
            
            console.log('> Database error: ' + error);

        }
    }

    useEffect(() => {
        getBooks();
    }, [setBooks]);

    const handleLeftClick = () => {
        num == 0 ? setNum(books.length - 1) : setNum(num - 1);
    }
    const handleRightClick = () => {
        num == books.length - 1 ? setNum(0) : setNum(num + 1);
    }

    return (
        <div className='view'>
            <ChevronLeft color='WHITE' size={50} className='arrow' onClick={handleLeftClick}/>
            {books.length > 0 && <MainContainer book={books[num]} />}
            <ChevronRight color='WHITE' size={50} className='arrow' onClick={handleRightClick}/>
        </div>
    )
}
    
export default Home
    
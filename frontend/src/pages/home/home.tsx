import { ChevronLeft, ChevronRight } from 'lucide-react';
import MainContainer from '../../components/main-container/main-container';
import './home.css'

function Home() {

    return (
        <div className='view'>
            <ChevronLeft color='WHITE' size={50} className='arrow' />
            <MainContainer/>
            <ChevronRight color='WHITE' size={50} className='arrow' />
        </div>
    )
}
    
export default Home
    
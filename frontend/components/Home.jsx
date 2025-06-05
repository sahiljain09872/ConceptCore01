import react from 'react'
import Header from './Header'
import Hero from './HomeComponents/Hero'
import Footer from './Footer'
import Contact from './HomeComponents/Contact'
import Courses from './HomeComponents/Courses'
import Philosophy from './HomeComponents/Philosophy'

function Home(){
    return(
        <main className="font-sans bg-gray-50 text-gray-900">
            <Header />
            <Hero />
            <Philosophy />
            <Courses />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home;
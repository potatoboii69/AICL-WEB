export default function Home() {
    return(
        <>
            <HeroCarousel/>
            <TrustBanner/>
            <ServicesGrid/>
            <MediaSection/>
            <ContentCarousel/>
            <NewsGrid/>
            <BlueBanner/>
            <Footer/>

        </>
    )
}

import HeroCarousel from "../components/HeroCarousel"
import TrustBanner from "../components/TrustBanner"
import ServicesGrid from "../components/ServicesGrid"
import MediaSection from "../components/MediaSection"
import ContentCarousel from "../components/ContentCarousel"
import NewsGrid from "../components/NewsGrid"
import BlueBanner from "../components/BlueBanner"
import Footer from "../components/Footer"
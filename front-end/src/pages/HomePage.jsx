import banner from '../assets/banner.jpg'
import croppedBanner from "../assets/cropped-banner.png"
import FeaturedProductsComponent from '../components/FeaturedProductsComponent'

function HomePage() {
 return (
  <>
  <div id='banner-container'>
   <p className='banner-text'>Brewed to Perfection.</p>
   <p className='banner-text'>Delivered to Your Door.</p>
   <img id='home-banner' src={croppedBanner}/>
  </div>
  <FeaturedProductsComponent/>
  </>
 )
}

export default HomePage
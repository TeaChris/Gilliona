import Categories from './components/categories/Categories'
import FollowUs from './components/followus/FollowUs'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import PopularCollection from './components/popular/PopularCollection'
import StyleStory from './components/style/StyleStory'
import Stylish from './components/stylish/Stylish'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <PopularCollection />
      <Stylish />
      <StyleStory />
      <FollowUs />
      <Footer />
    </>
  )
}

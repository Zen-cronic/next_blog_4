import AboutMe from './components/AboutMe'
import EmailSignUp from './components/EmailSignUp'
import MyProfilePic from './components/MyProfilePic'
import Posts from './components/Posts'
import ProfileInfo from './components/ProfileInfo'

export default function Home() {
  return (
    <main> 
      
      <ProfileInfo/>
      <Posts/>
      {/* <EmailSignUp/> */}
    </main>
  )
}

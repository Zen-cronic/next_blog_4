import HomePageLinks from "./components/HomePageLinks";
import ProfileInfo from "./components/ProfileInfo";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <main>
      <ProfileInfo />
      <HomePageLinks/>
      <ProjectsPage/>
    </main>
  );
}

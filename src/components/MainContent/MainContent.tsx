import Languages from "../Languages/Languages";
import Categories from "../Categories/Categories";
import Exercises from "../Exercises/Exercises";
import Content from "../Content/Content";
import Words from "../Words/Words";
import Sentences from "../Sentences/Sentences";
import Texts from "../Texts/Texts";
import Notifications from "../Notifications/Notifications";
import type { Section } from "../../types/section";
import './MainContent.css';

interface MainContentProps {
    section: Section;
}

const MainContent = ({ section }: MainContentProps) => {
    return (
        <main className="main_content">
            {section === 'languages' && <Languages />}
            {section === 'categories' && <Categories />}
            {section === 'exercises' && <Exercises />}
            {section === 'content' && <Content />}
            {section === 'words' && <Words />}
            {section === 'sentences' && <Sentences />}
            {section === 'texts' && <Texts />}
            {section === 'notifications' && <Notifications />}
        </main>
    )
}

export default MainContent;
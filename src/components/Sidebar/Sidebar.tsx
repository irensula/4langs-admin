import type { Section } from "../../types/section";
import './Sidebar.css';

interface SidebarProps {
    activeSection: Section;
    onSectionChange: (section: Section) => void
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
    const mainMenuItems: { id: Section; label: string }[] = [
        { id: 'languages', label: 'Languages' },
        { id: 'categories', label: 'Categories' },
        { id: 'exercises', label: 'Exercises' },
        { id: 'content', label: 'Content by category' },
        { id: 'words', label: 'Words' },
        { id: 'sentences', label: 'Sentences' },
        { id: 'texts', label: 'Texts' },
        { id: 'notifications', label: 'Notifications' },
    ];

    const actionMenuItems: { id: Section; label: string }[] = [
        { id: 'add content', label: 'Add new content' },
    ];

    return (
        <aside className="sidebar">
            <nav className="sidebar__nav">
                {mainMenuItems.map((item) => (
                    <button
                        key={item.id}
                        className={
                            activeSection === item.id
                                ? 'sidebar__link sidebar__link--active'
                                : 'sidebar__link'
                        }
                        onClick={() => onSectionChange(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
                <hr></hr>
                {actionMenuItems.map((item) => (
                    <button
                        key={item.id}
                        className={
                            activeSection === item.id
                                ? 'sidebar__link sidebar__link--active'
                                : 'sidebar__link'
                        }
                        onClick={() => onSectionChange(item.id)}
                    >
                        {item.label}
                    </button>
                ))}

            </nav>
            <div className="sidebar__footer">
                <hr></hr>
                <span>4Langs Admin</span>
                <span>Developed by Iryna Sula</span>
                <span>© 2026</span>
            </div>
        </aside>
    )
}

export default Sidebar;
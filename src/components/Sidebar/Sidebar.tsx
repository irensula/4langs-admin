import type { Section } from "../../types/section";
import './Sidebar.css';

interface SidebarProps {
    activeSection: Section;
    onSectionChange: (section: Section) => void
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
    const menuItems: { id: Section; label: string}[] = [
        { id: 'languages', label: 'Languages' },
        { id: 'categories', label: 'Categories' },
        { id: 'exercises', label: 'Exercises' },
        { id: 'content', label: 'Content' },
        { id: 'words', label: 'Words' },
        { id: 'sentences', label: 'Sentences' },
        { id: 'texts', label: 'Texts' },
        { id: 'notifications', label: 'Notifications' }
    ];

    return (
        <aside className="sidebar">
            <nav className="sidebar__nav">
                {menuItems.map((item) => (
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
        </aside>
    )
}

export default Sidebar;
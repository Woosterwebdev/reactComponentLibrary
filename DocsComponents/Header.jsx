import React from "react"
import Menu from "../components/Menu/index"

export default function Header() {
    const sections = ["Badges", "Banners", "Buttons", "Cards", "Testimonial", "Menus" ]
    return(
        <div id="header" className="header">
            <img src="/react-icon.png" alt="React Logo." />
            <h1 className="title m-0">React Component Library</h1>
            
            <div className="jump-button">
                <Menu>
                    <Menu.Button className="jump-button">Jump</Menu.Button>
                    <Menu.Dropdown>
                        {sections.map(section => (
                            <Menu.Item key={section}>{<a href={`#${section.toLowerCase()}`}>{section}</a>}</Menu.Item>
                        ))}
                    </Menu.Dropdown>
                </Menu>
            </div>
        </div>
    )
}
/*
<Button size="sm" className="skip-button"></Button>
<img className="skip-menu" src="/menu.png" />
*/
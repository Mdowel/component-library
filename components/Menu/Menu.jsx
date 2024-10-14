import React from "react"
import useToggle from "../../hooks/useToggle"
import ExampleCodeBlock from "../ExampleCodeBlock"

const MenuContext = React.createContext()
export { MenuContext }

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle({
        initialValue: false, 
        onToggle: onOpen
    })

    const codeString = `
    <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
            <Menu.Item>Option 1</Menu.Item>
            <Menu.Item>Option 2</Menu.Item>
            <Menu.Item>Option 3</Menu.Item>
            <Menu.Item>Option 4</Menu.Item>
            <Menu.Item>Option 5</Menu.Item>
        </Menu.Dropdown>
    </Menu>
    `

    return (
        <>
            <MenuContext.Provider value={{ open, toggleOpen }}>
                <div className="menu">
                    {children}
                </div>
            </MenuContext.Provider>
            <ExampleCodeBlock language="jsx">{codeString}</ExampleCodeBlock>
        </>
    )
}

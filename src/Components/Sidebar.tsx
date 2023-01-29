import { Sidebar, Menu, SubMenu, MenuItem, sidebarClasses } from "react-pro-sidebar"
import { Link } from "react-router-dom"

const SidebarNav = () =>{
    return ( <div>
     <Sidebar   rootStyles={{
    [`.${sidebarClasses.container}`]: {
      backgroundColor: "rgb(210, 121, 164)",
      height:'100vh'
    },
  }}
>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem component={<Link to="/dashboard "/>}> Dashboard </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>   
    </div>
    )
}
export default SidebarNav
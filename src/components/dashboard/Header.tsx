import React from "react";
import { HeaderContainer, MenuToggle, UserMenu, UserAvatar, UserDropdown, UserDropdownItem } from "./Header-Styles";


const Header = ({ onToggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <MenuToggle onClick={onToggleSidebar}>☰</MenuToggle>
      <UserMenu onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <UserAvatar src="/path/to/avatar.jpg" alt="User" />
        {isDropdownOpen && (
          <UserDropdown>
            <UserDropdownItem>Configurações</UserDropdownItem>
            <UserDropdownItem onClick={() => window.location.href = "/login"}>Sair</UserDropdownItem>
          </UserDropdown>
        )}
      </UserMenu>
    </HeaderContainer>
  );
};

export default Header;

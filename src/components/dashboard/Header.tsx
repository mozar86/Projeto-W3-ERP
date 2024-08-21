import React, { useState } from "react";
import { HeaderContainer, MenuButton, UserMenuContainer, UserProfile, UserMenu, UserMenuItem } from "./Header-Styles";


interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <HeaderContainer>
      <MenuButton onClick={onToggleSidebar}>
        <img src='../src/assets/outline/menu/icon.png' alt="menu" />
      </MenuButton>
        <UserMenuContainer>
          <UserProfile onClick={handleUserMenuToggle}>
            <span>Rafael Oliveira</span>
          </UserProfile>
          {isUserMenuOpen && (
            <UserMenu>
              <UserMenuItem>Configurações</UserMenuItem>
              <UserMenuItem onClick={() => window.location.href = '/login'}>Sair</UserMenuItem>
            </UserMenu>
          )}
        </UserMenuContainer>
    </HeaderContainer>
  );
};

export default Header;

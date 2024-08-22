import React, { useState } from "react";
import {
  HeaderContainer,
  MenuButton,
  UserMenuContainer,
  UserProfile,
  UserMenu,
  UserMenuItem,
  UserEmail,
  UserIcon,
  UserInfo,
  UserName,
} from "./Header-Styles";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  isSidebarOpen,
}) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <HeaderContainer isSidebarOpen={isSidebarOpen}>
      <MenuButton onClick={onToggleSidebar}>
        <img src="../src/assets/outline/menu/icon.png" alt="menu" />
      </MenuButton>
      <UserMenuContainer>
        <UserProfile onClick={handleUserMenuToggle}>
          <UserIcon src="../src/assets/user-icon.png" alt="User" />
          <UserInfo>
            <UserName>Rafael Pimenta</UserName>
            <UserEmail>rafael@example.com</UserEmail>
          </UserInfo>
        </UserProfile>
        {isUserMenuOpen && (
          <UserMenu>
            <UserMenuItem>Configurações</UserMenuItem>
            <UserMenuItem
              onClick={() => (window.location.href = "/login")}
            >
              Sair
            </UserMenuItem>
          </UserMenu>
        )}
      </UserMenuContainer>
    </HeaderContainer>
  );
};

export default Header;

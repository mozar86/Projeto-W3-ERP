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
  CatracaIcon,
  LogoutIcon,
} from "./Header-Styles";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: any;
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
        <img src="../src/assets/icon.png" alt="menu" />
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
            <UserMenuItem>
              <CatracaIcon src="../src/assets/catraca-config.png" alt="configurações" />
              Configurações
            </UserMenuItem>
            <UserMenuItem
              onClick={() => (window.location.href = "/login")}
            >
              <LogoutIcon src="../src/assets/seta-sair.png" alt="Logout" />
              Sair
            </UserMenuItem>
          </UserMenu>
        )}
      </UserMenuContainer>
    </HeaderContainer>
  );
};

export default Header;

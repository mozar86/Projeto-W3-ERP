import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 70px;
  transition: width 0.3s ease;
`;

export const MenuButton = styled.button`
  display: flex;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
  width: 24px;
  height: 24px;
  }
`;

export const UserMenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UserProfile = styled.div`
  color: #212121;
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    margin-right: 8px;
  }
`;

export const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #00a3ff;
`;

export const UserInfo = styled.div`
  margin-left: 0.5rem;
`;

export const UserName = styled.span`
  display: block;
  font-weight: bold;
  color: #333;
`;

export const UserEmail = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #777;
`;

export const UserMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 30px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px;
  margin-top: 12px;
  width: 170px;

  overflow: hidden;
`;

export const CatracaIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const LogoutIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const UserMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  color: #757575;

  &:hover {
    background-color: #f5f5f5;
  }
`

import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
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
`;

export const UserProfile = styled.div`
  color: #212121 700;
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    margin-right: 8px;
  }
`;

export const UserMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px;
  margin-top: 8px;
  min-width: 150px;
  z-index: 10;
`;

export const UserMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: #757575;

  &:hover {
    background-color: #f5f5f5;
  }
`

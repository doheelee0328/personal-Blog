import styled from 'styled-components'

export const SideBarWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10vw;

  @media (max-width: 660px) {
    display: none;
  }
`

export const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SideBarTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 20px;
  padding: 8px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
  width: 12rem;
  height: 30%;
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .me {
    width: 80%;
    border-radius: 20px;
    margin-bottom: 14px;
  }
`
export const SideBarParagraph = styled.p`
  font-size: 15px;
  margin-bottom: 12px;
`

export const SideBarList = styled.ul`
  list-style: none;
  margin-bottom: 10px;
  cursor: pointer;
`
export const SideBarListItem = styled.li`
  display: inline-block;
  width: 50%;
  :hover {
    transform: scale(1.1);
  }
`

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`

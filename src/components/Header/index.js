import React from 'react'

import { Container, User, Search } from './styles'

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/1508/1508843.svg"
        alt="Avatar"
       />
       Loussd Lsss
    </User>
  </Container>
);

export default Header;

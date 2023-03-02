import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const StyledHeader = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #282c34;
`;

export function Header({ children, ...props }: HeaderProps) {
  return (
    <StyledHeader {...props}>
      <h1>Header</h1>
      {children}
    </StyledHeader>
  );
}

export default Header;

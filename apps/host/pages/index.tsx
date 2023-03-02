import dynamic from 'next/dynamic';
import styled from 'styled-components';

const PlpProductsPage = dynamic(
  () => import('plp/ProductsPage').then((mod) => mod.Page),
  {
    suspense: true,
  }
);

const StyledPage = styled.div`
  min-height: calc(100vh - 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  padding: 5px;
  border: 4px dashed orangered;
  border-radius: 0.25rem;
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <PlpProductsPage />
    </StyledPage>
  );
}

export default Index;

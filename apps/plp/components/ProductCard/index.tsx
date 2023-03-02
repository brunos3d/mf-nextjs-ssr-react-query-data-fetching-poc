import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

import type { Product } from '@acme/domain';

export const CardOutline = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 0.25rem;
  border: 4px dashed royalblue;
`;

export interface ProductCardProps extends LinkProps {
  product: Product;
}

export function ProductCard({ product, ...linkProps }: ProductCardProps) {
  return (
    <CardOutline>
      <Link {...linkProps}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={100}
          style={{
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
          priority
        />
        <h4>{product.title}</h4>
        <p>{product.brand}</p>
        <span>price: {product.price}</span>{' '}
        <span>rating: {product.rating}</span>
      </Link>
    </CardOutline>
  );
}

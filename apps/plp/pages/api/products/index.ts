import type { NextApiRequest, NextApiResponse } from 'next';

import type { PaginatedReponse, Product } from '@acme/domain';

export type ProductsResponse = PaginatedReponse<Partial<Product>, 'products'>;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ProductsResponse>
) => {
  const { skip, limit } = req.query;

  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  res.status(200).json((await response.json()) as ProductsResponse);
};

export default handler;

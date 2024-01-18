import { useEffect } from 'react';
import { Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from '@components/common';
import { FormLoading } from '@components/loading';
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from '@services/products.api';
import { ProductForm } from './components/ProductForm';

export function ProductUpdatePage() {
  const navigate = useNavigate();
  const { productId = '' } = useParams();

  const { data: initialProduct, isLoading: isGetProductLoading } =
    useGetProductQuery(productId);

  const [mutate, { isLoading: isUpdateProductLoading, isSuccess }] =
    useUpdateProductMutation();

  const handleSubmit = (product: Product) => {
    mutate({ id: productId, updatedProduct: product });
  };

  useEffect(() => {
    if (isSuccess) {
      showNotification({ message: 'Product updated', color: 'green' });
      navigate('/d/stats/products');
    }
  });

  if (isGetProductLoading) return <FormLoading />;

  return (
    <Card>
      <Title order={5} pb="md" c="primary">
        Edit Product
      </Title>

      <ProductForm
        loading={isUpdateProductLoading}
        onSubmit={handleSubmit}
        values={{
          title: initialProduct?.title || '',
          description: initialProduct?.description || '',
          price: initialProduct?.price || 0,
          discountPercentage: initialProduct?.discountPercentage || 0,
          stock: initialProduct?.stock || 0,
        }}
      />
    </Card>
  );
}

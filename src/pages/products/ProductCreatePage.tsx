import { useEffect } from 'react';
import { Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { Card } from '@components/common';
import { useCreateProductMutation } from '@services/products';
import { ProductForm } from './components/ProductForm';

export function ProductCreatePage() {
  const navigate = useNavigate();
  const [mutate, { isLoading, isSuccess }] = useCreateProductMutation();

  const handleSubmit = (product: Product) => {
    mutate(product);
  };

  useEffect(() => {
    if (isSuccess) {
      showNotification({ message: 'Product created', color: 'green' });
      navigate('/d/products');
    }
  });

  return (
    <Card>
      <Title order={5} pb="md" c="primary">
        Create Product
      </Title>

      <ProductForm
        isCreate
        loading={isLoading}
        onSubmit={handleSubmit}
        values={{
          title: 'new product',
          description: 'thisisgoodproduct',
          price: 0,
          discountPercentage: 0,
          stock: 0,
        }}
      />
    </Card>
  );
}

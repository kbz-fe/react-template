import { useEffect } from 'react';
import { Button, Group, Modal, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { IconEdit, IconTrash } from '@tabler/icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Card } from '@components/common';
import { FormLoading } from '@components/loading';
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from '@services/products';
import { DetailItem } from './components/DetailItem';

export function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId = '' } = useParams();
  const [opened, { open, close }] = useDisclosure(false);

  const { data: product, isLoading: isGetProductLoading } =
    useGetProductQuery(productId);

  const [mutate, { isLoading: isDeleteProductLoading, isSuccess }] =
    useDeleteProductMutation();

  const handleDeleteProduct = () => {
    mutate(productId);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(-1);
      showNotification({ message: 'Product deleted', color: 'green' });
    }
  });

  if (isGetProductLoading) return <FormLoading />;

  return (
    <>
      <Card>
        <Group spacing="xs" position="apart" align="center" pb={20}>
          <Title order={1} size="h5">
            Product Detail
          </Title>

          <Group spacing="xs">
            <Button variant="filled" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button
              component={Link}
              color="gray"
              variant="subtle"
              leftIcon={<IconEdit />}
              to={`/d/products/edit/${productId}`}
            >
              Edit
            </Button>
          </Group>
        </Group>

        <Stack>
          <DetailItem label="Title" value={product?.title} />
          <DetailItem label="Description" value={product?.description} />
          <DetailItem label="Price" value={product?.price || '-'} />
          <DetailItem
            label="Discount Percentage"
            value={product?.discountPercentage || '-'}
          />
          <DetailItem label="Stocks" value={product?.stock || '-'} />

          <Button
            color="red"
            leftIcon={<IconTrash />}
            style={{
              alignSelf: 'start',
            }}
            onClick={open}
          >
            Delete
          </Button>
        </Stack>
      </Card>

      <Modal onClose={close} opened={opened} title="Delete Product">
        <Modal.Body>
          <Text>Are you sure you want to delete this product?</Text>

          <Group pt="lg">
            <Button onClick={close} variant="outline">
              Cancel
            </Button>
            <Button
              loading={isDeleteProductLoading}
              onClick={handleDeleteProduct}
              color="red"
            >
              Confirm
            </Button>
          </Group>
        </Modal.Body>
      </Modal>
    </>
  );
}

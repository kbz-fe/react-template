import { Box, Button, Group, Stack, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { createProductSchema } from '@utils/schema';

interface ProductFormProps {
  values: Product;
  loading?: boolean;
  isCreate?: boolean;
  onSubmit: (product: Product) => void;
}

export function ProductForm({
  values,
  loading,
  isCreate,
  onSubmit,
}: ProductFormProps) {
  const navigate = useNavigate();
  const form = useForm<Product>({
    initialValues: values,
    validate: zodResolver(createProductSchema),
  });

  return (
    <Box component="form" w="100%" onSubmit={form.onSubmit(onSubmit)}>
      <Stack spacing={28} sx={{ flex: 1 }}>
        <TextInput
          disabled={loading}
          label="Title"
          {...form.getInputProps('title')}
        />

        <TextInput
          disabled={loading}
          label="Description"
          {...form.getInputProps('description')}
        />

        <TextInput
          disabled={loading}
          label="Price"
          {...form.getInputProps('price')}
        />

        <TextInput
          disabled={loading}
          label="Stock"
          {...form.getInputProps('stock')}
        />

        <TextInput
          disabled={loading}
          label="Discount Percentage"
          {...form.getInputProps('discountPercentage')}
        />

        <Group position="right" mt="md">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button type="submit" loading={loading}>
            {isCreate ? 'Create' : 'Save'}
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}

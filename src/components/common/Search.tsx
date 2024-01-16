import { ActionIcon, Group, Input } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSearch, IconX } from '@tabler/icons';
import { useParamsHelper } from '@hooks/useParamsHelper';

export function Search() {
  const { setParam } = useParamsHelper();
  const form = useForm({
    initialValues: {
      search: '',
    },
  });

  const handleRemove = () => {
    setParam('search', '');
    form.setFieldValue('search', '');
  };

  return (
    <form
      onSubmit={form.onSubmit((values) => setParam('search', values.search))}
    >
      <Group>
        <Input
          placeholder="Search"
          {...form.getInputProps('search')}
          rightSection={
            !form?.values?.search ? null : (
              <ActionIcon size="sm" onClick={handleRemove}>
                <IconX />
              </ActionIcon>
            )
          }
        />
        <ActionIcon
          disabled={!form.values?.search}
          size={36}
          radius="md"
          type="submit"
          variant="outline"
        >
          <IconSearch />
        </ActionIcon>
      </Group>
    </form>
  );
}

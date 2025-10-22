export default function extractSpecials({ special }) {
  const result = [];

  for (const { id, name, icon, description = 'Описание недоступно' } of special) {
    result.push({ id, name, icon, description });
  }

  return result;
}

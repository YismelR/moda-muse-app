import { useState, useEffect } from 'react';
import { ItemsData } from '@/ItemsData';

export const useItems = () => {
  const [items, setItems] = useState<ItemsData[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Server Error');
        }
        return res.json();
      })
      .then((item) => setItems(item))
      .catch((error) => setError(error));
  }, []);
  return { items, error };
};

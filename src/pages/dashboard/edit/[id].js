import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FormProduct from '@components/FormProduct';
import axios from 'axios';
import endPoints from '@services/api';

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    const {id} = router.query;

    if (!router.isReady) return;

    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }

    getProduct().catch((error) =>router.push('/notFound'));

  }, [router?.isReady]);

  return <FormProduct product={product} />;
}

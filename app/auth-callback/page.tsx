import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { trpc } from '../_trpc/client';

const page = async () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get('origin');

  const { data, isLoading, isError, isSuccess } = trpc.authCallback.useQuery();
  if (isSuccess) {
    router.push(origin ? `/${origin}` : '/dashboard');
  }
  return <div>page</div>;
};

export default page;

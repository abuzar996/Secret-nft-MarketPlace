import React from 'react';
import Head from 'next/head';
import BetaBanner from 'components/base/BetaBanner';
import FloatingHeader from 'components/base/FloatingHeader';
import Footer from 'components/base/Footer';
import MainHeader from 'components/base/MainHeader';
import Wallet from 'components/pages/Wallet';
import cookies from 'next-cookies';

import { getUser } from 'actions/user';
import { UserType } from 'interfaces';
import { NextPageContext } from 'next';
import { decryptCookie } from 'utils/cookie';

export interface WalletPageProps {
  user: UserType;
  token: string;
}

const WalletPage = ({ user }: WalletPageProps) => (
  <>
    <Head>
      <title>{process.env.NEXT_PUBLIC_APP_NAME ? process.env.NEXT_PUBLIC_APP_NAME : 'SecretNFT'} - Wallet</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Ternoa Wallet" />
      <meta name="og:image" content="ternoa-social-banner.jpg" />
    </Head>
    <BetaBanner />
    <MainHeader user={user} />
    <Wallet user={user} />
    <Footer />
    <FloatingHeader user={user} />
  </>
);

export async function getServerSideProps(ctx: NextPageContext) {
  let user = null;
  const token = cookies(ctx).token && decryptCookie(cookies(ctx).token as string);
  if (token) user = await getUser(token).catch(() => null);
  if (!user) {
    return {
      notFound: true,
    };
  }
  return {
    props: { user },
  };
}

export default WalletPage;

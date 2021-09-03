import dynamic from 'next/dynamic';

const HomepageView = dynamic(() => import('../views/Homepage'));

export default function Home() {
  return (
    <HomepageView />
  );
}

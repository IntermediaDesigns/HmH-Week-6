import Dropdown from '@/components/Beer.jsx';
import Pokemon from '@/components/Pokemon.jsx';
import Memes from '@/components/Memes.jsx';
import Dogs from '@/components/Dogs.jsx';

export default function Home() {

  return (
    <>
      <Dogs/>
      <Memes />
      <Pokemon />
      <Dropdown />
    </>
  );
}

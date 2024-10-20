import Filter from './Filter';
import Items from './Items';
import Search from './Search';

export default function ItemsList() {
  return (
    <main className="grid grid-cols-12 mx-9 place-self-center xl:mx-0 max-w-screen-xl mt-8">
      <Filter />
      <div className="col-span-9">
        <Search />
        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 my-8">
          <Items />
        </div>
      </div>
    </main>
  );
}

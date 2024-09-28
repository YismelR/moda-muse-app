import Filter from './Filter';
import Items from './Items';
import Search from './Search';

export default function ItemsList() {
  return (
    <main className="flex justify-center">
      <Filter />
      <div className="grow">
        <Search />
        <div className="grid grid-cols-3">
          <Items />
          <Items />
        </div>
      </div>
    </main>
  );
}

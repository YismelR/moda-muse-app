import Filter from './Filter';
import FilterPriceSelect from './FilterPriceSelect';
import Items from './Items';
import Search from './Search';

export default function ItemsList() {
  return (
    <main className="grid grid-cols-12 mx-9 place-self-center xl:mx-0 max-w-screen-xl mt-8">
      <Filter />
      <div className="grid gap-12 col-span-9">
        <div className="flex justify-between flex-col gap-6 md:flex-row">
          <Search />
          <FilterPriceSelect />
        </div>
        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2">
          <Items />
        </div>
      </div>
    </main>
  );
}

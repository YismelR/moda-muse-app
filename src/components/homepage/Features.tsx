import FeatureCards from './FeatureCards';

export default function Features() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-12 my-24 px-9 xl:px-0">
        <h1 className="text-2xl">Features</h1>
        <div className="max-w-full">
          <FeatureCards />
        </div>
      </div>
    </section>
  );
}

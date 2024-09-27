import FeatureCards from "./FeatureCards";

export default function Features() {
  return (
    <section className="flex flex-col gap-12 my-24 px-16">
      <h1 className="text-2xl">Features</h1>
      <div className="max-w-full">
        <FeatureCards />
      </div>
    </section>
  );
}

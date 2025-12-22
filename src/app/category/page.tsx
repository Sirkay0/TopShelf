import Filter from "@/components/Filter";
import FilterBody from "@/components/FilterBody";
import MiniManifest from "@/components/MiniManifest";

const CategoryPage = () => {
  return (
    <main>
      <MiniManifest />
      <section className="md:px-16 md:grid md:grid-cols-[304px_1fr] md:gap-x-8 ">
        <FilterBody />
        <div className="md:overflow-hidden">
          <Filter />
        </div>
      </section>
      <div className="h-100"></div>
    </main>
  );
};

export default CategoryPage;

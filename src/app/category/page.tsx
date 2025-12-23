import Filter from "@/components/Filter";
import FilterBody from "@/components/FilterBody";
import MiniManifest from "@/components/MiniManifest";

const CategoryPage = () => {
  return (
    <main>
      <MiniManifest />
      <section className="md:px-16 md:grid md:grid-cols-[304px_1fr] md:gap-x-8 mb-[232px] md:mb-[336px]">
        <div className="hidden md:block h-screen">
        <FilterBody />
        </div>
        <div className="md:overflow-hidden">
          <Filter />
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;

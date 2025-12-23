import Filter from "@/components/Filter";
import FilterBody from "@/components/FilterBody";
import MiniManifest from "@/components/MiniManifest";

const CategoryPage = () => {
  return (
    <main>
      <MiniManifest />
      <section className="md:px-16 md:grid md:grid-cols-[304px_1fr] md:gap-x-8 mb-[232px] md:mb-[336px] relative">
        <div className="sticky top-[175px] hidden md:block overflow-scroll h-dvh">
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

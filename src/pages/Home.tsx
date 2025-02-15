import ProductCard from '@/components/cards/ProductCard';
import ProductWideCard from '@/components/cards/ProductWideCard';

function Home() {
  return (
    <>


      <div className="grid grid-cols-5 grid-rows-5 gap-4 min-h-80">
        <div className="col-span-5">

        </div>
        <div className="col-start-2 row-start-2">
          <ProductCard />
        </div>
        <div className="col-start-2 row-start-3">
          <ProductCard />
        </div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-2">
          <ProductWideCard />
        </div>
        <div className="col-span-3 col-start-2 row-start-4">5</div>
      </div>


    </>
  )
}

export default Home

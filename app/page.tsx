import { Container, TopBar, Title, Filters, ProductCard } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";


export default function Home() {
  return (
    <>
     <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container> 
      <TopBar />
      <Container className="mt-10 pb-14 ">
        <div className="flex gap-[60px]">
          <div className="w-[350px] mr-[90px]">
            <Filters />
          </div>


          <div>
            <ProductsGroupList
              title="Пиццы"
              products={[{
                id: 1,
                name: "Гавайская",
                imageUrl: "https://media.dominos.by/__sized__/menu/product_image/2025/06/23/%D0%9F%D0%B8%D0%BA%D0%BB%D0%B8_M_480%D1%85480-thumbnail-480x480.png",
                price: 550,
                items: [{ price: 550 }]
              },
            {
                id: 2,
                name: "Гавайская",
                imageUrl: "https://media.dominos.by/__sized__/menu/product_image/2025/06/23/%D0%9F%D0%B8%D0%BA%D0%BB%D0%B8_M_480%D1%85480-thumbnail-480x480.png",
                price: 550,
                items: [{ price: 550 }]
              },
            {
                id: 3,
                name: "Гавайская",
                imageUrl: "https://media.dominos.by/__sized__/menu/product_image/2025/06/23/%D0%9F%D0%B8%D0%BA%D0%BB%D0%B8_M_480%D1%85480-thumbnail-480x480.png",
                price: 550,
                items: [{ price: 550 }]
              },
            {
                id: 4,
                name: "Гавайская",
                imageUrl: "https://media.dominos.by/__sized__/menu/product_image/2025/06/23/%D0%9F%D0%B8%D0%BA%D0%BB%D0%B8_M_480%D1%85480-thumbnail-480x480.png",
                price: 550,
                items: [{ price: 550 }]
              },]}
              categoryId={1}
            />
            <ProductsGroupList
              title="Комбо"
              products={[{
                id: 1,
                name: "Гавайская",
                imageUrl: "https://media.dominos.by/__sized__/menu/product_image/2025/06/23/%D0%9F%D0%B8%D0%BA%D0%BB%D0%B8_M_480%D1%85480-thumbnail-480x480.png",
                price: 550,
                items: [{ price: 550 }]
              },
            {
                id: 2,
                name: "Гавайская",
                imageUrl: "https://media.dominos.by/__sized__/menu/product_image/2025/06/23/%D0%9F%D0%B8%D0%BA%D0%BB%D0%B8_M_480%D1%85480-thumbnail-480x480.png",
                price: 550,
                items: [{ price: 550 }]
              },
            {
                id: 3,
                name: "Гавайская",
                imageUrl: "https://media.dominos.by/__sized__/menu/product_image/2025/06/23/%D0%9F%D0%B8%D0%BA%D0%BB%D0%B8_M_480%D1%85480-thumbnail-480x480.png",
                price: 550,
                items: [{ price: 550 }]
              },
            {
                id: 4,
                name: "Гавайская",
                imageUrl: "https://media.dominos.by/__sized__/menu/product_image/2025/06/23/%D0%9F%D0%B8%D0%BA%D0%BB%D0%B8_M_480%D1%85480-thumbnail-480x480.png",
                price: 550,
                items: [{ price: 550 }]
              },]}
              categoryId={2}
            />
          </div>
        </div>
      </Container>  
    </>
  );
}

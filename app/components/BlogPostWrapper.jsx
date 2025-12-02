
import LayoutBlogPost from "./layout-blog-post";
import Content from "./blog-content";

export default function BlogPostWrapper({ title, hero_image, hero_image_alt, children }) {
  return (
    <LayoutBlogPost title={title}>
         <div className="px-[20rem] xl:block
sm:hidden bg-black
w-[100%]">
        <img src={hero_image} alt={hero_image_alt}  />
      </div>
      <div className="sm:block md:hidden
m-auto bg-black px-[3rem]">
   <img src={hero_image} alt={hero_image_alt}/>
   </div>

   <div className="sm:hidden md:block 
xl:hidden 
bg-black md:w-[100%] px-[10rem]">
   <img src={hero_image} alt={hero_image_alt}/>
   </div>
      <Content>
{children}
      </Content>
    </LayoutBlogPost>
  );
}

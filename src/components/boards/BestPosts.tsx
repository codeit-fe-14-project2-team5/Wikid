import Image from 'next/image';
import styles from '@/styles/boards/bestposts.module.css';
const posts = [
  {
    id: 1,
    title: '게시물 제목입니다1',
    writer:'박동욱',
    date:'2024.02.24',
    href: '#',
    like: '135',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    title: '게시물 제목입니다2',
    writer:'박동욱',
    date:'2024.02.24',
    href: '#',
    like: '135',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    title: '게시물 제목입니다3',
    writer:'박동욱',
    date:'2024.02.24',
    href: '#',
    like: '135',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    title: '게시물 제목입니다4',
    writer:'박동욱',
    date:'2024.02.24',
    href: '#',
    like: '135',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  }
]

export default function BestPosts() {
  return (
    <>
      <div className="flex justify-between items-center mb-[60px] leading-[26px] text-[16px]">
        <h2 className="leading-[32px] text-[24px] lg:leading-[42px] lg:text-[32px] font-semibold">베스트 게시글</h2>
        <button type="button" className="w-[130px] h-[45px] px-4 py-2 bg-[#4CBFA4] text-white rounded-md lg:w-[160px] leading-[24px] text-[14px] font-semibold">
          게시물 등록하기
        </button>
      </div>

      <div className='relative px-[20px] pb-[20px] mb-[40px] overflow-x-auto overflow-y-hidden'>
        <div className="flex gap-4 w-[1048px] md:w-full md:gap-5 md:flex-wrap lg:gap-4 lg:w-full lg:flex-nowrap ">
            {posts.map((product) => (
              <a key={product.id} href={product.href} className="flex-shrink-0 w-[250px] h-[200px] md:w-[calc(50%-10px)] md:h-[220px] lg:w-[calc(25%-12px)] rounded-lg card-shadow">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="rounded-lg w-full h-[131px] object-cover object-top" />
                <div className="p-[20px] pt-[11px] pb-[14px] md:p-[20px] md:pb-[13px] lg:p-[19px] lg:pb-[14px] text-lg">
                  <h3 className=" md:mb-[6px] md:text-[18px] font-semibold text-[#474D66]">{product.title}</h3>
                  <div className="flex justify-between leading-[18px] text-[12px] md:leading-[24px] md:text-[14px]">
                    <div className="text-[#8F95B2]">
                      <span>{product.writer}</span>
                      <span className='ml-[8px]'>{product.date}</span>
                    </div>
                    <div className="text-[#8F95B2]">
                    <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block" />
                    {product.like}
                    </div>
                  </div>

                </div>
              </a>
            ))}
          </div>
        </div>


    </>
  )
}

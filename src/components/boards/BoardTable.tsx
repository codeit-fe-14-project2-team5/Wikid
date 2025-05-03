import Image from 'next/image';

export default function BoardTable() {
  return (
    <>
      <div className="leading-[26px] text-[16px] md:text-center">
        <ul className="flex justify-between py-[12px] border-y border-[#E4E5F0] text-[#8F95B2] hidden md:flex">
          <li className="w-[10%]">번호</li>
          <li className="w-[45%]">제목</li>
          <li className="w-[15%]">작성자</li>
          <li className="w-[15%]">좋아요</li>
          <li className="w-[15%]">날짜</li>
        </ul>
        <ul className='mb-[30px] md:mb-[60px] text-[#474D66]'>
          <li className='${styles.cardShadow} py-[12px] border-b border-[#E4E5F0]'>
            <a href="#">
              <dl className="flex relative flex-wrap">
                <dd className="w-[10%] hidden md:block">134</dd>
                <dd className="w-full md:w-[45%] block">게시물 제목입니다.</dd>
                <dd className="w-inline md:w-[15%] text-[#8F95B2] md:text-[#474D66]">박동욱</dd>
                <dd className="w-[15%] absolute right-0 bottom-0 text-[#8F95B2] md:text-[#474D66]">
                  <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block md:hidden" />
                  <span>64</span>
                </dd>
                <dd className="w-[15%] ml-[16px] text-[#8F95B2] md:text-[#474D66]">2024.02.24</dd>
              </dl>
            </a>
          </li>
          <li className='py-[12px] border-b border-[#E4E5F0]'>
            <a href="#">
              <dl className="flex relative flex-wrap">
                <dd className="w-[10%] hidden md:block">134</dd>
                <dd className="w-full md:w-[45%] block">게시물 제목입니다.</dd>
                <dd className="w-inline md:w-[15%] text-[#8F95B2] md:text-[#474D66]">박동욱</dd>
                <dd className="w-[15%] absolute right-0 bottom-0 text-[#8F95B2] md:text-[#474D66]">
                  <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block md:hidden" />
                  <span>64</span>
                </dd>
                <dd className="w-[15%] ml-[16px] text-[#8F95B2] md:text-[#474D66]">2024.02.24</dd>
              </dl>
            </a>
          </li>
          <li className='py-[12px] border-b border-[#E4E5F0]'>
            <a href="#">
              <dl className="flex relative flex-wrap">
                <dd className="w-[10%] hidden md:block">134</dd>
                <dd className="w-full md:w-[45%] block">게시물 제목입니다.</dd>
                <dd className="w-inline md:w-[15%] text-[#8F95B2] md:text-[#474D66]">박동욱</dd>
                <dd className="w-[15%] absolute right-0 bottom-0 text-[#8F95B2] md:text-[#474D66]">
                  <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block md:hidden" />
                  <span>64</span>
                </dd>
                <dd className="w-[15%] ml-[16px] text-[#8F95B2] md:text-[#474D66]">2024.02.24</dd>
              </dl>
            </a>
          </li>
          <li className='py-[12px] border-b border-[#E4E5F0]'>
            <a href="#">
              <dl className="flex relative flex-wrap">
                <dd className="w-[10%] hidden md:block">134</dd>
                <dd className="w-full md:w-[45%] block">게시물 제목입니다.</dd>
                <dd className="w-inline md:w-[15%] text-[#8F95B2] md:text-[#474D66]">박동욱</dd>
                <dd className="w-[15%] absolute right-0 bottom-0 text-[#8F95B2] md:text-[#474D66]">
                  <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block md:hidden" />
                  <span>64</span>
                </dd>
                <dd className="w-[15%] ml-[16px] text-[#8F95B2] md:text-[#474D66]">2024.02.24</dd>
              </dl>
            </a>
          </li>
          <li className='py-[12px] border-b border-[#E4E5F0]'>
            <a href="#">
              <dl className="flex relative flex-wrap">
                <dd className="w-[10%] hidden md:block">134</dd>
                <dd className="w-full md:w-[45%] block">게시물 제목입니다.</dd>
                <dd className="w-inline md:w-[15%] text-[#8F95B2] md:text-[#474D66]">박동욱</dd>
                <dd className="w-[15%] absolute right-0 bottom-0 text-[#8F95B2] md:text-[#474D66]">
                  <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block md:hidden" />
                  <span>64</span>
                </dd>
                <dd className="w-[15%] ml-[16px] text-[#8F95B2] md:text-[#474D66]">2024.02.24</dd>
              </dl>
            </a>
          </li>
          <li className='py-[12px] border-b border-[#E4E5F0]'>
            <a href="#">
              <dl className="flex relative flex-wrap">
                <dd className="w-[10%] hidden md:block">134</dd>
                <dd className="w-full md:w-[45%] block">게시물 제목입니다.</dd>
                <dd className="w-inline md:w-[15%] text-[#8F95B2] md:text-[#474D66]">박동욱</dd>
                <dd className="w-[15%] absolute right-0 bottom-0 text-[#8F95B2] md:text-[#474D66]">
                  <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block md:hidden" />
                  <span>64</span>
                </dd>
                <dd className="w-[15%] ml-[16px] text-[#8F95B2] md:text-[#474D66]">2024.02.24</dd>
              </dl>
            </a>
          </li>
          <li className='py-[12px] border-b border-[#E4E5F0]'>
            <a href="#">
              <dl className="flex relative flex-wrap">
                <dd className="w-[10%] hidden md:block">134</dd>
                <dd className="w-full md:w-[45%] block">게시물 제목입니다.</dd>
                <dd className="w-inline md:w-[15%] text-[#8F95B2] md:text-[#474D66]">박동욱</dd>
                <dd className="w-[15%] absolute right-0 bottom-0 text-[#8F95B2] md:text-[#474D66]">
                  <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block md:hidden" />
                  <span>64</span>
                </dd>
                <dd className="w-[15%] ml-[16px] text-[#8F95B2] md:text-[#474D66]">2024.02.24</dd>
              </dl>
            </a>
          </li>
          <li className='py-[12px] border-b border-[#E4E5F0]'>
            <a href="#">
              <dl className="flex relative flex-wrap">
                <dd className="w-[10%] hidden md:block">134</dd>
                <dd className="w-full md:w-[45%] block">게시물 제목입니다.</dd>
                <dd className="w-inline md:w-[15%] text-[#8F95B2] md:text-[#474D66]">박동욱</dd>
                <dd className="w-[15%] absolute right-0 bottom-0 text-[#8F95B2] md:text-[#474D66]">
                  <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block md:hidden" />
                  <span>64</span>
                </dd>
                <dd className="w-[15%] ml-[16px] text-[#8F95B2] md:text-[#474D66]">2024.02.24</dd>
              </dl>
            </a>
          </li>
          <li className='py-[12px] border-b border-[#E4E5F0]'>
            <a href="#">
              <dl className="flex relative flex-wrap">
                <dd className="w-[10%] hidden md:block">134</dd>
                <dd className="w-full md:w-[45%] block">게시물 제목입니다.</dd>
                <dd className="w-inline md:w-[15%] text-[#8F95B2] md:text-[#474D66]">박동욱</dd>
                <dd className="w-[15%] absolute right-0 bottom-0 text-[#8F95B2] md:text-[#474D66]">
                  <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block md:hidden" />
                  <span>64</span>
                </dd>
                <dd className="w-[15%] ml-[16px] text-[#8F95B2] md:text-[#474D66]">2024.02.24</dd>
              </dl>
            </a>
          </li>
          <li className='py-[12px] border-b border-[#E4E5F0]'>
            <a href="#">
              <dl className="flex relative flex-wrap">
                <dd className="w-[10%] hidden md:block">134</dd>
                <dd className="w-full md:w-[45%] block">게시물 제목입니다.</dd>
                <dd className="w-inline md:w-[15%] text-[#8F95B2] md:text-[#474D66]">박동욱</dd>
                <dd className="w-[15%] absolute right-0 bottom-0 text-[#8F95B2] md:text-[#474D66]">
                  <Image src="/assets/icons/ic_heart.svg" alt="좋아요" width={16} height={16} className="inline-block md:hidden" />
                  <span>64</span>
                </dd>
                <dd className="w-[15%] ml-[16px] text-[#8F95B2] md:text-[#474D66]">2024.02.24</dd>
              </dl>
            </a>
          </li>
        </ul>

        <nav aria-label="Pagination" className="isolate flex -space-x-px rounded-md shadow-xs gap-[11px] justify-center">
            <a href="#" className="relative inline-flex  items-center rounded-l-md px-2 py-2 text-[#8F95B2] hover:bg-gray-50 focus:z-20">
              <Image src="/assets/icons/ic_arrow_left.svg" alt="이전으로" width={18} height={18} className="inline-block" />
              <span className="sr-only">Previous</span>
            </a>

            <a href="#" aria-current="page"
              className="relative z-10 inline-flex items-center text-[#4CBFA4] px-4 py-2 text-sm focus:z-20"
            >
              1
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm text-[#8F95B2] rounded-md hover:bg-gray-50 focus:z-20"
            >
              2
            </a>

            <a href="#" className="relative items-center px-4 py-2 text-sm text-[#8F95B2] rounded-md hover:bg-gray-50 focus:z-20"
            >
              3
            </a>
            <a href="#" className="relative items-center px-4 py-2 text-sm text-[#8F95B2] rounded-md hover:bg-gray-50 focus:z-20"
            >
              4
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm text-[#8F95B2] rounded-md hover:bg-gray-50 focus:z-20"
            >
              5
            </a>
            <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-[#8F95B2] rounded-md hover:bg-gray-50 focus:z-20">
              <Image src="/assets/icons/ic_arrow_right.svg" alt="이전으로" width={18} height={18} className="inline-block" />
              <span className="sr-only">Next</span>
            </a>
        </nav>
      </div>
    </>
  )
}
import Image from 'next/image';
import styles from '@/styles/boards/bestposts.module.css';
import SearchForm from '@/components/SearchForm';

export default function BoardSearchBar() {
  return (
    <>
      <div className="flex justify-between items-center mb-[20px] rounded-md flex-wrap gap-[20px] md:gap-0">
        <div className='relative bg-[#F7F7FA] w-[calc(100%-100px)] md:w-[calc(100%-220px)] lg:w-[calc(100%-260px)] h-[40px] box-border rounded-md '>
          <label htmlFor="search" className="sr-only">
            search
          </label>
          <Image src="/assets/icons/ic_search.svg" alt="검색" width={22} height={22} className="inline-block absolute left-[20px] top-1/2 -translate-y-1/2 " />

          <input
            id="search"
            type="text"
            name="search"
            placeholder="제목을 검색해 주세요"
            className="w-full pl-[47px] md:pl-[58px] pr-[20px] py-[7px] rounded-md text-base placeholder:text-[#8F95B2] leading-[26px] text-[16px] bg-[#F7F7FA]"
          />
        </div>

        <button type="button" className="w-[80px] h-[45px] px-4 py-2 bg-[#4CBFA4] text-white rounded-md leading-[24px] text-[14px] font-semibold">
          검색
        </button>

        <div className="w-full hs-dropdown md:inline-flex md:w-[120px] lg:w-[140px] gap-[20px]">
          <button id="hs-dropdown-scale-animation" type="button" className="w-full hs-dropdown-toggle py-3 px-4 inline-flex justify-between items-center text-sm font-medium rounded-lg bg-[#F7F7FA] text-gray-800 shadow-2xs  focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
            최신순
            <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>

          <div className="hs-dropdown-menu hs-dropdown-open:scale-100 hs-dropdown-open:opacity-100 scale-95 opacity-0 z-10 ease-in-out transition-[transform,opacity] duration-200 min-w-120 bg-white rounded-lg hidden" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-scale-animation">
            <div className="p-1 space-y-0.5">
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" href="#">
              최신순
              </a>
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" href="#">
                좋아요순
              </a>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}
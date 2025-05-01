import { useRouter } from 'next/router';
import { useState, ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import Image from 'next/image';

interface SearchFormProps {
  initialValue?: string;
  placeholder?: string;
  onSearch: (query: string) => void; 
}

export default function SearchForm({
  initialValue = '',
  onSearch,
}: SearchFormProps) {
  const router = useRouter();
  const [value, setValue] = useState<string>(initialValue);


  const triggerSearch = (query: string) => {
    const trimmedQuery = query.trim();
    
  
    if (trimmedQuery) {
      onSearch(trimmedQuery);
      router.push(`/search?q=${trimmedQuery}`);
    } else {
      onSearch('');
      router.push('/'); 
    }
  };

  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      triggerSearch(value); 
    }
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    triggerSearch(value); 
  };

  return (
    <form onSubmit={handleSubmit} className="searchForm flex justify-center my-5">
      <div className="searchBox relative w-[700px]">
        <Image
          src="/assets/images/type=search.png"
          alt="검색 아이콘"
          width={20}
          height={20}
          className="searchIcon absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer z-10"
          onClick={() => triggerSearch(value)} 
        />
        <input
          type="text"
          className="searchInput w-full text-lg text-[#474D66] bg-[#FFFFFF] rounded-[10px] py-4 px-5 pl-14 box-border"
          name="q"
          value={value}
          onChange={handleChange} 
          onKeyDown={handleKeyDown} 
        />
      </div>
    </form>
  );
}

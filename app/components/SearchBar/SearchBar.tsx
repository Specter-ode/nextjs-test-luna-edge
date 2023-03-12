import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SearchIcon from '@/assets/icons/search.svg';

interface IState {
  query: string;
  error: string;
}

const initialState: IState = {
  query: '',
  error: '',
};
const SearchBar: React.FC = () => {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [state, setState] = useState(initialState);
  const { query, error } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, validationMessage } = e.target;
    setState(prevState => ({
      ...prevState,
      query: value,
      error: validationMessage,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() !== '') {
      router.push(`/search?q=${query.trim()}`);
      setState({ ...initialState });
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const isDisabled = query.length < 3 || error.length > 0;
  return (
    <form onSubmit={handleSubmit} className="mb-[40px] sTablet:mx-auto sTablet:w-[400px]">
      <div className="relative w-full">
        <input
          className="input"
          id="searchMovie"
          type="text"
          value={query}
          onChange={handleChange}
          placeholder=" "
          minLength={3}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label className="label" htmlFor="searchMovie">
          Enter movie title
        </label>
        {error && !isFocused && (
          <span className="absolute left-[15px] top-[52px] text-[12px] font-normal text-error-color">
            Need min 3 symbols for search
          </span>
        )}
        <button
          type="submit"
          className={`${
            isDisabled ? 'fill-second-color' : 'fill-accent-color'
          } absolute right-[15px] top-[7.5px] ml-[15px] flex items-center justify-center`}
          disabled={isDisabled}
        >
          <SearchIcon className="h-[32px]  w-[32px]" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;



import React from 'react';



interface SearchProps {

  placeholder: string;

  onSearch: (query: string) => void;

}



const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {

    onSearch(event.target.value);

  };



  return (

    <input

      type="text"

      placeholder={placeholder}

      onChange={handleSearch}

      className="w-full p-2 border border-gray-300 rounded"

    />

  );

};



export default Search;

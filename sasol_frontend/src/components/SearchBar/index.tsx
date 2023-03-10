import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import styles from "./index.module.scss";

interface Props {
  onChange?: (searchValue: string) => void;
}

const SearchBarInput = ({ onChange = () => null }: Props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const debouncedSearchInput = useDebounce<string>(searchInput, 500);

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(() => e.target.value);
  };

  useEffect(() => {
    onChange?.(debouncedSearchInput);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchInput]);

  return (
    <div className={styles.root}>
      <input
        type="text"
        className={styles.searchBarInput}
        onChange={handleChangeSearchInput}
        placeholder="Search for Products..."
      />
    </div>
  );
};

export default SearchBarInput;

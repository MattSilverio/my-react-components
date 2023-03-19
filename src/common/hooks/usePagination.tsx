import React from "react";
import { useEffect, useState } from "react";
import { Pagination as PaginationComponent } from "../components/Pagination";
import { useRecoilValue } from "recoil";
import { languageState } from "../../store/atoms";

export interface IPaginationHook<T> {
  pageItems: T[];
  setAllItems: (v: T[]) => void;
  allItems: T[];
  Pagination: React.FC;
}

const pageSize = 10;

export const usePagination = <T,>(): IPaginationHook<T> => {
  const language = useRecoilValue(languageState);
  const [pageItems, setPageItems] = useState<T[]>([]);
  const [allItems, setAllItems] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(allItems.length / pageSize));

  const goToPage = (v: number) => {
    if (v > 0 && v <= totalPages) {
      setCurrentPage(v);
      setPageItems(allItems.slice((v - 1) * pageSize, (v - 1) * pageSize + pageSize));
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setPageItems(allItems.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize));
    setTotalPages(Math.ceil(allItems.length / pageSize));
  }, [allItems]);

  const Pagination = React.useMemo(() => {
    const PaginationElement: React.FC = ({ children }) => {
      return (
        <PaginationComponent
          currentPage={currentPage}
          totalItems={allItems.length}
          loadPage={goToPage}
          language={language}
        />
      );
    };
    return PaginationElement;
  }, [currentPage, allItems, language, totalPages]);

  return {
    pageItems,
    allItems,
    setAllItems,
    Pagination,
  };
};

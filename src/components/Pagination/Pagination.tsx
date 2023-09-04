import React from 'react';
import './Pagination.scss';
import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';
import cn from 'classnames';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (value: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / perPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const pages = [];

  for (let page = 1; page <= totalPages; page++) {
    pages.push(
      <button
        key={page}
        onClick={() => onPageClick(page)}
        className={cn('pagination__item', {
          selected: page === currentPage,
        })}
      >
        {page}
      </button>,
    );
  }

  const onPageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const onPrevClick = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const onNextClick = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={onPrevClick}
        className={cn('pagination__item-arrow', {
          disabledLeft: isFirstPage,
        })}
        disabled={isFirstPage}
      >
        <img src={arrowLeft} alt="arrowLeft" />
      </button>
      {pages}
      <button
        onClick={onNextClick}
        className={cn('pagination__item-arrow', {
          disabledRight: isLastPage,
        })}
        disabled={isLastPage}
      >
        <img src={arrowRight} alt="arrowRight" />
      </button>
    </div>
  );
};

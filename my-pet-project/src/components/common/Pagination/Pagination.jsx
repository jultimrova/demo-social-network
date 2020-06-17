import React from 'react';
import s from './Pagination.module.css'

const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.paginator}>
            {pages.map(page => {
                return <span className={currentPage === page && s.selectedPage}
                             onClick={() => {
                                 onPageChanged(page)
                             }}>{page}</span>
            })}
        </div>
    )
}

export default Pagination;
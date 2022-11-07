import React from 'react';

interface TotalBasketCardProps {
    allSum: number
}

export const TotalBasketCard = ({ allSum }: TotalBasketCardProps) => {

    return (
        <div className='content-total'>
            <div className='total'>
                <div>ИТОГО</div>
                <div>₽ {allSum}</div>
            </div>
            <div className='registration'>
                <button className='registration-btn'>Перейти к оформлению</button>
            </div>
        </div>
    );
};


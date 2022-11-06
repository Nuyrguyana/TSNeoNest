import React from "react";
import bucket from '../icon/bucket.svg'

interface CardBasketProps {
    id: string,
    img: HTMLImageElement,
    title: string,
    price: string,
    count: number,
    handleIncrement: Function,
    handleDecrement: Function,
    handleDelete: Function,
}

const CardBasket = ({id, img, title, price, count, handleIncrement, handleDecrement, handleDelete}: CardBasketProps) => {
    const eachSum = (): number => {
        return parseInt(price) * count
    }
    return (
        <div className='content'>
            <div className='card-content-header'>
                <div className='card-content-image'>
                    <img className='img-product' src={String(img)}/>
                    <div >
                        <button
                            className='bucket'
                            onClick={() => handleDelete(id)}>
                            <img  src={String(bucket)}/>
                        </button>
                    </div>


                </div>

                <div className='card-content'>
                    <span className='title'>{title}</span>
                    <span className='price' >{price} ₽</span>
                </div>
            </div>

            <div className='card-content'>
                <div>
                    <button className='btn-count' onClick={() => handleDecrement(id)}>-</button>
                    <span>{count}</span>
                    <button className='btn-count' onClick={() => handleIncrement(id)}>+</button>
                </div>
                <span><b>{eachSum()} ₽</b></span>
            </div>

        </div>
    )
}

export default CardBasket
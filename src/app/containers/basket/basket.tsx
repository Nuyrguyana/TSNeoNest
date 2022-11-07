import React from 'react';
import { CardBasket } from "./cardBasket";
import { BasketItem } from "../../../model/model";
import { TotalBasketCard } from "./totalBasketCard";

interface BasketProps {
    basketItemList: BasketItem[],
    handleDelete: Function,
    handleAddingItemInBasket: Function,
    handleRemovingItemFromBasket: Function
}

export const Basket = (
    {
        basketItemList,
        handleDelete,
        handleAddingItemInBasket,
        handleRemovingItemFromBasket
    }: BasketProps) => {

    const allSum = (): number => {
        const sumForEachItemArr = basketItemList.map((item) => {
            const itemPrice = parseInt(item.price);
            return itemPrice * item.count
        })
        return sumForEachItemArr.reduce((a, b) => a + b, 0)
    }

    return (
        <div>
            <ul>
                {basketItemList.map((item) => {
                    return (
                        <li
                            className='card-product-basket'
                            key={item.id}>
                            <CardBasket id={item.id}
                                        img={item.img}
                                        title={item.title}
                                        price={item.price}
                                        count={item.count}
                                        handleDecrement={handleRemovingItemFromBasket}
                                        handleIncrement={handleAddingItemInBasket}
                                        handleDelete={handleDelete}
                            />
                        </li>
                    )
                })}
                <TotalBasketCard allSum={allSum()}/>
            </ul>
        </div>
    );
};


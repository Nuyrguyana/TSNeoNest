import React from 'react';
import { CardProduct } from "./cardProduct";
import star from '../icon/star.svg'
import { HeadPhone, WirelessHeadPhone } from "../model/model";


interface ShowCaseProps {
    headphones: HeadPhone[],
    wirelessHeadphones: WirelessHeadPhone[],
    addItemInBasket: Function
}

export const ShowCase = (
    {
        headphones,
        wirelessHeadphones,
        addItemInBasket
    }: ShowCaseProps) => {
    return (
        <div className='container'>
            <div className='ul-showcase'>
                <ul>
                    <p className='subtitle'>Наушники</p>
                    {headphones.map((item) => {
                        return (<li
                                className='card-product'
                                key={item.id.toString()}
                            >
                                <CardProduct id={item.id}
                                             img={item.img}
                                             title={item.title}
                                             price={item.price}
                                             rate={item.rate}
                                             handleAddItem={addItemInBasket}
                                             star={star}

                                />
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    <p className='subtitle'>Беспроводные наушники</p>
                    {wirelessHeadphones.map((item) => {
                        return (<li
                                className='card-product'
                                key={item.id.toString()}
                            >
                                <CardProduct id={item.id}
                                             img={item.img}
                                             title={item.title}
                                             price={item.price}
                                             rate={item.rate}
                                             handleAddItem={addItemInBasket}
                                             star={star}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};


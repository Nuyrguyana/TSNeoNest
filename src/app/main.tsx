import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./header";
import { ShowCase } from "./showCase";
import { Footer } from "./footer";
import fetchAllHeadphones from '../api/headphones.api'
import fetchAllWirelessHeadphones from '../api/wirelessHeadphones.api'
import { BasketItem, HeadPhone, WirelessHeadPhone } from "../model/model";
import { Basket } from "./basket";

export const Main = () => {
    const [basketItemList, setBasketItemList] = useState<BasketItem[]>([])
    const [headphones, setHeadphones] = useState<HeadPhone[]>([])
    const [wirelessHeadphones, setWirelessHeadphones] = useState<WirelessHeadPhone[]>([])

    useEffect(() => {
        fetchAllHeadphones()
            .then((data) => {
                    setHeadphones(data)
                }
            )
    }, [])

    useEffect(() => {
        fetchAllWirelessHeadphones()
            .then((data) => {
                    setWirelessHeadphones(data)
                }
            )
    }, [])

    const addNewElemInBasketList = (id: string) => {
        const itemIndex = headphones.findIndex((item) => item.id === id);
        const basketItem = {
            ...headphones[itemIndex],
            count: 1
        }
        setBasketItemList(prevState => [...prevState, basketItem])
    }

    const updateBasketList = (index: number, isDelete: boolean) => {
        const items = [...basketItemList]
        const item = items[index]
        isDelete ? item.count-- : item.count++
        items[index] = item
        setBasketItemList(items)
    }

    const handleAddingItemInBasket = (id: string) => {
        if (basketItemList.length === 0) {
            addNewElemInBasketList(id)
        } else {
            const itemIndex = basketItemList.findIndex(item => item.id === id)
            if (itemIndex !== -1) {
                updateBasketList(itemIndex, false)
            } else {
                addNewElemInBasketList(id)
            }
        }
    }

    const removeElemFromBasketList = (elemIdForDelete: string) => {
        setBasketItemList(prevState => prevState.filter(el => el.id !== elemIdForDelete))
    }

    const handleRemovingItemFromBasket = (id: string) => {
        const itemIndex = basketItemList.findIndex((item) => item.id === id);
        const basketElemForDelete = basketItemList[itemIndex];
        if (basketElemForDelete.count === 1) {
            removeElemFromBasketList(basketElemForDelete.id)
        } else {
            updateBasketList(itemIndex, true)
        }

    }

    const sumOfItemsInBasket = () => {
        const arrayOfCount = basketItemList.map((item) => item.count);
        return arrayOfCount.reduce((a, b) => a + b, 0)
    }

    return (
        <BrowserRouter>
            <div className='page'>
                <Header itemCount={sumOfItemsInBasket()}/>
                <Routes>
                    <Route path='/basket'>
                        <Basket
                            basketItemList={basketItemList}
                            handleAddingItemInBasket={handleAddingItemInBasket}
                            handleRemovingItemFromBasket={handleRemovingItemFromBasket}
                            handleDelete={removeElemFromBasketList}
                        />
                    </Route>
                    <Route path='/'>
                        <ShowCase headphones={headphones}
                                  wirelessHeadphones={wirelessHeadphones}
                                  addItemInBasket={handleAddingItemInBasket}/>
                    </Route>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};


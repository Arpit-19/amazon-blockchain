import React, { useState, useContext, useEffect } from 'react'
import Card from './Card'
import { AmazonContext } from '../context/AmazonContext'

const Cards = () => {
    // const item = {
    //     id: 0,
    //     attributes: {
    //         name: "Doge",
    //         price: 2,
    //         src: "https://media3.giphy.com/media/FlcekXZFek8XHrRU46/giphy.gif?cid=ecf05e47y86zf0a44okj0fksvb83wc3n7x1xpkvtva6nbqg4&rid=giphy.gif&ct=g"
    //     }
    // }

    const { assets } = useContext(AmazonContext)

    const styles = {
        container: `h-full w-full flex flex-col ml-[50px] mt-[40px]`,
        title: `text-2xl font-bold mb-[20px] mt-[30px]  ml-[20px]`,
        cards: `flex items-center flex-wrap gap-[120px]`,
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>New Release</div>
            <div className={styles.cards}>
                {assets.map(item => {
                    let asset = item.attributes
                    return <Card key={item.id} item={item.attributes} />
                })}
            </div>
        </div>
    )
}

export default Cards
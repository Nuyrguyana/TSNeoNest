import byz from '../image/s852I.png'
import ep from '../image/earPods.png'
import ep2 from '../image/earPods2.png'
import { HeadPhone } from "../model/model";

const headphones: HeadPhone[] = [
    {
        id: "1",
        img: require('../image/s852I.png'),
        title: "Apple BYZ S852I",
        price: "2927",
        rate: "4.7"
    },
    {
        id: "2",
        img: ep,
        title: "Apple EarPods",
        price: "2327",
        rate: "4.5"
    },
    {
        id: "3",
        img: ep2,
        title: "Apple EarPods 2",
        price: "2327",
        rate: "4.5",
    },
    {
        id: "4",
        img: byz,
        title: "Apple BYZ S852I",
        price: "2927",
        rate: "4.7"
    },
    {
        id: "5",
        img: ep,
        title: "Apple EarPods",
        price: "2327",
        rate: "4.5"
    },
    {
        id: "6",
        img: ep2,
        title: "Apple EarPods 2",
        price: "2327",
        rate: "4.5"
    }
]

if (!localStorage.getItem('headphones')) {
    localStorage.setItem('headphones', JSON.stringify(headphones));
}

const fetchAll = (): Promise<HeadPhone[]> =>
    new Promise((resolve) => {
        resolve(headphones)
        window.setTimeout(function() {
            const item = localStorage.getItem('headphones')
            if (item) {
                return resolve(JSON.parse(item))
            }
            return resolve([])
        }, 500)
    });

export default fetchAll
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
        img: require('../image/earPods.png'),
        title: "Apple EarPods",
        price: "2327",
        rate: "4.5"
    },
    {
        id: "3",
        img: require('../image/earPods2.png'),
        title: "Apple EarPods 2",
        price: "2327",
        rate: "4.5",
    },
    {
        id: "4",
        img: require('../image/s852I.png'),
        title: "Apple BYZ S852I",
        price: "2927",
        rate: "4.7"
    },
    {
        id: "5",
        img: require('../image/earPods.png'),
        title: "Apple EarPods",
        price: "2327",
        rate: "4.5"
    },
    {
        id: "6",
        img: require('../image/earPods2.png'),
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
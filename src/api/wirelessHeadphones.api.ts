import { WirelessHeadPhone } from "../model/model";

const wirelessHeadphones: WirelessHeadPhone[] = [
    {
        id: "7",
        img: require("../image/airPods.png"),
        title: "Apple AirPods",
        price: "9527",
        rate: "4.7"
    },
    {
        id: "1",
        img: require('../image/gerlax.png'),
        title: "Apple BYZ S852I",
        price: "2927",
        rate: "4.7"
    },
    {
        id: "9",
        img: require('../image/borofone.png'),
        title: "Borofone BO4",
        price: "7527",
        rate: "4.7"
    }
]

if (!localStorage.getItem('wirelessHeadphones')) {
    localStorage.setItem('wirelessHeadphones', JSON.stringify(wirelessHeadphones));
}

const fetchAll = (): Promise<WirelessHeadPhone[]> =>
    new Promise((resolve) => {
        resolve(wirelessHeadphones)
        window.setTimeout(() => {
            const item = localStorage.getItem('wirelessHeadphones');
            if (item) {
                return resolve(JSON.parse(item));
            }
            return resolve([]);
        }, 500);
    });

export default fetchAll
import data from '../data.json';

let images: { name: string; title: string; about: string; image: string; id: number; }[] = [];

let a = data.map(a => a);
for(let i = 0; i < 6; i++) {
    images.push({name: a[i].name, title: a[i].title, about: a[i].about, image: a[i].image, id: a[i].id})
}

export default images;
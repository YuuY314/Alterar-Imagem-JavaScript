let images = [
    "https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg",
    "https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/3-cute-cat-sampad-art.jpg",
    "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2021/12/06/af_catvids_061221.jpg?VersionId=2JY9KmxK73nQlLlp5C5y.DCsG3PLE411",
    "https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750",
    "https://hips.hearstapps.com/hmg-prod/images/cat-instagram-captions-64ff2dfa47e9a.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
    "https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg",
    "https://www.rover.com/blog/wp-content/uploads/2019/12/adorable-fluffy-cat.jpg",
    "https://cdn-images.vetstreet.com/e3/f2/82a701ab45ea8600638db8842116/norwegian-forest-cat-kittens-ap-cvhlz0-590.jpg",
    "https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750",
    "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBjYXR8ZW58MHx8MHx8fDA%3D",
    "https://image-prod.iol.co.za/16x9/800/Pop-stars-Taylor-Swift-and-Ed-Sheeran-own-flat-faced-Scottish-fold-cats-and-regularly-talk-about-them-on-social-media-Picture-Pixabay?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/ce637177-8cba-50ec-921e-177f51207bd9&operation=CROP&offset=0x91&resize=960x539",
    "https://i.natgeofe.com/k/f7697073-5b8a-493e-8b0a-05490ed69652/MOmeow5.png?w=1084.125&h=609",
    "https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1",
    "https://thumbor.bigedition.com/funniest-cats-internet/IFuBq6cGzboq-79yUziXTZkYtw0=/0x13:800x614/480x360/filters:format(webp):quality(80)/granite-web-prod/cc/fa/ccfa37b8659442e9a994fe07d0534ac8.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HliSA2Qo49W7B04KOJe_NA1HMBLUGuX8VA&usqp=CAU"
];

let i = 0;

const imageContainer = document.querySelector("#img");
const switchBtn = document.querySelector("#btn");

switchBtn.addEventListener("click", () => {
    i++;
    imageContainer.src = images[i];
    if(i >= images.length){
        i = 0;
        imageContainer.src = images[i];
    }
    console.log(i);
})
import { ServiseModel } from '../../models/Service.js';
import dotenv from 'dotenv'
import { ApiResponse } from '../../utility/ApiResponse.js';
dotenv.config();

const ServiseSlide = async (req, res) => {

    // const data = await ServiseModel.create({

    //     MianProductInServise: [
    //         {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/about.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaJzR5fXcVEZPO65js_YBEimrrb1KrKL4Bw&s",
    //                 },
    //                 {

    //                     SubImg: "https://sukanyaevents.com/files/resized/674123/500;540;24efd3c070e166cc6c92dedd2dd9cd0455a64b46.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAiUqyOvKF9gtfrq6W1EzEqXLAi3KhW88JQ&s",
    //                 },
    //                 {

    //                     SubImg: "https://sukanyaevents.com/files/resized/674123/500;540;24efd3c070e166cc6c92dedd2dd9cd0455a64b46.jpg",
    //                 },
    // {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaJzR5fXcVEZPO65js_YBEimrrb1KrKL4Bw&s",
    //                 },
    //             ],
    //             Title: "WEDDINGS",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Every bride dreams of having the perfect wedding, but planning that can be quite a task. Throw in all of the cultural nuances associated with ethnic weddings and the task can become overwhelming. We work directly with you and your families to handle all of aspects of your wedding. The result is an extraordinary event that is just as you envisioned.'
    //         },
    //         {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/2.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-decorations-cultural-program-wedding-260nw-1450052012.jpg",
    //                 },
    //                 {

    //                     SubImg: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481485.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/interior-wedding-tent-decoration-ready-260nw-239378692.jpg",
    //                 }
    //             ],
    //             Title: "DESTINATION WEDDINGS",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Thailand, Bali, Dubai, Udaipur, Malaysiaare just a few of the locations around the world where we have planned Destination Weddings and Events. We work directly with you to discover the perfect location and to ensure that all the details are in place for your big day. Our offices are located in the Thailand &Portland but our planning takes us all over the world.'
    //         }
    //         ,
    //         {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/homepage-image.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://www.eternalweddingz.in/storage/venue_images/OltTeSq7bCVBrvANI3ZWpnDRRwTzZYhPhm4m6l8Z.webp",
    //                 },
    //                 {

    //                     SubImg: "https://cdn0.weddingwire.in/vendor/8478/3_2/1280/jpg/20431568-253982295094083-881946816706663417-n_15_118478.jpeg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://cdn0.weddingwire.in/vendor/9462/3_2/960/jpg/kohinoor-atc2.jpeg",
    //                 }
    //             ],
    //             Title: "CORPORATE EVENTS",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'We are at your service to execute your Corporate event, from simple luncheons to large black-tie galas. We bring sharpness and flair to any corporate event to wow your clients and colleagues with an unforgettable event.'
    //         }
    //         ,
    //         {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Beach-wedding-decor-Homepage-IMAGE-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://media.weddingz.in/images/53b1f2b1f911cff6b76ef12da762e592/Top-5-Open-Air-Wedding-Halls-in-Goa-to-Host-the-Best-Day-of-Your-Life-2.jpg",
    //                 },
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5kNXRK7zmwrqY3ZGD8rn0bi63boMFY9eNA&s",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9PlkcDfZn6u9Gv-fyW7i54KUNVW883Dc2w&s",
    //                 }
    //             ],
    //             Title: "SOCIAL EVENTS",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'We are a full-service event planning company for any occasion – a Lavish Baby Shower, Birthday Party, Anniversary Party, or Sweet 16. Let us take care of the planning so that you and your guests can relax and enjoy your event stress-free. From location selection to invitation design to the perfect signature drink, we welcome the opportunity to assist you.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }
    //         , {
    //             MianImg: "https://eventcracker.com/wp-content/uploads/2020/06/Evening-Color-Chandelier-Mandap-1536x1152.jpg",
    //             OtherImg: [
    //                 {

    //                     SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2InyJvFl_2o-Hg3cSL12KUeQY4_a99V7PwotM0tBbd5OKImMWP0ky0n4W5sU7P2Ad2OU&usqp=CAU",
    //                 },
    //                 {

    //                     SubImg: "https://www.shutterstock.com/image-photo/beautiful-wedding-stage-decorated-flowers-260nw-2497302173.jpg",
    //                 }
    //                 ,
    //                 {

    //                     SubImg: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2841%29.jpg",
    //                 }
    //             ],
    //             Title: "Free Initial Consultation",
    //             MainPrice: 1204,
    //             SubPrice: 2408,
    //             Contern: 'Half-hour meeting with our consultant to discuss the overall vision and specific needs for your wedding. You have the opportunity to discuss any pre-selected vendors you want to use, your budget, the number of people you expect to attend and any cultural or traditional influences you want to incorporate.'
    //         }]
    // })
    const dataPass = await ServiseModel.find({
    })

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    dataPass
                },
                "Successfully"
            )
        )
}

export { ServiseSlide }
import { ApiResponse } from "../../utility/ApiResponse.js"
import { PricingSchema } from "../../models/pricing.js";
const basic = [
    [
        {
            key: "Complimentary Consultation Call:",
            data: "Discussing the wedding details and understanding your preferences."
        },
        {
            key: "One-Hour Wedding Rehearsal::",
            data: "Conducting a thorough rehearsal to ensure everyone is familiar with their roles"
        },
        {
            key: "Two On-Site Wedding Coordinators:",
            data: "Having a team of coordinators present on-site for efficient coordination."
        },
        {
            key: "Personalized Dashboard:",
            data: "Discussing the wedding details and understanding your preferences."
        },
        {
            key: "Initial Onboarding Call:",
            data: "Guiding you through the initial steps and getting acquainted with your vision."
        },
        {
            key: "One-Month Check-In:",
            data: "Ensuring everything is on track and addressing any concerns before the big day."
        },
        {
            key: "Vendor Point of Contact:",
            data: "Welcoming and directing guests to create a warm atmosphere."
        },
        {
            key: "Officiant Coordination:",
            data: "Coordinating with the officiant, including sound checks."
        },
        {
            key: "DJ Coordination:",
            data: "Working with the DJ on processional, recessional, and grand entrances."
        }
        ,
        {
            key: "Caterer Coordination:",
            data: "Ensuring the caterer serves a special plate for the bride and groom."
        },
        {
            key: "Flow Management:",
            data: "Maintaining the overall flow of the day to keep everything on schedule."
        },
        {
            key: "Vendor Coordination:",
            data: "Coordinating with all vendors to ensure seamless collaboration."
        },
        {
            key: "Take Down Management:",
            data: "Managing the take-down process and following the venue checklist."
        },
        {
            key: "Setup Assistance:",
            data: "Assisting with setting up the welcome table and placing any needed signages.."
        },
        {
            key: "Guest Issue Troubleshooting:",
            data: "Addressing and resolving any issues that may arise during the event."
        },
        {
            key: "Extensive Experience and Attention to Detail:",
            data: "Drawing on experience and attention to detail to ensure a stress-free day.."
        }
    ],
    [
        {
            key: "Complimentary Consultation:",
            data: "In-depth discussion about your wedding vision and preferences."
        },
        {
            key: "Onboarding Call:",
            data: "Initial call to understand your needs and preferences."
        },

        {
            key: "Floor Plan Design:",
            data: "Crafting a customized floor plan for your wedding venue."
        },
        {
            key: "On-Site Coordinators:",
            data: "Presence of two on-site wedding coordinators for hands-on assistance."
        },
        {
            key: "Vendor Coordination:",
            data: "Serving as the point of contact for all vendors Liaising with caterers to ensure a plate is reserved for the bride and groom.Coordinating with the DJ for procession, recessional, and grand entrances. Coordinating with officiant, including a sound check."
        },
        {
            key: "Guest and Family Coordination:",
            data: "Welcoming guests and acting as the point of contact for family members."
        },
        {
            key: "Venue Walkthrough::",
            data: "One walkthrough visit before the wedding to discuss layout and flow."
        }
        ,
        {
            key: "Assistance with Setup and Take Down:",
            data: "Setting up the welcome table, signage, gift table, memorial table, and dessert table. Managing the take-down process efficiently."
        },
        {
            key: "Flow Management:",
            data: "Maintaining the overall flow of the day to keep everything on schedule."
        },
        {
            key: "Emergency Planning:",
            data: "Discussing contingency plans for unforeseen circumstances like rain, wildfire, or storms."
        },
        {
            key: "Vendor Management:",
            data: "Creating a preferred vendor list based on your chosen location and style. Booking vendors and sending them personalized timelines.  Reviewing vendor contracts and uploading them to your wedding folder.."
        },
        {
            key: "Setup Assistance:",
            data: "Assisting with setting up the welcome table and placing any needed signages.."
        },
        {
            key: "Bride Assistance:",
            data: "Assisting with the timing of the bride’s processional and fluffing the dress.."
        },
        {
            key: "Post-Event Responsibilities:",
            data: " Boxing leftover food and inventorying items to ensure nothing is left behind. Being the last person to leave the venue."
        }
    ],
    [
        {
            key: "Complimentary Consultation:",
            data: "In-depth discussion about your wedding vision and preferences."
        },
        {
            key: "Onboarding Call:",
            data: "Initial call to understand your needs and preferences."
        },
        {
            key: "One-Month Check-In:",
            data: "Ensuring all preparations are on track for the special day."
        },
        {
            key: "Detailed Timeline Creation:",
            data: "From setup to takedown, ensuring a seamless flow of events"
        },
        {
            key: "Floor Plan Design:",
            data: "Crafting a customized floor plan for your wedding venue."
        },
        {
            key: "Guest and Family Coordination:",
            data: "Welcoming guests and acting as the point of contact for family members."
        },
        {
            key: "On-Site Coordinators:",
            data: "Presence of two on-site wedding coordinators for hands-on assistance."
        },
        {
            key: "Vendor Coordination:",
            data: "Serving as the point of contact for all vendors Liaising with caterers to ensure a plate is reserved for the bride and groom.Coordinating with the DJ for procession, recessional, and grand entrances. Coordinating with officiant, including a sound check."
        },
        {
            key: "Guest and Family Coordination:",
            data: "Welcoming guests and acting as the point of contact for family members."
        },

        {
            key: "Venue Walkthrough::",
            data: "One walkthrough visit before the wedding to discuss layout and flow."
        }
        ,
        {
            key: "Assistance with Setup and Take Down:",
            data: "Setting up the welcome table, signage, gift table, memorial table, and dessert table. Managing the take-down process efficiently."
        },


        {
            key: "Post-Event Responsibilities:",
            data: " Boxing leftover food and inventorying items to ensure nothing is left behind. Being the last person to leave the venue."
        },
        {
            key: "Flow Management:",
            data: "Maintaining the overall flow of the day to keep everything on schedule."
        },

        {
            key: "Bride Assistance:",
            data: "Assisting with the timing of the bride’s processional and fluffing the dress.."
        },
        {
            key: "Setup Assistance:",
            data: "Assisting with setting up the welcome table and placing any needed signages.."
        },

        {
            key: "Post-Event Responsibilities:",
            data: " Boxing leftover food and inventorying items to ensure nothing is left behind. Being the last person to leave the venue."
        }

    ],
    [
        {
            id: 1,
            img1: "https://eventcracker.com/wp-content/uploads/2023/03/Reception-2269.jpg",
            img2: "https://eventcracker.com/wp-content/uploads/2023/03/Our-wedding-384-1536x1024.jpg"
        },
        {
            id: 2,
            img1: "https://eventcracker.com/wp-content/uploads/2023/03/Ceremony-1419.jpg",
            img2: "https://eventcracker.com/wp-content/uploads/2022/02/IJSneakPeeksFallWeddingOliviaPeabodyPhotoPortlandOregon-2-1536x1024.jpg"
        },

        {
            id: 3,
            img1: "https://eventcracker.com/wp-content/uploads/2022/02/KatrinaChris_8.22.21-141-1536x1030.jpg",
            img2: "https://eventcracker.com/wp-content/uploads/2023/03/264A2449-1536x1024.jpg"
        },

    ],
    [
        {
            id: 1,
            img1: "https://eventcracker.com/wp-content/uploads/2023/03/Reception-2269.jpg",
        },
        {
            id: 2,
            img1: "https://eventcracker.com/wp-content/uploads/2023/03/Ceremony-1419.jpg",
        }
        ,
        {
            id: 3,
            img1: "https://eventcracker.com/wp-content/uploads/2022/02/KatrinaChris_8.22.21-141-1536x1030.jpg",
        }
    ]
]

const pricing = async (req, res) => {


    
     const dataPass ={
            PricingFirstSlide: [
                {
                    key: "Complimentary Consultation Call:",
                    datas: "Discussing the wedding details and understanding your preferences."
                },
                {
                    key: "One-Hour Wedding Rehearsal::",
                    datas: "Conducting a thorough rehearsal to ensure everyone is familiar with their roles"
                },
                {
                    key: "Two On-Site Wedding Coordinators:",
                    datas: "Having a team of coordinators present on-site for efficient coordination."
                },
                {
                    key: "Personalized Dashboard:",
                    datas: "Discussing the wedding details and understanding your preferences."
                },
                {
                    key: "Initial Onboarding Call:",
                    datas: "Guiding you through the initial steps and getting acquainted with your vision."
                },
                {
                    key: "One-Month Check-In:",
                    datas: "Ensuring everything is on track and addressing any concerns before the big day."
                },
                {
                    key: "Vendor Point of Contact:",
                    datas: "Welcoming and directing guests to create a warm atmosphere."
                },
                {
                    key: "Officiant Coordination:",
                    datas: "Coordinating with the officiant, including sound checks."
                },
                {
                    key: "DJ Coordination:",
                    datas: "Working with the DJ on processional, recessional, and grand entrances."
                }
                ,
                {
                    key: "Caterer Coordination:",
                    datas: "Ensuring the caterer serves a special plate for the bride and groom."
                },
                {
                    key: "Flow Management:",
                    datas: "Maintaining the overall flow of the day to keep everything on schedule."
                },
                {
                    key: "Vendor Coordination:",
                    datas: "Coordinating with all vendors to ensure seamless collaboration."
                },
                {
                    key: "Take Down Management:",
                    datas: "Managing the take-down process and following the venue checklist."
                },
                {
                    key: "Setup Assistance:",
                    datas: "Assisting with setting up the welcome table and placing any needed signages.."
                },
                {
                    key: "Guest Issue Troubleshooting:",
                    datas: "Addressing and resolving any issues that may arise during the event."
                },
                {
                    key: "Extensive Experience and Attention to Detail:",
                    datas: "Drawing on experience and attention to detail to ensure a stress-free day.."
                }
            ],
            PricingSecondSlide: [
                {
                    key: "Complimentary Consultation Call:",
                    datas: "Discussing the wedding details and understanding your preferences."
                },
                {
                    key: "One-Hour Wedding Rehearsal::",
                    datas: "Conducting a thorough rehearsal to ensure everyone is familiar with their roles"
                },
                {
                    key: "Two On-Site Wedding Coordinators:",
                    datas: "Having a team of coordinators present on-site for efficient coordination."
                },
                {
                    key: "Personalized Dashboard:",
                    datas: "Discussing the wedding details and understanding your preferences."
                },
                {
                    key: "Initial Onboarding Call:",
                    datas: "Guiding you through the initial steps and getting acquainted with your vision."
                },
                {
                    key: "One-Month Check-In:",
                    datas: "Ensuring everything is on track and addressing any concerns before the big day."
                },
                {
                    key: "Vendor Point of Contact:",
                    datas: "Welcoming and directing guests to create a warm atmosphere."
                },
                {
                    key: "Officiant Coordination:",
                    datas: "Coordinating with the officiant, including sound checks."
                },
                {
                    key: "DJ Coordination:",
                    datas: "Working with the DJ on processional, recessional, and grand entrances."
                }
                ,
                {
                    key: "Caterer Coordination:",
                    datas: "Ensuring the caterer serves a special plate for the bride and groom."
                },
                {
                    key: "Flow Management:",
                    datas: "Maintaining the overall flow of the day to keep everything on schedule."
                },
                {
                    key: "Vendor Coordination:",
                    datas: "Coordinating with all vendors to ensure seamless collaboration."
                },
                {
                    key: "Take Down Management:",
                    datas: "Managing the take-down process and following the venue checklist."
                },
                {
                    key: "Setup Assistance:",
                    datas: "Assisting with setting up the welcome table and placing any needed signages.."
                },
                {
                    key: "Guest Issue Troubleshooting:",
                    datas: "Addressing and resolving any issues that may arise during the event."
                },
                {
                    key: "Extensive Experience and Attention to Detail:",
                    datas: "Drawing on experience and attention to detail to ensure a stress-free day.."
                }
            ],
            PricingThirdSlide: [
                {
                    key: "Complimentary Consultation Call:",
                    datas: "Discussing the wedding details and understanding your preferences."
                },
                {
                    key: "One-Hour Wedding Rehearsal::",
                    datas: "Conducting a thorough rehearsal to ensure everyone is familiar with their roles"
                },
                {
                    key: "Two On-Site Wedding Coordinators:",
                    datas: "Having a team of coordinators present on-site for efficient coordination."
                },
                {
                    key: "Personalized Dashboard:",
                    datas: "Discussing the wedding details and understanding your preferences."
                },
                {
                    key: "Initial Onboarding Call:",
                    datas: "Guiding you through the initial steps and getting acquainted with your vision."
                },
                {
                    key: "One-Month Check-In:",
                    datas: "Ensuring everything is on track and addressing any concerns before the big day."
                },
                {
                    key: "Vendor Point of Contact:",
                    datas: "Welcoming and directing guests to create a warm atmosphere."
                },
                {
                    key: "Officiant Coordination:",
                    datas: "Coordinating with the officiant, including sound checks."
                },
                {
                    key: "DJ Coordination:",
                    datas: "Working with the DJ on processional, recessional, and grand entrances."
                }
                ,
                {
                    key: "Caterer Coordination:",
                    datas: "Ensuring the caterer serves a special plate for the bride and groom."
                },
                {
                    key: "Flow Management:",
                    datas: "Maintaining the overall flow of the day to keep everything on schedule."
                },
                {
                    key: "Vendor Coordination:",
                    datas: "Coordinating with all vendors to ensure seamless collaboration."
                },
                {
                    key: "Take Down Management:",
                    datas: "Managing the take-down process and following the venue checklist."
                },
                {
                    key: "Setup Assistance:",
                    datas: "Assisting with setting up the welcome table and placing any needed signages.."
                },
                {
                    key: "Guest Issue Troubleshooting:",
                    datas: "Addressing and resolving any issues that may arise during the event."
                },
                {
                    key: "Extensive Experience and Attention to Detail:",
                    datas: "Drawing on experience and attention to detail to ensure a stress-free day.."
                }
            ],
            TwoImgSlide: [
                {
    
                    SubImg: "https://media.weddingz.in/images/53b1f2b1f911cff6b76ef12da762e592/Top-5-Open-Air-Wedding-Halls-in-Goa-to-Host-the-Best-Day-of-Your-Life-2.jpg",
    
                    SubImg: "https://media.weddingz.in/images/53b1f2b1f911cff6b76ef12da762e592/Top-5-Open-Air-Wedding-Halls-in-Goa-to-Host-the-Best-Day-of-Your-Life-2.jpg",
                },
                {
                    SubImg: "https://media.weddingz.in/images/53b1f2b1f911cff6b76ef12da762e592/Top-5-Open-Air-Wedding-Halls-in-Goa-to-Host-the-Best-Day-of-Your-Life-2.jpg",
    
                    SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5kNXRK7zmwrqY3ZGD8rn0bi63boMFY9eNA&s",
                }
                ,
                {
                    SubImg: "https://media.weddingz.in/images/53b1f2b1f911cff6b76ef12da762e592/Top-5-Open-Air-Wedding-Halls-in-Goa-to-Host-the-Best-Day-of-Your-Life-2.jpg",
    
                    SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9PlkcDfZn6u9Gv-fyW7i54KUNVW883Dc2w&s",
                }
            ],
            OneImgSlide: [
                {
    
                    SubImg: "https://media.weddingz.in/images/53b1f2b1f911cff6b76ef12da762e592/Top-5-Open-Air-Wedding-Halls-in-Goa-to-Host-the-Best-Day-of-Your-Life-2.jpg",
    
                    SubImg: "https://media.weddingz.in/images/53b1f2b1f911cff6b76ef12da762e592/Top-5-Open-Air-Wedding-Halls-in-Goa-to-Host-the-Best-Day-of-Your-Life-2.jpg",
                },
                {
                    SubImg: "https://media.weddingz.in/images/53b1f2b1f911cff6b76ef12da762e592/Top-5-Open-Air-Wedding-Halls-in-Goa-to-Host-the-Best-Day-of-Your-Life-2.jpg",
    
                    SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5kNXRK7zmwrqY3ZGD8rn0bi63boMFY9eNA&s",
                }
                ,
                {
                    SubImg: "https://media.weddingz.in/images/53b1f2b1f911cff6b76ef12da762e592/Top-5-Open-Air-Wedding-Halls-in-Goa-to-Host-the-Best-Day-of-Your-Life-2.jpg",
    
                    SubImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9PlkcDfZn6u9Gv-fyW7i54KUNVW883Dc2w&s",
                }
            ]
    
        }


    return res
        .json(
            new ApiResponse(
                200,
                {
                    dataPass
                },
                "Successfully fetch Data"
            )
        )
}

export default pricing
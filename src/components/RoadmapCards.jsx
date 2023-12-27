const RoadmapCards = () => {
    const CardsItems = [
        {
            BackGround: "bg-gradient-to-r from-[#EFB93B] to-[#EFB93B]",
            Number: "01",
            heading: "Organizational concept (creations)",
            paddingLeft: "pl-0"
        },
        {
            BackGround: "bg-gradient-to-r from-[#E0480A] to-[#E0480A]",
            Number: "02",
            heading: "Directional Process (Actions)",
            paddingLeft: "2xl:pl-[10px]"
        },
        {
            BackGround: "bg-[#E0480A]",
            Number: "03",
            heading: "Operational Development (technical team)",
            paddingLeft: "2xl:pl-[10px]"
        },
        {
            BackGround: "bg-[#364EC6]",
            Number: "04",
            heading: "Strategic Opportunities (alliances)",
            paddingLeft: "2xl:pl-4"
        },
        {
            BackGround: "bg-gradient-to-r from-[#6A3DAD] to-[#6A3DAD]",
            Number: "05",
            heading: "Stakeholders (benefits)",
            paddingLeft: "2xl:pl-4"
        },
        {
            BackGround: "bg-gradient-to-r from-[#ED5C83] to-[#ED5C83]",
            Number: "06",
            heading: "Human Identity (social contribution)",
            paddingLeft: "2xl:pl-4"
        },
    ]

    const Roadmapcomponents = CardsItems.map((listing) =>
        <div className={`${listing.BackGround} rounded-xl px-3 py-2`}>
            <p className=' font-Montserrat text-white font-bold text-xl sm:text-2xl md:text-3xl opacity-50'>{listing.Number}</p>
            <h2 className={`${listing.paddingLeft} font-Montserrat text-white font-bold text-base xl:text-lg 2xl:text-base  sm:text-lg lg:text-xl mt-5 mb-[15px]`}>{listing.heading}</h2>
        </div>
    )
    return (        
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 2xl:gap-8 my-14">{Roadmapcomponents}</div>       
    )
}

export default RoadmapCards
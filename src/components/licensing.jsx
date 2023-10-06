import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import './CSS/updates.css';

const data = [
    {
        id: 1,
        title: 'Product optimization and scale up',
        CRTDH: 'IITGN',
        content: 'Sewage water treatment by aluminium hydroxide chloride (AHC) as coagulant: We are also helping industry members to test the performance of AHC product for sewage water treatment. The aluminium hydroxide chloride (AHC) produced from the member industry has been tested in Lab and also pilot scale in 200 L and 400 L to check the efficiency of the product for decreasing the TSS in the STP water. We have tested the two products in various effluents from STPs (Bhavnagar, IITGN, Ahmedabad and Nadiad). Upon successful runs in the pilot scale plant, we tried in Nadiad 0.38 MLD batch and the product is found to reduce the TSS, TOC, COD and increase the DO of STP water.',
        img: require('./Assests/Images/technologies/1.png'),
        link: ''
    },
    {
        id: 2,
        title: 'COD reduction using bio-coagulation followed by adsorption',
        CRTDH: 'IITGN',
        content: 'We use bio-coagulant (1%) solution to treat 1 liter of effluent. Though some interesting results were obtained (>80% COD reduction), the cost is little high. Thus, we did not go for the scale up studies.',
        img: require('./Assests/Images/technologies/2.png'),
        link: ''
    },
    {
        id: 3,
        title: 'Chromium (VI) reduction',
        CRTDH: 'IITGN',
        content: 'Ceramic industry effluent (Effluent code E) contain very high Cr (VI) due to hard chrome plating. The effluent of one of the member industries contain about 9400 ppm Cr (VI) which has been reduced to <27 ppm (>99% reduction) using pH adjustment followed by reduction of Cr (VI) to Cr (III) which gets coagulated and precipitate out leaving behind clear treated water as shown in Fig. 8. The process required about 4 to 5 h. The developed process also reduced about 42% TDS from 28000 ppm to 16000 ppm and 93% reduction in COD from 3000 ppm to below 200 ppm. The experiment has been conducted in 200 ml and treatment cost is found to be 1.2 /- per L.',
        img: require('./Assests/Images/technologies/3.png'),
        link: ''
    },
    {
        id: 4,
        title: 'Washing problem in processes industry with organic products',
        CRTDH: 'IITGN',
        content: 'Industry member is looking process design for continuous washing of the product. The Nitrochlorobenzene (NCB) contains FeCl3, product derivative with the basic pH. The industry member using batch process to process the NCB and it takes about 4 h to complete the process. CRTDH team has performed lab scale investigation (1L scale) and it shows promising results.',
        img: require('./Assests/Images/technologies/4.png'),
        link: ''
    },
    {
        id: 5,
        title: 'Batch to continuous dye manufacturing (2 L to 5 L)',
        CRTDH: 'IITGN',
        content: 'The dye manufacturing is usually in a batch process which is restricting the capacity enhancement. Thus, many of the industry members approached us to convert the batch process to continuous process. We tried first in 2 L and based on the success, we Figure 8: Ceramic industry effluents before and after treatment manufactured one of the dye (three step reactions) using three continuous stirred tank reactors. We are able to achieve a continuous flow rate of 60 ml/h. Following is the schematic and product comparison from batch and continuous. The further scale up is under process.',
        img: require('./Assests/Images/technologies/5.png'),
        link: ''
    },
    {
        id: 6,
        title: 'Li-ion battery anode preparation from water-based CNT dispersion',
        CRTDH: 'IITGN',
        content: 'One of the leading Mono-Chloro Acetic Acid (MCAA) manufacturers in Ahmeabad reached out to CRTDH for an R&D venture related to Li-ion battery anode preparation from water-based CNT dispersion. Increasing the energy density of traditional lithium- ion batteries (LIBs) is necessary for satisfying the demands of electric vehicles and advanced electronics. Carbon nanotubes (CNT) can significantly improve the performance of anodic materials due to its high electronic conductivity and excellent mechanical properties. However, non-uniform mixing and coating of CNT in composite material limits the application of CNT.',
        img: require('./Assests/Images/technologies/6.png'),
        link: ''
    },
    {
        id: 7,
        title: 'Production of organic dye in pilot plant facility',
        CRTDH: 'IITGN',
        content: 'A major dyestuff, food color, fragrances, and herbal extracts manufacturing industry and an exporter located at GIDC Vatva, Ahmedabad, approached CRTDH for new fluorescence-based dye process validation in the pilot plant. The process requires a high-pressure reactor and temperature control system. The member successfully took the runs. After the techno commercial analysis, they will put the production facility at their plant facility.',
        img: require('./Assests/Images/technologies/7.png'),
        link: ''
    },
    {
        id: 8,
        title: 'Enzyme Efficacy on methane formation in Municipal Solid Waste (MSW)',
        CRTDH: 'IITGN',
        content: 'The major work under this consultancy project is a set of lab trails to check methane generation under various controlled anaerobic conditions and compare it against the base case. The results will be comprised of four parts involving (a) only MSW, (b) MSW with the enzyme, (c) MSW with anaerobic seed and (d) MSW with anaerobic and enzyme. The experiments will be conducted in triplicates and water displacement methods will be used to measure the gas production. Biological methane potential will be set as accessibility criteria for determining the process stability for 15 days. Gases like oxygen, hydrogen, methane, carbon dioxide, carbon monoxide, ammonia and hydrogen sulfide will be measured at various intervals. As a part of assessment, parameters like pH, total volatile fatty acids, CHNS analysis, mass, sugars, cellulose, lignin, protein, and fat, both post and pre-digestion, will be analyzed in CRTDH.',
        img: require('./Assests/Images/technologies/8.png'),
        link: ''
    },
    {
        id: 9,
        title: 'Designing of the Vapor Recovery unit',
        CRTDH: 'IITGN',
        content: 'During handling operations of (transferring operation) the petroleum products, about 0.01% loss is due to loss of hydrocarbon (HC) as a Volatile Organic Compound (VOC). A simple calculation for truck filling operation about 300 trucks per day of each 20,000 Liters petroleum products is equivalent to 60,00,000 Liters of petroleum products. 0.01% of this amount is about 600 Liters daily loss as a HC vapor (VOC in the air). This is huge monetary loss and also significant environmental implications. Government has implemented strict rules and regulations to have Vapor Recovery Unit (VRU) at maximum location of petroleum handling units such as tank farms, petrol pump stations /terminals',
        img: require('./Assests/Images/technologies/9.png'),
        link: ''
    },
    {
        id: 10,
        title: 'Activated carbon from waste treatment – after modification of sludge of dye intermediate',
        CRTDH: 'IITGN',
        content: 'One of the dye-intermediates manufacturing units in the Ahmedabad region converted the sludge from wastewater treatment into carbon. They wanted to evaluate the use of carbon materials in valuable products. The industry team collaborated with CRTDH to continue the research and development. The CRTDH team deployed various techniques to activate the carbon materials for valuable use as CO2 adsorbent and anode materials for Li-ion batteries. While its use as batery materials is under performance test, the use of the surface engineered carbon for CO2 adsorbent shows some good results (CO2 adsorption 3.2 mmol/gm at 700C). Several techniques, like amine functionalization, did the activation, including acid and base treatment.',
        img: require('./Assests/Images/technologies/10.png'),
        link: ''
    },
    {
        id: 11,
        title: 'Solutions for CETP effluents',
        CRTDH: 'IITGN',
        content: 'CRTDH worked with CETP to reduce their COD from 800 mg/L to below 250 mg/L. The developed Advanced oxidation method using newly developed catalyst was performed in 100 L of CETP effluents',
        img: require('./Assests/Images/technologies/12.png'),
        link: ''
    },
];

const Licensing = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 1; // Display only one card per page

    const totalCards = data.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const showNextPage = () => {
        setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
    };

    const showPreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
    };

    useEffect(() => {
        const handleResize = () => {
            // Handle resizing logic if needed
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const displayedCards = data.slice(startIndex, endIndex);

    return (
        <div
            style={{
                width: '100vw',
                padding: '30px 5%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h2 className='about-us licensing'>Licences/Technology avaliable with CRTDHs</h2>
            <div className='separator_left'></div>
            <div className="carousel-container">
                <div className="carousel-cards">
                    {displayedCards.map((item) => (
                        <div
                            key={item.id}
                            className="carousel-card1"
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                margin: '2px',
                            }}
                        >
                            <h2 className='card-title'>{item.title} at {item.CRTDH} </h2>
                            <p className='card-content1'>{item.content}</p>
                            <img src={item.img} alt={item.title} />
                        </div>
                    ))}
                </div>
                <div className='buttons-carousel'>
                    <button onClick={showPreviousPage} className='previous-carousel-button'><ArrowLeft /></button>
                    <button onClick={showNextPage} className='next-carousel-button'><ArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Licensing;

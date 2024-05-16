// Function component to render a portfolio block with image, title, and links
function PortfolioBlock({ image, live, source, title }) {
    return (
        <div className="portfolio-item"> {/* Container for the portfolio item */}
            <img src={image} alt={title} style={{ margin: '20px' }} /> {/* Image for the portfolio item with margin */}
            <h2 style={{textAlign:'center', margin: '70px', paddingBottom: '140px'}}>{title}</h2> {/* Title of the portfolio item */}
        </div>
    );
}

export default PortfolioBlock; // Exporting the PortfolioBlock component

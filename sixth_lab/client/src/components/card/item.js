import { Card, Button } from "antd";
import { CategoryCard } from "./item.styled";
import { Link } from "react-router-dom";
const { Meta } = Card;

const CardItem = ({ id, title = 'No title', description, imageSrc, category, price, showViewMore = false }) => {
    // const location = useLocation();
    return (
        <Card
            hoverable
            style={{ width: 280, borderRadius: "20px", marginRight: "60px", marginLeft: "60px", marginTop: "10px" }}
            cover={
                <img style={{ borderRadius: "20px", height: "200px" }} alt="example" src={imageSrc} />
            }
        >
            <Meta
                title={<div style={{ fontSize: "16px", fontWeight: "bold", height: "40px", }}>{title}</div>}
                description={<div style={{ fontSize: "14px", height: "140px", }}>{description}</div>}
            />

            {showViewMore &&
                (
                    <div>
                        <CategoryCard>Price: {price}</CategoryCard>
                        <CategoryCard>Category: {category}</CategoryCard>
                        <Button style={{ marginTop: "10px", backgroundColor: "#722ed1", color: "#fff" }} type="primary">
                            <Link to={`/catalog/${id}`} >View more</Link>
                        </Button>
                    </div>
                )}
        </Card>
    );
};

export default CardItem
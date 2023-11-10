import { Card, Button } from "antd";
import { CategoryCard } from "./item.styled";

const { Meta } = Card;

const CardItem = ({ title = 'No title', description, imageSrc, category, showViewMore = false }) => (

    <Card
        hoverable
        style={{ width: 280,  borderRadius: "20px", marginRight: "60px", marginLeft: "60px", marginTop: "10px" }}
        cover={
            <img style={{ borderRadius: "20px", height: "200px" }} alt="example" src={imageSrc} />
        }
    >
        <Meta
            title={<div style={{ fontSize: "16px", fontWeight: "bold", height: "40px",}}>{title}</div>}
            description={<div style={{ fontSize: "14px", height: "140px",}}>{description}</div>}
        />

        {showViewMore &&
            (
                <div>
                    <CategoryCard>Category: {category}</CategoryCard>
                    <Button style={{ marginTop: "10px", backgroundColor: "#722ed1", color: "#fff" }} type="primary">
                        View More
                    </Button>
                </div>
            )}
    </Card>
);

export default CardItem
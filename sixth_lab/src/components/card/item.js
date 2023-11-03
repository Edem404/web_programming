import { Card } from "antd";
import { CardWrapper } from "./item.styled";

const { Meta } = Card;

const CardItem = ({ title = 'No title', description, imageSrc, }) => (

    <Card
        style={{ width: 300, borderRadius: "20px", marginRight: "60px", marginLeft: "60px" }}
        cover={
            <img style={{ borderRadius: "20px", height: "261px" }} alt="example" src={imageSrc} />
        }
    >
        <Meta title={title} description={description} />
    </Card>
);

export default CardItem
import "./Cards.css";
import Kross1 from "../../assets/images/kross1.png";
import Kross2 from "../../assets/images/kross2.png";
import Kross3 from "../../assets/images/kross3.png";
import Kross4 from "../../assets/images/kross4.png";
import ColorsImg from "../../assets/images/colors.png";
import {TbShoppingCartX} from "react-icons/tb";

const CardsArr = [
    {
        img: Kross1,
        title: "Nike air",
        newPrise: "$180,00",
        oldPrice: "$289,00",
    },

    {
        img: Kross2,
        title: "Air Jordan",
        newPrise: "$199,00",
        oldPrice: "$289,00",
    },

    {
        img: Kross3,
        title: "Nike Netro",
        newPrise: "$135,00",
        oldPrice: "$289,00",
    },

    {
        img: Kross4,
        title: "Air Spain",
        newPrise: "$145,00",
        oldPrice: "$289,00",
    }
]

function Cards() {
    return(
        <div>
            <div className="cards-container">
                <ul className="cards-list">
                    {
                        CardsArr.map((newLi) => {
                            return(
                                <li className="clist-item">
                                    <img className="citem-img" src={newLi.img} alt="img"/>
                                    <div className="cards-wrapper">
                                        <h3 className="citem-title">{newLi.title}</h3>
                                        <span className="price">
                                            <p className="new-price">{newLi.newPrise}</p>
                                            <p className="old-price">{newLi.oldPrice}</p>
                                        </span>
                                        <span className="colors">
                                            <button className="colors-btn">Colors</button>
                                            <img className="colors-img" src={ColorsImg} alt="" />
                                        </span>
                                    </div>
                                    <button className="card-button"><TbShoppingCartX/> &nbsp; Add to cart</button>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Cards
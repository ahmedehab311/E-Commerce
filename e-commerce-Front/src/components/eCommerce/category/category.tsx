import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

interface IProps {
  title: string;
  img: string;
  prfix: string;
}
function Category({title,img,prfix}: IProps) {
  return (
    <div className={category}>
      <div className={categoryImg}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <h4 className={categoryTitle}>{title}</h4>
    </div>
  );
}

export default Category;

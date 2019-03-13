import React from 'react';
import style from './ProductsPage.module.css';


const ProductsPage = (props) => {

    return (
        <article className={style.productsContainer}>
            <input className={style.searchBlock} placeholder='search' size='20'
                   onChange={ (e) =>
                       props.onChangeFilter(e.currentTarget.value)
                   }/>
            {props.productsList.map((product) => {
                return (
                    <>
                        <div className={style.productsBlock} key={product.id}>
                            <label className={style.productName}>
                                {product.name}
                            </label>
                            <div className={style.productPictureBlock}>
                                <img className={style.productPicture} src={product.imgURL} alt="productPicture"/>
                            </div>
                            <span className={style.productPrice}>
                                 цена: {product.price}
                             </span>
                            {props.isDispalyed === false ?
                                <button className={style.descriptionButton}
                                        onClick={ (e) => props.onShowdDescription(product.id)}>
                                    Подробнее
                                </button>:
                                <button className={style.descriptionButton}
                                        onClick={ (e) => props.onHideDescription(product.id)}>
                                    Скрыть
                                </button>
                            }
                        </div>
                        {props.isDispalyed && product.id === props.selectedProductId ?
                            <div className={style.productDescription}>
                                <span className={style.specificationsLabel}>
                                    Характеристики:
                                </span>
                                <div className={style.specificationsBlock}>
                                    <span className={style.internalMemory}>
                                        Встроенная память: {product.internalMemory}
                                    </span>
                                    <span className={style.ram}>
                                        Оперативная память: {product.ram}
                                    </span>
                                    <span className={style.dimensions}>
                                        Размеры: {product.dimensions}
                                    </span>
                                    <span className={style.displayResolution}>
                                        Разрешение экрана: {product.displayResolution}
                                    </span>
                                </div>
                            </div> : null
                        }
                    </>
                )
            })}
        </article>
    )
};

export default ProductsPage;
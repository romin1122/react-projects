import React from 'react';

const Menu = ({ items, category }) => {
    return <div className='section-center'>
            { items.filter( item =>
                item.category == category || category == 'All'
                ).map( item =>
                    <article key={ item.id } className='menu-item'>
                        <img className='photo' src={ item.img } alt={ item.title } />
                        <div className='item-info'>
                            <header>
                                <h4 >{ item.title }</h4>
                                <p className='price'>${ item.price }</p>
                            </header>
                            <p className='item-text'>{ item.desc }</p>
                        </div>
                    </article>
                )

            }
        </div>;
};

export default Menu;

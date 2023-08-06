import { React, useState } from 'react'

export function useScrollWithShadow() {
    const [scrollTop, setScrollTop] = useState(0);

    const onScrollHandler = (event) => {
        setScrollTop(event.target.scrollTop);
    };

    function getBoxShadow() {
        if (scrollTop > 0) {
            console.log('Scrolling' + scrollTop)
            return "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;"
        } else {
            return "none"
        }
    }

    return { boxShadow : getBoxShadow(), onScrollHandler }
}
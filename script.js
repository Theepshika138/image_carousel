const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous' , 'next'];
const galleryItems = document.querySelector('.galleryItems');

class Carousel{
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = items; //[...items]
    }
    updateGallery(){
        this.carouselArray.forEach(el => { {
            this.carouselArray.push(this.carouselArray.shift());
        }
            el.classList.remove('gallery-item1');
            el.classList.remove('gallery-item2');
            el.classList.remove('gallery-item3');
            el.classList.remove('gallery-item4');
            el.classList.remove('gallery-item5');
        });
        this.carouselArray.slice(0,5).forEach((el , i) =>{
            el.classList.add(`gallery-item-${i+1}`);
        });
    }
    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }
        
        this.updateGallery();
    }

    setControls(){
        this.carouselControls.forEach(control =>{
            galleryControlsContainer.appendChild(document.createElement('button')).className=`gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText=control;
        });
    
    }

    useControls(){
        const triggers=[...galleryControlsContainer.childNodes];
        triggers.forEach(control =>{
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });

    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();



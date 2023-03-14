class Slider{
    constructor(id) {
        this.container = document.getElementById(id);
        this.item = this.container
            .querySelectorAll('.slider_list__item_selected, .slider_list__item')

    }
    getSelectedItem(){
        const selected = this.container
            .querySelector('.slider_list__item_selected');
        return selected
    }
    getSelectedItemIndex(){
        return Array.from(this.item).indexOf(this.getSelectedItem())
    }
    slideTo(idx){
        const selected = this.getSelectedItem();
        if (selected){
            selected.className = 'slider_list__item';
        }
        const item = this.item[idx];
        if (item){
            item.className = 'slider_list__item__selected'
        }
    }
    sliderNext(){
        const currentIdx = this.getSelectedItemIndex();
        const nextIdx = (currentIdx+1)%this.item.length;
        this.slideTo(nextIdx);
    }
    slidePervious(){
        const currentIdx = this.getSelectedItemIndex();
        const perviousIdx = (this.item.length + currentIdx - 1) % this.item.length;
        this.slideTo(perviousIdx);
    }
}
export const gallery = () => {
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery');
    document.querySelector('.content').appendChild(galleryContainer);    
    
    let src = [
        "../img/tables-1.png", 
        "../img/tables-2.png", 
        "../img/meal-1.png", 
        "../img/chef-2.png", 
        "../img/chef-3.png", 
        "../img/chef-1.png",
        "../img/tables-1.png", 
        "../img/tables-2.png", 
        "../img/meal-1.png", 
        "../img/chef-2.png", 
        "../img/chef-3.png", 
        "../img/chef-1.png"]

    src.forEach(function(imgsrc) {
        const img = document.createElement('img');
        galleryContainer.appendChild(img);
        img.src = imgsrc;
    })
}
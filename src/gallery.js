export const gallery = () => {
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery');
    document.querySelector('.content').appendChild(galleryContainer);    
    
    let src = [
        "../dist/img/tables-1.png", 
        "../dist/img/tables-2.png", 
        "../dist/img/meal-1.png", 
        "../dist/img/chef-2.png", 
        "../dist/img/chef-3.png", 
        "../dist/img/chef-1.png",
        "../dist/img/tables-1.png", 
        "../dist/img/tables-2.png", 
        "../dist/img/meal-1.png", 
        "../dist/img/chef-2.png", 
        "../dist/img/chef-3.png", 
        "../dist/img/chef-1.png"]

    src.forEach(function(imgsrc) {
        const img = document.createElement('img');
        galleryContainer.appendChild(img);
        img.src = imgsrc;
    })
}
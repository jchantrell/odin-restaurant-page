export const contact = () => {
    const contact = document.createElement('div');
    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const phoneLabel = document.createElement('label');
    const phoneInput = document.createElement('input');
    const dateLabel = document.createElement('label');
    const dateInput = document.createElement('input');
    const timeLabel = document.createElement('label');
    const timeInput = document.createElement('input');
    const submitButton = document.createElement('button');
    const mapFrame = document.createElement('div');
    const map = document.createElement('iframe');

    document.querySelector('.content').appendChild(contact);
    contact.classList.add('contact');
    contact.appendChild(form);

    form.appendChild(nameLabel);
    nameLabel.textContent = 'Name';
    nameLabel.htmlFor = 'name';
    form.appendChild(nameInput);
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.required = true;

    form.appendChild(emailLabel);
    emailLabel.textContent = 'Email';
    emailLabel.htmlFor = 'email';
    form.appendChild(emailInput);
    emailInput.type = 'email';
    emailInput.name = 'email';
    nameInput.required = true;

    form.appendChild(phoneLabel);
    phoneLabel.textContent = 'Phone Number';
    phoneLabel.htmlFor = 'tel';
    form.appendChild(phoneInput);
    phoneInput.type = 'tel';
    phoneInput.name = 'tel';
    phoneInput.required = true;

    form.appendChild(dateLabel);
    dateLabel.textContent = 'Date';
    dateLabel.htmlFor = 'date';
    form.appendChild(dateInput);
    dateInput.type = 'date';
    dateInput.name = 'date';
    dateInput.required = true;

    form.appendChild(timeLabel);
    timeLabel.textContent = 'Time';
    timeLabel.htmlFor = 'time';
    form.appendChild(timeInput);
    timeInput.type = 'time';
    timeInput.name = 'time';
    timeInput.required = true;

    form.appendChild(submitButton);
    submitButton.classList.add('formSubmit');
    submitButton.textContent = 'Submit';

    contact.appendChild(mapFrame);
    mapFrame.classList.add('gmap');
    mapFrame.appendChild(map);
    map.style.width = '300px';
    map.style.height = '10em';
    map.id = "gmap";
    map.src = "https://maps.google.com/maps?q=Adelaide&t=&z=13&ie=UTF8&iwloc=&output=embed";
    map.frameBorder = "0";
    map.marginHeight = "0";
    map.marginWidth = "0";
}
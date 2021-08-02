let staffKanji = document.getElementById('staff-kanji');
let contactKanji = document.getElementById('contact-kanji');
let staff = document.getElementById('staff');
let contact = document.getElementById('contact');

function toggleStaff() {
    if (staff.style.display === 'none') {
        staff.style.display = 'flex';
    } else {
        staff.style.display = 'none';
    }
}

function toggleContact() {
    if (contact.style.display === 'none') {
        contact.style.display = 'flex';
    } else {
        contact.style.display = 'none';
    }
}

staffKanji.addEventListener('click', toggleStaff);
contactKanji.addEventListener('click', toggleContact);

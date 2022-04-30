/*(function () {
    const customerImg = document.querySelector('#customer-item')//customer images
    const customerProfile = document.querySelector('.customer-name')//customer name 
    const customerComment = document.querySelector('#customer-comments')//customer comment 
    const btn = document.querySelectorAll('.btn-review')

    let i = 0 //store the first image index position as 0 
    const generateCustomer = []//an empty array 

    //for the list of each customers 
    function Customers(image, profile, comment) { //parameter for Customers function 
        this.image = image
        this.profile = profile
        this.comment = comment
    }

    //to generate new customer values 
    function newCustomer(image, profile, comment) {
        let Image = `images/customers/${image}.jpg` //to insert new customer image
        let customerValue = new Customers(Image, profile, comment)
        generateCustomer.push(customerValue)
    }
    //call the function 
    newCustomer(0, 'Juliet Hobbs', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga quideserunt ad,tempora ullam quisquam quaerat maiores modi sunt.1');
    newCustomer(1, 'John Mcchallen', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga quideserunt ad,tempora ullam quisquam quaerat maiores modi sunt.2')
    newCustomer(2, 'Anne Janes', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga quideserunt ad,tempora ullam quisquam quaerat maiores modi sunt.3')
    newCustomer(3, 'Luke Rineer', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga quideserunt ad,tempora ullam quisquam quaerat maiores modi sunt.4')
    newCustomer(4, 'Bob Shea', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga quideserunt ad,tempora ullam quisquam quaerat maiores modi sunt.5')
    newCustomer(5, 'Michelle Hinsey', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga quideserunt ad,tempora ullam quisquam quaerat maiores modi sunt.6')

    //button function 
    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('nextBtn')) {
                i++//increment i by 1 if nextBtn is clicked 
                if (i === generateCustomer.length) {
                    i = 0
                }
                customerImg.src = generateCustomer[i].image
                customerProfile.textContent = generateCustomer[i].profile
                customerComment.textContent = generateCustomer[i].comment
            }
            if (e.target.parentElement.classList.contains('initialBtn')) { //if statement for initialBtn
                if (i === 0) {
                    i = generateCustomer.length
                }
                i-- //decrement the index by 1 if not 0 
                customerImg.src = generateCustomer[i].image
                customerProfile.textContent = generateCustomer[i].profile
                customerComment.textContent = generateCustomer[i].comment
            }
        })
    })
})()
*/
const reviews = [
    {
        id: 1,
        name: "Juliet Hobbs",
        img:
            "https://res.cloudinary.com/du0tega1b/image/upload/v1651308395/0_o5pe05.jpg",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga qui deserunt ad,tempora ullam quisquam quaerat maiores modi sunt.1",
    },
    {
        id: 2,
        name: "Michelle Betts",
        img:
            "https://res.cloudinary.com/du0tega1b/image/upload/v1651308426/2_vvmrur.jpg",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga qui deserunt ad,tempora ullam quisquam quaerat maiores modi sunt.2",
    },
    {
        id: 3,
        name: "John Shea",
        img:
            "https://res.cloudinary.com/du0tega1b/image/upload/v1651308406/1_wguorh.jpg",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga qui deserunt ad,tempora ullam quisquam quaerat maiores modi sunt.3",
    },
    {
        id: 4,
        name: "Luke Rineer ",
        img:
            "https://res.cloudinary.com/du0tega1b/image/upload/v1651308431/3_r79nxo.jpg",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias fuga qui deserunt ad,tempora ullam quisquam quaerat maiores modi sunt.4",
    },
];

const img = document.getElementById("customer-item");
const user = document.getElementById("profile");
const comment = document.getElementById("comments");

const initialBtn = document.querySelector('.initialBtn')
const nextBtn = document.querySelector('.nextBtn')

//initial item 
let initialItem = 0;

//load initial item 
window.addEventListener('DOMContentLoaded', function () {
    showUsers(initialItem);
});

//show person based on item 
function showUsers(person) {
    const item = reviews[person];
    img.src = item.img;
    profile.textContent = item.name;
    comments.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    initialItem++;
    if (initialItem > reviews.length - 1) {
        initialItem = 0;
    }
    showUsers(initialItem);
});

//show previous item 
initialBtn.addEventListener('click', function () {
    initialItem--;
    if (initialItem < 0) {
        initialItem = reviews.length - 1;
    }
    showUsers(initialItem);
});


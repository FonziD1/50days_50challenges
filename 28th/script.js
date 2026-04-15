const APIURL = 'https://api.github.com/users/';

//getUser('FonziD1');

async function getUser(username) {
    try {
        const { data }= await axios(APIURL + username);
        createUserCard(data);
        console.log(data);
    } catch (err) {
        if(err.responce.status == 404){
            createUserCard('No profile with this username');
        }
        console.log(err);
    }
}

const form =document.getElementById('form');
const main =document.getElementById('main');

const search = document.getElementById('search');

function createUserCard(user) {
    const cardHTML = `
         <div class="card">
            <div>
                <img src="${user.avatar_url}" width="150" alt="some portrait" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.login}</h2>
                <p>${user.bio || 'No bio available'}</p>

                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repositories</strong></li>
                </ul>

                 <div id="repos">
                
            </div>

            </div>

           
        </div>`

        main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);

        search.value = "";
    }
})

function createErrorCard(msg){
    const cardHTML = `
    <div class='card'>
        <h1>${msg}</h1>
    </div>`
    main.innerHTML = cardHTML;

}
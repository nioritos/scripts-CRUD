const social = {
    usuarios: [
        {
            id: 1,
            username: '@nioritos',
            name: 'Junior Guimarães',
            bio: 'a web developer'
        }
    ],

    posts: [
        {
            id: 1,
            owner: '',
            content: '',
            headline: '',
            description: '',
        }
    ]
};

//Create
function createData(datas) {
    social.usuarios.push({
        id: social.usuarios.length + 1,
        username: datas.username,
        name: datas.name,
        bio: datas.bio
    });
    console.log(social)
};
createData({ username: 'mariosouto', name: 'Mario', bio: 'a back-end developer and instructor at @Alura'}  );


function createPost(datas) {
    social.posts.push({
        owner: datas.owner,
        content: datas.content,
        headline: datas.headline,
        description: datas.description,
    })
};
createPost( {owner: 'mariosouto', content: 'content in the social', headline: 'como iniciar na área de programação.', description: 'num sei o que num sei o que'});

// Read

function readDatas() {
    return social.usuarios;
};

function readPosts() {
    return social.posts;
};

//Update
function updateData(id, userName, name, bio) {
    const dataToBeEdited = readDatas().find(data => {
        return data.id === id
    });

    dataToBeEdited.username = userName;
    dataToBeEdited.name = name;
    dataToBeEdited.bio = bio;
    
};

updateData(1, '', '', 'cu');

function updatePost(id, owner, content, headline, description) {
    const postToBeEdited = readPosts().find(post => {
        return post.id === id
    });

    postToBeEdited.owner = owner;
    postToBeEdited.content = content;
    postToBeEdited.headline = headline;
    postToBeEdited.description = description;
};

updatePost(1, 'nioritos', '', 'my headline')

//Delete

function removeData(id) {
    readDatas().find(data => {
        return data.id === id
    });
};
removeData(1)

function removePost(id){
    readPost().find(post => {
        return post.id === id
    });
}
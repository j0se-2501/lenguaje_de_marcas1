"use strict"

//partiendo del siguiente código:

let data = {
users:[
{
user_id: 1,
name: "Lance Stroll",
mention_name: "Lance",
email: "Lance@ilerna.com",
title: "Developer",
photo_url: "https:\/\/www.ilerna.com\/lance.png",
last_active: 1360031425,
created: 1315711352,
status: "away",
status_message: "gym, f1",
is_group_admin :1,
is_deleted :0
},
{
user_id: 3,
name: "Peter Parker",
mention_name: "pete",
email: "pete@ilerna.com",
title: "Designer",
photo_url: "https:\/\/www.ilerna.com\/pete.png",
last_active: 1360031425,
created: 1315711352,
status: "offline",
status_message: "I love spiders",
is_group_admin: 1,
is_deleted: 0
},
{
user_id: 5,
name: "Tom Heaton",
mention_name: "Tom",
email: "Tom@ilerna.com",
title: "Goalie",
photo_url: "https:\/\/www.ilerna.com\/Tom.png",
last_active: 1360031425,
created: 1315711352,
status: "available",
status_message: "Come see what I'm working on!",
is_group_admin: 1,
is_deleted: 0
}
]
};
//Escribe el código JavaScript para acceder al correo electrónico del usuario 1.
//Escribe el código JavaScript para acceder al mensaje de estado del usuario 2.
//Escribe el código JavaScript para acceder al título del tercer usuario en la matriz de usuarios.

alert(data.users[0].email) //entiendo usuario 1 como el primero del array, aunque el array empiece en 0
alert(data.users[1].status) //same que arriba
alert(data.users[2].title)
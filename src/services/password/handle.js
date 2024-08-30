import charactersPerm from "././utils/permittedCharacters.js";

async function handle() {
    let characters = [];
    let password = "";

    const passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10);
    characters = await charactersPerm();

    for (let i = 0; i < passwordLength; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    return password;
}

export default handle;
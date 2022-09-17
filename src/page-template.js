// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div>
            <div>
                <h2>${manager.showName()}</h2>
                <h3>
                    <i class="fas fa-mug-hot mr-2"></i> ${manager.showRole()}
                </h3>
            </div>
            <div>
                <ul>
                    <li>
                        ID: ${manager.showId()}
                    </li>
                    <li>
                        Email: <a href="mailto:${manager.showEmail()}">${manager.showEmail()}</a>
                    </li>
                    <li>
                        Office number: ${manager.showOfficeNumber()}
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div>
            <div>
                <h2>${engineer.showName()}</h2>
                <h3>
                    <i class="fas fa-glasses mr-2"></i>${engineer.showRole()}
                </h3>
            </div>
            <div>
                <ul>
                    <li>ID: ${engineer.showId()}</li>
                    <li>
                        Email: <a href="mailto:${engineer.showEmail()}">${engineer.showEmail()}</a>
                    </li>
                    <li>
                        GitHub: <a href="https://github.com/${engineer.showGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.showGitHub()}</a>
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div>
    <div>
        <h2>${intern.showName()}</h2>
        <h3>
            <i class="fas fa-user-graduate mr-2"></i>${intern.showRole()}
        </h3>
    </div>
    <div>
        <ul>
            <li>ID: ${intern.showId()}</li>
            <li>${intern.showEmail()}</a></li>
            <li>School: ${intern.showSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.showRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.showRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.showRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ${generateTeam(team)}
        </main>
    </body>
</html>
    `;
};

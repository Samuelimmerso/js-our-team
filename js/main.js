const team = [
    {
        name: "Wayne Barnett",
        rule: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        rule: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        rule: "Office ManagerO",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        rule: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        rule: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        rule: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }

];



for (let i = 0; i < 6; i++) {
    for (property in team[i]) {
        console.log(`${property}: ${team[i][property]} `);
    }
}


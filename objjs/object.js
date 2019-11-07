const obj = {
    name: "Zak",
    age: 22,
    wantsToDie: true,
    action:()=>commandUnderling(),
    underling: {
        name: "Lesser Zak",
        age: 22,
        isTired: true,
        action:()=>carriesStuff()

    }

}

obj["wantsToDie"]

const jsonFile =
    [{
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.78,
        "batters":
            {
                "batter":
                    [
                        {"id": "1001", "type": "Regular"},
                        {"id": "1002", "type": "Chocolate"},
                        {"id": "1003", "type": "Blueberry"},
                        {"id": "1004", "type": "Devil's Food"}
                    ]
            },
        "topping":
            [
                {"id": "5001", "type": "None"},
                {"id": "5002", "type": "Glazed"},
                {"id": "5005", "type": "Sugar"},
                {"id": "5007", "type": "Powdered Sugar"},
                {"id": "5006", "type": "Chocolate with Sprinkles"},
                {"id": "5003", "type": "Chocolate"},
                {"id": "5004", "type": "Maple"}
            ]
    },


        {
            "id": "0002",
            "type": "donut",
            "name": "Raised",
            "ppu": 0.55,
            "batters":
                {
                    "batter":
                        [
                            {"id": "1001", "type": "Regular"}
                        ]
                },
            "topping":
                [
                    {"id": "5001", "type": "None"},
                    {"id": "5002", "type": "Glazed"},
                    {"id": "5005", "type": "Sugar"},
                    {"id": "5003", "type": "Chocolate"},
                    {"id": "5004", "type": "Maple"}
                ]
        },


        {
            "id": "0003",
            "type": "donut",
            "name": "Old Fashioned",
            "ppu": 0.26,
            "batters":
                {
                    "batter":
                        [
                            {"id": "1001", "type": "Regular"},
                            {"id": "1002", "type": "Chocolate"}
                        ]
                },
            "topping":
                [
                    {"id": "5001", "type": "None"},
                    {"id": "5002", "type": "Glazed"},
                    {"id": "5003", "type": "Chocolate"},
                    {"id": "5004", "type": "Maple"}
                ]
        }

    ]

const allDataFromJson = JSON.parse(JSON.stringify(jsonFile));

function batterTypes() {
    const allBatterTypesArray = [];
    let batterArray = [];
    for (let i = 0; i < allDataFromJson.length; i++) {
        batterArray = allDataFromJson[i].batters.batter;
        for (const batterItem of batterArray) {
            allBatterTypesArray.push(batterItem.type);
        }
    }
    return document.getElementById("batter_types_id").innerHTML = allBatterTypesArray;
}

function toppingTypes() {
    const allToppingTypesArray = [];
    let toppingArray = [];
    for (let i = 0; i < allDataFromJson.length; i++) {
        toppingArray = allDataFromJson[i].topping;
        for (const toppingItem of toppingArray) {
            allToppingTypesArray.push(" " + toppingItem.type);
        }
    }
    return document.getElementById("topping_types_id").innerHTML = allToppingTypesArray;
}

function ppuAverage() {
    let Average = 0;
    for (const element of allDataFromJson) {
        Average += element.ppu;
    }
    return document.getElementById("ppu_average_id").innerHTML = Average / allDataFromJson.length;
}

function ppuSum() {
    let Sum = 0;
    for (const element of allDataFromJson) {
        Sum += element.ppu;
    }
    return document.getElementById("ppu_sum_id").innerHTML = Sum;
}

function allIds() {
    const allIdsArray = [];
    let batterArray;
    let toppingArray;
    for (let i = 0; i < allDataFromJson.length; i++) {
        batterArray = allDataFromJson[i].batters.batter;
        for (const batterItem of batterArray) {
            allIdsArray.push(" " + batterItem.id);
        }
        toppingArray = allDataFromJson[i].topping;
        for (const toppingItem of toppingArray) {
            allIdsArray.push(" " + toppingItem.id);
        }
    }
    return document.getElementById("ids_id").innerHTML = allIdsArray;
}

//in console
console.log("topping types: " + toppingTypes());
console.log("batter types: " + batterTypes());
console.log("ppu avg:" + ppuAverage());
console.log("ppu sum:" + ppuSum());
console.log("IDs:" + allIds());
//in html
toppingTypes();
batterTypes();
ppuAverage();
ppuSum();
allIds();

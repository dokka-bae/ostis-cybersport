from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from .models.Operator import Operator

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


client = MongoClient('mongodb://localhost:27017/')


@app.get("/characters/{id}")
async def get_character(operator_name: str) -> Operator:
    operator = client['ostis-cybersport']['characters'].find_one({"id": operator_name})
    return operator


@app.get("/weapons")
async def get_all_weapons() -> dict:
    first_weap = client['ostis-cybersport']['weapons'].find({"wtype": "first"}, {"_id": 0})
    second_weap = client['ostis-cybersport']['weapons'].find({"wtype": "second"}, {"_id": 0})
    gadgets = client['ostis-cybersport']['gadgets'].find({}, {"_id": 0})
    return {"first": list(first_weap), "second": list(second_weap), "gadgets": list(gadgets)}


@app.get("/maps")
async def get_all_weapons() -> list:
    maps = list(client['ostis-cybersport']['maps'].find({}, {"_id": 0}))
    return maps


@app.get("/maps/{id}")
async def get_f_character(map_id: str) -> dict:
    map = client['ostis-cybersport']['maps'].find_one({"id": map_id}, {"_id": 0})

    return map


@app.get("/weapons/{id}")
async def get_f_character(weap_id: str) -> dict:
    operator = client['ostis-cybersport']['weapons'].find_one({"id": weap_id}, {"_id": 0})

    if operator is None:
        operator = client['ostis-cybersport']['gadgets'].find_one({"id": weap_id}, {"_id": 0})

    character_name = []

    for i in range(len(operator["user_id"])):
        character_name.append(client['ostis-cybersport']['characters'].find_one({"id": operator["user_id"][i]}, {"_id": 0}))
    return {"weapon": operator, "used": character_name}


@app.get("/character/{weap_id}")
async def get_weapons_operator(ologs: str) -> dict:
    operator = client['ostis-cybersport']['characters'].find_one({"id": ologs})
    f_weapons = []
    s_weapons = []
    device = []
    spec = []
    
    for i in range(len(operator['s_weapons'])):
        s_weapons.append(client['ostis-cybersport']['weapons'].find_one({"id": operator['s_weapons'][i]}, {"_id": 0}))
    for i in range(len(operator['f_weapons'])):
        f_weapons.append(client['ostis-cybersport']['weapons'].find_one({"id": operator['f_weapons'][i]}, {"_id": 0}))
    for i in range(len(operator['device'])):
        device.append(client['ostis-cybersport']['gadgets'].find_one({"id": operator['device'][i]}, {"_id": 0}))
    for i in range(len(operator['spec'])):
        spec.append(client['ostis-cybersport']['ability'].find_one({"id": operator['spec'][i]}, {"_id": 0}))   

    return {"first": f_weapons,"second": s_weapons, "device": device, "spec": spec}
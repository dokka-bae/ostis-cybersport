# ostis-cybersport
[![Version](https://badge.fury.io/gh/tterb%2FHyde.svg)](https://badge.fury.io/gh/tterb%2FHyde)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
### Installation
```
git clone https://github.com/VasiliyKochurko/ostis-cybersport.git
cd ostis-cybersport/backend
pip install -r requirements.txt
python main.py
```

### Setup DB

The setup is written for people with little MDB experience. And the commands are also omitted and the work goes through the Compass, because. Win 11 has problems with setting the path, so in order not to waste time, this is the way.
```
1. Install Mongo;
2. Install Compass;
3. Open Compass & Create db "ostis-cybersport".
4. Create collections: ability, characters, gadget, maps, models, weapons;
5. Go to each collection and import (Add data -> import json or csv file ) data from files of the same name in the mongodb dump folder;
```
#### Open new terminal 
```
cd frontend 
npm i 
npm start
```
#### Open http://localhost:3000/

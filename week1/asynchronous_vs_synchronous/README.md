# Installation
npm install mongodb

# Run mongo shell example
mongo script.js

# Run node.js example
node app.js

echo logpath=c:\dev\mongodb\data\log\mongodb.log> "C:\dev\mongodb\data\mongodb.cfg"
echo dbpath=\dev\mongodb\data\db>> "C:\dev\mongodb\data\mongodb.cfg"

sc.exe create MongoDB binPath= "\"C:\dev\mongodb\bin\mongod.exe\" --service --

config=\"C:\dev\mongodb\data\mongodb.cfg\"" DisplayName= "mongodb" start= "auto"
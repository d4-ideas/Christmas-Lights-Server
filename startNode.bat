START "runas /user:administrator" cmd /K "cd C:\mongodb\bin\ & mongod"

TIMEOUT 3

START "runas /user:administrator" cmd /K "cd C:\mongodb\bin\ & mongo"

TIMEOUT 3

START "runas /user:administrator" cmd /K "set port=3000 & cd C:\GitHub\Christmas-Lights-Server & nodemon app"

timeout 10

START "runas /user:administrator" cmd /K "cd C:\GitHub\Christmas-Lights-Server & mocha .\test\test.js -u bdd -R spec"

TIMEOUT 3

"C:\Program Files (x86)\Brackets\Brackets.exe"
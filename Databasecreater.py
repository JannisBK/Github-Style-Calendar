import mysql.connector
import decimal

# Verbindung mit der Datenbank aufbauen
mydb = mysql.connector.connect(
  host="127.0.0.1",
  user="root",
  password=" ",
  database="github-style calendar"
)

# Variablen
mycursor = mydb.cursor()
month1 = 28
month2 = 29
month3 = 30
month4 = 31
id = 6 # je nachdem wie viele Tage in der Woche vom ersten Januar in das vorherige Jahr fallen

# Tabelle wird kreiert
mycursor.execute("CREATE TABLE `Github-Style Calendar 2023 Informatik` (id INT PRIMARY KEY, date VARCHAR(7) , programmiert VARCHAR(10))")

# Daten werden in die Tabelle eingetragen
#Januar
for x in range(1, month4+1):
  date = str(x) + ",1"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))

#Februar
for x in range(1, month1+1):
  date = str(x) + ",2"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))

#März
for x in range(1, month4+1):
  date = str(x) + ",3"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))


#April
for x in range(1, month3+1):
  date = str(x) + ",4"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))


#Mai
for x in range(1, month4+1):
  date = str(x) + ",5"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))

#Juni
for x in range(1, month3+1):
  date = str(x) + ",6"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))

#Juli
for x in range(1, month4+1):
  date = str(x) + ",7"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))

#August
for x in range(1, month4+1):
  date = str(x) + ",8"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))


#September
for x in range(1, month3+1):
  date = str(x) + ",9"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))


#Oktober
for x in range(1, month4+1):
  date = str(x) + ",10"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))


#November
for x in range(1, month3+1):
  date = str(x) + ",11"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))


#Dezember
for x in range(1, month4+1):
  date = str(x) + ",12"
  id += 1
  print(date)
  off = "off"
  mycursor.execute("INSERT INTO `Github-Style Calendar 2023 Informatik` (id, date, programmiert) VALUES (%s, %s, %s)", (id, date, off))

mydb.commit()


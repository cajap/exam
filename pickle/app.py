#pickle is serializing
import pickle

person = {"name":"Caja"} #not json
person["lastName"] = "Petersen" #create a key value in the dictionary
person["year"] = 2019
print(person)

person["lastName"] = "BB"
print(person)

print(f"The person's name is: {person['name']}")

person['phones'] = ["123", "12324"]

person['phones'].append("33")
person['phones'].pop()
person['phones'].remove("123")

for phone in person['phones']:
    print(f"Phone: {phone}")


company = {"phones":[
  {"phone":"1", "public":0},
  {"phone":"2", "public":1},
]}

for phone in company['phones']:
  print(f"Phone {phone['phone']} is %s" 
        %("private" if phone['public'] == 0 else "public") )


#read from file
#with open('data', 'r') as f: print( f.read())

#write to file, plain text
#with open('data','w') as f:
#    f.write('AAAAAAAA')

# pickle
with open('data', 'wb') as f:
  binaryPerson = pickle.dump(person, f)

# unpickle
with open ('data','rb') as f:
  personFromFile = pickle.load(f)
  print(personFromFile)
